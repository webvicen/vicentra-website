<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Redirect;

class RedirectOldSlug
{
    public function handle(Request $request, Closure $next)
    {
        $path = $request->path(); // ambil path URL
        $segments = explode('/', $path); // pecah menjadi array
        $lastSegment = end($segments); // ambil slug paling akhir

        // Cek apakah slug terakhir termasuk old_slug
        $redirect = Redirect::where('old_slug', $lastSegment)->first();

        if ($redirect) {
            // Ganti slug terakhir dengan new_slug
            $segments[count($segments) - 1] = $redirect->new_slug;
            $newPath = implode('/', $segments);

            // Tambahkan query string jika ada
            $queryString = $request->getQueryString();
            $newUrl = '/' . $newPath . ($queryString ? '?' . $queryString : '');

            return redirect($newUrl, 301);
        }

        return $next($request);
    }
}

