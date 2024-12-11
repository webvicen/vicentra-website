import { Link, usePage } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";

import Product from "../../assets/images/product/1.jpg";

import Product1 from "../../assets/images/product/1.jpg";
import Product2 from "../../assets/images/product/2.jpg";
import Product3 from "../../assets/images/product/3.jpg";

import Descriptions from "./components/Descriptions";
import Specification from "./components/Specification";
import Results from "./components/Results";
import SalesCard from "./components/SalesCard";

export default function ShowProduct({ product, teamSales, similarProducts }) {
    const { url } = usePage();
    const urlSegments = url.split("/");
    const urlTarget = `${urlSegments[2]}/${urlSegments[3]}`;
    const breadcrumbUrlResult = urlTarget
        .split("/")
        .map((segment) =>
            segment
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
        )
        .join("/");

    const [activeProductItem, setActiveProductItem] = useState(
        product.media[1]
    );
    const [listProductAssets, setListProductAssets] = useState(product.media);
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
    const toogleActiveProductItem = (index) => {
        const updatedListProductAssets = [...listProductAssets];
        updatedListProductAssets[index].isActive = true;
        updatedListProductAssets.forEach((item, i) => {
            if (i !== index) {
                item.isActive = false;
            }
        });
        setListProductAssets(updatedListProductAssets);
        setActiveProductItem(updatedListProductAssets[index]);
    };

    return (
        <div>
            <Helmet>
                <title>Halaman Produk</title>
            </Helmet>

            {/* PRODUCT SECTION */}
            <section className="grid lg:grid-cols-2 gap-[1.25rem]">
                <div>
                    <div>
                        {activeProductItem.type === "image" ? (
                            <img
                                src={`/storage/${activeProductItem.file}`}
                                alt={activeProductItem.slug}
                                className="w-full lg:h-[37.5rem] object-contain"
                            />
                        ) : (
                            <ReactPlayer
                                url={activeProductItem.file}
                                light={true}
                                width={"100%"}
                                height={"37.5rem"}
                                controls={true}
                            />
                        )}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-[1.875rem]">
                        {listProductAssets.map((item, index) => {
                            if (item.type === "image") {
                                return (
                                    <img
                                        key={item.id}
                                        src={`/storage/${item.file}`}
                                        alt="mesin-xuli-eco-solvent"
                                        className={`w-full lg:h-[12rem] hover:cursor-pointer ${
                                            item.isActive
                                                ? "border-2 border-gray-600"
                                                : "border-2 border-white"
                                        } object-contain`}
                                        onClick={() =>
                                            toogleActiveProductItem(index)
                                        }
                                    />
                                );
                            } else if (item.type === "video") {
                                return (
                                    <div
                                        key={item.id}
                                        className={`hover:cursor-pointer ${
                                            item.isActive
                                                ? "border-2 border-gray-600"
                                                : "border-2 border-white"
                                        }`}
                                        onClick={() =>
                                            toogleActiveProductItem(index)
                                        }
                                    >
                                        <ReactPlayer
                                            url={item.file}
                                            light={true}
                                            width={"100%"}
                                            height={"12rem"}
                                            style={{ pointerEvents: "none" }}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {product.name}
                    </h1>
                    <div
                        className="text-sm text-justify text-gray-500 mt-[1.25rem]"
                        dangerouslySetInnerHTML={{
                            __html: product.shortDescription,
                        }}
                    ></div>
                    <div className="mt-[1.25rem]">
                        <h2 className="text-base font-semibold">
                            {breadcrumbUrlResult}
                        </h2>
                        <h2 className="text-base">
                            <span className="font-semibold">SKU: </span>
                            {product.sku}
                        </h2>
                        <h2 className="text-base">
                            <span className="font-semibold">Brand: </span>Xuli
                        </h2>
                    </div>
                    <div className="space-y-4 mt-[1.25rem]">
                        {teamSales.map((sales, index) => (
                            <SalesCard sales={sales} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            {/* PRODUCT SECTION */}

            {/* TAB SECTION SECTION */}
            <section className="mt-[3.125rem] lg:mt-[6.25rem]">
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
                    {activeTab === "Deskripsi" && (
                        <Descriptions product={product} />
                    )}
                    {activeTab === "Spesifikasi" && (
                        <Specification product={product} />
                    )}
                    {activeTab === "Hasil" && <Results product={product} />}
                </div>
            </section>
            {/* TAB SECTION SECTION */}

            {/* SIMILAR PRODUCTS SECTION */}
            <section className="mt-[3.125rem] lg:mt-[6.25rem]">
                <h1 className="text-xl capitalize font-semibold text-gray-800">
                    Rekomendasi Produk Yang Serupa
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {similarProducts.map((item, index) => (
                            <Link
                                key={index}
                                href={`/product/${item.category.slug}/${item.category.subCategory.slug}/${item.slug}`}
                                className="rounded-lg overflow-hidden"
                            >
                                <img
                                    src={`/storage/${item.thumbnail}`}
                                    alt={item.slug}
                                    className="rounded-lg"
                                />
                                <h1 className="text-center text-base font-medium mt-2">
                                    {item.name}
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
