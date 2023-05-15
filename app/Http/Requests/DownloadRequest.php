<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DownloadRequest extends FormRequest
{
    public function rules()
    {
        return [
            'link' => 'url|required',
        ];
    }

    public function authorize()
    {
        return true;
    }
}
