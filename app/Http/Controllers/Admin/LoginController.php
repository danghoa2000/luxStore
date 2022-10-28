<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = "/admin/home";

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $user = User::whereHas('info', function ($query) use ($request) {
            $query->where("email", $request->email);
        })
            ->where('status', config('constants.user.status.active'))
            ->first();
        if (!$user) {
            return response()->json([
                'status' => 'fails',
                'message' => 'Incorrect account or password'
            ], Response::HTTP_UNAUTHORIZED);
        }

        if (!password_verify($request->password, $user->info->password)) {
            return response()->json([
                'status' => 'fails',
                'message' => 'Incorrect account or password'
            ], Response::HTTP_UNAUTHORIZED);
        }

        Auth::login($user);
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        $token->save();

        return response()->json([
            'status' => 'success',
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            "info" => Auth::user()
        ], Response::HTTP_OK);
    }

    public function logout()
    {
        $accessToken = Auth::guard('api')->user()->token();
        $accessToken->revoke();
        return true;
    }
}
