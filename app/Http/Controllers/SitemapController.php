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

class SitemapController extends Controller
{
    public function generateSitemap()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('/')->setPriority(1.0)->setLastModificationDate(now()))
            ->add(Url::create('/terms-and-conditions')->setPriority(1.0)->setLastModificationDate(now()))
            ->add(Url::create('/about-us')->setPriority(1.0)->setLastModificationDate(now()));

        // SITEMAP BLOG CATEGORY
        $categoryPosts = CategoryPost::all();
        foreach ($categoryPosts as $categoryPost) {
            $sitemap->add(Url::create('/blog/' . $categoryPost->slug)->setPriority(1.0)->setLastModificationDate(now()));
        }

        // SITEMAP BLOG
        $posts = Post::all();
        foreach ($posts as $post) {
            $sitemap->add(Url::create('/blog/' . $post->categoryPost->slug . '/' . $post->slug)->setPriority(1.0)->setLastModificationDate(now()));
        }

        // SITEMAP SHOWCASE
        $showcases = Slider::all();
        foreach ($showcases as $showcase) {
            $sitemap->add(Url::create('/showcase/' . $showcase->slug)->setPriority(1.0)->setLastModificationDate(now()));
        }

        // SITEMAP CATEGORY PRODUCT
        $categoryProducts = CategoryProduct::all();
        foreach ($categoryProducts as $categoryProduct) {
            $sitemap->add(Url::create('/product/' . $categoryProduct->slug)->setPriority(1.0)->setLastModificationDate(now()));
        }

        // SITEMAP SUB CATEGORY PRODUCT
        $subCategoryProducts = SubCategoryProduct::all();
        foreach ($subCategoryProducts as $subCategoryProduct) {
            $sitemap->add(Url::create('/product/' . $subCategoryProduct->category->slug . '/' . $subCategoryProduct->slug)->setPriority(1.0)->setLastModificationDate(now()));
        }

        // SITEMAP SUB SUB CATEGORY PRODUCT
        $subSubCategoryProducts = SubSubCategoryProduct::all();
        foreach ($subSubCategoryProducts as $subSubCategoryProduct) {
            $sitemap->add(Url::create('/product/' . $subSubCategoryProduct->subCategory->category->slug . '/' . $subSubCategoryProduct->subCategory->slug . '/' . $subSubCategoryProduct->slug)->setPriority(1.0)->setLastModificationDate(now()));
        }

        // SITEMAP PRODUCT
        $products = Product::all();
        foreach ($products as $product) {
            $url = $product->categoryable_type === 'App\Models\SubSubCategoryProduct' ? '/product/' . $product->categoryable->subCategory->category->slug . '/' . $product->categoryable->subCategory->slug . '/' . $product->categoryable->slug . '/' . $product->slug : '/product/' . $product->categoryable->category->slug . '/' . $product->categoryable->slug . '/' . $product->slug;

            $sitemap->add(Url::create($url)->setPriority(1.0)->setLastModificationDate(now()));
        }

        return response($sitemap->render(), 200)
            ->header('Content-Type', 'application/xml');
    }
}
