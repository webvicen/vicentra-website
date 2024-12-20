import { Link, usePage } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player/lazy";

// Import Swiper styles
import "swiper/css";
import "./styles/show.css";

import Layout from "../../Layouts/PagesLayout";
import Descriptions from "./components/Descriptions";
import Specification from "./components/Specification";
import Results from "./components/Results";
import SalesCard from "./components/SalesCard";

const ShowProduct = ({ product, teamSales, similarProducts }) => {
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
        product.category.slug === "mesin"
            ? product.media[1] || product.media[0]
            : product.media[0]
    );
    const [listProductAssets, setListProductAssets] = useState(product.media);
    const [tabItems, setTabsItems] = useState([]);
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

    useEffect(() => {
        const tabsItemsProduct = [
            {
                name: "Deskripsi",
                isActive: true,
            },
        ];

        if (product.specification != null) {
            tabsItemsProduct.push({
                name: "Spesifikasi",
                isActive: false,
            });
        }
        if (product.work_result != null) {
            tabsItemsProduct.push({
                name: "Hasil",
                isActive: false,
            });
        }

        setTabsItems(tabsItemsProduct);
    }, []);

    return (
        <div>
            <Helmet>
                <title>
                    Vicentra - Produk {product.name}{" "}
                    {product.another_name ?? ""}
                </title>
            </Helmet>

            {/* PRODUCT SECTION */}
            <section className="grid lg:grid-cols-2 gap-[1.25rem]">
                <div>
                    <div>
                        {activeProductItem.type === "image" ? (
                            <img
                                src={`/storage/${activeProductItem.file}`}
                                alt={activeProductItem.slug}
                                className="w-full h-full lg:h-[37.5rem] object-contain"
                            />
                        ) : (
                            <div className="w-full h-[21.438rem] lg:h-[37.5rem]">
                                <ReactPlayer
                                    url={activeProductItem.file}
                                    light={true}
                                    width={"100%"}
                                    height={"100%"}
                                    controls={true}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex gap-x-2 mt-[1.875rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        {listProductAssets.map((item, index) => {
                            if (item.type === "image") {
                                return (
                                    <img
                                        key={index}
                                        src={`/storage/${item.file}`}
                                        alt="mesin-xuli-eco-solvent"
                                        className={`w-[10rem] h-[10rem] hover:cursor-pointer ${
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
                                    <img
                                        key={index}
                                        src={`/storage/${item.youtube_thumbnail}`}
                                        alt="mesin-xuli-eco-solvent"
                                        className={`w-[10rem] h-[10rem] hover:cursor-pointer ${
                                            item.isActive
                                                ? "border-2 border-gray-600"
                                                : "border-2 border-white"
                                        } object-contain`}
                                        onClick={() =>
                                            toogleActiveProductItem(index)
                                        }
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            {product.name}
                        </h1>
                        <h2 className="text-sm font-normal text-gray-600">
                            {product.another_name}
                        </h2>
                    </div>
                    <div
                        className="text-sm text-justify text-gray-500 mt-[1.25rem]"
                        dangerouslySetInnerHTML={{
                            __html: product.shortDescription,
                        }}
                    ></div>
                    <div className="mt-[1.25rem]">
                        <h2 className="text-base font-semibold">
                            {product.category.name}/
                            {product.category.subCategory.name}/
                            {product.category.subCategory.subSubCategory.name}
                        </h2>
                        <h2 className="text-base">
                            <span className="font-semibold">SKU: </span>
                            {product.sku}
                        </h2>
                        <h2 className="text-base">
                            <span className="font-semibold">Brand: </span>
                            {product.brand}
                        </h2>
                    </div>
                    <div className="space-y-4 mt-[1.25rem]">
                        {teamSales.map((sales, index) => (
                            <SalesCard
                                product={product}
                                sales={sales}
                                url={url}
                                breadcrumbUrlResult={breadcrumbUrlResult}
                                key={index}
                                order={index + 1}
                            />
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
                    {activeTab === "Hasil" && product.work_result != null ? (
                        <Results product={product} />
                    ) : null}
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
                                href={`/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`}
                                className="rounded-lg overflow-hidden"
                            >
                                <div className="rounded-lg overflow-hidden relative">
                                    <img
                                        src={`/storage/${item.thumbnail}`}
                                        alt={item.slug}
                                    />
                                    {item.is_out_of_stock ? (
                                        <div className="w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]">
                                            <h1 className="text-base font-bold text-white uppercase">
                                                out of stock
                                            </h1>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="mt-2">
                                    <h1 className="text-center text-base font-bold">
                                        {item.name}
                                    </h1>
                                    <h2 className="text-center text-sm font-normal">
                                        {item.another_name}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* SIMILAR PRODUCTS SECTION */}
        </div>
    );
};

ShowProduct.layout = (page) => <Layout children={page} />;
export default ShowProduct;
