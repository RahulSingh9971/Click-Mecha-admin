<?php

namespace App\Imports;

use App\Models\Property;
use App\Models\Location;
use App\Models\BhkMaster;
use App\Models\Bedroom;
use App\Models\View;
use App\Models\Style;
use App\Models\Amenity;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class PropertyImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        Log::info('Processing Row:', $row); // Log the row data

        $location = Location::where('name', trim($row['location']))->first();
        $subLocation = Location::where('name', trim($row['sub_location']))->first();
        $bedroom = Bedroom::where('bedroom', trim($row['bedrooms']))->first();

        $validator = Validator::make($row, [
            'name'              => 'required|string|max:255',
            'location'          => 'required|string',
            'description'       => 'required|string',
        ]);

        if ($validator->fails()) {
            Log::error('Validation Failed', $validator->errors()->toArray());
            return null;
        }

        $property = new Property([
            'name'              => $row['name'],
            'slug'              => Str::slug($row['name']),
            'location'          => $location ? $location->id : null,
            'sub_location'      => $subLocation ? $subLocation->id : null,
            'area'              => $row['area'],
            'bhks'              => $row['bhks'] ?? null,
            'property_type'     => $row['property_type'],
            'bedrooms'          => $bedroom ? $bedroom->id : null,
            'floor'             => $row['floor'],
            'starting_at'       => $row['starting_at'],
            'possession_status' => $row['possession_status'],
            'address'           => $row['address'] ?? null,
            'city'              => $row['city'] ?? null,
            'state'             => $row['state'] ?? null,
            'country'           => $row['country'] ?? null,
            'zip_code'          => $row['zip_code'] ?? null,
            'featured'          => $row['featured'] ?? 0,
            'description'       => $row['description'],
        ]);

        $property->save();

        Log::info('Property Imported:', ['id' => $property->id, 'name' => $property->name]);

        // Handle Amenities (stored as comma-separated names)
        if (!empty($row['amenities'])) {
            $amenityNames = explode(',', $row['amenities']);
            $amenityIds = Amenity::whereIn('name', array_map('trim', $amenityNames))->pluck('id')->toArray();
            $property->amenities()->sync($amenityIds);
        }

        return $property;
    }
}
