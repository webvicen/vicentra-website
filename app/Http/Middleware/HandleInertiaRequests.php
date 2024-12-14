<?php

namespace App\Http\Middleware;

use App\Models\CategoryPost;
use App\Models\CategoryProduct;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $categoryPost = CategoryPost::get(['name', 'slug']);
        $categoryProduct = CategoryProduct::get()->map(function ($categoryProduct, $index) {
            return [
                'id' => ($index + 1),
                'name' => $categoryProduct->name,
                'slug' => $categoryProduct->slug,
                'isOpen' => false,
                'subMenu' => $categoryProduct->subCategories->map(function ($subMenu, $index) {
                    return [
                        'id' => ($index + 1),
                        'name' => $subMenu->name,
                        'slug' => $subMenu->slug,
                        'isSubSubMenuOpen' => false,
                        'subSubMenu' => $subMenu->subSubCategories->map(function ($subSubMenu, $index) {
                            return [
                                'id' => ($index + 1),
                                'name' => $subSubMenu->name,
                                'slug' => $subSubMenu->slug,
                            ];
                        })
                    ];
                })
            ];
        });

        return array_merge(parent::share($request), [
            'categoryPost' => $categoryPost,
            'categoryProduct' => $categoryProduct
        ]);
    }
}
