<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = "/admin/home";

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $user = $this->getUserByEmail($request->email, $request->isCustomer);

        if (!$user || !password_verify($request->password, $user->info->password)) {
            return response()->json([
                'status' => 'fails',
                'message' => 'Incorrect account or password'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $info = $this->authenticateUser($user, $request->isCustomer);
        $tokenResult = $this->createToken($user, $request->remember_me);

        return response()->json([
            'status' => 'success',
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
            'info' => $info,
        ], Response::HTTP_OK);
    }

    public function logout(Request $request)
    {
        $accessToken = $request->isCustomer ? Auth::guard('customerApi')->user()->token() : Auth::guard('api')->user()->token();
        $accessToken->revoke();

        return response()->json([
            'message' => 'success',
            'code' => Response::HTTP_OK,
        ], Response::HTTP_OK);
    }

    private function getUserByEmail($email, $isCustomer)
    {
        $model = $isCustomer ? Customer::class : User::class;
        return $model::whereHas('info', function ($query) use ($email) {
            $query->where("email", $email);
        })->where('status', config('constants.user.status.active'))->first();
    }

    private function authenticateUser($user, $isCustomer)
    {
        if ($isCustomer) {
            Auth::guard('customer')->login($user);
            return Auth::guard('customer')->user();
        } else {
            Auth::login($user);
            return Auth::user();
        }
    }

    private function createToken($user, $rememberMe)
    {
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        if ($rememberMe) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        $token->save();
        return $tokenResult;
    }
}
