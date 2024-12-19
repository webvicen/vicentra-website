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
use Spatie\Image\Image;

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
                            ->saveUploadedFileUsing(function (TemporaryUploadedFile $file) {
                                // Tentukan nama file
                                $filename = str()->slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.webp';

                                // Tentukan lokasi penyimpanan
                                $directory = 'product-sub-category-thumbnails/';
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
                                    ->saveUploadedFileUsing(function (TemporaryUploadedFile $file) {
                                        // Tentukan nama file
                                        $filename = str()->slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.webp';

                                        // Tentukan lokasi penyimpanan
                                        $directory = 'product-sub-sub-category-thumbnails/';
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
