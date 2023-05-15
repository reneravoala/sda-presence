<?php

namespace App\Http\Controllers;

use App\Http\Requests\AttendanceListRequest;
use App\Http\Requests\AttendanceRequest;
use App\Models\Contact;
use App\Services\DownloadCsv;
use Carbon\Carbon;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

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

    /**
     * @throws BindingResolutionException
     */
    public function downloadResult(AttendanceListRequest $request): \Illuminate\Http\Response
    {
        $lastSunday = Carbon::now()->startOfWeek()->subDay();
        $today = $request->validated('date') ? new Carbon($request->validated('date')) : new Carbon();
        $headers = [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'attachment; filename="resultat-' . date_format(new Carbon($today), 'd-m-Y') . '.xls"',
            'Cache-Control' => 'max-age=0',
        ];

        $list = Contact::query()
            ->search($request->validated('search'))
            ->withCount(['attendances' => function ($query) use ($lastSunday, $today) {
                return $query->where('date', '>=', $lastSunday)
                    ->where('date', '<=', $today);
            }])
            ->orderBy('attendances_count', 'DESC')
            ->get();

        $writer = DownloadCsv::download($list, true);
        ob_start();
        $writer->save('php://output');
        $output = ob_get_clean();

        return response()->make($output, 200, $headers);
    }

    public function presentToday(AttendanceListRequest $request): Response
    {
        $today = $request->validated('date') ?? (new Carbon())->toDateString();
        $contacts = Contact::query()
            ->search($request->validated('search'))
            ->withCount(['attendances' => function ($query) use ($today) {
                return $query->where('date', 'like', $today . '%');
            }])
            ->where('attendances_count', '>' , 0)
            ->orderBy('last_name', 'ASC');
        return Inertia::render('Attendance/PresentToday')
            ->with('contacts', $contacts->get())
            ->with('total', $contacts->count())
            ->with('date', $today)
            ->with('search', $request->validated('search'));
    }

    public function downloadPresentToday(AttendanceListRequest $request): \Illuminate\Http\Response
    {
        $today = $request->validated('date') ?? (new Carbon())->toDateString();
        $headers = [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'attachment; filename="present-' . date_format(new Carbon($today), 'd-m-Y') . '.xls"',
            'Cache-Control' => 'max-age=0',
        ];

        $list = Contact::query()
            ->search($request->validated('search'))
            ->withCount(['attendances' => function ($query) use ($today) {
                return $query->where('date', 'like', $today . '%');
            }])
            ->where('attendances_count', '>' , 0)
            ->orderBy('last_name', 'ASC')
            ->get();

        $writer = DownloadCsv::download($list);
        ob_start();
        $writer->save('php://output');
        $output = ob_get_clean();

        return response()->make($output, 200, $headers);
    }

    public function newsToday(AttendanceListRequest $request): Response
    {
        $today = $request->validated('date') ?? (new Carbon())->toDateString();
        $contacts = Contact::query()
            ->search($request->validated('search'))
            ->where('created_at', 'like', $today . '%')
            ->orderBy('last_name', 'ASC');
        return Inertia::render('Attendance/NewsToday')
            ->with('contacts', $contacts->get())
            ->with('total', $contacts->count())
            ->with('date', $today)
            ->with('search', $request->validated('search'));
    }
}
