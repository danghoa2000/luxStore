<?php

namespace App\Http\Requests;

use App\Models\Info;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class AccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $user = User::find($this->id);
        return [
            'user_code' => 'unique:users,user_code,' . $this->id,
            'email' => 'unique:info,email,' . $user->info->id,
            'telephone' => ['nullable', 'unique:info,telephone,' .  $user->info->id, 'unique:manufacturer,telephone'],
        ];
    }
}
