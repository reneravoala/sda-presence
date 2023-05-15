<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AttendanceRequest extends FormRequest
{
    public function rules()
    {
        return [
            'date' => ['required', 'date'],
        ];
    }
}
