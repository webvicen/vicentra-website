<?php

namespace App\Filament\Resources\CategoryProductResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Filament\Forms\Set;
use Illuminate\Support\Str;

class SubCategoriesRelationManager extends RelationManager
{
    protected static string $relationship = 'subCategories';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Sub Kategori Produk')
                            ->live(debounce: 1000)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug Sub Kategori Produk')
                            ->readOnly(),
                        Forms\Components\FileUpload::make('thumbnail')
                            ->label('Thumbnail Sub Kategori Produk')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('product-sub-category-thumbnails')
                            ->visibility('public'),
                        Forms\Components\Repeater::make('subSubCategories')
                            ->relationship('subSubCategories')
                            ->label('Sub Sub Kategori Produk')
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->label('Nama Sub Sub Kategori Produk')
                                    ->live(debounce: 1000)
                                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),
                                Forms\Components\TextInput::make('slug')
                                    ->label('Slug Sub Sub Kategori Produk')
                                    ->readOnly(),
                                Forms\Components\FileUpload::make('thumbnail')
                                    ->label('Thumbnail Sub Sub Kategori Produk')
                                    ->getUploadedFileNameForStorageUsing(
                                        fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                                    )
                                    ->disk('public')
                                    ->directory('product-sub-sub-category-thumbnails')
                                    ->visibility('public'),
                            ])
                    ])
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Sub Kategori Produk'),
                Tables\Columns\TextColumn::make('slug')
                    ->label('Slug Sub Kategori Produk')
                    ->badge(),
                Tables\Columns\ImageColumn::make('thumbnail')
                    ->label('Thumbnail Sub Kategori Produk'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
