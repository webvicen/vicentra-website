<?php

namespace App\Filament\Resources\PaymentPageSettingResource\Pages;

use App\Filament\Resources\PaymentPageSettingResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPaymentPageSettings extends ListRecords
{
    protected static string $resource = PaymentPageSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
