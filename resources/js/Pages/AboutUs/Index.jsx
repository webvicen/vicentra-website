import { Helmet } from "react-helmet";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../assets/css/custom.css";

import brandVulcan from "../../assets/images/brand/vulcan.png";
import brandXuli from "../../assets/images/brand/xl.png";
import brandGoldenWire from "../../assets/images/brand/gw.png";
import brandBritePaper from "../../assets/images/brand/bp.png";
import brandNipponTech from "../../assets/images/brand/nt.png";
import brandVTech from "../../assets/images/brand/vtech.png";

import Layout from "../../Layouts/PagesLayout";
import TeamCard from "./components/TeamCard";

const AboutUs = () => {
    const [brands, setBrands] = useState([
        {
            id: 1,
            name: "vulcan",
            image: brandVulcan,
        },
        {
            id: 2,
            name: "xuli",
            image: brandXuli,
        },
        {
            id: 3,
            name: "golden wire",
            image: brandGoldenWire,
        },
        {
            id: 4,
            name: "brite paper",
            image: brandBritePaper,
        },
        {
            id: 5,
            name: "nippon tech",
            image: brandNipponTech,
        },
        {
            id: 6,
            name: "vtech",
            image: brandVTech,
        },
    ]);

    return (
        <div>
            <Helmet>
                <title>Vicentra - Tentang Kami</title>
            </Helmet>

            {/* ABOUT US SECTION */}
            <section>
                <div className="flex justify-center">
                    <div className="bg-vicentra-blue rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            vicentra
                        </h1>
                    </div>
                </div>
                <h1 className="text-xl text-center font-semibold text-gray-800 mt-[1.25rem]">
                    Penyedia Kebutuhan Percetakan Terlengkap
                </h1>
                <div className="lg:w-[80%] mx-auto text-base text-justify text-gray-500 mt-[1.875rem] space-y-4">
                    <p>
                        Selamat datang di Vicentra, sumber nomor satu Anda untuk
                        semua kebutuhan percetakan. Kami berdedikasi untuk
                        memberikan Anda produk mesin dan bahan baku percetakan
                        yang terbaik, dengan fokus pada kualitas, dukungan, dan
                        purna jual.
                    </p>
                    <p>
                        Didirikan pada 2012 oleh Fifik Harianto, Vicentra telah
                        menempuh perjalanan jauh dari awal di Tambakrejo
                        Sidoarjo- Jawa Timur. Ketika pertama kali dimulai,
                        semangat Founder Vicentra tentang dunia percetakan,
                        mendorong untuk menyediakan produk percetakan terbaik.
                        Sehingga Vicentra dapat menawarkan Anda produk-produk
                        percetakan dengan layanan edukasi dan purna jual
                        terbaik. Kami sekarang melayani pelanggan di seluruh
                        Indonesia.
                    </p>
                    <p>
                        Kami berharap Anda menikmati produk kami seperti halnya
                        kami senang menawarkannya kepada Anda. Jika Anda
                        memiliki pertanyaan atau komentar, jangan ragu untuk
                        menghubungi kami.
                    </p>
                </div>
            </section>
            {/* ABOUT US SECTION */}

            {/* BRANDS SECTION */}
            <section className="mt-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-pink rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            brand kami
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.25rem]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay
                        pagination={{
                            el: ".swiper-brand-section-custom-pagination",
                            clickable: true,
                        }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="w-full h-[12rem] flex justify-center items-center rounded-xl border-2 p-5">
                                    <img src={brand.image} alt={brand.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex gap-2 justify-center items-center mt-4">
                        <div className="swiper-brand-section-custom-pagination w-fit" />
                    </div>
                </div>
            </section>
            {/* BRANDS SECTION */}

            {/* OUR TEAM SECTION */}
            <section className="mt-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-yellow rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-gray-800 font-semibold capitalize">
                            tim vicentra
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem] mt-[1.25rem]">
                    {[1, 2, 3, 4].map((item) => (
                        <TeamCard key={item} />
                    ))}
                </div>
            </section>
            {/* OUR TEAM SECTION */}

            {/* MAP SECTION */}
            <section className="mt-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-black rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            lokasi kantor kami
                        </h1>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden shadow-md mt-[1.25rem]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.272941841968!2d112.77459137454677!3d-7.323208372015173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb272ef7e481%3A0x9896b82ab16c1a79!2sVICENTRA%20Supplier%20Mesin%20Percetakan%2C%20Suplier%20Bahan%20Percetakan%20%26%20Digital%20Printing!5e0!3m2!1sid!2sid!4v1733371335401!5m2!1sid!2sid"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[20rem] lg:h-[30rem]"
                    />
                </div>
            </section>
            {/* MAP SECTION */}
        </div>
    );
};

AboutUs.layout = (page) => <Layout children={page} />;
export default AboutUs;
