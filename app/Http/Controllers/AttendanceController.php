<?php

namespace App\Http\Controllers;

use App\Http\Requests\AttendanceListRequest;
use App\Http\Requests\AttendanceRequest;
use App\Models\Contact;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AttendanceController extends Controller
{
    public function index(AttendanceListRequest $request): Response
    {
        $today = $request->validated('date') ?? (new Carbon())->toDateString();
        return Inertia::render('Attendance/Index')
            ->with('contacts', Contact::query()
                ->search($request->validated('search'))
                ->with('attendances', function ($query) use ($today) {
                    $query->where('date', 'like', $today . '%');
                })
                ->orderBy('last_name', 'ASC')
                ->paginate()
                ->appends($request->validated()))
            ->with('date', $today)
            ->with('search', $request->validated('search'));
    }

    public function setAttendance(AttendanceListRequest $request, Contact $contact): RedirectResponse
    {
        $contact->attendances()->create($request->validated());
        return redirect()->route('attendance.index', $request->validated());
    }

    public function deleteAttendance(AttendanceListRequest $request, Contact $contact): RedirectResponse
    {
        $today = $request->validated()['date'] ?? (new Carbon())->toDateString();
        $contact->attendances()->where('date', 'like', $today . '%')->delete();
        return redirect()->route('attendance.index', $request->validated());
    }

    public function result(AttendanceListRequest $request): Response
    {
        $lastSunday = Carbon::now()->startOfWeek()->subDay();
        $today = $request->validated('date') ? new Carbon($request->validated('date')) : new Carbon();
        $totalDays = $lastSunday->diffInDays($today) + 1;

        $contacts = Contact::query()
            ->search($request->validated('search'))
            ->withCount(['attendances' => function ($query) use ($lastSunday, $today) {
                return $query->where('date', '>=', $lastSunday)
                    ->where('date', '<=', $today);
            }])
            ->orderBy('attendances_count', 'DESC')
            ->paginate()
            ->appends($request->validated());
        return Inertia::render('Attendance/Result')
            ->with('contacts', $contacts)
            ->with('days', $totalDays)
            ->with('date', $today->toDateString())
            ->with('search', $request->validated('search'));
    }

    public function presentToday(AttendanceListRequest $request): Response
    {
        $today = $request->validated('date') ?? (new Carbon())->toDateString();
        return Inertia::render('Attendance/PresentToday')
            ->with('contacts', Contact::query()
                ->search($request->validated('search'))
                ->withCount('attendances', function ($query) use ($today) {
                    $query->where('date', 'like', $today . '%');
                })
                ->where('attendances_count', '>' , 0)
                ->orderBy('last_name', 'ASC')
            )
            ->with('date', $today)
            ->with('search', $request->validated('search'));
    }
}
