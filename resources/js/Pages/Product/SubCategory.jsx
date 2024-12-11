import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Product from "../../assets/images/product/1.jpg";

export default function SubCategory({ category, subCategory, products }) {
    return (
        <div>
            <Helmet>
                <title>Halaman Sub Category Produk</title>
            </Helmet>

            {/* LIST PRODUCT SECTION */}
            <section>
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Rekomendasi {`${category.name} ${subCategory.name}`} Kami
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {products.data.map((item, index) => (
                            <Link
                                key={index}
                                href={`/product/${item.category.slug}/${item.category.subCategory.slug}/${item.slug}`}
                                className="rounded-lg overflow-hidden"
                            >
                                <img
                                    src={`/storage/${item.thumbnail}`}
                                    alt={item.slug}
                                    className="rounded-lg"
                                />
                                <h1 className="text-center text-base font-medium mt-2">
                                    {item.name}
                                </h1>
                            </Link>
                        ))}
                    </div>
                    {/* PAGINATION */}
                    <div className="flex justify-end mt-[3.125rem]">
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
            </section>
            {/* LIST PRODUCT SECTION */}
        </div>
    );
}
