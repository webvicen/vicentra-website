import { Link, Head, usePage } from "@inertiajs/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Layout from "../../Layouts/PagesLayout";
import { dateFormatIdn } from "./constants/helpers";
import "./styles/show.css";

const ShowBlog = ({ post, latestSimilarPost }) => {
    const { currentUrl, keywords } = usePage().props;

    return (
        <div>
            <Head>
                <title>{`Vicentra - ${post.title}` ?? ""}</title>
                <meta
                    name="description"
                    content={post.short_description ?? ""}
                />
                <meta name="keywords" content={post.keywords ?? ""} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`Vicentra - ${post.title}` ?? ""}
                />
                <meta
                    property="og:description"
                    content={post.short_description ?? ""}
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    property="og:url"
                    content={
                        `https://vicentra.co.id/blog/${post.category.slug}/${post.slug}` ??
                        ""
                    }
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`Vicentra - ${post.title}` ?? ""}
                />
                <meta
                    name="twitter:description"
                    content={post.short_description ?? ""}
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    name="twitter:site"
                    content={
                        `https://vicentra.co.id/blog/${post.category.slug}/${post.slug}` ??
                        ""
                    }
                />
            </Head>

            {/* CONTENT */}
            <main className="grid lg:grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3 mt-[2rem] lg:mt-0">
                    <div>
                        <h2 className="capitalize text-gray-800 font-semibold text-xl">
                            Artikel Serupa
                        </h2>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            {latestSimilarPost.map((item, index) => (
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
                <div className="col-span-12 lg:col-span-9 order-first lg:order-none">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {post.title}
                    </h1>
                    <img
                        src={`/storage/${post.image}`}
                        alt="surabaya-printing-expo-2022"
                        className="mt-[1.875rem] rounded-lg w-full"
                    />
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[0.625rem] mt-[1.875rem]">
                        <p className="font-medium text-sm">
                            Di posting oleh {post.author.name}
                        </p>
                        <div className="w-[0.110rem] hidden lg:block h-5 bg-gray-300 rounded-full"></div>
                        <p className="font-medium text-sm">
                            {dateFormatIdn(post.created_at)}
                        </p>
                        <div className="w-[0.110rem] hidden lg:block h-5 bg-gray-300 rounded-full"></div>
                        <div className="w-fit text-sm font-medium bg-vicentra-blue px-2 py-1 text-white rounded-full">
                            {post.category.name}
                        </div>
                    </div>
                    <div className="post-main-content mt-[1.875rem]">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                iframe: ({ node, ...props }) => (
                                    <iframe {...props} />
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                    {post.keywords && (
                        <div className="mt-[1.875rem]">
                            <h2 className="text-sm font-semibold">
                                Keywords:{" "}
                                <span className="font-normal">
                                    {post.keywords}
                                </span>
                            </h2>
                        </div>
                    )}
                </div>
                {/* BLOG CONTENT */}
            </main>
            {/* CONTENT */}
        </div>
    );
};

ShowBlog.layout = (page) => <Layout children={page} />;
export default ShowBlog;
