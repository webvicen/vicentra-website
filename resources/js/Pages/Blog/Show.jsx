import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";

import Layout from "../../Layouts/PagesLayout";
import { dateFormatIdn } from "./constants/helpers";
import "./styles/show.css";

const ShowBlog = ({ post, latestSimilarPost }) => {
    return (
        <div>
            <Helmet>
                <title>Vicentra - {post.title}</title>
            </Helmet>

            {/* CONTENT */}
            <main className="grid lg:grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3 mt-[2rem] lg:mt-0">
                    <div>
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            Artikel Serupa
                        </h1>
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
                    <div className="flex items-center gap-[0.625rem] mt-[1.875rem]">
                        <p className="font-medium text-sm">
                            Di posting oleh {post.author.name}
                        </p>
                        <div className="w-[0.110rem] h-5 bg-gray-300 rounded-full"></div>
                        <p className="font-medium text-sm">
                            {dateFormatIdn(post.created_at)}
                        </p>
                        <div className="w-[0.110rem] h-5 bg-gray-300 rounded-full"></div>
                        <div className="text-sm font-medium bg-vicentra-blue px-2 py-1 text-white rounded-full">
                            {post.category.name}
                        </div>
                    </div>
                    <div
                        className="post-main-content mt-[1.875rem]"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                </div>
                {/* BLOG CONTENT */}
            </main>
            {/* CONTENT */}
        </div>
    );
};

ShowBlog.layout = (page) => <Layout children={page} />;
export default ShowBlog;
