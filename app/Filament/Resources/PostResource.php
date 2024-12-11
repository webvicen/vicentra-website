<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
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

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Articles';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\Hidden::make('user_id')
                            ->default(auth()->id())
                            ->required(),
                        Forms\Components\TextInput::make('title')
                            ->label('Judul Post')
                            ->live(debounce: 1000)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug Post')
                            ->readOnly(),
                        Forms\Components\Select::make('category_post_id')
                            ->label('Kategori Post')
                            ->relationship('categoryPost', 'name')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Thumbnail Post')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string) str()->slug($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension(),
                            )
                            ->disk('public')
                            ->directory('post-thumbnails')
                            ->visibility('public')
                            ->required(),
                        Forms\Components\TextInput::make('short_description')
                            ->label('Deskripsi Singkat Post')
                            ->maxLength(150)
                            ->required(),
                        Forms\Components\RichEditor::make('content')
                            ->label('Isi Post')
                            ->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul Post'),
                Tables\Columns\TextColumn::make('categoryPost.name')
                    ->label('Kategori Post')
                    ->badge(),
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Ditulis Oleh'),
                Tables\Columns\ImageColumn::make('image')
                    ->label('Thumbnail Post'),
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
