<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\CategoryProduct;
use App\Models\Product;
use App\Models\SalesPerson;
use App\Models\SubCategoryProduct;
use App\Models\SubSubCategoryProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function category($category)
    {
        $category = CategoryProduct::where('slug', $category)->first();

        if ($category->slug == 'mesin') {
            $productCategory = SubSubCategoryProduct::with(['subCategory.category'])
                ->whereHas('subCategory.category', function ($query) use ($category) {
                    $query->where('slug', $category->slug);
                })
                ->whereNotNull('thumbnail')
                ->paginate(8)
                ->through(function ($subSubCategory) {
                    return [
                        'name' => $subSubCategory->name,
                        'slug' => $subSubCategory->slug,
                        'thumbnail' => $subSubCategory->thumbnail,
                        'category' => [
                            'name' => $subSubCategory->subCategory->category->name,
                            'slug' => $subSubCategory->subCategory->category->slug,
                            'subCategory' => [
                                'name' => $subSubCategory->subCategory->name,
                                'slug' => $subSubCategory->subCategory->slug,
                                'subSubCategory' => [
                                    'name' => $subSubCategory->name,
                                    'slug' => $subSubCategory->slug,
                                ]
                            ]
                        ],
                    ];
                });
        } else if ($category->slug == 'consumable') {
            $productCategory = SubCategoryProduct::with(['category'])
                ->whereHas('category', function ($query) use ($category) {
                    $query->where('slug', $category->slug);
                })
                ->whereNotNull('thumbnail')
                ->paginate(8)
                ->through(function ($subCategory) {
                    return [
                        'name' => $subCategory->name,
                        'slug' => $subCategory->slug,
                        'thumbnail' => $subCategory->thumbnail,
                        'category' => [
                            'name' => $subCategory->category->name,
                            'slug' => $subCategory->category->slug,
                            'subCategory' => [
                                'name' => $subCategory->name,
                                'slug' => $subCategory->slug,
                            ]
                        ],
                    ];
                });
        } else if ($category->slug == 'sparepart') {
            $productCategory = SubCategoryProduct::with(['category'])
                ->whereHas('category', function ($query) use ($category) {
                    $query->where('slug', $category->slug);
                })
                ->whereNotNull('thumbnail')
                ->paginate(8)
                ->through(function ($subCategory) {
                    return [
                        'name' => $subCategory->name,
                        'slug' => $subCategory->slug,
                        'thumbnail' => $subCategory->thumbnail,
                        'category' => [
                            'name' => $subCategory->category->name,
                            'slug' => $subCategory->category->slug,
                            'subCategory' => [
                                'name' => $subCategory->name,
                                'slug' => $subCategory->slug,
                            ]
                        ],
                    ];
                });
        }

        return Inertia::render('Pages/Product/Category', [
            'category' => $category,
            'productCategory' => $productCategory
        ]);
    }

    public function subCategory($category, $subCategory)
    {
        $categoryProduct = CategoryProduct::get()->map(function ($categoryProduct, $index) {
            return [
                'id' => ($index + 1),
                'name' => $categoryProduct->name,
                'slug' => $categoryProduct->slug,
                'subMenu' => $categoryProduct->subCategories->map(function ($subMenu, $index) {
                    return [
                        'id' => ($index + 1),
                        'name' => $subMenu->name,
                        'slug' => $subMenu->slug,
                        'subSubMenu' => $subMenu->subSubCategories->map(function ($subSubMenu, $index) {
                            return [
                                'id' => ($index + 1),
                                'name' => $subSubMenu->name,
                                'slug' => $subSubMenu->slug,
                                'count' => $subSubMenu->products->count(),
                            ];
                        })
                    ];
                })
            ];
        });
        $category = CategoryProduct::where('slug', $category)->first();
        $subCategory = SubCategoryProduct::where('slug', $subCategory)->first();

        $products = Product::with(['categoryable'])
            ->where(function ($query) use ($subCategory) {
                $query->where('categoryable_type', 'App\Models\SubSubCategoryProduct')
                    ->whereHasMorph('categoryable', SubSubCategoryProduct::class, function ($morphQuery) use ($subCategory) {
                        $morphQuery->where('sub_category_product_id', $subCategory->id);
                    })
                    ->orWhere(function ($query) use ($subCategory) {
                        $query->where('categoryable_type', 'App\Models\SubCategoryProduct')
                            ->whereHasMorph('categoryable', SubCategoryProduct::class, function ($morphQuery) use ($subCategory) {
                                $morphQuery->where('id', $subCategory->id);
                            });
                    });
            })
            ->paginate(20)
            ->through(function ($product) use ($category) {
                if (in_array($category->slug, ['mesin', 'consumable'])) {
                    return [
                        'name' => $product->name,
                        'another_name' => $product->another_name,
                        'slug' => $product->slug,
                        'thumbnail' => $product->thumbnail,
                        'is_out_of_stock' => $product->is_out_of_stock,
                        'category' => [
                            'name' => $product->categoryable->subCategory->category->name ?? null,
                            'slug' => $product->categoryable->subCategory->category->slug ?? null,
                            'subCategory' => [
                                'name' => $product->categoryable->subCategory->name,
                                'slug' => $product->categoryable->subCategory->slug,
                                'subSubCategory' => [
                                    'name' => $product->categoryable->name,
                                    'slug' => $product->categoryable->slug,
                                ]
                            ],
                        ],
                    ];
                } else if (in_array($category->slug, ['sparepart'])) {
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
                }
            });

        return Inertia::render('Pages/Product/SubCategory', [
            'categoryProduct' => $categoryProduct,
            'category' => $category,
            'subCategory' => $subCategory,
            'products' => $products
        ]);
    }

    public function subSubCategory($category, $subCategory, $subSubCategory)
    {
        $categoryProduct = CategoryProduct::get()->map(function ($categoryProduct, $index) {
            return [
                'id' => ($index + 1),
                'name' => $categoryProduct->name,
                'slug' => $categoryProduct->slug,
                'subMenu' => $categoryProduct->subCategories->map(function ($subMenu, $index) {
                    return [
                        'id' => ($index + 1),
                        'name' => $subMenu->name,
                        'slug' => $subMenu->slug,
                        'subSubMenu' => $subMenu->subSubCategories->map(function ($subSubMenu, $index) {
                            return [
                                'id' => ($index + 1),
                                'name' => $subSubMenu->name,
                                'slug' => $subSubMenu->slug,
                                'count' => $subSubMenu->products->count(),
                            ];
                        })
                    ];
                })
            ];
        });
        $category = CategoryProduct::where('slug', $category)->first();
        $subSubCategory = SubSubCategoryProduct::where('slug', $subSubCategory)->first();
        $subCategory = SubCategoryProduct::where('id', $subSubCategory->sub_category_product_id)->first();
        $products = Product::with(['categoryable'])
            ->where('categoryable_id', $subSubCategory->id)
            ->where('categoryable_type', $subSubCategory->getMorphClass())
            ->paginate(20)
            ->through(function ($product) {
                return [
                    'name' => $product->name,
                    'another_name' => $product->another_name,
                    'product_keyword' => $product->product_keyword,
                    'slug' => $product->slug,
                    'thumbnail' => $product->thumbnail,
                    'is_out_of_stock' => $product->is_out_of_stock,
                    'category' => [
                        'name' => $product->categoryable->subCategory->category->name ?? null,
                        'slug' => $product->categoryable->subCategory->category->slug ?? null,
                        'subCategory' => [
                            'name' => $product->categoryable->subCategory->name,
                            'slug' => $product->categoryable->subCategory->slug,
                            'subSubCategory' => [
                                'name' => $product->categoryable->name,
                                'slug' => $product->categoryable->slug,
                            ]
                        ],
                    ],
                ];
            });

        return Inertia::render('Pages/Product/SubSubCategory', [
            'categoryProduct' => $categoryProduct,
            'category' => $category,
            'subCategory' => $subCategory,
            'subSubCategory' => $subSubCategory,
            'products' => $products,
        ]);
    }

    public function show($category, $subCategory, $subSubCategory, $slug)
    {
        $category = CategoryProduct::where('slug', $category)->first();
        $subSubCategory = SubSubCategoryProduct::where('slug', $subSubCategory)->first();
        $product = Product::with(['categoryable', 'brand', 'media'])->where('slug', $slug)->first();
        if (!$product) {
            return redirect()->route('product.search', ['q' => $slug]);
        }
        $teamSales = SalesPerson::orderBy('order')->get(['name', 'image', 'phone', 'additional_sentence']);
        // $similarProducts = Product::with(['categoryable', 'brand'])
        //     ->where('categoryable_id', $subSubCategory->id)
        //     ->where('categoryable_type', $subSubCategory->getMorphClass())
        //     ->limit(4)
        //     ->get()
        //     ->map(function ($product) {
        //         return [
        //             'name' => $product->name,
        //             'another_name' => $product->another_name,
        //             'slug' => $product->slug,
        //             'thumbnail' => $product->thumbnail,
        //             'is_out_of_stock' => $product->is_out_of_stock,
        //             'category' => [
        //                 'name' => $product->categoryable->subCategory->category->name ?? null,
        //                 'slug' => $product->categoryable->subCategory->category->slug ?? null,
        //                 'subCategory' => [
        //                     'name' => $product->categoryable->subCategory->name,
        //                     'slug' => $product->categoryable->subCategory->slug,
        //                     'subSubCategory' => [
        //                         'name' => $product->categoryable->name,
        //                         'slug' => $product->categoryable->slug,
        //                     ]
        //                 ],
        //             ],
        //         ];
        //     });
        $similarProducts = $product->recomendations->map(function ($recomendation) {
            return [
                'name' => $recomendation->recomendationProduct->name,
                'another_name' => $recomendation->recomendationProduct->another_name,
                'slug' => $recomendation->recomendationProduct->slug,
                'thumbnail' => $recomendation->recomendationProduct->thumbnail,
                'is_out_of_stock' => $recomendation->recomendationProduct->is_out_of_stock,
                'category' => [
                    'name' => $recomendation->recomendationProduct->categoryable->subCategory->category->name ?? null,
                    'slug' => $recomendation->recomendationProduct->categoryable->subCategory->category->slug ?? null,
                    'subCategory' => [
                        'name' => $recomendation->recomendationProduct->categoryable->subCategory->name,
                        'slug' => $recomendation->recomendationProduct->categoryable->subCategory->slug,
                        'subSubCategory' => [
                            'name' => $recomendation->recomendationProduct->categoryable->name,
                            'slug' => $recomendation->recomendationProduct->categoryable->slug,
                        ]
                    ],
                ],
            ];
        });
        $formatProduct = [
            'name' => $product->name,
            'another_name' => $product->another_name,
            'slug' => $product->slug,
            'sku' => $product->sku,
            'brand' => $product->brand->name,
            'thumbnail' => $product->thumbnail,
            'is_out_of_stock' => $product->is_out_of_stock,
            'shortDescription' => $product->short_description,
            'description' => $product->description,
            'specification' => $product->specification,
            'work_result' => $product->work_result,
            'keywords' => $product->keywords,
            'category' => [
                'name' => $product->categoryable->subCategory->category->name ?? null,
                'slug' => $product->categoryable->subCategory->category->slug ?? null,
                'subCategory' => [
                    'name' => $product->categoryable->subCategory->name ?? null,
                    'slug' => $product->categoryable->subCategory->slug ?? null,
                    'subSubCategory' => [
                        'name' => $product->categoryable->name ?? null,
                        'slug' => $product->categoryable->slug ?? null,
                    ]
                ]
            ],
            'media' => $product->media->map(function ($media, $index) use ($product) {
                return [
                    'id' => ($index + 1),
                    'slug' => $media->slug,
                    'type' => $media->type,
                    'video_thumbnail' => $media->video_thumbnail ?? null,
                    'type_source_link' => $media->type_source_link ?? null,
                    'file' => $media->type === 'image' ? $media->image_file : ($media->type_source_link === 'youtube' ? $media->video_link : $media->gdrive_link),
                    'isActive' => $index === 0 ? true : false
                ];
            }),
        ];

        return Inertia::render('Pages/Product/Show', [
            'product' => $formatProduct,
            'teamSales' => $teamSales,
            'similarProducts' => $similarProducts,
        ]);
    }

    public function showSparepart($category, $subCategory, $slug)
    {
        $category = CategoryProduct::where('slug', $category)->first();
        $subSubCategory = SubCategoryProduct::where('slug', $subCategory)->first();
        $product = Product::with(['categoryable', 'brand', 'media'])->where('slug', $slug)->first();
        $teamSales = SalesPerson::orderBy('order')->get(['name', 'image', 'phone', 'additional_sentence']);

        $similarProducts = $product->recomendations->map(function ($recomendation) {
            return [
                'name' => $recomendation->recomendationProduct->name,
                'another_name' => $recomendation->recomendationProduct->another_name,
                'slug' => $recomendation->recomendationProduct->slug,
                'thumbnail' => $recomendation->recomendationProduct->thumbnail,
                'is_out_of_stock' => $recomendation->recomendationProduct->is_out_of_stock,
                'category' => [
                    'name' => $recomendation->recomendationProduct->categoryable->subCategory->category->name ?? null,
                    'slug' => $recomendation->recomendationProduct->categoryable->subCategory->category->slug ?? null,
                    'subCategory' => [
                        'name' => $recomendation->recomendationProduct->categoryable->subCategory->name,
                        'slug' => $recomendation->recomendationProduct->categoryable->subCategory->slug,
                        'subSubCategory' => [
                            'name' => $recomendation->recomendationProduct->categoryable->name,
                            'slug' => $recomendation->recomendationProduct->categoryable->slug,
                        ]
                    ],
                ],
            ];
        });

        $formatProduct = [
            'name' => $product->name,
            'another_name' => $product->another_name,
            'slug' => $product->slug,
            'sku' => $product->sku,
            'brand' => $product->brand->name,
            'thumbnail' => $product->thumbnail,
            'is_out_of_stock' => $product->is_out_of_stock,
            'shortDescription' => $product->short_description,
            'description' => $product->description,
            'specification' => $product->specification,
            'work_result' => $product->work_result,
            'keywords' => $product->keywords,
            'category' => [
                'name' => $product->categoryable->category->name ?? null,
                'slug' => $product->categoryable->category->slug ?? null,
                'subCategory' => [
                    'name' => $product->categoryable->name ?? null,
                    'slug' => $product->categoryable->slug ?? null,
                ]
            ],
            'media' => $product->media->map(function ($media, $index) use ($product) {
                return [
                    'id' => ($index + 1),
                    'slug' => $media->slug,
                    'type' => $media->type,
                    'video_thumbnail' => $media->video_thumbnail ?? null,
                    'type_source_link' => $media->type_source_link ?? null,
                    'file' => $media->type === 'image' ? $media->image_file : ($media->type_source_link === 'youtube' ? $media->video_link : $media->gdrive_link),
                    'isActive' => $index === 0 ? true : false
                ];
            }),
        ];

        return Inertia::render('Pages/Product/ShowSparepart', [
            'product' => $formatProduct,
            'teamSales' => $teamSales,
            'similarProducts' => $similarProducts,
        ]);
    }

    public function search(Request $request)
    {
        $products = Product::with(['categoryable'])->where('name', 'LIKE', "%{$request->q}%")
            ->orWhere('another_name', 'LIKE', "%{$request->q}%")
            ->paginate(20)
            ->through(function ($product) {
                if ($product->categoryable_type === SubSubCategoryProduct::class) {
                    return [
                        'name' => $product->name,
                        'another_name' => $product->another_name,
                        'slug' => $product->slug,
                        'thumbnail' => $product->thumbnail,
                        'is_out_of_stock' => $product->is_out_of_stock,
                        'category' => [
                            'name' => $product->categoryable->subCategory->category->name ?? null,
                            'slug' => $product->categoryable->subCategory->category->slug ?? null,
                            'subCategory' => [
                                'name' => $product->categoryable->subCategory->name ?? null,
                                'slug' => $product->categoryable->subCategory->slug ?? null,
                                'subSubCategory' => [
                                    'name' => $product->categoryable->name ?? null,
                                    'slug' => $product->categoryable->slug ?? null,
                                ]
                            ],
                        ],
                    ];
                } else if ($product->categoryable_type === SubCategoryProduct::class) {
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
                                'name' => $product->categoryable->name ?? null,
                                'slug' => $product->categoryable->slug ?? null,
                                'subSubCategory' => [
                                    'name' => null,
                                    'slug' => null,
                                ]
                            ],
                        ],
                    ];
                }
            });

        return Inertia::render('Pages/Product/Search', [
            'keyword' => $request->q,
            'products' => $products
        ]);
    }
}
