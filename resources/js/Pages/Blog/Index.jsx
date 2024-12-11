import { Link, usePage } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import BlogCard from "./components/BlogCard";
import { dateFormatIdn } from "./constants/helpers";

export default function Blog({ allCategories, latestPost, posts }) {
    const { url } = usePage();
    const cleanUrl = url.split("?")[0];

    return (
        <div>
            <Helmet>
                <title>Halaman Blog</title>
            </Helmet>

            {/* CONTENT */}
            <main className="grid grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3">
                    <div>
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            kategori
                        </h1>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            {allCategories.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${item.slug}`}
                                    className={`font-medium ${
                                        cleanUrl == `/blog/${item.slug}`
                                            ? `bg-vicentra-blue text-white`
                                            : `bg-gray-200 px-4 py-1 text-gray-800`
                                    } px-4 py-1  rounded-full`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[1.875rem]">
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            Artikel Terbaru
                        </h1>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            {latestPost.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${item.category.slug}/${item.slug}`}
                                >
                                    <h1 className="text-base">{item.title}</h1>
                                    <p className="text-xs text-gray-500">
                                        {dateFormatIdn(item.created_at)}
                                    </p>
                                    <hr className="mt-[0.625rem]" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* SIDEBAR */}

                {/* BLOG CONTENT */}
                <div className="col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
                        {posts.data.map((item, index) => (
                            <BlogCard key={index} post={item} />
                        ))}
                    </div>
                    {/* PAGINATION */}
                    <div className="flex justify-end mt-[3.125rem]">
                        <div className="flex gap-2">
                            {posts.links.map((link, index) => {
                                if (index === 0) {
                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                link.active
                                                    ? `bg-vicentra-blue text-white`
                                                    : `bg-gray-200 text-gray-800`
                                            } rounded-lg`}
                                        >
                                            <FaChevronLeft />
                                        </Link>
                                    );
                                }

                                if (index === posts.links.length - 1) {
                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                link.active
                                                    ? `bg-vicentra-blue text-white`
                                                    : `bg-gray-200 text-gray-800`
                                            } rounded-lg`}
                                        >
                                            <FaChevronRight />
                                        </Link>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                            link.active
                                                ? `bg-vicentra-blue text-white`
                                                : `bg-gray-200 text-gray-800`
                                        } rounded-lg`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
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
