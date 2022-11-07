<?php

namespace App\Http\Services\Admin;

use App\Models\Info;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AccountService
{
    public function list($request)
    {
        $accounts = User::select(
            'id',
            'user_code',
            'role',
            'status',
            'info_id'
        )->with('info', function ($query) {
            $query->select(
                'id',
                'full_name',
                'email',
                'telephone',
                'birthday',
                'province_id',
                'district_id',
                'commune_id',
                'address',
            )
                ->with('province')
                ->with('district')
                ->with('commune');
        })->filter($request)
        ->where('status', config('constants.user.status.active'));;
        $total = count($accounts->get());
        $accounts->limit($request->pageSize)
            ->offset(($request->currentPage) * $request->pageSize);

        return response([
            'accounts' => $accounts->get(),
            'total' => $total,
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    public function create($request)
    {
        try {
            DB::beginTransaction();

            // add user info
            $info = Info::create([
                'full_name' => $request->full_name,
                'email' => $request->email,
                'password' => Hash::make(Str::random(8)),
                'telephone' => $request->telephone,
                'birthday' => $request->birthday,
                'province_id' => $request->province_id,
                'district_id' => $request->district_id,
                'commune_id' => $request->commune_id,
                'address' => $request->address
            ]);

            // create user
            $user = User::create([
                'user_code' => $request->user_code,
                'role' => $request->role,
                'status' => $request->status,
                'info_id' => $info->id,
                'created_by' => auth('api')->user()->id,
            ]);


            // send mail password
            // Mail::send('mail', [], function ($message) {
            //     $message->to('abc@gmail.com', 'Tutorials Point')->subject('Laravel HTML Testing Mail');
            //     $message->from('xyz@gmail.com', 'Virat Gandhi');
            // });
            DB::commit();
            return response([
                'user' => $user,
                'message' => 'Create account success!',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'Create account error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function detail($request)
    {
        $account = User::with('info')->find($request->id);
        if ($account) {
            return response([
                'account' => $account,
                'message' => 'success!',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        }

        return response([
            'account' => [],
            'message' => 'This account dont exist!',
            'code' => Response::HTTP_NOT_FOUND
        ], Response::HTTP_NOT_FOUND);
    }

    public function edit($request)
    {
        try {
            DB::beginTransaction();
            $account = User::with('info')->find($request->id);
            if ($account) {
                $account->update([
                    'role' => $request->role,
                    'status' => $request->status,
                ]);
                if ($account->info) {
                    $account->info()->update([
                        'full_name' => $request->full_name,
                        'email' => $request->email,
                        'telephone' => $request->telephone,
                        'birthday' => $request->birthday,
                        'province_id' => $request->province_id,
                        'district_id' => $request->district_id,
                        'commune_id' => $request->commune_id,
                        'address' => $request->address
                    ]);
                } else {
                    $info = Info::create([
                        'full_name' => $request->full_name,
                        'email' => $request->email,
                        'password' => Hash::make(Str::random(8)),
                        'telephone' => $request->telephone,
                        'birthday' => $request->birthday,
                        'province_id' => $request->province_id,
                        'district_id' => $request->district_id,
                        'commune_id' => $request->commune_id,
                        'address' => $request->address
                    ]);

                    $account->update([
                        'info_id' => $info->id,
                    ]);
                }
                DB::commit();
                return response([
                    'account' => $account,
                    'message' => 'Update account success!',
                    'code' => Response::HTTP_OK
                ], Response::HTTP_OK);
            }

            return response([
                'account' => [],
                'message' => 'This account dont exist!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'Update account error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function delete($id)
    {
        try {
            $account = User::with('info')->find($id);
            if ($account) {
                $account->update([
                    'status' => 0
                ]);
                return response([
                    'message' => 'success!',
                    'code' => Response::HTTP_OK
                ], Response::HTTP_OK);
            }

            return response([
                'message' => 'This account dont exist!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        } catch (\Throwable $th) {
            return response([
                'message' => 'Delete account error!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        }
    }
}