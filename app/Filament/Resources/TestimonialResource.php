<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialResource\Pages;
use App\Filament\Resources\TestimonialResource\RelationManagers;
use App\Models\Testimonial;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Spatie\Image\Image;

class TestimonialResource extends Resource
{
    protected static ?string $model = Testimonial::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Marketing';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\TextInput::make('person')
                            ->label('Nama Customer')
                            ->required(),
                        Forms\Components\Textarea::make('content')
                            ->label('Isi Testimoni')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Bukti Testimoni')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->saveUploadedFileUsing(function (TemporaryUploadedFile $file) {
                                // Tentukan nama file
                                $filename = str()->slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.webp';

                                // Tentukan lokasi penyimpanan
                                $directory = 'testimonial-images/';
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
                            ->directory('testimonial-images')
                            ->visibility('public')
                            ->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('person')
                    ->label('Nama Customer'),
                Tables\Columns\TextColumn::make('content')
                    ->label('Isi Testimoni')
                    ->limit(50),
                Tables\Columns\ImageColumn::make('image')
                    ->label('Bukti Testimoni'),
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
            'index' => Pages\ListTestimonials::route('/'),
            'create' => Pages\CreateTestimonial::route('/create'),
            'edit' => Pages\EditTestimonial::route('/{record}/edit'),
        ];
    }
}
