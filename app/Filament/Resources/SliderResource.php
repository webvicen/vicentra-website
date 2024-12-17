<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SliderResource\Pages;
use App\Filament\Resources\SliderResource\RelationManagers;
use App\Models\Slider;
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

class SliderResource extends Resource
{
    protected static ?string $model = Slider::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Marketing';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Poster')
                            ->live(debounce: 1000)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug Poster')
                            ->readOnly(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Gambar Poster')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('sliders')
                            ->visibility('public')
                            ->required(),
                        Forms\Components\DatePicker::make('ended_at')
                            ->label('Tanggal Berakhir')
                            ->native(false),
                        Forms\Components\Select::make('type')
                            ->label('Tipe Poster')
                            ->options([
                                'promo' => 'Promo',
                                'other' => 'Other',
                            ])
                            ->default('image')
                            ->required()
                            ->reactive(),
                        Forms\Components\TextInput::make('link')
                            ->label('Link Poster')
                            ->visible(fn(callable $get) => $get('type') === 'other')
                            ->reactive(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Poster'),
                Tables\Columns\TextColumn::make('slug')
                    ->label('Slug Poster')
                    ->badge(),
                Tables\Columns\TextColumn::make('ended_at')
                    ->label('Tanggal Berakhir')
                    ->date(),
                Tables\Columns\ImageColumn::make('image')
                    ->label('Gambar Poster'),
                Tables\Columns\TextColumn::make('type')
                    ->label('Tipe Poster')
                    ->badge(),
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
            'index' => Pages\ListSliders::route('/'),
            'create' => Pages\CreateSlider::route('/create'),
            'edit' => Pages\EditSlider::route('/{record}/edit'),
        ];
    }
}
