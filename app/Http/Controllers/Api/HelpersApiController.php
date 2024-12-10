<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CategoryPost;
use Illuminate\Http\Request;

class HelpersApiController extends Controller
{
    public function getSiteData()
    {
        $categoryPost = CategoryPost::get(['name', 'slug']);

        return response()->json([
            'categoryPost' => $categoryPost
        ]);
    }
}
