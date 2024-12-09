import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player/lazy";

import Category1 from "../../assets/images/category/1.png";
import Category2 from "../../assets/images/category/2.png";
import Category3 from "../../assets/images/category/3.png";

import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";

export default function Beranda({ sliders, testimonials }) {
    const [categoryProducts, setCategoryProducts] = useState([
        {
            id: 1,
            name: "mesin",
            image: Category1,
        },
        {
            id: 2,
            name: "bahan",
            image: Category2,
        },
        {
            id: 3,
            name: "sparepart",
            image: Category3,
        },
    ]);

    return (
        <>
            <Helmet>
                <title>
                    Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya
                </title>
            </Helmet>

            {/* HERO SECTION */}
            <section>
                <Hero sliders={sliders} />
            </section>
            {/* HERO SECTION */}

            {/* WHY VICENTRA SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-blue rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            kenapa vicentra
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem] grid grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[4rem]">
                    <div>
                        <div className="flex justify-center">
                            <div className="w-[100px] h-[100px] bg-vicentra-blue rounded-xl"></div>
                        </div>
                        <h1 className="text-md font-semibold text-center mt-[1.25rem]">
                            Free Returns
                        </h1>
                        <p className="text-sm font-normal text-justify mt-[0.625rem]">
                            Apabila ada kerusakan barang dikarenakan kesalahan
                            dari pabrik.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-[100px] h-[100px] bg-vicentra-blue rounded-xl"></div>
                        </div>
                        <h1 className="text-md font-semibold text-center mt-[1.25rem]">
                            Perbaikan dan Perawatan
                        </h1>
                        <p className="text-sm font-normal text-justify mt-[0.625rem]">
                            Garansi perbaikan ke seluruh Indonesia dari Sabang
                            hingga Merauke.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-[100px] h-[100px] bg-vicentra-blue rounded-xl"></div>
                        </div>
                        <h1 className="text-md font-semibold text-center mt-[1.25rem]">
                            Garansi Produk
                        </h1>
                        <p className="text-sm font-normal text-justify mt-[0.625rem]">
                            Kami menjamin produk yang kami sediakan dalam
                            kondisi baik.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-[100px] h-[100px] bg-vicentra-blue rounded-xl"></div>
                        </div>
                        <h1 className="text-md font-semibold text-center mt-[1.25rem]">
                            Konsultasi Dengan Ahlinya
                        </h1>
                        <p className="text-sm font-normal text-justify mt-[0.625rem]">
                            Tim Ahli kami siap memberikan bimbingan dan training
                            kepada para semua customer Kami dan calon pembeli,
                            terhadap produk kami yang akan di beli.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-[100px] h-[100px] bg-vicentra-blue rounded-xl"></div>
                        </div>
                        <h1 className="text-md font-semibold text-center mt-[1.25rem]">
                            Gratis Ongkir
                        </h1>
                        <p className="text-sm font-normal text-justify mt-[0.625rem]">
                            Gratis Ongkir untuk pengiriman ke Area Surabaya
                            dengan S&K berlaku.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-[100px] h-[100px] bg-vicentra-blue rounded-xl"></div>
                        </div>
                        <h1 className="text-md font-semibold text-center mt-[1.25rem]">
                            Pengiriman Keseluruh Indonesia
                        </h1>
                        <p className="text-sm font-normal text-justify mt-[0.625rem]">
                            Siap Kirim ke seluruh Indonesia melalui Ekspedisi
                            terpercaya dan dengan packing yang Aman,
                        </p>
                    </div>
                </div>
            </section>
            {/* WHY VICENTRA SECTION */}

            {/* OUR PRODUCT SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-yellow rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-gray-800 font-semibold capitalize">
                            Produk Kami
                        </h1>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-[2rem] mt-[1.875rem]">
                    {categoryProducts.map((category) => (
                        <Link
                            href={`/product/${category.name}`}
                            key={category.id}
                        >
                            <img
                                src={category.image}
                                alt={`category ${category.id}`}
                                className="rounded-xl shadow-md"
                            />
                        </Link>
                    ))}
                </div>
            </section>
            {/* OUR PRODUCT SECTION */}

            {/* YOUTUBE SECTION */}
            <section className="bg-gray-100 my-[3.125rem] lg:my-[6.25rem] p-5 rounded-lg">
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div>
                        <h1 className="text-lg font-semibold">
                            Galery Vicentra
                        </h1>
                        <p className="lg:w-[60%] text-sm font-normal mt-[0.625rem] mb-4">
                            Subscribe chanel Youtube kami untuk demo mesin dan
                            promo - promo Terbaru.
                        </p>
                        <a
                            href="#"
                            className="capitalize font-medium text-md px-4 py-2 bg-red-500 text-white rounded-full"
                        >
                            subscribe
                        </a>
                    </div>
                    <div className="rounded-lg overflow-hidden order-first lg:order-none">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=XnqEhpgT2Gk"
                            width={"100%"}
                            controls={true}
                        />
                    </div>
                </div>
            </section>
            {/* YOUTUBE SECTION */}

            {/* CUSTOMER TESTIMONIALS SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-pink rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            Testimoni Customer
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    <Testimonial testimonials={testimonials} />
                </div>
            </section>
            {/* CUSTOMER TESTIMONIALS SECTION */}

            {/* FAQ SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-black rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            FAQ
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    <Faq />
                </div>
            </section>
            {/* FAQ SECTION */}
        </>
    );
}
