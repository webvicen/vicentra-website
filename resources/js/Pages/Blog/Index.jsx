import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import BlogCard from "./components/BlogCard";

export default function Blog() {
    return (
        <div>
            <Helmet>
                <title>Halaman Blog</title>
            </Helmet>

            {/* CONTENT */}
            <main className="grid grid-cols-12">
                {/* SIDEBAR */}
                <div className="col-span-3">
                    <div>
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            kategori
                        </h1>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            <button
                                type="button"
                                className="font-medium bg-vicentra-blue px-4 py-1 text-white rounded-full"
                            >
                                kegiatan
                            </button>
                            <button
                                type="button"
                                className="font-medium bg-gray-200 px-4 py-1 text-gray-800 rounded-full"
                            >
                                peluang usaha
                            </button>
                            <button
                                type="button"
                                className="font-medium bg-gray-200 px-4 py-1 text-gray-800 rounded-full"
                            >
                                info
                            </button>
                        </div>
                    </div>
                    <div className="mt-[1.875rem]">
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            Artikel Terbaru
                        </h1>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            <Link href="#">
                                <h1 className="text-base">
                                    Surabaya Printing Expo 2022
                                </h1>
                                <p className="text-xs text-gray-500">
                                    24 Januari 2024
                                </p>
                                <hr className="mt-[0.625rem]" />
                            </Link>
                            <Link href="#">
                                <h1 className="text-base">
                                    Surabaya Printing Expo 2022
                                </h1>
                                <p className="text-xs text-gray-500">
                                    24 Januari 2024
                                </p>
                                <hr className="mt-[0.625rem]" />
                            </Link>
                            <Link href="#">
                                <h1 className="text-base">
                                    Surabaya Printing Expo 2022
                                </h1>
                                <p className="text-xs text-gray-500">
                                    24 Januari 2024
                                </p>
                                <hr className="mt-[0.625rem]" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* SIDEBAR */}

                {/* BLOG CONTENT */}
                <div className="col-span-9">
                    <div className="grid grid-cols-3 gap-[1.25rem]">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <BlogCard key={item} />
                        ))}
                    </div>
                    {/* PAGINATION */}
                    <div className="flex justify-end mt-[3.125rem]">
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                type="button"
                                className="w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center bg-vicentra-blue text-white rounded-lg"
                            >
                                1
                            </button>
                            <button
                                type="button"
                                className="w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg"
                            >
                                2
                            </button>
                            <button
                                type="button"
                                className="w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg"
                            >
                                3
                            </button>
                            <button
                                type="button"
                                className="w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    {/* PAGINATION */}
                </div>
                {/* BLOG CONTENT */}
            </main>
            {/* CONTENT */}
        </div>
    );
}
