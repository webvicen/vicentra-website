<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SalesPersonResource\Pages;
use App\Filament\Resources\SalesPersonResource\RelationManagers;
use App\Models\SalesPerson;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class SalesPersonResource extends Resource
{
    protected static ?string $model = SalesPerson::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Marketing';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Sales')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Foto Sales')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('sales-people')
                            ->visibility('public')
                            ->required(),
                        Forms\Components\TextInput::make('phone')
                            ->label('Nomor Sales')
                            ->prefixIcon('heroicon-o-phone')
                            ->required(),
                        Forms\Components\TextInput::make('additional_sentence')
                            ->label('Kalimat Tambahan')
                            ->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Sales'),
                Tables\Columns\ImageColumn::make('image')
                    ->label('Foto Sales'),
                Tables\Columns\TextColumn::make('phone')
                    ->label('Nomor Sales'),
                Tables\Columns\TextColumn::make('additional_sentence')
                    ->label('Kalimat Tambahan'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSalesPeople::route('/'),
            'create' => Pages\CreateSalesPerson::route('/create'),
            'edit' => Pages\EditSalesPerson::route('/{record}/edit'),
        ];
    }
}
