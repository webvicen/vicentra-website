import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    FaFacebook,
    FaInstagramSquare,
    FaYoutube,
    FaSearch,
    FaCaretDown,
    FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";

import VicentraLogoBlack from "../assets/images/logo-vicentra-black.webp";
import VicentraLogoWhite from "../assets/images/logo-vicentra-white.webp";
import VicentraLogoOutline from "../assets/images/logo-vicentra-outline.webp";

export default function PagesLayout({ children }) {
    const { url } = usePage();
    const { keywords, categoryPost, categoryProduct } = usePage().props;
    const [isSubMenuCategoryPostOpen, setIsSubMenuCategoryPostOpen] =
        useState(false);
    const [subMenuProducts, setSubMenuProducts] = useState(categoryProduct);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const toggleSubMenuCategoryPost = () => {
        setIsSubMenuCategoryPostOpen(!isSubMenuCategoryPostOpen);
    };
    const toogleSubSubMenuCategory = (e, productName, SubSubMenuName) => {
        e.stopPropagation();
        setSubMenuProducts(
            subMenuProducts.map((product) => {
                if (product.name === productName) {
                    return {
                        ...product,
                        subMenu: product.subMenu.map((subMenu) => {
                            if (subMenu.name === SubSubMenuName) {
                                return {
                                    ...subMenu,
                                    isSubSubMenuOpen: !subMenu.isSubSubMenuOpen,
                                };
                            }
                            return {
                                ...subMenu,
                                isSubSubMenuOpen: false,
                            };
                        }),
                    };
                }
                return product;
            })
        );
    };
    const toggleSubMenuProduct = (e, name) => {
        e.stopPropagation();
        setSubMenuProducts(
            subMenuProducts.map((product) => {
                if (product.name === name) {
                    return {
                        ...product,
                        isOpen: !product.isOpen,
                        subMenu: product.subMenu.map((subMenu) => {
                            return {
                                ...subMenu,
                                isSubSubMenuOpen: false,
                            };
                        }),
                    };
                }
                return {
                    ...product,
                    isOpen: false,
                };
            })
        );
    };

    useEffect(() => {
        setSubMenuProducts(categoryProduct);
    }, [url]);

    return (
        <>
            <main>
                {/* HEADER */}
                {/* DESKTOP HEADER */}
                <header className="hidden lg:block shadow pb-[1rem]">
                    <div className="bg-vicentra-blue">
                        <div className="w-[80vw] mx-auto py-[1rem]">
                            <div className="flex justify-between items-end">
                                <div className="flex items-center gap-[1.875rem]">
                                    <Link
                                        href="/"
                                        className="beranda text-base text-white capitalize"
                                    >
                                        beranda
                                    </Link>
                                    <div
                                        className="text-base text-white capitalize flex items-center gap-1 hover:cursor-pointer relative"
                                        onClick={toggleSubMenuCategoryPost}
                                    >
                                        blog
                                        <FaCaretDown className="text-vicentra-yellow text-xl" />
                                        <ul
                                            className={`flex flex-col items-start space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                                isSubMenuCategoryPostOpen
                                                    ? "block"
                                                    : "hidden"
                                            }`}
                                        >
                                            {categoryPost?.map(
                                                (category, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={`/blog/${category.slug}`}
                                                            className="text-sm text-gray-800"
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <Link
                                        href="/terms-and-conditions"
                                        className="layanan_dan_perbaikan text-base text-white capitalize"
                                    >
                                        layanan dan perbaikan
                                    </Link>
                                    <Link
                                        href="/about-us"
                                        className="tentang_kami text-base text-white capitalize"
                                    >
                                        tentang kami
                                    </Link>
                                </div>
                                <div className="flex items-end gap-[1.875rem]">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm capitalize text-white">
                                            ikuti kami di
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://www.facebook.com/vicentra"
                                                target="_blank"
                                                className="facebook"
                                                aria-label="Kunjungi halaman Facebook Vicentra"
                                            >
                                                <FaFacebook className="text-white text-xl font-semibold" />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/vicentra.co.id"
                                                target="_blank"
                                                className="instagram"
                                                aria-label="Kunjungi halaman Instagram Vicentra"
                                            >
                                                <FaInstagramSquare className="text-white text-xl font-semibold" />
                                            </a>
                                            <a
                                                href="https://www.youtube.com/@galeryvicentra"
                                                target="_blank"
                                                className="youtube"
                                                aria-label="Kunjungi kanal YouTube Galery Vicentra"
                                            >
                                                <FaYoutube className="text-white text-xl font-semibold" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-white relative rounded-md">
                                        <form
                                            action="/product/search"
                                            method="GET"
                                        >
                                            <input
                                                type="text"
                                                name="q"
                                                placeholder="Cari produk vicentra..."
                                                className="w-[20rem] py-2 px-2 focus:outline-none rounded-sm"
                                            />
                                            <button
                                                type="submit"
                                                className="w-10 h-8 flex justify-center items-center bg-vicentra-blue absolute top-1/2 right-0 transform -translate-y-1/2 rounded-sm mr-1"
                                                aria-label="Cari"
                                            >
                                                <FaSearch className="text-white text-sm font-semibold" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[80vw] mx-auto mt-[1rem]">
                        <div className="flex justify-between items-center">
                            <Link href="/">
                                <img
                                    src={VicentraLogoBlack}
                                    alt="vicentra logo black"
                                    className="h-[3.75rem]"
                                />
                            </Link>
                            <div className="flex items-start gap-[1.875rem]">
                                {subMenuProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="main_category text-base text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer relative"
                                        onClick={(e) => {
                                            toggleSubMenuProduct(
                                                e,
                                                product.name
                                            );
                                        }}
                                    >
                                        {product.name}
                                        <FaCaretDown className="text-vicentra-yellow text-xl" />
                                        <ul
                                            className={`space-y-2 bg-white min-w-[12rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                                product.isOpen
                                                    ? "block"
                                                    : "hidden"
                                            } z-50`}
                                        >
                                            {product.subMenu.map((subMenu) => {
                                                if (
                                                    subMenu.subSubMenu.length >
                                                    0
                                                ) {
                                                    return (
                                                        <li key={subMenu.id}>
                                                            <div
                                                                className="sub_category w-full flex justify-between text-sm text-gray-800 capitalize gap-1 hover:cursor-pointer relative"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    toogleSubSubMenuCategory(
                                                                        e,
                                                                        product.name,
                                                                        subMenu.name
                                                                    );
                                                                }}
                                                            >
                                                                {subMenu.name}
                                                                <FaCaretDown className="text-vicentra-yellow text-xl" />
                                                                <ul
                                                                    className={`space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-[9rem] top-[1rem] shadow-md z-50 ${
                                                                        subMenu.isSubSubMenuOpen
                                                                            ? "block"
                                                                            : "hidden"
                                                                    }`}
                                                                >
                                                                    {subMenu.subSubMenu.map(
                                                                        (
                                                                            subSubMenu
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    subSubMenu.id
                                                                                }
                                                                                className="flex justify-start border-b border-gray-200 py-1"
                                                                            >
                                                                                <Link
                                                                                    href={`/product/${product.slug}/${subMenu.slug}/${subSubMenu.slug}`}
                                                                                    className="text-sm text-gray-800"
                                                                                >
                                                                                    {
                                                                                        subSubMenu.name
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    );
                                                } else {
                                                    return (
                                                        <li
                                                            key={subMenu.id}
                                                            className="flex justify-start"
                                                        >
                                                            <Link
                                                                href={`/product/${product.slug}/${subMenu.slug}`}
                                                                className="text-sm text-gray-800 capitalize"
                                                            >
                                                                {subMenu.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>
                {/* DESKTOP HEADER */}
                {/* MOBILE HEADER */}
                <header className="lg:hidden">
                    <div className="bg-vicentra-blue">
                        <div className="lg:w-[80vw] mx-[1rem] lg:mx-auto py-[1rem] relative z-50">
                            <div className="flex items-center gap-2">
                                <p className="text-sm capitalize text-white">
                                    ikuti kami di
                                </p>
                                <div className="flex items-center gap-1">
                                    <a
                                        href="https://www.facebook.com/vicentra"
                                        target="_blank"
                                        className="facebook"
                                        aria-label="Kunjungi halaman Facebook Vicentra"
                                    >
                                        <FaFacebook className="text-white text-xl font-semibold" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/vicentra.co.id"
                                        target="_blank"
                                        className="instagram"
                                        aria-label="Kunjungi halaman Instagram Vicentra"
                                    >
                                        <FaInstagramSquare className="text-white text-xl font-semibold" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@galeryvicentra"
                                        target="_blank"
                                        className="youtube"
                                        aria-label="Kunjungi kanal YouTube Galery Vicentra"
                                    >
                                        <FaYoutube className="text-white text-xl font-semibold" />
                                    </a>
                                </div>
                            </div>
                            <div className="relative mt-[1rem]">
                                <form action="/product/search" method="GET">
                                    <input
                                        type="text"
                                        name="q"
                                        placeholder="Cari produk vicentra..."
                                        className="w-full py-2 px-2 focus:outline-none rounded-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="w-10 h-8 flex justify-center items-center bg-vicentra-blue absolute top-1/2 right-0 transform -translate-y-1/2 rounded-sm mr-1"
                                        aria-label="Cari"
                                    >
                                        <FaSearch className="text-white text-sm font-semibold" />
                                    </button>
                                </form>
                            </div>
                            <div className="flex justify-between items-end mt-[1rem]">
                                <Link href="/">
                                    <img
                                        src={VicentraLogoOutline}
                                        alt="vicentra logo black"
                                        className="h-[2.5rem]"
                                    />
                                </Link>
                                {!toggleMobileMenu ? (
                                    <IoMenu
                                        className="text-white text-3xl hover:cursor-pointer"
                                        onClick={() => {
                                            setToggleMobileMenu(
                                                !toggleMobileMenu
                                            );
                                        }}
                                    />
                                ) : (
                                    <HiMiniXMark
                                        className="text-white text-3xl hover:cursor-pointer"
                                        onClick={() => {
                                            setToggleMobileMenu(
                                                !toggleMobileMenu
                                            );
                                        }}
                                    />
                                )}
                            </div>
                            <div
                                className={`${
                                    toggleMobileMenu ? "block" : "hidden"
                                } bg-white border rounded-md p-4 mt-[1rem] absolute left-0 right-0 bottom-[-17rem] shadow-md z-[999]`}
                            >
                                <div className="flex flex-col gap-[0.5rem]">
                                    <Link
                                        href="/"
                                        className="beranda text-sm font-medium text-gray-800 capitalize"
                                    >
                                        beranda
                                    </Link>
                                    <hr />
                                    <div
                                        className="text-sm font-medium text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer relative"
                                        onClick={toggleSubMenuCategoryPost}
                                    >
                                        blog
                                        <FaCaretDown className="text-vicentra-yellow text-xl" />
                                        <ul
                                            className={`flex flex-col items-start space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                                isSubMenuCategoryPostOpen
                                                    ? "block"
                                                    : "hidden"
                                            }`}
                                        >
                                            {categoryPost.map(
                                                (category, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={`/blog/${category.slug}`}
                                                            className="text-sm text-gray-800"
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <hr />
                                    <Link
                                        href="/terms-and-conditions"
                                        className="layanan_dan_perbaikan text-sm font-medium text-gray-800 capitalize"
                                    >
                                        layanan dan perbaikan
                                    </Link>
                                    <hr />
                                    <Link
                                        href="/about-us"
                                        className="tentang_kami text-sm font-medium text-gray-800 capitalize"
                                    >
                                        tentang kami
                                    </Link>
                                    <hr />
                                </div>
                                <div className="flex flex-col gap-[0.5rem] justify-start mt-2">
                                    {subMenuProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="main_category text-sm text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer border-b pb-2 relative"
                                            onClick={(e) => {
                                                toggleSubMenuProduct(
                                                    e,
                                                    product.name
                                                );
                                            }}
                                        >
                                            {product.name}
                                            <FaCaretDown className="text-vicentra-yellow text-xl" />
                                            <ul
                                                className={`space-y-2 bg-white min-w-[12rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                                    product.isOpen
                                                        ? "block"
                                                        : "hidden"
                                                } z-50`}
                                            >
                                                {product.subMenu.map(
                                                    (subMenu) => {
                                                        if (
                                                            subMenu.subSubMenu
                                                                .length > 0
                                                        ) {
                                                            return (
                                                                <li
                                                                    key={
                                                                        subMenu.id
                                                                    }
                                                                >
                                                                    <div
                                                                        className="sub_category w-full flex justify-between text-sm text-gray-800 capitalize gap-1 hover:cursor-pointer relative"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            toogleSubSubMenuCategory(
                                                                                e,
                                                                                product.name,
                                                                                subMenu.name
                                                                            );
                                                                        }}
                                                                    >
                                                                        {
                                                                            subMenu.name
                                                                        }
                                                                        <FaCaretDown className="text-vicentra-yellow text-xl" />
                                                                        <ul
                                                                            className={`space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-[9rem] top-[1rem] shadow-md z-50 ${
                                                                                subMenu.isSubSubMenuOpen
                                                                                    ? "block"
                                                                                    : "hidden"
                                                                            }`}
                                                                        >
                                                                            {subMenu.subSubMenu.map(
                                                                                (
                                                                                    subSubMenu
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            subSubMenu.id
                                                                                        }
                                                                                        className="flex justify-start border-b border-gray-200 py-1"
                                                                                    >
                                                                                        <Link
                                                                                            href={`/product/${product.slug}/${subMenu.slug}/${subSubMenu.slug}`}
                                                                                            className="text-sm text-gray-800"
                                                                                        >
                                                                                            {
                                                                                                subSubMenu.name
                                                                                            }
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            );
                                                        } else {
                                                            return (
                                                                <li
                                                                    key={
                                                                        subMenu.id
                                                                    }
                                                                    className="flex justify-start"
                                                                >
                                                                    <Link
                                                                        href="/"
                                                                        className="text-sm text-gray-800 capitalize"
                                                                    >
                                                                        {
                                                                            subMenu.name
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            );
                                                        }
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* MOBILE HEADER */}
                {/* HEADER */}

                {/* PAGES CONTENT */}
                <div className="lg:w-[80vw] mx-[1rem] lg:mx-auto my-[3.125rem]">
                    {children}
                </div>
                {/* PAGES CONTENT */}

                {/* FOOTER */}
                <footer className="bg-vicentra-black">
                    <div className="lg:w-[80vw] mx-[1rem] lg:mx-auto py-[2rem]">
                        <img
                            src={VicentraLogoWhite}
                            alt="vicentra logo white"
                            className="h-[3.75rem]"
                        />
                        <div className="grid lg:grid-cols-3 gap-[2rem] lg:gap-[4rem] mt-[1.25rem]">
                            <div>
                                <div>
                                    <h1 className="text-white font-semibold">
                                        Tentang Kami
                                    </h1>
                                    <p className="text-white font-normal text-sm mt-[1.25rem]">
                                        Vicentra Indonesia adalah perusahaan
                                        distributor/supplier yang menjual
                                        berbagai mesin dan perlengkapan usaha
                                        percetakan dengan kualitas terbaik.
                                    </p>
                                </div>
                                <div className="mt-[1.25rem]">
                                    <h1 className="text-white font-semibold">
                                        Kunjungi Kami Di
                                    </h1>
                                    <p className="text-white font-normal text-sm mt-[1.25rem]">
                                        Jl. Rungkut Asri Utara XIX No.93, Kali
                                        Rungkut, Kec. Rungkut, Kota SBY, Jawa
                                        Timur 60293
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white font-semibold">
                                    Informasi
                                </h1>
                                <ul className="space-y-2 mt-[1.25rem]">
                                    <li>
                                        <Link
                                            href="/"
                                            className="beranda text-white capitalize"
                                        >
                                            beranda
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/terms-and-conditions"
                                            className="layanan_dan_perbaikan text-white capitalize"
                                        >
                                            layanan dan perbaikan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about-us"
                                            className="tentang_kami text-white capitalize"
                                        >
                                            tentang kami
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-white font-semibold">
                                        Hubungi Kami
                                    </h1>
                                    <div className="mt-[1.25rem]">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=6281232548368"
                                            target="_blank"
                                            className="flex items-center gap-1"
                                        >
                                            <FaWhatsappSquare className="text-white text-xl" />
                                            <span className="text-white">
                                                081232548368
                                            </span>
                                        </a>
                                        <a
                                            href="mailto:info@vicentra.co.id"
                                            target="_blank"
                                            className="flex items-center gap-1"
                                        >
                                            <MdEmail className="text-white text-xl" />
                                            <span className="text-white">
                                                info@vicentra.co.id
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-[1.25rem]">
                                    <h1 className="text-white font-semibold">
                                        Social Media
                                    </h1>
                                    <div className="flex items-center gap-1 mt-[1.25rem]">
                                        <a
                                            href="https://www.facebook.com/vicentra"
                                            target="_blank"
                                            className="facebook w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md"
                                            aria-label="Kunjungi halaman Facebook Vicentra"
                                        >
                                            <FaFacebook className="text-white" />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/vicentra.co.id"
                                            target="_blank"
                                            className="instagram w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md"
                                            aria-label="Kunjungi halaman Instagram Vicentra"
                                        >
                                            <FaInstagramSquare className="text-white" />
                                        </a>
                                        <a
                                            href="https://www.youtube.com/@galeryvicentra"
                                            target="_blank"
                                            className="youtube w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md"
                                            aria-label="Kunjungi channel YouTube Galery Vicentra"
                                        >
                                            <FaYoutube className="text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-white text-center text-sm mt-[3.125rem]">
                            Vicentra © {new Date().getFullYear()} Created By
                            Vicentra-dev. Supplier Mesin dan Bahan Percetakan
                            Surabaya.
                        </p>
                    </div>
                </footer>
                {/* FOOTER */}
            </main>
        </>
    );
}
