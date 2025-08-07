<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PaymentPageSettingResource\Pages;
use App\Models\PaymentPageSetting;
use Illuminate\Support\Str;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PaymentPageSettingResource extends Resource
{
    protected static ?string $model = PaymentPageSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('banner_title')
                    ->label('Judul Banner')
                    ->required(),

                TextInput::make('banner_subtitle')
                    ->label('Subjudul Banner'),

                TextInput::make('banner_button_text')
                    ->label('Teks Tombol'),

                TextInput::make('banner_button_link')
                    ->label('Link Tombol'),

                FileUpload::make('banner_image')
                    ->label('Gambar Banner')
                    ->directory('payment-banners')
                    ->image()
                    ->maxSize(2048)
                    ->getUploadedFileNameForStorageUsing(function ($file) {
                        return Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME))
                            . '.' . $file->getClientOriginalExtension();
                    }),

                Textarea::make('description')
                    ->label('Deskripsi'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('banner_title')->label('Title')->limit(30),
                Tables\Columns\ImageColumn::make('banner_image')->label('Banner'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPaymentPageSettings::route('/'),
            'create' => Pages\CreatePaymentPageSetting::route('/create'),
            'edit' => Pages\EditPaymentPageSetting::route('/{record}/edit'),
        ];
    }
}
