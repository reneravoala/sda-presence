<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactListRequest;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(ContactListRequest $request): Response
    {
        return Inertia::render('Contacts/Index')
            ->with('contacts', Contact::latest('updated_at')
                ->when($request->validated('search'), function ($query, $search) {
                    $query->where('id', $search)
                        ->orWhere('first_name', 'like', '%' . $search . '%')
                        ->orWhere('last_name', 'like', '%' . $search . '%');
                })
                ->paginate()
                ->appends($request->validated())
            )
            ->with('search', $request->validated('search'));
    }

    public function create(): Response
    {
        return Inertia::render('Contacts/Form')
            ->with('type', 'create');
    }

    public function store(ContactRequest $request): RedirectResponse
    {
        $contact = Contact::create($request->validated());
        $contact->attendances()->create(['date' => now()]);
        return redirect()->route('contacts.index');
    }

    public function edit(Contact $contact): Response
    {
        return Inertia::render('Contacts/Form')
            ->with('contact', $contact)
            ->with('type', 'update');

    }

    public function update(ContactRequest $request, Contact $contact): RedirectResponse
    {
        $contact->update($request->validated());
        return redirect()->route('contacts.index');
    }

    public function destroy(Contact $contact): RedirectResponse
    {
        $contact->delete();
        return redirect()->route('contacts.index');
    }
}
