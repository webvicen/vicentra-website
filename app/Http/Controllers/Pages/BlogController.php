<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\CategoryPost;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index($category)
    {
        $allCategories = CategoryPost::get(['name', 'slug']);
        $latestPost = Post::latest()->get()->map(function ($post) {
            return [
                'title' => $post->title,
                'slug' => $post->slug,
                'created_at' => $post->created_at,
                'category' => [
                    'name' => $post->categoryPost->name,
                    'slug' => $post->categoryPost->slug,
                ],
            ];
        });

        $category = CategoryPost::where('slug', $category)->first();
        $posts = Post::with(['categoryPost'])
            ->where('category_post_id', $category->id)
            ->paginate(6)
            ->through(function ($post) {
                return [
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'image' => $post->image,
                    'short_description' => $post->short_description,
                    'content' => $post->content,
                    'category' => [
                        'name' => $post->categoryPost->name,
                        'slug' => $post->categoryPost->slug,
                    ],
                ];
            });

        return Inertia::render('Pages/Blog/Index', [
            'allCategories' => $allCategories,
            'latestPost' => $latestPost,
            'categorySlug' => $category->slug,
            'posts' => $posts
        ]);
    }

    public function show($category, $slug)
    {
        $category = CategoryPost::where('slug', $category)->first();
        $latestSimilarPost = Post::where('category_post_id', $category->id)->latest()->get()->map(function ($post) {
            return [
                'title' => $post->title,
                'slug' => $post->slug,
                'created_at' => $post->created_at,
                'category' => [
                    'name' => $post->categoryPost->name,
                    'slug' => $post->categoryPost->slug,
                ],
            ];
        });
        $post = Post::with(['user', 'categoryPost'])->where('category_post_id', $category->id)->where('slug', $slug)->first();
        $formatPost = [
            'title' => $post->title,
            'slug' => $post->slug,
            'keywords' => $post->keywords,
            'content' => $post->content,
            'image' => $post->image,
            'created_at' => $post->created_at,
            'category' => [
                'name' => $post->categoryPost->name,
                'slug' => $post->categoryPost->slug,
            ],
            'author' => [
                'name' => $post->user->name,
            ],
        ];

        return Inertia::render('Pages/Blog/Show', [
            'post' => $formatPost,
            'latestSimilarPost' => $latestSimilarPost
        ]);
    }
}
