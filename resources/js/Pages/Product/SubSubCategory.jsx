import { useState } from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Accordion from "@material-tailwind/react/components/Accordion";
import AccordionHeader from "@material-tailwind/react/components/Accordion/AccordionHeader";
import AccordionBody from "@material-tailwind/react/components/Accordion/AccordionBody";

import Layout from "../../Layouts/PagesLayout";

const SidebarAccordion = ({
    category,
    subCategory,
    subSubCategory,
    categoryProduct,
}) => {
    const currentAccordion = `${category.slug}/${subCategory.slug}/${subSubCategory.slug}`;
    const [categoryOpen, setCategoryOpen] = useState(
        currentAccordion.split("/")[0]
    );
    const [subCategoryOpen, setSubCategoryOpen] = useState(
        currentAccordion.split("/")[1]
    );
    const [subSubCategoryOpen, setSubSubCategoryOpen] = useState(
        currentAccordion.split("/")[2]
    );
    const handleCategoryOpen = (slug) => {
        setCategoryOpen(slug);
    };
    const handleSubCategoryOpen = (slug) => {
        setSubCategoryOpen(slug);
    };

    return (
        <>
            {categoryProduct.map((category, index) => (
                <Accordion open={categoryOpen === category.slug} key={index}>
                    <AccordionHeader
                        className="text-start text-sm font-semibold py-2"
                        onClick={() => handleCategoryOpen(category.slug)}
                    >
                        {category.name}
                    </AccordionHeader>
                    <AccordionBody className="py-0">
                        <div className="ml-4">
                            {category.subMenu.map((subMenu, index) => (
                                <Accordion
                                    open={subCategoryOpen === subMenu.slug}
                                    key={index}
                                >
                                    <AccordionHeader
                                        className={`text-start text-sm font-medium py-2 ${
                                            subCategoryOpen === subMenu.slug
                                                ? "text-vicentra-blue font-semibold"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSubCategoryOpen(subMenu.slug)
                                        }
                                    >
                                        <Link
                                            href={`/product/${category.slug}/${subMenu.slug}`}
                                            className="w-full"
                                        >
                                            {subMenu.name}
                                        </Link>
                                    </AccordionHeader>
                                    <AccordionBody className="py-0">
                                        <ul className="ml-4 mt-6">
                                            {subMenu.subSubMenu.map(
                                                (subSubMenu, index) => (
                                                    <li
                                                        key={index}
                                                        className="w-full flex justify-between mb-2"
                                                    >
                                                        <Link
                                                            href={`/product/${category.slug}/${subMenu.slug}/${subSubMenu.slug}`}
                                                            className={`${
                                                                subSubCategoryOpen ===
                                                                subSubMenu.slug
                                                                    ? "w-[90%] text-vicentra-pink font-semibold pl-3 rounded-sm bg-[#acacac1f]"
                                                                    : "w-full"
                                                            }`}
                                                        >
                                                            {subSubMenu.name}
                                                        </Link>
                                                        <span>
                                                            ({subSubMenu.count})
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </AccordionBody>
                                </Accordion>
                            ))}
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
        </>
    );
};

const SubCategory = ({
    categoryProduct,
    category,
    subCategory,
    subSubCategory,
    products,
}) => {
    const { currentUrl, keywords } = usePage().props;
    const isServer = typeof window === "undefined";
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name:
            `Vicentra - Produk ${category.name} ${subCategory.name} ${subSubCategory.name}` ??
            "",
        image: "https://vicentra.co.id/assets/images/logo-vicentra-black.webp",
        description:
            `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
            "",
        url: currentUrl ?? "",
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
        <div>
            <Head>
                <title>
                    {`Vicentra - Produk ${category.name} ${subCategory.name} ${subSubCategory.name}`}
                </title>
                <meta
                    name="description"
                    content={
                        `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
                        ""
                    }
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={
                        `Vicentra - Produk ${category.name} ${subCategory.name} ${subSubCategory.name}` ??
                        ""
                    }
                />
                <meta
                    property="og:description"
                    content={
                        `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
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
                        `https://vicentra.co.id/product/${category.slug}/${subCategory.slug}/${subSubCategory.slug}` ??
                        ""
                    }
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={
                        `Vicentra - Produk ${category.name} ${subCategory.name} ${subSubCategory.name}` ??
                        ""
                    }
                />
                <meta
                    name="twitter:description"
                    content={
                        `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
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
                        `https://vicentra.co.id/product/${category.slug}/${subCategory.slug}/${subSubCategory.slug}` ??
                        ""
                    }
                />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            {/* LIST PRODUCT SECTION */}
            <section className="grid grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3">
                    <h2 className="text-xl capitalize font-semibold text-gray-800">
                        Produk Kami
                    </h2>
                    <div className="mt-[1.875rem]">
                        {!isServer ? (
                            <SidebarAccordion
                                category={category}
                                subCategory={subCategory}
                                subSubCategory={subSubCategory}
                                categoryProduct={categoryProduct}
                            />
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
                {/* SIDEBAR */}

                {/* PRODUCT CONTENT */}
                <div className="h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto">
                    <h1 className="text-xl capitalize font-semibold text-gray-800">
                        Rekomendasi{" "}
                        {`${category.name} ${subCategory.name} ${subSubCategory.name}`}{" "}
                        Kami
                    </h1>
                    <div className="w-full mt-[1.875rem]">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                            {products.data.map((item, index) => (
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
                                                <h2 className="text-base font-bold text-white uppercase">
                                                    out of stock
                                                </h2>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-2">
                                        <h2 className="text-center text-sm font-normal">
                                            {item.name}
                                        </h2>
                                        <h3 className="text-center text-base font-bold">
                                            {item.another_name ?? ""}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* PAGINATION */}
                        <div className="w-full flex justify-end mt-[3.125rem]">
                            <div className="flex gap-2">
                                {products.links.map((link, index) => {
                                    if (index === 0) {
                                        return (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                aria-label="link prev"
                                                className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                    link.active
                                                        ? `bg-vicentra-blue text-white`
                                                        : `bg-gray-200 text-gray-800`
                                                } rounded-lg`}
                                            >
                                                <FaChevronLeft />
                                            </Link>
                                        );
                                    }

                                    if (index === products.links.length - 1) {
                                        return (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                aria-label="link next"
                                                className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                    link.active
                                                        ? `bg-vicentra-blue text-white`
                                                        : `bg-gray-200 text-gray-800`
                                                } rounded-lg`}
                                            >
                                                <FaChevronRight />
                                            </Link>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            aria-label={`link pagination ${link.label}`}
                                            className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                link.active
                                                    ? `bg-vicentra-blue text-white`
                                                    : `bg-gray-200 text-gray-800`
                                            } rounded-lg`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        {/* PAGINATION */}
                    </div>
                </div>
                {/* PRODUCT CONTENT */}
            </section>
            {/* LIST PRODUCT SECTION */}
        </div>
    );
};

SubCategory.layout = (page) => <Layout children={page} />;
export default SubCategory;
