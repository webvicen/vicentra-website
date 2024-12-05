import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { useState } from "react";

import Product from "../../assets/images/product/1.jpg";

import Descriptions from "./components/Descriptions";
import Video from "./components/Video";
import FAQ from "./components/FAQ";

export default function ShowProduct({ category, subCategory }) {
    const [tabItems, setTabsItems] = useState([
        {
            name: "Deskripsi",
            isActive: true,
        },
        {
            name: "Spesifikasi",
            isActive: false,
        },
        {
            name: "Hasil",
            isActive: false,
        },
        {
            name: "Video",
            isActive: false,
        },
        {
            name: "FAQ",
            isActive: false,
        },
    ]);
    const [activeTab, setActiveTab] = useState("Deskripsi");

    const toggleActiveTab = (index) => {
        const updatedTabItems = [...tabItems];
        updatedTabItems[index].isActive = true;
        updatedTabItems.forEach((item, i) => {
            if (i !== index) {
                item.isActive = false;
            }
        });
        setTabsItems(updatedTabItems);
        setActiveTab(tabItems[index].name);
    };

    return (
        <div>
            <Helmet>
                <title>Halaman Produk</title>
            </Helmet>

            {/* PRODUCT SECTION */}
            <section className="grid grid-cols-2 gap-[1.25rem]">
                <div>
                    <img src={Product} alt="mesin-xuli-eco-solvent" />
                    <div className="grid grid-cols-3 gap-4 mt-[1.875rem]">
                        <img
                            src={Product}
                            alt="mesin-xuli-eco-solvent"
                            className="hover:cursor-pointer border-2 border-gray-600 rounded-lg"
                        />
                        <img
                            src={Product}
                            alt="mesin-xuli-eco-solvent"
                            className="hover:cursor-pointer rounded-lg"
                        />
                        <img
                            src={Product}
                            alt="mesin-xuli-eco-solvent"
                            className="hover:cursor-pointer rounded-lg"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Mesin Xuli Eco Solvent
                    </h1>
                    <p className="text-sm text-justify text-gray-500 mt-[1.25rem]">
                        Xuli X6-1880 Ecosolvent yang mengunakan print head Epson
                        DX-5 180 nozzles*8 Lines*1,high quality up to 1440dpi
                        dengan sistem automatis damper untuk membersikan
                        head, Jadi mempermudah perawatan dan mesin ini bisa
                        mencetak di bahan bahan sebagai berikut Seperti Inkjet
                        Paper, Photo Paper, Canvas, Albatros, Pvc, Backlite Film
                        Duratrans, dll.
                    </p>
                    <div className="mt-[1.25rem]">
                        <h2 className="text-base font-semibold">
                            Mesin / Digital Printing
                        </h2>
                        <h2 className="text-base">
                            <span className="font-semibold">SKU: </span>
                            MPAS-100017
                        </h2>
                        <h2 className="text-base">
                            <span className="font-semibold">Brand: </span>Xuli
                        </h2>
                    </div>
                </div>
            </section>
            {/* PRODUCT SECTION */}

            {/* TAB SECTION SECTION */}
            <section className="mt-[6.25rem]">
                <div className="space-x-2">
                    {tabItems.map((item, index) => (
                        <button
                            key={index}
                            className={`text-sm font-semibold ${
                                item.isActive
                                    ? "bg-vicentra-blue text-white"
                                    : "bg-gray-100 text-gray-500"
                            } px-4 py-2 rounded-md`}
                            onClick={() => toggleActiveTab(index)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="mt-[1.875rem]">
                    {activeTab === "Deskripsi" && <Descriptions />}
                    {activeTab === "Video" && <Video />}
                    {activeTab === "FAQ" && <FAQ />}
                </div>
            </section>
            {/* TAB SECTION SECTION */}

            {/* SIMILAR PRODUCTS SECTION */}
            <section className="mt-[6.25rem]">
                <h1 className="text-xl capitalize font-semibold text-gray-800">
                    Rekomendasi Produk Yang Serupa
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-4 gap-[1.25rem]">
                        {[1, 2, 3, 4].map((item) => (
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
                </div>
            </section>
            {/* SIMILAR PRODUCTS SECTION */}
        </div>
    );
}
