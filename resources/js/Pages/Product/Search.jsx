import { Helmet } from "react-helmet";
import { Link } from "@inertiajs/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Layout from "../../Layouts/PagesLayout";

const Search = ({ keyword, products }) => {
    console.log(products);
    return (
        <div>
            <Helmet>
                <title>
                    Vicentra - Cari{" "}
                    {keyword.replace(/\b\w/g, (char) => char.toUpperCase())}
                </title>
            </Helmet>

            {/* SEARCHING SECTION */}
            <section>
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Cari {keyword}
                </h1>
            </section>
            {/* SEARCHING SECTION */}

            {/* PRODUCT CONTENT */}
            <div className="h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 lg:mt-auto">
                <div className="w-full mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {products.data.map((item, index) => (
                            <Link
                                key={index}
                                href={`/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`}
                                className="rounded-lg overflow-hidden"
                            >
                                <div className="rounded-lg overflow-hidden relative">
                                    <img
                                        src={`/storage/${item.thumbnail}`}
                                        alt={item.slug}
                                    />
                                    {item.is_out_of_stock ? (
                                        <div className="w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]">
                                            <h1 className="text-base font-bold text-white uppercase">
                                                out of stock
                                            </h1>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="mt-2">
                                    <h1 className="text-center text-base font-bold">
                                        {item.name}
                                    </h1>
                                    <h2 className="text-center text-sm font-normal">
                                        {item.another_name}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* PAGINATION */}
                    <div className="w-full flex justify-end mt-[3.125rem]">
                        <div className="flex gap-2">
                            {products.links.map((link, index) => {
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

                                if (index === products.links.length - 1) {
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
            </div>
            {/* PRODUCT CONTENT */}
        </div>
    );
};

Search.layout = (page) => <Layout children={page} />;

export default Search;
