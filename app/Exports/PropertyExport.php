<?php

namespace App\Exports;

use App\Models\Property;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PropertyExport implements FromCollection, WithHeadings, WithMapping
{
    public function collection()
    {
        return Property::with(['locationDetails', 'subLocation', 'amenities'])->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Slug',
            'Location',
            'Sub Location',
            'Area',
            'Property Type',
            'Bedrooms',
            'Floor',
            'Starting At',
            'Possession Status',
            'Address',
            'City',
            'State',
            'Country',
            'Zip Code',
            'Featured',
            'Description'
        ];
    }

    public function map($property): array
    {
        return [
            $property->id,
            $property->name,
            $property->slug,
            optional($property->locationDetails)->name,
            optional($property->subLocation)->name,
            $property->area,
            $property->property_type,
            $property->bedrooms,
            $property->floor,
            $property->starting_at,
            $property->possession_status,
            $property->address,
            $property->city,
            $property->state,
            $property->country,
            $property->zip_code,
            $property->featured ? 'Yes' : 'No',
            $property->description
        ];
    }
}
