<?php

namespace App\Http\Services\Admin;

use App\Models\Event;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class EventService
{
    public function list($request)
    {
        $events = Event::select('id','name')
        ->with('products:id,name')
        ->get();
        return response([
            'events' => $events,
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    public function edit($request)
    {
        try {
            DB::beginTransaction();
            $category = Event::find($request->id);
            if ($category) {
                $category->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'group_category_id' => $request->group_category_id,
                    'status' => $request->status
                ]);

                DB::commit();
                return response([
                    'category' => $category,
                    'message' => 'Update category success!',
                    'code' => Response::HTTP_OK
                ], Response::HTTP_OK);
            }

            return response([
                'category' => [],
                'message' => 'This category dont exist!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'Update category error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
