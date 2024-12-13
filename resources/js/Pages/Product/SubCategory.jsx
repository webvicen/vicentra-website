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

const SubCategory = ({ category, subCategory, products }) => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div>
            <Helmet>
                <title>Halaman Sub Category Produk</title>
            </Helmet>

            {/* LIST PRODUCT SECTION */}
            <section className="grid grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3">
                    <h1 className="text-xl capitalize font-semibold text-gray-800">
                        Produk Kami
                    </h1>
                    <div className="mt-[1.875rem]">
                        <Accordion open={open === 1}>
                            <AccordionHeader
                                className="text-start text-sm font-semibold py-2"
                                onClick={() => handleOpen(1)}
                            >
                                Mesin
                            </AccordionHeader>
                            <AccordionBody className="py-2">
                                <div className="ml-4">
                                    <Accordion open={open === 1}>
                                        <AccordionHeader
                                            className="text-start text-sm font-semibold py-2"
                                            onClick={() => handleOpen(1)}
                                        >
                                            Mesin
                                        </AccordionHeader>
                                        <AccordionBody>
                                            We&apos;re not always in the
                                            position that we want to be at.
                                            We&apos;re constantly growing.
                                            We&apos;re constantly making
                                            mistakes. We&apos;re constantly
                                            trying to express ourselves and
                                            actualize our dreams.
                                        </AccordionBody>
                                    </Accordion>
                                    <Accordion open={open === 2}>
                                        <AccordionHeader
                                            className="text-start text-sm font-semibold py-2"
                                            onClick={() => handleOpen(2)}
                                        >
                                            Consumable
                                        </AccordionHeader>
                                        <AccordionBody>
                                            We&apos;re not always in the
                                            position that we want to be at.
                                            We&apos;re constantly growing.
                                            We&apos;re constantly making
                                            mistakes. We&apos;re constantly
                                            trying to express ourselves and
                                            actualize our dreams.
                                        </AccordionBody>
                                    </Accordion>
                                    <Accordion open={open === 3}>
                                        <AccordionHeader
                                            className="text-start text-sm font-semibold py-2"
                                            onClick={() => handleOpen(3)}
                                        >
                                            Sparepart
                                        </AccordionHeader>
                                        <AccordionBody>
                                            We&apos;re not always in the
                                            position that we want to be at.
                                            We&apos;re constantly growing.
                                            We&apos;re constantly making
                                            mistakes. We&apos;re constantly
                                            trying to express ourselves and
                                            actualize our dreams.
                                        </AccordionBody>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader
                                className="text-start text-sm font-semibold py-2"
                                onClick={() => handleOpen(2)}
                            >
                                Consumable
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we
                                want to be at. We&apos;re constantly growing.
                                We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader
                                className="text-start text-sm font-semibold py-2"
                                onClick={() => handleOpen(3)}
                            >
                                Sparepart
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we
                                want to be at. We&apos;re constantly growing.
                                We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
                {/* SIDEBAR */}

                {/* PRODUCT CONTENT */}
                <div className="col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto">
                    <h1 className="text-xl capitalize font-semibold text-gray-800">
                        Rekomendasi {`${category.name} ${subCategory.name}`}{" "}
                        Kami
                    </h1>
                    <div className="mt-[1.875rem]">
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
                        <div className="flex justify-end mt-[3.125rem]">
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
