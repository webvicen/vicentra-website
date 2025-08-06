<?php

namespace App\Filament\Resources\PaymentPageSettingResource\Pages;

use App\Filament\Resources\PaymentPageSettingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPaymentPageSetting extends EditRecord
{
    protected static string $resource = PaymentPageSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
