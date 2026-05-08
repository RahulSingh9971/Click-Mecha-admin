<?php

namespace App\Exports;

use App\Models\ContactUs;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ContactsExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return ContactUs::all();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'S. No.',
            'Name',
            'Phone',
            'Email',
            'Location',
            'URL',
            'Message',
            'Created At',
        ];
    }

    /**
     * @var ContactUs $contact
     */
    public function map($contact): array
    {
        return [
            $contact->id,
            $contact->name,
            "'".$contact->phone, // Prepend apostrophe to ensure text format
            $contact->email,
            $contact->location,
            $contact->url,
            $contact->message,
            $contact->created_at->format('Y-m-d'),
        ];
    }
}
