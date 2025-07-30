import { Link, Head, usePage } from "@inertiajs/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Layout from "../../Layouts/PagesLayout";
import BlogCard from "./components/BlogCard";
import { dateFormatIdn } from "./constants/helpers";

const Blog = ({ allCategories, latestPost, categorySlug, posts }) => {
    const { url } = usePage();
    const { currentUrl, keywords } = usePage().props;
    const cleanUrl = url.split("?")[0];
    const category = url
        .split("/")[2]
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `Vicentra - Artikel ${category}` ?? "",
        image: "https://vicentra.co.id/assets/images/logo-vicentra-black.webp",
        description:
            "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang.",
        url: currentUrl ?? "",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://vicentra.co.id/product/search?q={search_term}",
            "query-input": "required name=search_term",
        },
        mainEntity: [
            {
                "@type": "WebPage",
                name: "Vicentra - Syarat & Ketentuan Perbaikan Mesin",
                url: "https://vicentra.co.id/terms-and-conditions",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Tentang Kami",
                url: "https://vicentra.co.id/about-us",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin",
                url: "https://vicentra.co.id/product/mesin",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Consumable",
                url: "https://vicentra.co.id/product/consumable",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Sparepart",
                url: "https://vicentra.co.id/product/sparepart",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin Digital Printing Outdoor",
                url: "https://vicentra.co.id/product/mesin/digital-printing/outdoor",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin Digital Printing UV",
                url: "https://vicentra.co.id/product/mesin/digital-printing/uv",
            },
        ],
    };

    return (
        <div>
            <Head>
                <title>{`Vicentra - Artikel ${category}` ?? ""}</title>
                <meta
                    name="description"
                    content="Artikel informasi lengkap seputar mesin percetakan, mulai dari jenis, cara kerja, hingga tips memilih mesin cetak terbaik untuk kebutuhan bisnis Anda."
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`Vicentra - Artikel ${category}` ?? ""}
                />
                <meta
                    property="og:description"
                    content="Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    property="og:url"
                    content={
                        `https://vicentra.co.id/blog/${categorySlug}` ?? ""
                    }
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`Vicentra - Artikel ${category}`}
                />
                <meta
                    name="twitter:description"
                    content="Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    name="twitter:site"
                    content={
                        `https://vicentra.co.id/blog/${categorySlug}` ?? ""
                    }
                />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            {/* CONTENT */}
            <main className="grid grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3">
                    <div>
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            Kategori
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
                        <h2 className="capitalize text-gray-800 font-semibold text-xl">
                            Artikel Terbaru
                        </h2>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            {latestPost.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${item.category.slug}/${item.slug}`}
                                >
                                    <h2 className="text-base">{item.title}</h2>
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
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-blue-800">
                            {posts.data[0].category.name}
                        </h2>
                        <div className="flex-1 h-[2px] bg-black"></div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-[1.25rem] pt-7 pb-7">
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
};

Blog.layout = (page) => <Layout children={page} />;
export default Blog;
