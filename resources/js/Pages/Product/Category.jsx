import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Layout from "../../Layouts/PagesLayout";

const Category = ({ category, subCategory }) => {
    return (
        <div>
            <Helmet>
                <title>Vicentra - Produk {category.name}</title>
            </Helmet>

            {/* HERO SECTION */}
            <section>
                <div>
                    <div className="w-full flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px] lg:rounded-tl-[20px] lg:rounded-tr-[20px] overflow-hidden">
                        <img
                            src={`/storage/${category.banner}`}
                            alt={category.slug}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            {/* HERO SECTION */}

            {/* SUB CATEGORY SECTION */}
            <section className="mt-[3.125rem] lg:mt-[6.25rem]">
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Kategori {category.name} Kami
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {subCategory.data.map((item, index) => (
                            <Link
                                href={`/product/${item.category.slug}/${item.slug}`}
                                key={index}
                                className="rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={`/storage/${item.thumbnail}`}
                                    alt={item.slug}
                                />
                            </Link>
                        ))}
                    </div>
                    {/* PAGINATION */}
                    <div className="flex justify-end mt-[3.125rem]">
                        <div className="flex gap-2">
                            {subCategory.links.map((link, index) => {
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

                                if (index === subCategory.links.length - 1) {
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
            </section>
            {/* SUB CATEGORY SECTION */}
        </div>
    );
};

Category.layout = (page) => <Layout children={page} />;
export default Category;
