import { Helmet } from "react-helmet";
import { usePage } from "@inertiajs/react";

import PatternShowcasePage from "../../assets/images/pattern-showcase-page.webp";
import VicentraLogoOutline from "../../assets/images/logo-vicentra-outline.webp";
import SalesCard from "./components/SalesCard";

export default function Show({ slider, teamSales }) {
    const { keywords } = usePage().props;
    return (
        <>
            <Helmet>
                <title>Vicentra - {slider.name}</title>
                <meta
                    name="description"
                    content={`Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`}
                />
                <meta name="keywords" content={keywords} />
                <meta property="og:locale" content="ID_id" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div
                className="w-screen flex flex-col justify-center items-center bg-red-400 overflow-x-hidden py-10"
                style={{
                    backgroundImage: `url(${PatternShowcasePage})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="flex flex-col items-center">
                    <div className="w-[10rem] h-[10rem] bg-vicentra-blue flex justify-center items-center rounded-full">
                        <img
                            src={VicentraLogoOutline}
                            alt="vicentra-logo-outline"
                            className="h-[2.5rem]"
                        />
                    </div>
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
                        Copyright {new Date().getFullYear()} vicentra.com
                    </p>
                </div>
            </div>
        </>
    );
}
