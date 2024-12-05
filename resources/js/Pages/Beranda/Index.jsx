import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ReactPlayer from "react-player/lazy";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../assets/css/custom.css";

import Category1 from "../../assets/images/category/1.png";
import Category2 from "../../assets/images/category/2.png";
import Category3 from "../../assets/images/category/3.png";

export default function Beranda() {
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
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                    pagination={{
                        el: ".swiper-hero-section-custom-pagination",
                        clickable: true,
                    }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="w-full h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl">
                            <h1 className="text-white">Slide 1</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl">
                            <h1 className="text-white">Slide 2</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl">
                            <h1 className="text-white">Slide 3</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="flex gap-2 justify-center items-center mt-4">
                    <div className="swiper-hero-section-custom-pagination w-fit" />
                </div>
            </section>
            {/* HERO SECTION */}

            {/* WHY VICENTRA SECTION */}
            <section className="mt-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-blue rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            kenapa vicentra
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem] grid grid-cols-3 gap-[4rem]">
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
            <section className="mt-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-yellow rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-gray-800 font-semibold capitalize">
                            Produk Kami
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[4rem] mt-[1.875rem]">
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
            <section className="bg-gray-100 mt-[6.25rem] p-5 rounded-lg">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <h1 className="text-lg font-semibold">
                            Galery Vicentra
                        </h1>
                        <p className="w-[60%] text-sm font-normal mt-[0.625rem] mb-4">
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
                    <div className="rounded-lg overflow-hidden">
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
            <section className="mt-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-pink rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            Testimoni Customer
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay
                        pagination={{
                            el: ".swiper-testimonial-section-custom-pagination",
                            clickable: true,
                        }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                                <div>
                                    <h1 className="text-md font-semibold">
                                        Architecture Cutting Surabaya
                                    </h1>
                                    <p className="text-sm font-normal mt-3">
                                        Untuk mesinnya oke, pelayanan cukup
                                        baik, tim teknisi juga oke memberikan
                                        arahan dan solusi dengan baik.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                                <div>
                                    <h1 className="text-md font-semibold">
                                        Architecture Cutting Surabaya
                                    </h1>
                                    <p className="text-sm font-normal mt-3">
                                        Untuk mesinnya oke, pelayanan cukup
                                        baik, tim teknisi juga oke memberikan
                                        arahan dan solusi dengan baik.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                                <div>
                                    <h1 className="text-md font-semibold">
                                        Architecture Cutting Surabaya
                                    </h1>
                                    <p className="text-sm font-normal mt-3">
                                        Untuk mesinnya oke, pelayanan cukup
                                        baik, tim teknisi juga oke memberikan
                                        arahan dan solusi dengan baik.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                                <div>
                                    <h1 className="text-md font-semibold">
                                        Architecture Cutting Surabaya
                                    </h1>
                                    <p className="text-sm font-normal mt-3">
                                        Untuk mesinnya oke, pelayanan cukup
                                        baik, tim teknisi juga oke memberikan
                                        arahan dan solusi dengan baik.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                                <div>
                                    <h1 className="text-md font-semibold">
                                        Architecture Cutting Surabaya
                                    </h1>
                                    <p className="text-sm font-normal mt-3">
                                        Untuk mesinnya oke, pelayanan cukup
                                        baik, tim teknisi juga oke memberikan
                                        arahan dan solusi dengan baik.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                                <div>
                                    <h1 className="text-md font-semibold">
                                        Architecture Cutting Surabaya
                                    </h1>
                                    <p className="text-sm font-normal mt-3">
                                        Untuk mesinnya oke, pelayanan cukup
                                        baik, tim teknisi juga oke memberikan
                                        arahan dan solusi dengan baik.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex gap-2 justify-center items-center mt-4">
                        <div className="swiper-testimonial-section-custom-pagination w-fit" />
                    </div>
                </div>
            </section>
            {/* CUSTOMER TESTIMONIALS SECTION */}
        </>
    );
}
