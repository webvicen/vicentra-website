import { usePage, Head } from "@inertiajs/react";

import PatternShowcasePage from "../../assets/images/pattern-showcase-page.webp";
import VicentraLogoShowcase from "../../assets/images/logo-vicentra-showcase.webp";
import SalesCard from "./components/SalesCard";

export default function Show({ slider, teamSales }) {
    const { currentUrl, keywords } = usePage().props;
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Vicentra - Distributor dan Supplier Mesin Dan Bahan Percetakan Surabaya",
        url: "https://vicentra.co.id",
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

    return (
        <>
            <Head>
                <title>{`Vicentra - ${slider.name}` ?? ""}</title>
                <meta
                    name="description"
                    content={
                        `Nikmati promo ${slider.name} di Vicentra! Belanja hemat dan bawa pulang produk impian Anda. Buruan, promo terbatas hingga stok habis!` ??
                        ""
                    }
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`Vicentra - ${slider.name}` ?? ""}
                />
                <meta
                    property="og:description"
                    content={
                        `Nikmati promo ${slider.name} di Vicentra! Belanja hemat dan bawa pulang produk impian Anda. Buruan, promo terbatas hingga stok habis!` ??
                        ""
                    }
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    property="og:url"
                    content={
                        `https://vicentra.co.id/showcase/${slider.slug}` ?? ""
                    }
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`Vicentra - ${slider.name}` ?? ""}
                />
                <meta
                    name="twitter:description"
                    content={
                        `Nikmati promo ${slider.name} di Vicentra! Belanja hemat dan bawa pulang produk impian Anda. Buruan, promo terbatas hingga stok habis!` ??
                        ""
                    }
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    name="twitter:site"
                    content={
                        `https://vicentra.co.id/showcase/${slider.slug}` ?? ""
                    }
                />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>
            <div
                className="w-screen flex flex-col justify-center items-center bg-red-400 overflow-x-hidden py-10"
                style={{
                    backgroundImage: `url(${PatternShowcasePage})`,
                    // backgroundSize: "cover",
                }}
            >
                <div className="flex flex-col items-center">
                    {/* <div className="w-[10rem] h-[10rem] bg-vicentra-blue flex justify-center items-center rounded-full">
                        <img
                            src={VicentraLogoOutline}
                            alt="vicentra-logo-outline"
                            className="h-[2.5rem]"
                        />
                    </div> */}
                    <img
                        src={VicentraLogoShowcase}
                        alt="vicentra-logo-showcase"
                        className="w-[10rem] h-[10rem] rounded-full"
                    />
                    <h1 className="text-center text-2xl font-bold uppercase text-white mt-4">
                        vicentra
                    </h1>
                    <h2 className="text-center text-xl font-bold uppercase text-white mt-4">
                        {slider.name}
                    </h2>
                    <div className="w-[90vw] lg:w-[50vw] h-[15rem] lg:h-[20rem] bg-vicentra-blue rounded-md overflow-hidden mt-5">
                        <img
                            src={`/storage/${slider.image_desktop}`}
                            alt={slider.name}
                            className="w-full h-full hidden lg:block"
                        />
                        <img
                            src={`/storage/${slider.image_mobile}`}
                            alt={slider.name}
                            className="w-full h-full lg:hidden"
                        />
                    </div>
                </div>
                <div className="w-[90vw] lg:w-[50vw] flex flex-col space-y-4 mt-10">
                    {teamSales.map((sales, index) => (
                        <SalesCard
                            key={index}
                            sales={sales}
                            slider={slider}
                            order={index + 1}
                        />
                    ))}
                </div>
                <div>
                    <p className="text-sm text-white mt-10">
                        Copyright © {new Date().getFullYear()} Created By
                        Vicentra-dev, vicentra.co.id
                    </p>
                </div>
            </div>
        </>
    );
}
