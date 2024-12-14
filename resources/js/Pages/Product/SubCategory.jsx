import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import Layout from "../../Layouts/PagesLayout";

const SubCategory = ({
    categoryProduct,
    category,
    subCategory,
    subSubCategory,
    products,
}) => {
    const currentAccordion = `${category.slug}/${subCategory.slug}/${subSubCategory.slug}`;
    console.log(categoryProduct, currentAccordion);
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
        <div>
            <Helmet>
                <title>
                    Vicentra - Produk {category.name} {subCategory.name}{" "}
                    {subSubCategory.name}
                </title>
            </Helmet>

            {/* LIST PRODUCT SECTION */}
            <section className="grid grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3">
                    <h1 className="text-xl capitalize font-semibold text-gray-800">
                        Produk Kami
                    </h1>
                    <div className="mt-[1.875rem]">
                        {categoryProduct.map((category, index) => (
                            <Accordion
                                open={categoryOpen === category.slug}
                                key={index}
                            >
                                <AccordionHeader
                                    className="text-start text-sm font-semibold py-2"
                                    onClick={() =>
                                        handleCategoryOpen(category.slug)
                                    }
                                >
                                    {category.name}
                                </AccordionHeader>
                                <AccordionBody className="py-0">
                                    <div className="ml-4">
                                        {category.subMenu.map(
                                            (subMenu, index) => (
                                                <Accordion
                                                    open={
                                                        subCategoryOpen ===
                                                        subMenu.slug
                                                    }
                                                    key={index}
                                                >
                                                    <AccordionHeader
                                                        className={`text-start text-sm font-medium py-2 ${
                                                            subCategoryOpen ===
                                                            subMenu.slug
                                                                ? "text-vicentra-blue font-semibold"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleSubCategoryOpen(
                                                                subMenu.slug
                                                            )
                                                        }
                                                    >
                                                        {subMenu.name}
                                                    </AccordionHeader>
                                                    <AccordionBody className="py-0">
                                                        <ul className="ml-4 mt-6">
                                                            {subMenu.subSubMenu.map(
                                                                (
                                                                    subSubMenu,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="mb-2"
                                                                    >
                                                                        <Link
                                                                            href={`/product/${category.slug}/${subSubMenu.slug}`}
                                                                            className={`${
                                                                                subSubCategoryOpen ===
                                                                                subSubMenu.slug
                                                                                    ? "text-vicentra-pink font-semibold"
                                                                                    : ""
                                                                            }`}
                                                                        >
                                                                            {
                                                                                subSubMenu.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </AccordionBody>
                                                </Accordion>
                                            )
                                        )}
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </div>
                </div>
                {/* SIDEBAR */}

                {/* PRODUCT CONTENT */}
                <div className="h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto">
                    <h1 className="text-xl capitalize font-semibold text-gray-800">
                        Rekomendasi {`${category.name} ${subSubCategory.name}`}{" "}
                        Kami
                    </h1>
                    <div className="w-full mt-[1.875rem]">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                            {products.data.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/product/${item.category.slug}/${item.category.subCategory.slug}/${item.slug}`}
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
                        {/* PAGINATION */}
                        <div className="w-full flex justify-end mt-[3.125rem]">
                            <div className="flex gap-2">
                                {products.links.map((link, index) => {
                                    if (index === 0) {
                                        return (
                                            <Link
                                                key={index}
                                                href={link.url}
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
