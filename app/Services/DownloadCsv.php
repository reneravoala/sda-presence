<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xls;

class DownloadCsv
{
    public static function download(Collection $contacts, bool $attendance = false): Xls
    {
        if ($attendance) {
            $contacts = $contacts->setVisible(['id', 'name', 'phone', 'address', 'attendances_count']);
            $contacts->map(function ($contact) {
                $contact->phone = "'" . $contact->phone;
                return $contact;
            });
            $contacts = $contacts->toArray();
            $list = [];
            $list[] = ['ID', 'Nom', 'Téléphone', 'Adresse', 'Présences'];
            foreach ($contacts as $contact) {
                $list[] = [
                    $contact['id'],
                    $contact['name'],
                    $contact['phone'],
                    $contact['address'],
                    $contact['attendances_count'],
                ];
            }
            return self::writeCsv($list);
        } else {
            $contacts = $contacts->setVisible(['id', 'name', 'phone', 'address']);
            $contacts->map(function ($contact) {
                $contact->phone = "'" . $contact->phone;
                return $contact;
            });
            $contacts = $contacts->toArray();
            $list = [];
            $list[] = ['ID', 'Nom', 'Téléphone', 'Adresse'];
            foreach ($contacts as $contact) {
                $list[] = [
                    $contact['id'],
                    $contact['name'],
                    $contact['phone'],
                    $contact['address'],
                ];
            }
            return self::writeCsv($list);
        }
    }

    /**
     * @param array $list
     * @return Xls
     */
    public static function writeCsv(array $list): Xls
    {
        $spreadsheet = new Spreadsheet();

// Set the active sheet
        $sheet = $spreadsheet->getActiveSheet();

// Set data rows
        $sheet->fromArray($list, null, 'A1');

// Create a new Xls object and save the spreadsheet to a file
        return new Xls($spreadsheet);
    }
}
