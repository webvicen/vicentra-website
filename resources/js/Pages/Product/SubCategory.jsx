import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Product from "../../assets/images/product/1.jpg";

export default function SubCategory({ category, subCategory }) {
    return (
        <div>
            <Helmet>
                <title>Halaman Sub Category Produk</title>
            </Helmet>

            {/* LIST PRODUCT SECTION */}
            <section>
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Rekomendasi {`${category} ${subCategory}`} Kami
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <Link
                                href="/product/mesin/mesin-cnc/mesin-xuli-eco-solvent"
                                key={item}
                            >
                                <img src={Product} alt="nama product" />
                                <h1 className="text-center text-base font-medium mt-2">
                                    Mesin Xuli Eco Solvent
                                </h1>
                            </Link>
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
            </section>
            {/* LIST PRODUCT SECTION */}
        </div>
    );
}
