<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        try {
            Carbon::setLocale('id');

            $posts = Post::with(['categoryPost'])->limit(5)->get()->map(function ($post) {
                return [
                    'title' => $post->title,
                    'created_at' => Carbon::parse($post->created_at)->translatedFormat('d F Y'),
                    'link_post' => route('blog.show', [$post->categoryPost->slug, $post->slug])
                ];
            });

            return response()->json([
                'data' => $posts,
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
