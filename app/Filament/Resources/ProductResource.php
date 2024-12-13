<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Filament\Resources\ProductResource\RelationManagers\MediaRelationManager;
use App\Models\Product;
use App\Models\SubCategoryProduct;
use App\Models\SubSubCategoryProduct;
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

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Our Products';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Produk')
                            ->live(debounce: 1000)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug Produk')
                            ->readOnly(),
                        Forms\Components\TextInput::make('another_name')
                            ->label('Nama Lain Produk')
                            ->required(),
                        Forms\Components\Toggle::make('is_out_of_stock')
                            ->label('Out of Stock'),
                        Forms\Components\MorphToSelect::make('categoryable')
                            ->label('Kategori Produk')
                            ->types([
                                Forms\Components\MorphToSelect\Type::make(SubCategoryProduct::class)
                                    ->titleAttribute('name'),
                                Forms\Components\MorphToSelect\Type::make(SubSubCategoryProduct::class)
                                    ->titleAttribute('name'),
                            ]),
                        Forms\Components\TextInput::make('sku')
                            ->label('SKU Produk')
                            ->required(),
                        Forms\Components\FileUpload::make('thumbnail')
                            ->label('Thumbnail Produk')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('product-thumbnails')
                            ->visibility('public')
                            ->required(),
                        Forms\Components\RichEditor::make('short_description')
                            ->label('Deskripsi Singkat Produk')
                            ->required(),
                        Forms\Components\RichEditor::make('description')
                            ->label('Deskripsi Lengkap Produk')
                            ->required(),
                        Forms\Components\TextArea::make('specification')
                            ->label('Spesifikasi Produk')
                            ->required(),
                        Forms\Components\FileUpload::make('work_result')
                            ->label('Hasil Produk')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('product-work-results')
                            ->visibility('public')
                            ->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Produk'),
                Tables\Columns\TextColumn::make('sku')
                    ->label('SKU Produk'),
                Tables\Columns\TextColumn::make('categoryable.name')
                    ->badge()
                    ->label('Kategori Produk'),
                Tables\Columns\ImageColumn::make('thumbnail')
                    ->label('Thumbnail Produk'),
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
            MediaRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
