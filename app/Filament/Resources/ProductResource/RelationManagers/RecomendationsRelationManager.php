<?php

namespace App\Filament\Resources\ProductResource\RelationManagers;

use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class RecomendationsRelationManager extends RelationManager
{
    protected static string $relationship = 'recomendations';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('recomendation_product_id')
                    ->label('Rekomendasi Produk')
                    ->options(Product::all()->pluck('name', 'id')->toArray())
                    ->searchable()
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('recomendationProduct.name')
            ->columns([
                Tables\Columns\TextColumn::make('recomendationProduct.name')
                    ->label('Nama Produk'),
                Tables\Columns\TextColumn::make('recomendationProduct.categoryable.name')
                    ->badge()
                    ->label('Kategori Produk'),
                Tables\Columns\ImageColumn::make('recomendationProduct.thumbnail')
                    ->label('Foto Produk'),
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
