<?php

namespace App\Filament\Resources\BrandProductResource\Pages;

use App\Filament\Resources\BrandProductResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBrandProduct extends EditRecord
{
    protected static string $resource = BrandProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
