import { Head, usePage } from "@inertiajs/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Layout from "../../Layouts/PagesLayout";

const TermsAndConditions = () => {
    const { currentUrl, keywords } = usePage().props;
    const form = useRef();
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Vicentra - Syarat & Ketentuan Perbaikan Mesin",
        image: "https://vicentra.co.id/assets/images/logo-vicentra-black.webp",
        description:
            "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!",
        url: "https://vicentra.co.id/terms-and-conditions",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://vicentra.co.id/product/search?q={search_term}",
            "query-input": "required name=search_term",
        },
        mainEntity: [
            {
                "@type": "WebPage",
                name: "Vicentra - Syarat & Ketentuan Perbaikan Mesin",
                url: "https://vicentra.co.id/terms-and-conditions",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Tentang Kami",
                url: "https://vicentra.co.id/about-us",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin",
                url: "https://vicentra.co.id/product/mesin",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Consumable",
                url: "https://vicentra.co.id/product/consumable",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Sparepart",
                url: "https://vicentra.co.id/product/sparepart",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin Digital Printing Outdoor",
                url: "https://vicentra.co.id/product/mesin/digital-printing/outdoor",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin Digital Printing UV",
                url: "https://vicentra.co.id/product/mesin/digital-printing/uv",
            },
        ],
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("Terimakasih, Pesan Anda Sudah Terkirim.");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div>
            <Head>
                <title>Vicentra - Syarat & Ketentuan Perbaikan Mesin</title>
                <meta
                    name="description"
                    content="Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Vicentra - Syarat & Ketentuan Perbaikan Mesin"
                />
                <meta
                    property="og:description"
                    content="Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    property="og:url"
                    content="https://vicentra.co.id/terms-and-conditions"
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Vicentra - Syarat & Ketentuan Perbaikan Mesin"
                />
                <meta
                    name="twitter:description"
                    content="Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    name="twitter:site"
                    content="https://vicentra.co.id/terms-and-conditions"
                />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            {/* TERMS AND CONDITIONS SECTION */}
            <section>
                <h1 className="text-xl text-center font-semibold text-gray-800">
                    Layanan Dan Perbaikan Mesin
                </h1>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]"
                >
                    <div>
                        <label htmlFor="user_name">Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Masukan nama lengkap anda"
                            id="user_name"
                            name="user_name"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="user_email_or_phone">
                            Email atau No Telepon
                        </label>
                        <input
                            type="text"
                            placeholder="Masukan email atau nomor telepon anda"
                            id="user_email_or_phone"
                            name="user_email_or_phone"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="type_of_assistance">
                            Kategori Service
                        </label>
                        <select
                            id="type_of_assistance"
                            name="type_of_assistance"
                            defaultValue="Garansi"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        >
                            <option value="Garansi">Garansi</option>
                            <option value="Non Garansi">Non Garansi</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="type_of_assistance">Isi Keluhan</label>
                        <textarea
                            placeholder="Isi keluhan keluhan anda disini"
                            id="message"
                            name="message"
                            cols="30"
                            rows="10"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md"
                    >
                        Kirim
                    </button>
                </form>
            </section>
            {/* TERMS AND CONDITIONS SECTION */}
        </div>
    );
};

TermsAndConditions.layout = (page) => <Layout children={page} />;
export default TermsAndConditions;
