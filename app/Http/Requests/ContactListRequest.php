<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactListRequest extends FormRequest
{
    public function rules()
    {
        return [
            'search' => 'string|nullable',
            'page' => 'integer|nullable',
        ];
    }
}
