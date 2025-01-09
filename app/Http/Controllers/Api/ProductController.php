<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SubSubCategoryProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function getSubSubCategoryProducts($subSubCategory)
    {
        try {
            $subSubCategory = SubSubCategoryProduct::with(['products'])->where('slug', $subSubCategory)->first();
            $products = $subSubCategory->products->map(function ($product, $index) {
                return [
                    'name' => $product->name,
                    'tagline' => $product->ra_tagline,
                    'photo' => Storage::url($product->ra_photo),
                    'short_description' => $product->short_description,
                    'link_product' => route('product.show', [$product->categoryable->subCategory->category->slug, $product->categoryable->subCategory->slug, $product->categoryable->slug, $product->slug]),
                ];
            });

            return response()->json([
                'data' => $products,
                'errors' => null
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'data' => null,
                'errors' => $th->getMessage()
            ], 404);
        }
    }
}
