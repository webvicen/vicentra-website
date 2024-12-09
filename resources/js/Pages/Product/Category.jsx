import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SubCategory from "../../assets/images/category/2.png";
import SubCategoryBlue from "../../assets/images/category/4.jpg";
import MesinBanner from "../../assets/images/banners/mesin.jpg";

export default function Category({ category }) {
    return (
        <div>
            <Helmet>
                <title>Halaman Category Produk</title>
            </Helmet>

            {/* HERO SECTION */}
            <section>
                <div>
                    <div className="w-full flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px] lg:rounded-tl-[20px] lg:rounded-tr-[20px] overflow-hidden">
                        <img
                            src={MesinBanner}
                            alt="mesin banner"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            {/* HERO SECTION */}

            {/* SUB CATEGORY SECTION */}
            <section className="mt-[3.125rem] lg:mt-[6.25rem]">
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Rekomendasi Jenis {category} Kami
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <Link
                                href="/product/mesin/mesin-cnc"
                                key={item}
                                className="rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={SubCategory}
                                    alt="nama sub category"
                                />
                            </Link>
                        ))}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <Link
                                href="/product/mesin/mesin-cnc"
                                key={item}
                                className="rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={SubCategoryBlue}
                                    alt="nama sub category"
                                />
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
            {/* SUB CATEGORY SECTION */}
        </div>
    );
}
