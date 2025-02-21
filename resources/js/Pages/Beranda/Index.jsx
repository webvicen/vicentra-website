import { useState, useEffect } from "react";
import { Link, Head, usePage } from "@inertiajs/react";

import Layout from "../../Layouts/PagesLayout";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Youtube from "./components/Youtube";

const Beranda = ({ sliders, categoryProducts, testimonials, faqs }) => {
    const { url } = usePage();
    const { currentUrl, keywords } = usePage().props;
    const isServer = typeof window === "undefined";
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector(".sticky");
            if (heroSection) {
                const isDesktop = window.innerWidth >= 1280;
                if (window.scrollY > heroSection.offsetHeight && isDesktop) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener saat komponen unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array berarti useEffect hanya dijalankan sekali saat mount

    return (
        <>
            <Head>
                <title>
                    Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya
                </title>
                <meta
                    name="description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas tinggi, didukung layanan purna jual terbaik. Melayani seluruh Indonesia dengan komitmen pada kualitas & kepuasan pelanggan. Hubungi kami sekarang!"
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
                />
                <meta
                    property="og:description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas tinggi, didukung layanan purna jual terbaik. Melayani seluruh Indonesia dengan komitmen pada kualitas & kepuasan pelanggan. Hubungi kami sekarang!"
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
                />
                <meta property="og:url" content="https://vicentra.co.id" />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
                />
                <meta
                    name="twitter:description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas tinggi, didukung layanan purna jual terbaik. Melayani seluruh Indonesia dengan komitmen pada kualitas & kepuasan pelanggan. Hubungi kami sekarang!"
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
                />
                <meta name="twitter:site" content="https://vicentra.co.id" />
            </Head>

            {/* HERO SECTION */}
            <section className="sticky lg:relative top-0 z-[10] bg-white">
                <Hero sliders={sliders} isSticky={isSticky} />
            </section>
            {/* HERO SECTION */}

            {/* WHY VICENTRA SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <Why />
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
                <div className="grid grid-cols-3 gap-3 lg:gap-[2rem] mt-[1.875rem]">
                    {categoryProducts.map((category, index) => (
                        <Link href={`/product/${category.slug}`} key={index}>
                            <img
                                src={`/storage/${category.thumbnail}`}
                                alt={`category-${category.slug}`}
                                className="rounded-xl shadow-md"
                            />
                        </Link>
                    ))}
                </div>
            </section>
            {/* OUR PRODUCT SECTION */}

            {/* YOUTUBE SECTION */}
            <section className="bg-gray-100 my-[3.125rem] lg:my-[6.25rem] p-5 rounded-lg">
                <Youtube />
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
            <section className="my-[3.125rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-black rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            FAQ
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    {!isServer ? <Faq faqs={faqs} /> : <div>Loading...</div>}
                </div>
            </section>
            {/* FAQ SECTION */}
        </>
    );
};

Beranda.layout = (page) => <Layout children={page} />;
export default Beranda;
