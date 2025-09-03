<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Redirect;

class RedirectOldSlug
{
    public function handle(Request $request, Closure $next)
    {
        $path = $request->path(); // contoh: product/category/subcategory/subsubcategory/old-slug

        // Ambil bagian slug terakhir (setelah slash terakhir)
        $segments = explode('/', $path);
        $oldSlug = end($segments);

        // Cari di tabel redirects
        $redirect = Redirect::where('old_slug', $oldSlug)->first();

        if ($redirect) {
            // Ubah path dengan mengganti slug lama dengan slug baru
            $segments[count($segments) - 1] = $redirect->new_slug;
            $newPath = implode('/', $segments);

            // Redirect ke URL baru dengan status 301
            return redirect('/' . $newPath, 301);
        }

        return $next($request);
    }
}
