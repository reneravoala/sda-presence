<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    public function attributes()
    {
        return [
            'first_name' => 'prénom',
            'last_name' => 'nom',
            'address' => 'adresse',
            'phone' => 'téléphone',
            'birth_date' => 'date de naissance',
        ];
    }

    public function rules()
    {
        return [
            'first_name' => ['required', 'min:2', 'max:255'],
            'last_name' => ['required', 'min:2', 'max:255'],
            'address' => ['max:255'],
            'phone' => ['max:20'],
            'birth_date' => ['date'],
            'email' => ['nullable', 'email', 'max:255'],
            'attendance' => 'boolean|nullable',
        ];
    }
}
