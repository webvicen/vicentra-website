import { Head, usePage } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../assets/css/custom.css";

import Layout from "../../Layouts/PagesLayout";

const AboutUs = ({ brands }) => {
    const { currentUrl, keywords } = usePage().props;

    return (
        <div>
            <Head>
                <title>Vicentra - Tentang Kami</title>
                <meta
                    name="description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas tinggi, didukung layanan purna jual terbaik. Melayani seluruh Indonesia dengan komitmen pada kualitas & kepuasan pelanggan. Hubungi kami sekarang!"
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Vicentra - Tentang Kami" />
                <meta
                    property="og:description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas tinggi, didukung layanan purna jual terbaik. Melayani seluruh Indonesia dengan komitmen pada kualitas & kepuasan pelanggan. Hubungi kami sekarang!"
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
                />
                <meta
                    property="og:url"
                    content="https://vicentra.co.id/about-us"
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vicentra - Tentang Kami" />
                <meta
                    name="twitter:description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas tinggi, didukung layanan purna jual terbaik. Melayani seluruh Indonesia dengan komitmen pada kualitas & kepuasan pelanggan. Hubungi kami sekarang!"
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
                />
                <meta
                    name="twitter:site"
                    content="https://vicentra.co.id/about-us"
                />
            </Head>

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
                        loop={true}
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
                    >
                        {brands.map((brand, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-[12rem] flex justify-center items-center rounded-xl border-2 p-5">
                                    <img
                                        src={`/storage/${brand.image}`}
                                        alt={brand.slug}
                                        className="h-[5rem] aspect-[2/1] object-contain"
                                    />
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
