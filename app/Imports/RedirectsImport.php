<?php

namespace App\Imports;

use App\Models\Redirect;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class RedirectsImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        return Redirect::updateOrCreate(
            ['old_slug' => $row['old_slug']],
            ['new_slug' => $row['new_slug']]
        );
    }
}
