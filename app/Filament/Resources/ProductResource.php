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
use Spatie\Image\Image;

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
                            ->label('Nama Lain Produk'),
                        Forms\Components\Toggle::make('is_out_of_stock')
                            ->label('Out of Stock'),
                        Forms\Components\Select::make('brand_product_id')
                            ->label('Brand Produk')
                            ->relationship('brand', 'name')
                            ->required(),
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
                            ->saveUploadedFileUsing(function (TemporaryUploadedFile $file) {
                                // Tentukan nama file
                                $filename = str()->slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.webp';

                                // Tentukan lokasi penyimpanan
                                $directory = 'product-thumbnails/';
                                $path = $directory . $filename;

                                // Path untuk penyimpanan final
                                $finalPath = storage_path('app/public/' . $path);

                                // Awal: Proses file dengan Spatie Image
                                $image = Image::load($file->getRealPath())
                                    ->format(\Spatie\Image\Manipulations::FORMAT_WEBP) // Ubah format ke WEBP
                                    ->fit(\Spatie\Image\Manipulations::FIT_MAX, 1920, 1080) // Resize ke max 1920x1080
                                    ->quality(90) // Mulai dengan kualitas tinggi 90%
                                    ->optimize()
                                    ->save($finalPath);

                                // Periksa ukuran file setelah langkah awal
                                $fileSize = filesize($finalPath);
                                $quality = 90; // Awal kualitas

                                // Jika ukuran masih lebih dari 130KB, optimalkan bertahap
                                while ($fileSize > 130 * 1024 && $quality > 50) { // Target < 130KB, minimal kualitas 50%
                                    $quality -= 1; // Kurangi kualitas sebesar 1%

                                    $image = Image::load($file->getRealPath())
                                        ->format(\Spatie\Image\Manipulations::FORMAT_WEBP)
                                        ->fit(\Spatie\Image\Manipulations::FIT_MAX, 1280, 720) // Resize ke resolusi lebih kecil
                                        ->quality($quality)
                                        ->optimize()
                                        ->save($finalPath);

                                    $fileSize = filesize($finalPath); // Periksa ukuran file

                                    // Hentikan iterasi jika ukuran file sudah memenuhi target
                                    if ($fileSize <= 130 * 1024) {
                                        break;
                                    }
                                }

                                // Jika ukuran masih terlalu besar meskipun kualitas sudah minimum
                                if ($fileSize > 130 * 1024) {
                                    throw new \Exception('File size cannot be reduced below 130KB while maintaining acceptable quality.');
                                }

                                return $path;
                            })
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
                            ->saveUploadedFileUsing(function (TemporaryUploadedFile $file) {
                                // Tentukan nama file
                                $filename = str()->slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.webp';

                                // Tentukan lokasi penyimpanan
                                $directory = 'product-work-results/';
                                $path = $directory . $filename;

                                // Path untuk penyimpanan final
                                $finalPath = storage_path('app/public/' . $path);

                                // Awal: Proses file dengan Spatie Image
                                $image = Image::load($file->getRealPath())
                                    ->format(\Spatie\Image\Manipulations::FORMAT_WEBP) // Ubah format ke WEBP
                                    ->fit(\Spatie\Image\Manipulations::FIT_MAX, 1920, 1080) // Resize ke max 1920x1080
                                    ->quality(90) // Mulai dengan kualitas tinggi 90%
                                    ->optimize()
                                    ->save($finalPath);

                                // Periksa ukuran file setelah langkah awal
                                $fileSize = filesize($finalPath);
                                $quality = 90; // Awal kualitas

                                // Jika ukuran masih lebih dari 130KB, optimalkan bertahap
                                while ($fileSize > 130 * 1024 && $quality > 50) { // Target < 130KB, minimal kualitas 50%
                                    $quality -= 1; // Kurangi kualitas sebesar 1%

                                    $image = Image::load($file->getRealPath())
                                        ->format(\Spatie\Image\Manipulations::FORMAT_WEBP)
                                        ->fit(\Spatie\Image\Manipulations::FIT_MAX, 1280, 720) // Resize ke resolusi lebih kecil
                                        ->quality($quality)
                                        ->optimize()
                                        ->save($finalPath);

                                    $fileSize = filesize($finalPath); // Periksa ukuran file

                                    // Hentikan iterasi jika ukuran file sudah memenuhi target
                                    if ($fileSize <= 130 * 1024) {
                                        break;
                                    }
                                }

                                // Jika ukuran masih terlalu besar meskipun kualitas sudah minimum
                                if ($fileSize > 130 * 1024) {
                                    throw new \Exception('File size cannot be reduced below 130KB while maintaining acceptable quality.');
                                }

                                return $path;
                            })
                            ->disk('public')
                            ->directory('product-work-results')
                            ->visibility('public'),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Produk')
                    ->searchable(),
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
