<?php

namespace App\Filament\Pages;

use App\Models\BrandProduct;
use App\Models\CategoryProduct;
use Filament\Pages\Page;
use App\Models\Product;
use App\Models\Post;
use App\Models\SalesPerson;
use App\Models\Slider;

class Dashboard extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static string $view = 'filament.pages.dashboard';

    public function mount(): void
    {
        // Kamu bisa pakai mount() untuk passing data ke view
        $this->productsCount = Product::count();
        $this->categoryproductCount = CategoryProduct::count();
        $this->blogsCount = Post::count();
        $this->salesCount = SalesPerson::count();
        $this->brandCount = BrandProduct::count();
        $this->promoCount = Slider::count();

    }

    public int $productsCount;
    public int $categoryproductCount;
    public int $blogsCount;
    public int $brandCount;
    public int $salesCount;
    public int $promoCount;
}

