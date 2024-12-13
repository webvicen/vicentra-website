<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BrandProductResource\Pages;
use App\Filament\Resources\BrandProductResource\RelationManagers;
use App\Models\BrandProduct;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Filament\Forms\Set;
use Illuminate\Support\Str;

class BrandProductResource extends Resource
{
    protected static ?string $model = BrandProduct::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Our Products';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Brand')
                            ->live(debounce: 1000)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug Brand')
                            ->readOnly(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Foto Brand')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('product-brands')
                            ->visibility('public'),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Brand'),
                Tables\Columns\TextColumn::make('slug')
                    ->label('Slug Brand')
                    ->badge(),
                Tables\Columns\ImageColumn::make('image')
                    ->label('Foto Brand'),
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
            'index' => Pages\ListBrandProducts::route('/'),
            'create' => Pages\CreateBrandProduct::route('/create'),
            'edit' => Pages\EditBrandProduct::route('/{record}/edit'),
        ];
    }
}
