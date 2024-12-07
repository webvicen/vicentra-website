import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    FaInfoCircle,
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

import VicentraLogoBlack from "../assets/images/logo-vicentra-black.png";
import VicentraLogoWhite from "../assets/images/logo-vicentra-white.png";
import VicentraLogoOutline from "../assets/images/logo-vicentra-outline.png";

export default function PagesLayout({ children }) {
    const [isSubMenuCategoryOpen, setIsSubMenuCategoryOpen] = useState(false);
    const [subMenuProducts, setSubMenuProducts] = useState([
        {
            id: 1,
            isOpen: false,
            name: "mesin",
            subMenu: [
                {
                    id: 1,
                    name: "mesin 1",
                    isSubSubMenuOpen: false,
                    subSubMenu: [
                        {
                            id: 1,
                            name: "sub mesin 1",
                        },
                        {
                            id: 2,
                            name: "sub mesin 2",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "mesin 2",
                    isSubSubMenuOpen: false,
                    subSubMenu: [],
                },
            ],
        },
        {
            id: 2,
            isOpen: false,
            name: "bahan",
            subMenu: [
                {
                    id: 1,
                    name: "bahan 1",
                    isSubSubMenuOpen: false,
                    subSubMenu: [],
                },
                {
                    id: 2,
                    name: "bahan 2",
                    isSubSubMenuOpen: false,
                    subSubMenu: [
                        {
                            id: 1,
                            name: "sub bahan 1",
                        },
                        {
                            id: 2,
                            name: "sub bahan 2",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "bahan 3",
                    isSubSubMenuOpen: false,
                    subSubMenu: [
                        {
                            id: 1,
                            name: "sub bahan 1",
                        },
                        {
                            id: 2,
                            name: "sub bahan 2",
                        },
                        {
                            id: 3,
                            name: "sub bahan 3",
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            isOpen: false,
            name: "sparepart",
            subMenu: [
                {
                    id: 1,
                    name: "sparepart 1",
                    isSubSubMenuOpen: false,
                    subSubMenu: [],
                },
                {
                    id: 2,
                    name: "sparepart 2",
                    isSubSubMenuOpen: false,
                    subSubMenu: [],
                },
                {
                    id: 3,
                    name: "sparepart 3",
                    isSubSubMenuOpen: false,
                    subSubMenu: [],
                },
                {
                    id: 4,
                    name: "sparepart 4",
                    isSubSubMenuOpen: false,
                    subSubMenu: [],
                },
            ],
        },
    ]);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const toggleSubMenuCategory = () => {
        setIsSubMenuCategoryOpen(!isSubMenuCategoryOpen);
    };

    const toogleSubSubMenuCategory = (productName, SubSubMenuName) => {
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
                            return subMenu;
                        }),
                    };
                }
                return product;
            })
        );
        console.log(productName, SubSubMenuName);
    };

    const toggleSubMenuProduct = (name) => {
        setSubMenuProducts(
            subMenuProducts.map((product) => {
                if (product.name === name) {
                    return {
                        ...product,
                        isOpen: !product.isOpen,
                    };
                }
                return product;
            })
        );
        console.log(name);
    };

    return (
        <main>
            {/* HEADER */}
            {/* DESKTOP HEADER */}
            <header className="hidden lg:block shadow pb-[1rem]">
                <div className="bg-vicentra-blue">
                    <div className="w-[80vw] mx-auto py-[1rem]">
                        <div className="flex items-center gap-2">
                            <Link
                                href="/help"
                                className="flex items-center gap-2 text-sm text-white capitalize"
                            >
                                <FaInfoCircle className="text-xl font-semibold" />
                                bantuan
                            </Link>
                            <svg
                                width={2}
                                height={14}
                                viewBox="0 0 2 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L1 13"
                                    stroke="white"
                                    strokeOpacity="0.5"
                                    strokeWidth="0.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="flex items-center gap-2">
                                <p className="text-sm capitalize text-white">
                                    ikuti kami di
                                </p>
                                <div className="flex items-center gap-1">
                                    <a href="#">
                                        <FaFacebook className="text-white text-xl font-semibold" />
                                    </a>
                                    <a href="#">
                                        <FaInstagramSquare className="text-white text-xl font-semibold" />
                                    </a>
                                    <a href="#">
                                        <FaYoutube className="text-white text-xl font-semibold" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[1rem] flex justify-between items-end">
                            <div className="flex items-center gap-[1.875rem]">
                                <Link
                                    href="/"
                                    className="text-base text-white capitalize"
                                >
                                    beranda
                                </Link>
                                <button
                                    type="button"
                                    className="text-base text-white capitalize flex items-center gap-1 relative"
                                    onClick={toggleSubMenuCategory}
                                >
                                    blog
                                    <FaCaretDown className="text-vicentra-yellow text-xl" />
                                    <ul
                                        className={`flex flex-col items-start space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                            isSubMenuCategoryOpen
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    >
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-sm text-gray-800"
                                            >
                                                kegiatan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-sm text-gray-800"
                                            >
                                                peluang usaha
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-sm text-gray-800"
                                            >
                                                info
                                            </Link>
                                        </li>
                                    </ul>
                                </button>
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-base text-white capitalize"
                                >
                                    layanan dan perbaikan
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="text-base text-white capitalize"
                                >
                                    tentang kami
                                </Link>
                            </div>
                            <div className="bg-white relative rounded-md">
                                <input
                                    type="text"
                                    placeholder="Cari produk vicentra..."
                                    className="w-[20rem] py-2 px-2 focus:outline-none rounded-sm"
                                />
                                <button className="w-10 h-8 flex justify-center items-center bg-vicentra-blue absolute top-1/2 right-0 transform -translate-y-1/2 rounded-sm mr-1">
                                    <FaSearch className="text-white text-sm font-semibold" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80vw] mx-auto mt-[2.5rem]">
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
                                <button
                                    key={product.id}
                                    type="button"
                                    className="text-base text-gray-800 capitalize flex items-center gap-1 relative"
                                >
                                    {product.name}
                                    <FaCaretDown
                                        className="text-vicentra-yellow text-xl"
                                        onClick={() => {
                                            toggleSubMenuProduct(product.name);
                                        }}
                                    />
                                    <ul
                                        className={`space-y-2 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                            product.isOpen ? "block" : "hidden"
                                        } z-50`}
                                    >
                                        {product.subMenu.map((subMenu) => {
                                            if (subMenu.subSubMenu.length > 0) {
                                                return (
                                                    <li key={subMenu.id}>
                                                        <button
                                                            type="button"
                                                            className="text-sm text-gray-800 capitalize flex items-center gap-1 relative"
                                                        >
                                                            {subMenu.name}
                                                            <FaCaretDown
                                                                className="text-vicentra-yellow text-xl"
                                                                onClick={() => {
                                                                    toogleSubSubMenuCategory(
                                                                        product.name,
                                                                        subMenu.name
                                                                    );
                                                                }}
                                                            />
                                                            <ul
                                                                className={`space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute right-[-10rem] top-[1rem] shadow-md z-50 ${
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
                                                                            className="flex justify-start"
                                                                        >
                                                                            <Link
                                                                                href="/"
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
                                                        </button>
                                                    </li>
                                                );
                                            } else {
                                                return (
                                                    <li
                                                        key={subMenu.id}
                                                        className="flex justify-start"
                                                    >
                                                        <Link
                                                            href="/"
                                                            className="text-sm text-gray-800 capitalize"
                                                        >
                                                            {subMenu.name}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </button>
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
                            <Link
                                href="/help"
                                className="flex items-center gap-2 text-sm text-white capitalize"
                            >
                                <FaInfoCircle className="text-xl font-semibold" />
                                bantuan
                            </Link>
                            <svg
                                width={2}
                                height={14}
                                viewBox="0 0 2 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L1 13"
                                    stroke="white"
                                    strokeOpacity="0.5"
                                    strokeWidth="0.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="flex items-center gap-2">
                                <p className="text-sm capitalize text-white">
                                    ikuti kami di
                                </p>
                                <div className="flex items-center gap-1">
                                    <a href="#">
                                        <FaFacebook className="text-white text-xl font-semibold" />
                                    </a>
                                    <a href="#">
                                        <FaInstagramSquare className="text-white text-xl font-semibold" />
                                    </a>
                                    <a href="#">
                                        <FaYoutube className="text-white text-xl font-semibold" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-[1rem]">
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
                                        setToggleMobileMenu(!toggleMobileMenu);
                                    }}
                                />
                            ) : (
                                <HiMiniXMark
                                    className="text-white text-3xl hover:cursor-pointer"
                                    onClick={() => {
                                        setToggleMobileMenu(!toggleMobileMenu);
                                    }}
                                />
                            )}
                        </div>
                        <div
                            className={`${
                                toggleMobileMenu ? "block" : "hidden"
                            } bg-white border rounded-md p-4 mt-[1rem] absolute left-0 right-0 bottom-[-16.5rem] shadow-md`}
                        >
                            <div className="flex flex-col gap-[0.5rem]">
                                <Link
                                    href="/"
                                    className="text-sm font-medium text-gray-800 capitalize"
                                >
                                    beranda
                                </Link>
                                <hr />
                                <button
                                    type="button"
                                    className="text-sm font-medium text-gray-800 capitalize flex items-center gap-1 relative"
                                    onClick={toggleSubMenuCategory}
                                >
                                    blog
                                    <FaCaretDown className="text-vicentra-yellow text-xl" />
                                    <ul
                                        className={`flex flex-col items-start space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
                                            isSubMenuCategoryOpen
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    >
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-sm text-gray-800"
                                            >
                                                kegiatan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-sm text-gray-800"
                                            >
                                                peluang usaha
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-sm text-gray-800"
                                            >
                                                info
                                            </Link>
                                        </li>
                                    </ul>
                                </button>
                                <hr />
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-sm font-medium text-gray-800 capitalize"
                                >
                                    layanan dan perbaikan
                                </Link>
                                <hr />
                                <Link
                                    href="/about-us"
                                    className="text-sm font-medium text-gray-800 capitalize"
                                >
                                    tentang kami
                                </Link>
                                <hr />
                            </div>
                            <div className="flex flex-col gap-[0.5rem] justify-start mt-2">
                                {subMenuProducts.map((product) => (
                                    <div key={product.id}>
                                        <button
                                            type="button"
                                            className="w-full text-sm text-gray-800 capitalize flex items-center gap-1 relative"
                                        >
                                            {product.name}
                                            <FaCaretDown
                                                className="text-vicentra-yellow text-xl"
                                                onClick={() => {
                                                    toggleSubMenuProduct(
                                                        product.name
                                                    );
                                                }}
                                            />
                                            <ul
                                                className={`space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${
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
                                                                    <button
                                                                        type="button"
                                                                        className="text-sm text-gray-800 capitalize flex items-center gap-1 relative"
                                                                    >
                                                                        {
                                                                            subMenu.name
                                                                        }
                                                                        <FaCaretDown
                                                                            className="text-vicentra-yellow text-xl"
                                                                            onClick={() => {
                                                                                toogleSubSubMenuCategory(
                                                                                    product.name,
                                                                                    subMenu.name
                                                                                );
                                                                            }}
                                                                        />
                                                                        <ul
                                                                            className={`space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute right-[-10rem] top-[1rem] shadow-md z-50 ${
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
                                                                                        className="flex justify-start"
                                                                                    >
                                                                                        <Link
                                                                                            href="/"
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
                                                                    </button>
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
                                        </button>
                                        <hr className="mt-1" />
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
            <div className="lg:w-[80vw] mx-[1rem] lg:mx-auto my-[3.125rem] lg:my-[6.25rem]">
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
                                    distributor/supplier yang menjual berbagai
                                    mesin dan perlengkapan usaha percetakan
                                    dengan kualitas terbaik.
                                </p>
                            </div>
                            <div className="mt-[1.25rem]">
                                <h1 className="text-white font-semibold">
                                    Kunjungi Kami Di
                                </h1>
                                <p className="text-white font-normal text-sm mt-[1.25rem]">
                                    Jl. Rungkut Asri Utara XIX No.93, Kali
                                    Rungkut, Kec. Rungkut, Kota SBY, Jawa Timur
                                    60293
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
                                        className="text-white capitalize"
                                    >
                                        beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="text-white capitalize"
                                    >
                                        blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terms-and-conditions"
                                        className="text-white capitalize"
                                    >
                                        layanan dan perbaikan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about-us"
                                        className="text-white capitalize"
                                    >
                                        tentang kami
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/help"
                                        className="text-white capitalize"
                                    >
                                        bantuan
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
                                    <div className="flex items-center gap-1">
                                        <FaWhatsappSquare className="text-white text-xl" />
                                        <span className="text-white">
                                            083158793334
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdEmail className="text-white text-xl" />
                                        <span className="text-white">
                                            info@vicentra.co.id
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[1.25rem]">
                                <h1 className="text-white font-semibold">
                                    Social Media
                                </h1>
                                <div className="flex items-center gap-1 mt-[1.25rem]">
                                    <a
                                        href="#"
                                        className="w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md"
                                    >
                                        <FaFacebook className="text-white" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md"
                                    >
                                        <FaInstagramSquare className="text-white" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md"
                                    >
                                        <FaYoutube className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-white text-center text-sm mt-[3.125rem]">
                        Vicentra © 2024 Created By Vicentra-dev. Supplier Mesin
                        dan Bahan Percetakan Surabaya.
                    </p>
                </div>
            </footer>
            {/* FOOTER */}
        </main>
    );
}
