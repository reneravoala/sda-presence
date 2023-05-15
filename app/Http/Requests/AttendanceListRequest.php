<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AttendanceListRequest extends FormRequest
{
    public function rules()
    {
        return [
            'date' => ['date'],
            'search' => 'string|nullable',
            'page' => 'integer|nullable',
        ];
    }
}
