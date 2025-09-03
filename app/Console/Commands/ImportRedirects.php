<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\RedirectsImport;

class ImportRedirects extends Command
{
    protected $signature = 'redirects:import {file}';
    protected $description = 'Import redirects from CSV file';

    public function handle()
    {
        $file = $this->argument('file');

        Excel::import(new RedirectsImport, $file);

        $this->info('Redirects imported successfully!');
    }
}
