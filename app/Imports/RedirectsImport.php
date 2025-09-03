<?php

namespace App\Imports;

use App\Models\Redirect;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class RedirectsImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        Redirect::updateOrCreate(
            ['old_slug' => $row['old_slug']], // cari berdasarkan old_slug
            ['new_slug' => $row['new_slug']]  // update atau insert new_slug
        );

        return null; // kita tidak perlu return model baru
    }
}