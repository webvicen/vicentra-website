<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\CategoryProduct;
use App\Models\Product;
use App\Models\SalesPerson;
use App\Models\SubCategoryProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function category($category)
    {
        $category = CategoryProduct::where('slug', $category)->first();
        $subCategory = SubCategoryProduct::with(['category'])->where('category_product_id', $category->id)->paginate(8)->through(function ($subCategory) {
            return [
                'name' => $subCategory->name,
                'slug' => $subCategory->slug,
                'thumbnail' => $subCategory->thumbnail,
                'category' => [
                    'name' => $subCategory->category->name,
                    'slug' => $subCategory->category->slug
                ]
            ];
        });

        return Inertia::render('Pages/Product/Category', [
            'category' => $category,
            'subCategory' => $subCategory
        ]);
    }

    public function subCategory($category, $subCategory)
    {
        $category = CategoryProduct::where('slug', $category)->first();
        $subCategory = SubCategoryProduct::where('slug', $subCategory)->first();
        $products = Product::with(['categoryable'])
            ->where('categoryable_id', $subCategory->id)
            ->where('categoryable_type', $subCategory->getMorphClass())
            ->paginate(8)
            ->through(function ($product) {
                return [
                    'name' => $product->name,
                    'another_name' => $product->another_name,
                    'slug' => $product->slug,
                    'thumbnail' => $product->thumbnail,
                    'is_out_of_stock' => $product->is_out_of_stock,
                    'category' => [
                        'name' => $product->categoryable->category->name ?? null,
                        'slug' => $product->categoryable->category->slug ?? null,
                        'subCategory' => [
                            'name' => $product->categoryable->name,
                            'slug' => $product->categoryable->slug,
                        ],
                    ],
                ];
            });

        return Inertia::render('Pages/Product/SubCategory', [
            'category' => $category,
            'subCategory' => $subCategory,
            'products' => $products
        ]);
    }

    public function show($category, $subCategory, $slug)
    {
        $category = CategoryProduct::where('slug', $category)->first();
        $subCategory = SubCategoryProduct::where('slug', $subCategory)->first();
        $product = Product::with(['categoryable', 'media'])->where('slug', $slug)->first();
        $teamSales = SalesPerson::get(['name', 'image', 'phone', 'additional_sentence']);
        $similarProducts = Product::with(['categoryable'])
            ->where('categoryable_id', $subCategory->id)
            ->where('categoryable_type', $subCategory->getMorphClass())
            ->limit(4)
            ->get()
            ->map(function ($product) {
                return [
                    'name' => $product->name,
                    'another_name' => $product->another_name,
                    'slug' => $product->slug,
                    'thumbnail' => $product->thumbnail,
                    'is_out_of_stock' => $product->is_out_of_stock,
                    'category' => [
                        'name' => $product->categoryable->category->name ?? null,
                        'slug' => $product->categoryable->category->slug ?? null,
                        'subCategory' => [
                            'name' => $product->categoryable->name,
                            'slug' => $product->categoryable->slug,
                        ],
                    ],
                ];
            });
        $formatProduct = [
            'name' => $product->name,
            'another_name' => $product->another_name,
            'slug' => $product->slug,
            'sku' => $product->sku,
            'thumbnail' => $product->thumbnail,
            'shortDescription' => $product->short_description,
            'description' => $product->description,
            'specification' => $product->specification,
            'work_result' => $product->work_result,
            'media' => $product->media->map(function ($media, $index) {
                return [
                    'id' => ($index + 1),
                    'slug' => $media->slug,
                    'type' => $media->type,
                    'file' => $media->type === 'image' ? $media->image_file : $media->video_link,
                    'isActive' => $index === 1 ? true : false
                ];
            }),
        ];

        return Inertia::render('Pages/Product/Show', [
            'product' => $formatProduct,
            'teamSales' => $teamSales,
            'similarProducts' => $similarProducts,
        ]);
    }

    public function search(Request $request)
    {
        return Inertia::render('Pages/Product/Search', [
            'keyword' => $request->q
        ]);
    }
}
