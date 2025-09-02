<?php

namespace App\Http\Controllers;

use App\Models\CategoryPost;
use App\Models\CategoryProduct;
use App\Models\Post;
use App\Models\Product;
use App\Models\Slider;
use App\Models\SubCategoryProduct;
use App\Models\SubSubCategoryProduct;
use Illuminate\Http\Request;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Cache;

class SitemapController extends Controller
{
    public function generateSitemap()
    {
        $sitemap = Cache::remember('sitemap.xml', 3600, function () {
            $sitemap = Sitemap::create()
                ->add(Url::create('/')->setPriority(1.0)->setLastModificationDate(now()))
                ->add(Url::create('/terms-and-conditions')->setPriority(0.6)->setLastModificationDate(now()))
                ->add(Url::create('/about-us')->setPriority(0.7)->setLastModificationDate(now()));

            // SITEMAP BLOG CATEGORY
            $categoryPosts = CategoryPost::all();
            foreach ($categoryPosts as $categoryPost) {
                $sitemap->add(Url::create('/blog/' . $categoryPost->slug)->setPriority(0.6)->setLastModificationDate($categoryPost->updated_at ?? now()));
            }

            // SITEMAP BLOG
            $posts = Post::all();
            foreach ($posts as $post) {
                $sitemap->add(Url::create('/blog/' . $post->categoryPost->slug . '/' . $post->slug)->setPriority(0.8)->setLastModificationDate($post->updated_at ?? now()));
            }

            // SITEMAP SHOWCASE
            $showcases = Slider::all();
            foreach ($showcases as $showcase) {
                $sitemap->add(Url::create('/showcase/' . $showcase->slug)->setPriority(1.0)->setLastModificationDate($showcase->updated_at ?? now()));
            }

            // SITEMAP CATEGORY PRODUCT
            $categoryProducts = CategoryProduct::all();
            foreach ($categoryProducts as $categoryProduct) {
                $sitemap->add(Url::create('/product/' . $categoryProduct->slug)->setPriority(0.8)->setLastModificationDate($categoryProduct->updated_at ?? now()));
            }

            // SITEMAP SUB CATEGORY PRODUCT
            $subCategoryProducts = SubCategoryProduct::all();
            foreach ($subCategoryProducts as $subCategoryProduct) {
                $sitemap->add(Url::create('/product/' . $subCategoryProduct->category->slug . '/' . $subCategoryProduct->slug)->setPriority(0.8)->setLastModificationDate($subCategoryProduct->updated_at ?? now()));
            }

            // SITEMAP SUB SUB CATEGORY PRODUCT
            $subSubCategoryProducts = SubSubCategoryProduct::all();
            foreach ($subSubCategoryProducts as $subSubCategoryProduct) {
                $sitemap->add(Url::create('/product/' . $subSubCategoryProduct->subCategory->category->slug . '/' . $subSubCategoryProduct->subCategory->slug . '/' . $subSubCategoryProduct->slug)->setPriority(0.8)->setLastModificationDate($subSubCategoryProduct->updated_at ?? now()));
            }

            // SITEMAP PRODUCT
            $products = Product::all();
            foreach ($products as $product) {
                $url = $product->categoryable_type === 'App\Models\SubSubCategoryProduct' ? '/product/' . $product->categoryable->subCategory->category->slug . '/' . $product->categoryable->subCategory->slug . '/' . $product->categoryable->slug . '/' . $product->slug : '/product/' . $product->categoryable->category->slug . '/' . $product->categoryable->slug . '/' . $product->slug;

                $sitemap->add(Url::create($url)->setPriority(0.9)->setLastModificationDate($product->updated_at ?? now()));
            }

            return $sitemap;
        });

        return response($sitemap->render(), 200)
            ->header('Content-Type', 'application/xml');
    }
}
