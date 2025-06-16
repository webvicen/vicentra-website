<x-filament::page>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/admin/products">
            <div class="p-6 bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center">
                <h2 class="text-lg font-semibold text-gray-300">Jumlah Produk</h2>
                <p class="text-6xl font-bold text-vicentra-blue mt-2">{{ $this->productsCount }}</p>
            </div>
        </a>
        <a href="/admin/category-products">
            <div class="p-6 bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center">
                <h2 class="text-lg font-semibold text-gray-300">Category Product</h2>
                <p class="text-6xl font-bold text-vicentra-blue mt-2">{{ $this->categoryproductCount }}</p>
            </div>
        </a>
        <a href="/admin/brand-products">
            <div class="p-6 bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center">
                <h2 class="text-lg font-semibold text-gray-300">Brands Product</h2>
                <p class="text-6xl font-bold text-vicentra-blue mt-2">{{ $this->brandCount }}</p>
            </div>
        </a>
        <a href="/admin/posts">
            <div class="p-6 bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center">
                <h2 class="text-lg font-semibold text-gray-300">Jumlah Blog</h2>
                <p class="text-4xl font-bold text-vicentra-blue mt-2">{{ $this->blogsCount }}</p>
            </div>
        </a>
        <a href="/admin/sales-people">
            <div class="p-6 bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center">
                <h2 class="text-lg font-semibold text-gray-300">Jumlah Sales</h2>
                <p class="text-4xl font-bold text-vicentra-blue mt-2">{{ $this->salesCount }}</p>
            </div>
        </a>
        <a href="/admin/sliders">
            <div class="p-6 bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center">
                <h2 class="text-lg font-semibold text-gray-300">Promo</h2>
                <p class="text-4xl font-bold text-vicentra-blue mt-2">{{ $this->promoCount }}</p>
            </div>
        </a>
    </div>
</x-filament::page>
