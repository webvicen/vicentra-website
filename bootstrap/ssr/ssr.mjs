import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { usePage, Head, Link, createInertiaApp } from "@inertiajs/react";
import { useState, useEffect, lazy, Suspense, useRef } from "react";
import { FaCaretDown, FaFacebook, FaInstagramSquare, FaYoutube, FaSearch, FaWhatsappSquare, FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdAutorenew, MdOutlineSecurity, MdAssignmentInd, MdOutlineLocalAirport } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import Accordion from "@material-tailwind/react/components/Accordion/index.js";
import AccordionHeader from "@material-tailwind/react/components/Accordion/AccordionHeader.js";
import AccordionBody from "@material-tailwind/react/components/Accordion/AccordionBody.js";
import { IoMdBuild } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import emailjs from "@emailjs/browser";
import ReactPlayer$1 from "react-player/lazy/index.js";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
const swiper = "";
const pagination = "";
const autoplay = "";
const custom = "";
const VicentraLogoBlack = "http://127.0.0.1:8000/build/assets/logo-vicentra-black-35a77328.webp";
const VicentraLogoWhite = "http://127.0.0.1:8000/build/assets/logo-vicentra-white-79c1ce97.webp";
const VicentraLogoOutline = "http://127.0.0.1:8000/build/assets/logo-vicentra-outline-d96dfc44.webp";
function PagesLayout({ children }) {
  const { url } = usePage();
  const { keywords, categoryPost, categoryProduct } = usePage().props;
  const [isSubMenuCategoryPostOpen, setIsSubMenuCategoryPostOpen] = useState(false);
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
                  isSubSubMenuOpen: !subMenu.isSubSubMenuOpen
                };
              }
              return {
                ...subMenu,
                isSubSubMenuOpen: false
              };
            })
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
                isSubSubMenuOpen: false
              };
            })
          };
        }
        return {
          ...product,
          isOpen: false
        };
      })
    );
  };
  useEffect(() => {
    setSubMenuProducts(categoryProduct);
  }, [url]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("header", { className: "hidden lg:block shadow pb-[1rem]", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-vicentra-blue", children: /* @__PURE__ */ jsx("div", { className: "w-[80vw] mx-auto py-[1rem]", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[1.875rem]", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                className: "beranda text-base text-white capitalize",
                children: "beranda"
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "text-base text-white capitalize flex items-center gap-1 hover:cursor-pointer relative",
                onClick: toggleSubMenuCategoryPost,
                children: [
                  "blog",
                  /* @__PURE__ */ jsx(FaCaretDown, { className: "text-vicentra-yellow text-xl" }),
                  /* @__PURE__ */ jsx(
                    "ul",
                    {
                      className: `flex flex-col items-start space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${isSubMenuCategoryPostOpen ? "block" : "hidden"}`,
                      children: categoryPost == null ? void 0 : categoryPost.map(
                        (category, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                          Link,
                          {
                            href: `/blog/${category.slug}`,
                            className: "text-sm text-gray-800",
                            children: category.name
                          }
                        ) }, index)
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/terms-and-conditions",
                className: "layanan_dan_perbaikan text-base text-white capitalize",
                children: "layanan dan perbaikan"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/about-us",
                className: "tentang_kami text-base text-white capitalize",
                children: "tentang kami"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-[1.875rem]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm capitalize text-white", children: "ikuti kami di" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.facebook.com/vicentra",
                    target: "_blank",
                    className: "facebook",
                    "aria-label": "Kunjungi halaman Facebook Vicentra",
                    children: /* @__PURE__ */ jsx(FaFacebook, { className: "text-white text-xl font-semibold" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.instagram.com/vicentra.co.id",
                    target: "_blank",
                    className: "instagram",
                    "aria-label": "Kunjungi halaman Instagram Vicentra",
                    children: /* @__PURE__ */ jsx(FaInstagramSquare, { className: "text-white text-xl font-semibold" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.youtube.com/@galeryvicentra",
                    target: "_blank",
                    className: "youtube",
                    "aria-label": "Kunjungi kanal YouTube Galery Vicentra",
                    children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-white text-xl font-semibold" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-white relative rounded-md", children: /* @__PURE__ */ jsxs(
              "form",
              {
                action: "/product/search",
                method: "GET",
                children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "q",
                      placeholder: "Cari produk vicentra...",
                      className: "w-[20rem] py-2 px-2 focus:outline-none rounded-sm"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      className: "w-10 h-8 flex justify-center items-center bg-vicentra-blue absolute top-1/2 right-0 transform -translate-y-1/2 rounded-sm mr-1",
                      "aria-label": "Cari",
                      children: /* @__PURE__ */ jsx(FaSearch, { className: "text-white text-sm font-semibold" })
                    }
                  )
                ]
              }
            ) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "w-[80vw] mx-auto mt-[1rem]", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: VicentraLogoBlack,
              alt: "vicentra logo black",
              className: "h-[3.75rem]"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-start gap-[1.875rem]", children: subMenuProducts.map((product) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "main_category text-base text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer relative",
              onClick: (e) => {
                toggleSubMenuProduct(
                  e,
                  product.name
                );
              },
              children: [
                product.name,
                /* @__PURE__ */ jsx(FaCaretDown, { className: "text-vicentra-yellow text-xl" }),
                /* @__PURE__ */ jsx(
                  "ul",
                  {
                    className: `space-y-2 bg-white min-w-[12rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${product.isOpen ? "block" : "hidden"} z-50`,
                    children: product.subMenu.map((subMenu) => {
                      if (subMenu.subSubMenu.length > 0) {
                        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: "sub_category w-full flex justify-between text-sm text-gray-800 capitalize gap-1 hover:cursor-pointer relative",
                            onClick: (e) => {
                              toogleSubSubMenuCategory(
                                e,
                                product.name,
                                subMenu.name
                              );
                            },
                            children: [
                              subMenu.name,
                              /* @__PURE__ */ jsx(FaCaretDown, { className: "text-vicentra-yellow text-xl" }),
                              /* @__PURE__ */ jsx(
                                "ul",
                                {
                                  className: `space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-[9rem] top-[1rem] shadow-md z-50 ${subMenu.isSubSubMenuOpen ? "block" : "hidden"}`,
                                  children: subMenu.subSubMenu.map(
                                    (subSubMenu) => /* @__PURE__ */ jsx(
                                      "li",
                                      {
                                        className: "flex justify-start border-b border-gray-200 py-1",
                                        children: /* @__PURE__ */ jsx(
                                          Link,
                                          {
                                            href: `/product/${product.slug}/${subMenu.slug}/${subSubMenu.slug}`,
                                            className: "text-sm text-gray-800",
                                            children: subSubMenu.name
                                          }
                                        )
                                      },
                                      subSubMenu.id
                                    )
                                  )
                                }
                              )
                            ]
                          }
                        ) }, subMenu.id);
                      } else {
                        return /* @__PURE__ */ jsx(
                          "li",
                          {
                            className: "flex justify-start",
                            children: /* @__PURE__ */ jsx(
                              Link,
                              {
                                href: `/product/${product.slug}/${subMenu.slug}`,
                                className: "text-sm text-gray-800 capitalize",
                                children: subMenu.name
                              }
                            )
                          },
                          subMenu.id
                        );
                      }
                    })
                  }
                )
              ]
            },
            product.id
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: "lg:hidden", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-blue", children: /* @__PURE__ */ jsxs("div", { className: "lg:w-[80vw] mx-[1rem] lg:mx-auto py-[1rem] relative z-50", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm capitalize text-white", children: "ikuti kami di" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.facebook.com/vicentra",
                target: "_blank",
                className: "facebook",
                "aria-label": "Kunjungi halaman Facebook Vicentra",
                children: /* @__PURE__ */ jsx(FaFacebook, { className: "text-white text-xl font-semibold" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/vicentra.co.id",
                target: "_blank",
                className: "instagram",
                "aria-label": "Kunjungi halaman Instagram Vicentra",
                children: /* @__PURE__ */ jsx(FaInstagramSquare, { className: "text-white text-xl font-semibold" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.youtube.com/@galeryvicentra",
                target: "_blank",
                className: "youtube",
                "aria-label": "Kunjungi kanal YouTube Galery Vicentra",
                children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-white text-xl font-semibold" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative mt-[1rem]", children: /* @__PURE__ */ jsxs("form", { action: "/product/search", method: "GET", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "q",
              placeholder: "Cari produk vicentra...",
              className: "w-full py-2 px-2 focus:outline-none rounded-sm"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-10 h-8 flex justify-center items-center bg-vicentra-blue absolute top-1/2 right-0 transform -translate-y-1/2 rounded-sm mr-1",
              "aria-label": "Cari",
              children: /* @__PURE__ */ jsx(FaSearch, { className: "text-white text-sm font-semibold" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mt-[1rem]", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: VicentraLogoOutline,
              alt: "vicentra logo black",
              className: "h-[2.5rem]"
            }
          ) }),
          !toggleMobileMenu ? /* @__PURE__ */ jsx(
            IoMenu,
            {
              className: "text-white text-3xl hover:cursor-pointer",
              onClick: () => {
                setToggleMobileMenu(
                  !toggleMobileMenu
                );
              }
            }
          ) : /* @__PURE__ */ jsx(
            HiMiniXMark,
            {
              className: "text-white text-3xl hover:cursor-pointer",
              onClick: () => {
                setToggleMobileMenu(
                  !toggleMobileMenu
                );
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${toggleMobileMenu ? "block" : "hidden"} bg-white border rounded-md p-4 mt-[1rem] absolute left-0 right-0 bottom-[-17rem] shadow-md`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[0.5rem]", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/",
                    className: "beranda text-sm font-medium text-gray-800 capitalize",
                    children: "beranda"
                  }
                ),
                /* @__PURE__ */ jsx("hr", {}),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "text-sm font-medium text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer relative",
                    onClick: toggleSubMenuCategoryPost,
                    children: [
                      "blog",
                      /* @__PURE__ */ jsx(FaCaretDown, { className: "text-vicentra-yellow text-xl" }),
                      /* @__PURE__ */ jsx(
                        "ul",
                        {
                          className: `flex flex-col items-start space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${isSubMenuCategoryPostOpen ? "block" : "hidden"}`,
                          children: categoryPost.map(
                            (category, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                              Link,
                              {
                                href: `/blog/${category.slug}`,
                                className: "text-sm text-gray-800",
                                children: category.name
                              }
                            ) }, index)
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("hr", {}),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/terms-and-conditions",
                    className: "layanan_dan_perbaikan text-sm font-medium text-gray-800 capitalize",
                    children: "layanan dan perbaikan"
                  }
                ),
                /* @__PURE__ */ jsx("hr", {}),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/about-us",
                    className: "tentang_kami text-sm font-medium text-gray-800 capitalize",
                    children: "tentang kami"
                  }
                ),
                /* @__PURE__ */ jsx("hr", {})
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[0.5rem] justify-start mt-2", children: subMenuProducts.map((product) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "main_category text-sm text-gray-800 capitalize flex items-center gap-1 hover:cursor-pointer border-b pb-2 relative",
                  onClick: (e) => {
                    toggleSubMenuProduct(
                      e,
                      product.name
                    );
                  },
                  children: [
                    product.name,
                    /* @__PURE__ */ jsx(FaCaretDown, { className: "text-vicentra-yellow text-xl" }),
                    /* @__PURE__ */ jsx(
                      "ul",
                      {
                        className: `space-y-2 bg-white min-w-[12rem] px-2 py-2 rounded-md absolute left-0 top-[2rem] shadow-md ${product.isOpen ? "block" : "hidden"} z-50`,
                        children: product.subMenu.map(
                          (subMenu) => {
                            if (subMenu.subSubMenu.length > 0) {
                              return /* @__PURE__ */ jsx(
                                "li",
                                {
                                  children: /* @__PURE__ */ jsxs(
                                    "div",
                                    {
                                      className: "sub_category w-full flex justify-between text-sm text-gray-800 capitalize gap-1 hover:cursor-pointer relative",
                                      onClick: (e) => {
                                        toogleSubSubMenuCategory(
                                          e,
                                          product.name,
                                          subMenu.name
                                        );
                                      },
                                      children: [
                                        subMenu.name,
                                        /* @__PURE__ */ jsx(FaCaretDown, { className: "text-vicentra-yellow text-xl" }),
                                        /* @__PURE__ */ jsx(
                                          "ul",
                                          {
                                            className: `space-y-1 bg-white min-w-[10rem] px-2 py-2 rounded-md absolute left-[9rem] top-[1rem] shadow-md z-50 ${subMenu.isSubSubMenuOpen ? "block" : "hidden"}`,
                                            children: subMenu.subSubMenu.map(
                                              (subSubMenu) => /* @__PURE__ */ jsx(
                                                "li",
                                                {
                                                  className: "flex justify-start border-b border-gray-200 py-1",
                                                  children: /* @__PURE__ */ jsx(
                                                    Link,
                                                    {
                                                      href: `/product/${product.slug}/${subMenu.slug}/${subSubMenu.slug}`,
                                                      className: "text-sm text-gray-800",
                                                      children: subSubMenu.name
                                                    }
                                                  )
                                                },
                                                subSubMenu.id
                                              )
                                            )
                                          }
                                        )
                                      ]
                                    }
                                  )
                                },
                                subMenu.id
                              );
                            } else {
                              return /* @__PURE__ */ jsx(
                                "li",
                                {
                                  className: "flex justify-start",
                                  children: /* @__PURE__ */ jsx(
                                    Link,
                                    {
                                      href: "/",
                                      className: "text-sm text-gray-800 capitalize",
                                      children: subMenu.name
                                    }
                                  )
                                },
                                subMenu.id
                              );
                            }
                          }
                        )
                      }
                    )
                  ]
                },
                product.id
              )) })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-[80vw] mx-[1rem] lg:mx-auto my-[3.125rem]", children }),
      /* @__PURE__ */ jsx("footer", { className: "bg-vicentra-black", children: /* @__PURE__ */ jsxs("div", { className: "lg:w-[80vw] mx-[1rem] lg:mx-auto py-[2rem]", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: VicentraLogoWhite,
            alt: "vicentra logo white",
            className: "h-[3.75rem]"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-[2rem] lg:gap-[4rem] mt-[1.25rem]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold", children: "Tentang Kami" }),
              /* @__PURE__ */ jsx("p", { className: "text-white font-normal text-sm mt-[1.25rem]", children: "Vicentra Indonesia adalah perusahaan distributor/supplier yang menjual berbagai mesin dan perlengkapan usaha percetakan dengan kualitas terbaik." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold", children: "Kunjungi Kami Di" }),
              /* @__PURE__ */ jsx("p", { className: "text-white font-normal text-sm mt-[1.25rem]", children: "Jl. Rungkut Asri Utara XIX No.93, Kali Rungkut, Kec. Rungkut, Kota SBY, Jawa Timur 60293" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold", children: "Informasi" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 mt-[1.25rem]", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/",
                  className: "beranda text-white capitalize",
                  children: "beranda"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/terms-and-conditions",
                  className: "layanan_dan_perbaikan text-white capitalize",
                  children: "layanan dan perbaikan"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/about-us",
                  className: "tentang_kami text-white capitalize",
                  children: "tentang kami"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold", children: "Hubungi Kami" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://api.whatsapp.com/send?phone=6281232548368",
                    target: "_blank",
                    className: "flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsx(FaWhatsappSquare, { className: "text-white text-xl" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "081232548368" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "mailto:info@vicentra.co.id",
                    target: "_blank",
                    className: "flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsx(MdEmail, { className: "text-white text-xl" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "info@vicentra.co.id" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold", children: "Social Media" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-[1.25rem]", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.facebook.com/vicentra",
                    target: "_blank",
                    className: "facebook w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md",
                    "aria-label": "Kunjungi halaman Facebook Vicentra",
                    children: /* @__PURE__ */ jsx(FaFacebook, { className: "text-white" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.instagram.com/vicentra.co.id",
                    target: "_blank",
                    className: "instagram w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md",
                    "aria-label": "Kunjungi halaman Instagram Vicentra",
                    children: /* @__PURE__ */ jsx(FaInstagramSquare, { className: "text-white" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.youtube.com/@galeryvicentra",
                    target: "_blank",
                    className: "youtube w-8 h-8 bg-[#111517] flex items-center justify-center rounded-md",
                    "aria-label": "Kunjungi channel YouTube Galery Vicentra",
                    children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-white" })
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-white text-center text-sm mt-[3.125rem]", children: [
          "Vicentra © ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Created By Vicentra-dev. Supplier Mesin dan Bahan Percetakan Surabaya."
        ] })
      ] }) })
    ] })
  ] });
}
const AboutUs = ({ brands }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vicentra - Tentang Kami" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Selamat datang di Vicentra, sumber nomor satu Anda untuk semua kebutuhan percetakan. Kami berdedikasi untuk memberikan Anda produk mesin dan bahan baku percetakan yang terbaik, dengan fokus pada kualitas, dukungan, dan purna jual.Didirikan pada 2012 oleh Fifik Harianto, Vicentra telah menempuh perjalanan jauh dari awal di Tambakrejo Sidoarjo- Jawa Timur. Ketika pertama kali dimulai, semangat Founder Vicentra tentang dunia percetakan, mendorong untuk menyediakan produk percetakan terbaik. Sehingga Vicentra dapat menawarkan Anda produk-produk percetakan dengan layanan edukasi dan purna jual terbaik. Kami sekarang melayani pelanggan di seluruh Indonesia.Kami berharap Anda menikmati produk kami seperti halnya kami senang menawarkannya kepada Anda. Jika Anda memiliki pertanyaan atau komentar, jangan ragu untuk menghubungi kami."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Vicentra - Tentang Kami" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Selamat datang di Vicentra, sumber nomor satu Anda untuk semua kebutuhan percetakan. Kami berdedikasi untuk memberikan Anda produk mesin dan bahan baku percetakan yang terbaik, dengan fokus pada kualitas, dukungan, dan purna jual.Didirikan pada 2012 oleh Fifik Harianto, Vicentra telah menempuh perjalanan jauh dari awal di Tambakrejo Sidoarjo- Jawa Timur. Ketika pertama kali dimulai, semangat Founder Vicentra tentang dunia percetakan, mendorong untuk menyediakan produk percetakan terbaik. Sehingga Vicentra dapat menawarkan Anda produk-produk percetakan dengan layanan edukasi dan purna jual terbaik. Kami sekarang melayani pelanggan di seluruh Indonesia.Kami berharap Anda menikmati produk kami seperti halnya kami senang menawarkannya kepada Anda. Jika Anda memiliki pertanyaan atau komentar, jangan ragu untuk menghubungi kami."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: "https://vicentra.co.id/about-us"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Vicentra - Tentang Kami" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Selamat datang di Vicentra, sumber nomor satu Anda untuk semua kebutuhan percetakan. Kami berdedikasi untuk memberikan Anda produk mesin dan bahan baku percetakan yang terbaik, dengan fokus pada kualitas, dukungan, dan purna jual.Didirikan pada 2012 oleh Fifik Harianto, Vicentra telah menempuh perjalanan jauh dari awal di Tambakrejo Sidoarjo- Jawa Timur. Ketika pertama kali dimulai, semangat Founder Vicentra tentang dunia percetakan, mendorong untuk menyediakan produk percetakan terbaik. Sehingga Vicentra dapat menawarkan Anda produk-produk percetakan dengan layanan edukasi dan purna jual terbaik. Kami sekarang melayani pelanggan di seluruh Indonesia.Kami berharap Anda menikmati produk kami seperti halnya kami senang menawarkannya kepada Anda. Jika Anda memiliki pertanyaan atau komentar, jangan ragu untuk menghubungi kami."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: "https://vicentra.co.id/about-us"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-blue rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "vicentra" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-xl text-center font-semibold text-gray-800 mt-[1.25rem]", children: "Penyedia Kebutuhan Percetakan Terlengkap" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-[80%] mx-auto text-base text-justify text-gray-500 mt-[1.875rem] space-y-4", children: [
        /* @__PURE__ */ jsx("p", { children: "Selamat datang di Vicentra, sumber nomor satu Anda untuk semua kebutuhan percetakan. Kami berdedikasi untuk memberikan Anda produk mesin dan bahan baku percetakan yang terbaik, dengan fokus pada kualitas, dukungan, dan purna jual." }),
        /* @__PURE__ */ jsx("p", { children: "Didirikan pada 2012 oleh Fifik Harianto, Vicentra telah menempuh perjalanan jauh dari awal di Tambakrejo Sidoarjo- Jawa Timur. Ketika pertama kali dimulai, semangat Founder Vicentra tentang dunia percetakan, mendorong untuk menyediakan produk percetakan terbaik. Sehingga Vicentra dapat menawarkan Anda produk-produk percetakan dengan layanan edukasi dan purna jual terbaik. Kami sekarang melayani pelanggan di seluruh Indonesia." }),
        /* @__PURE__ */ jsx("p", { children: "Kami berharap Anda menikmati produk kami seperti halnya kami senang menawarkannya kepada Anda. Jika Anda memiliki pertanyaan atau komentar, jangan ragu untuk menghubungi kami." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-pink rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "brand kami" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Pagination, Autoplay],
            loop: true,
            spaceBetween: 50,
            breakpoints: {
              576: {
                slidesPerView: 1
              },
              1200: {
                slidesPerView: 3
              }
            },
            autoplay: true,
            pagination: {
              el: ".swiper-brand-section-custom-pagination",
              clickable: true
            },
            children: brands.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "w-full h-[12rem] flex justify-center items-center rounded-xl border-2 p-5", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${brand.image}`,
                alt: brand.slug,
                className: "h-[5rem] aspect-[2/1] object-contain"
              }
            ) }) }, index))
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center items-center mt-4", children: /* @__PURE__ */ jsx("div", { className: "swiper-brand-section-custom-pagination w-fit" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-black rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "lokasi kantor kami" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-md overflow-hidden shadow-md mt-[1.25rem]", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.272941841968!2d112.77459137454677!3d-7.323208372015173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb272ef7e481%3A0x9896b82ab16c1a79!2sVICENTRA%20Supplier%20Mesin%20Percetakan%2C%20Suplier%20Bahan%20Percetakan%20%26%20Digital%20Printing!5e0!3m2!1sid!2sid!4v1733371335401!5m2!1sid!2sid",
          allowFullScreen: true,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          className: "w-full h-[20rem] lg:h-[30rem]"
        }
      ) })
    ] })
  ] });
};
AboutUs.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs
}, Symbol.toStringTag, { value: "Module" }));
function TeamCard({ sales }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md overflow-hidden shadow-md", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gray-300 h-[10rem]" }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-base text-center font-semibold text-gray-800", children: "Tim Sales" }),
      /* @__PURE__ */ jsx("h2", { className: "text-sm text-center font-normal text-gray-500 mt-[0.5rem]", children: sales.name })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TeamCard
}, Symbol.toStringTag, { value: "Module" }));
const faq = "";
function Faq({ faqs }) {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return /* @__PURE__ */ jsx(Fragment, { children: faqs.map((faq2, index) => /* @__PURE__ */ jsxs(Accordion, { open: open === index, children: [
    /* @__PURE__ */ jsx(
      AccordionHeader,
      {
        onClick: () => handleOpen(index),
        className: "capitalize text-start text-base border-b pt-4",
        children: faq2.question
      }
    ),
    /* @__PURE__ */ jsx(AccordionBody, { className: "text-sm text-gray-500 pb-0", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "faq_content mt-5",
        dangerouslySetInnerHTML: { __html: faq2.answer }
      }
    ) })
  ] }, index)) });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Faq
}, Symbol.toStringTag, { value: "Module" }));
function Testimonial({ testimonials }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination, Autoplay],
        loop: true,
        spaceBetween: 50,
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          1200: {
            slidesPerView: 3
          }
        },
        autoplay: true,
        pagination: {
          el: ".swiper-testimonial-section-custom-pagination",
          clickable: true
        },
        children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "w-full min-h-[10rem] grid grid-cols-3 gap-2 rounded-xl border-2 p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-vicentra-pink h-[6.5rem] lg:h-[7rem] rounded-md overflow-hidden", children: testimonial.image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${testimonial.image}`,
              alt: testimonial.person,
              className: "w-full h-full"
            }
          ) : null }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-md font-semibold", children: testimonial.person }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-normal mt-2", children: testimonial.content })
          ] })
        ] }) }, index))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center items-center mt-4", children: /* @__PURE__ */ jsx("div", { className: "swiper-testimonial-section-custom-pagination w-fit" }) })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Testimonial
}, Symbol.toStringTag, { value: "Module" }));
const navigation = "";
function Hero({ sliders }) {
  return /* @__PURE__ */ jsxs("div", { className: "swiper-container", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "swiper-button-prev",
        "aria-label": "Slide ke sebelumnya"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "swiper-button-next",
        "aria-label": "Slide ke berikutnya"
      }
    ),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination, Autoplay, Navigation],
        loop: true,
        spaceBetween: 50,
        slidesPerView: 1,
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-hero-section-custom-pagination",
          clickable: true
        },
        children: sliders.map((slider, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: slider.type === "promo" ? `/showcase/${slider.slug}` : slider.link,
            target: "_blank",
            "data-promo-name": slider.slug.replace(/-/g, "_"),
            className: "slider_promo_link w-full lg:h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_desktop}`,
                  alt: slider.name,
                  className: "h-full hidden lg:block"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_mobile}`,
                  alt: slider.name,
                  className: "h-full lg:hidden"
                }
              )
            ]
          }
        ) }, index))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center items-center mt-4", children: /* @__PURE__ */ jsx("div", { className: "swiper-hero-section-custom-pagination w-fit" }) })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hero
}, Symbol.toStringTag, { value: "Module" }));
const whyContent = [
  {
    id: 1,
    title: "Free Returns",
    subTitle: "Apabila ada kerusakan barang dikarenakan kesalahan dari pabrik.",
    icon: /* @__PURE__ */ jsx(MdAutorenew, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 2,
    title: "Perbaikan dan Perawatan",
    subTitle: "Garansi perbaikan ke seluruh Indonesia dari Sabang hingga Merauke.",
    icon: /* @__PURE__ */ jsx(IoMdBuild, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 3,
    title: "Garansi Produk",
    subTitle: "Kami menjamin produk yang kami sediakan dalam kondisi baik.",
    icon: /* @__PURE__ */ jsx(MdOutlineSecurity, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 4,
    title: "Konsultasi Dengan Ahlinya",
    subTitle: "Tim Ahli kami siap memberikan bimbingan dan training kepada para semua customer Kami dan calon pembeli, terhadap produk kami yang akan di beli.",
    icon: /* @__PURE__ */ jsx(MdAssignmentInd, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 5,
    title: "Gratis Ongkir",
    subTitle: "Gratis Ongkir untuk pengiriman ke Area Surabaya dengan S&K berlaku.",
    icon: /* @__PURE__ */ jsx(FaCarRear, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 6,
    title: "Pengiriman Keseluruh Indonesia",
    subTitle: "Siap Kirim ke seluruh Indonesia melalui Ekspedisi terpercaya dan dengan packing yang Aman.",
    icon: /* @__PURE__ */ jsx(MdOutlineLocalAirport, { className: "text-vicentra-blue", size: "2.5rem" })
  }
];
function Why() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-blue rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "kenapa vicentra" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem] grid grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem]", children: whyContent.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col lg:flex-row items-center lg:items-start gap-4",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: item.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-md text-center lg:text-start font-semibold", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-justify mt-[0.625rem]", children: item.subTitle })
          ] })
        ]
      },
      index
    )) })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Why
}, Symbol.toStringTag, { value: "Module" }));
const ReactPlayer = lazy(() => import("react-player"));
function Youtube() {
  const channelId = "UCo21YDF0Z6uBsGcOKdIJBMQ";
  const apiKey = "AIzaSyBW2YaxjooHva1c_Lhqi9M0DPVLXKxz4sA";
  const [latestVideoLink, setLatestVideoLink] = useState();
  const fetchLatestVideo = async (channelId2, apiKey2) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey2}&channelId=${channelId2}&part=snippet,id&order=date&maxResults=1`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        const videoTitle = data.items[0].snippet.title;
        console.log(`Latest video: ${videoTitle}`);
        console.log(`Link: https://www.youtube.com/watch?v=${videoId}`);
        setLatestVideoLink(
          `https://www.youtube.com/watch?v=${videoId}`
        );
      } else {
        console.log("No videos found for this channel.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  useEffect(() => {
    fetchLatestVideo(channelId, apiKey);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-5 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold", children: "Galery Vicentra" }),
      /* @__PURE__ */ jsx("p", { className: "lg:w-[60%] text-sm font-normal mt-[0.625rem] mb-4", children: "Subscribe chanel Youtube kami untuk demo mesin dan promo - promo Terbaru." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.youtube.com/@galeryvicentra?sub_confirmation=1",
          target: "_blank",
          className: "subscribe capitalize font-medium text-md px-4 py-2 bg-[#AB0F0F] text-white rounded-full",
          children: "subscribe"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden order-first lg:order-none", children: /* @__PURE__ */ jsx("div", { className: "h-[10rem] lg:h-[20rem]", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading player..." }), children: /* @__PURE__ */ jsx(
      ReactPlayer,
      {
        url: latestVideoLink,
        width: "100%",
        height: "100%",
        controls: true,
        light: true
      }
    ) }) }) })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Youtube
}, Symbol.toStringTag, { value: "Module" }));
const Beranda = ({ sliders, categoryProducts, testimonials, faqs }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Selamat datang di Vicentra, destinasi utama Anda untuk semua kebutuhan percetakan. Kami menyediakan produk mesin dan bahan baku percetakan terbaik, dengan fokus pada kualitas, dukungan pelanggan, dan layanan purna jual yang unggul. Sejak 2012, kami telah melayani pelanggan di seluruh Indonesia dengan dedikasi penuh terhadap produk percetakan berkualitas tinggi. Hubungi kami untuk informasi lebih lanjut atau dukungan."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: "Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Selamat datang di Vicentra, destinasi utama Anda untuk semua kebutuhan percetakan. Kami menyediakan produk mesin dan bahan baku percetakan terbaik, dengan fokus pada kualitas, dukungan pelanggan, dan layanan purna jual yang unggul. Sejak 2012, kami telah melayani pelanggan di seluruh Indonesia dengan dedikasi penuh terhadap produk percetakan berkualitas tinggi. Hubungi kami untuk informasi lebih lanjut atau dukungan."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vicentra.co.id" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Selamat datang di Vicentra, destinasi utama Anda untuk semua kebutuhan percetakan. Kami menyediakan produk mesin dan bahan baku percetakan terbaik, dengan fokus pada kualitas, dukungan pelanggan, dan layanan purna jual yang unggul. Sejak 2012, kami telah melayani pelanggan di seluruh Indonesia dengan dedikasi penuh terhadap produk percetakan berkualitas tinggi. Hubungi kami untuk informasi lebih lanjut atau dukungan."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "https://vicentra.co.id" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sticky lg:relative top-0 z-[999] bg-white", children: /* @__PURE__ */ jsx(Hero, { sliders }) }),
    /* @__PURE__ */ jsx("section", { className: "my-[3.125rem] lg:my-[6.25rem]", children: /* @__PURE__ */ jsx(Why, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "my-[3.125rem] lg:my-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-yellow rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-gray-800 font-semibold capitalize", children: "Produk Kami" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 lg:gap-[2rem] mt-[1.875rem]", children: categoryProducts.map((category, index) => /* @__PURE__ */ jsx(Link, { href: `/product/${category.slug}`, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: `/storage/${category.thumbnail}`,
          alt: `category-${category.slug}`,
          className: "rounded-xl shadow-md"
        }
      ) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gray-100 my-[3.125rem] lg:my-[6.25rem] p-5 rounded-lg", children: /* @__PURE__ */ jsx(Youtube, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "my-[3.125rem] lg:my-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-pink rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "Testimoni Customer" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: /* @__PURE__ */ jsx(Testimonial, { testimonials }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "my-[3.125rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-black rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "FAQ" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: /* @__PURE__ */ jsx(Faq, { faqs }) })
    ] })
  ] });
};
Beranda.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Beranda
}, Symbol.toStringTag, { value: "Module" }));
function BlogCard({ post }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href: `/blog/${post.category.slug}/${post.slug}`,
      className: "rounded-md overflow-hidden shadow-md",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-300 h-[10rem] relative", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-vicentra-black text-white px-4 py-1 absolute top-4 right-4 rounded-full z-50", children: post.category.name }),
          /* @__PURE__ */ jsx("div", { className: "bg-white/25 w-full h-full absolute" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${post.image}`,
              alt: post.slug,
              className: "w-full h-full object-cover"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-justify font-normal text-gray-500 mt-[0.5rem]", children: post.short_description })
        ] })
      ]
    }
  );
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogCard
}, Symbol.toStringTag, { value: "Module" }));
const dateFormatIdn = (tanggal) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("id-ID", options).format(new Date(tanggal));
};
const Blog = ({ allCategories, latestPost, categorySlug, posts }) => {
  const { url } = usePage();
  const cleanUrl = url.split("?")[0];
  const category = url.split("/")[2].replace(/-/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Artikel ",
        category
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Artikel ${category}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/blog/${categorySlug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Artikel ${category}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/blog/${categorySlug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "grid grid-cols-12 lg:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "capitalize text-gray-800 font-semibold text-xl", children: "kategori" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start gap-[0.625rem] mt-[1.875rem]", children: allCategories.map((item, index) => /* @__PURE__ */ jsx(
            Link,
            {
              href: `/blog/${item.slug}`,
              className: `font-medium ${cleanUrl == `/blog/${item.slug}` ? `bg-vicentra-blue text-white` : `bg-gray-200 px-4 py-1 text-gray-800`} px-4 py-1  rounded-full`,
              children: item.name
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
          /* @__PURE__ */ jsx("h1", { className: "capitalize text-gray-800 font-semibold text-xl", children: "Artikel Terbaru" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start gap-[0.625rem] mt-[1.875rem]", children: latestPost.map((item, index) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/blog/${item.category.slug}/${item.slug}`,
              children: [
                /* @__PURE__ */ jsx("h1", { className: "text-base", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: dateFormatIdn(item.created_at) }),
                /* @__PURE__ */ jsx("hr", { className: "mt-[0.625rem]" })
              ]
            },
            index
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-[1.25rem]", children: posts.data.map((item, index) => /* @__PURE__ */ jsx(BlogCard, { post: item }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-[3.125rem]", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: posts.links.map((link, index) => {
          if (index === 0) {
            return /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url,
                className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                children: /* @__PURE__ */ jsx(FaChevronLeft, {})
              },
              index
            );
          }
          if (index === posts.links.length - 1) {
            return /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url,
                className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                children: /* @__PURE__ */ jsx(FaChevronRight, {})
              },
              index
            );
          }
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url,
              className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
              children: link.label
            },
            index
          );
        }) }) })
      ] })
    ] })
  ] });
};
Blog.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
const show$1 = "";
const ShowBlog = ({ post, latestSimilarPost }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - ",
        post.title
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - ${post.title}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/blog/${post.category.slug}/${post.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - ${post.title}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Artikel yang kami sediakan mencakup beragam kategori menarik, mulai dari teknologi terbaru, panduan coding yang praktis, hingga tips dan trik untuk meningkatkan produktivitas Anda. Setiap artikel dirancang untuk memberikan wawasan mendalam dan inspirasi, membantu Anda tetap unggul di dunia yang terus berkembang."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/blog/${post.category.slug}/${post.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "grid lg:grid-cols-12 lg:gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 lg:col-span-3 mt-[2rem] lg:mt-0", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "capitalize text-gray-800 font-semibold text-xl", children: "Artikel Serupa" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start gap-[0.625rem] mt-[1.875rem]", children: latestSimilarPost.map((item, index) => /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/blog/${item.category.slug}/${item.slug}`,
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-base", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: dateFormatIdn(item.created_at) }),
              /* @__PURE__ */ jsx("hr", { className: "mt-[0.625rem]" })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-9 order-first lg:order-none", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-gray-800", children: post.title }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `/storage/${post.image}`,
            alt: "surabaya-printing-expo-2022",
            className: "mt-[1.875rem] rounded-lg w-full"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[0.625rem] mt-[1.875rem]", children: [
          /* @__PURE__ */ jsxs("p", { className: "font-medium text-sm", children: [
            "Di posting oleh ",
            post.author.name
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-[0.110rem] hidden lg:block h-5 bg-gray-300 rounded-full" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: dateFormatIdn(post.created_at) }),
          /* @__PURE__ */ jsx("div", { className: "w-[0.110rem] hidden lg:block h-5 bg-gray-300 rounded-full" }),
          /* @__PURE__ */ jsx("div", { className: "w-fit text-sm font-medium bg-vicentra-blue px-2 py-1 text-white rounded-full", children: post.category.name })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "post-main-content mt-[1.875rem]", children: /* @__PURE__ */ jsx(
          ReactMarkdown,
          {
            rehypePlugins: [rehypeRaw],
            components: {
              iframe: ({ node, ...props }) => /* @__PURE__ */ jsx("iframe", { ...props })
            },
            children: post.content
          }
        ) })
      ] })
    ] })
  ] });
};
ShowBlog.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ShowBlog
}, Symbol.toStringTag, { value: "Module" }));
const Help = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_kfmdtge",
      "template_uo5mbpr",
      form.current,
      {
        publicKey: "62jmOIjCR-WsSK0b6"
      }
    ).then(
      () => {
        console.log("SUCCESS!");
        alert("Terimakasih, Pesan Anda Sudah Terkirim.");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("title", { children: "Vicentra - Bantuan" }) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl text-center font-semibold text-gray-800", children: "Ada Yang Bisa Dibantu?" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          ref: form,
          onSubmit: sendEmail,
          className: "lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Masukan Nama",
                name: "user_name",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Masukan Email",
                name: "user_email",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Masukan Subyek",
                name: "subject",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                placeholder: "Tuliskan Pesan Anda",
                name: "message",
                cols: "30",
                rows: "10",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md",
                children: "Kirim"
              }
            )
          ]
        }
      )
    ] })
  ] });
};
Help.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Help
}, Symbol.toStringTag, { value: "Module" }));
const Category = ({ category, productCategory }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Produk ",
        category.name
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Produk ${category.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/product/${category.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Produk ${category.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/product/${category.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px] lg:rounded-tl-[20px] lg:rounded-tr-[20px] overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/storage/${category.banner}`,
        alt: category.slug,
        className: "w-full h-full"
      }
    ) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mt-[3.125rem] lg:mt-[6.25rem]", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-xl text-center capitalize font-semibold text-gray-800", children: [
        "Kategori ",
        category.name,
        " Kami"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: productCategory.data.map((item, index) => {
          if (item.thumbnail) {
            if (category.slug === "mesin") {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}`,
                  className: "rounded-lg shadow-md overflow-hidden",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${item.thumbnail}`,
                      alt: item.slug
                    }
                  )
                },
                index
              );
            } else if (category.slug === "consumable") {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/product/${item.category.slug}/${item.category.subCategory.slug}`,
                  className: "rounded-lg shadow-md overflow-hidden",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${item.thumbnail}`,
                      alt: item.slug
                    }
                  )
                },
                index
              );
            }
          }
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: `/product/${item.category.slug}/${item.slug}`,
              className: "min-h-[18.263rem] flex justify-center items-center rounded-lg shadow-md overflow-hidden bg-[#f0f0f0]",
              children: /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold", children: item.name })
            },
            index
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-[3.125rem]", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: productCategory.links.map((link, index) => {
          if (index === 0) {
            return /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url,
                "aria-label": "link prev",
                className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                children: /* @__PURE__ */ jsx(FaChevronLeft, {})
              },
              index
            );
          }
          if (index === productCategory.links.length - 1) {
            return /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url,
                "aria-label": "link next",
                className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                children: /* @__PURE__ */ jsx(FaChevronRight, {})
              },
              index
            );
          }
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url,
              "aria-label": `link pagination ${link.label}`,
              className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
              children: link.label
            },
            index
          );
        }) }) })
      ] })
    ] })
  ] });
};
Category.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Category
}, Symbol.toStringTag, { value: "Module" }));
const Search = ({ keyword, products }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Cari",
        " ",
        keyword.replace(/\b\w/g, (char) => char.toUpperCase())
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `Hasil pencarian Anda dengan keyword ${keyword.replace(
            /\b\w/g,
            (char) => char.toUpperCase()
          )} telah kami temukan! Berikut adalah produk-produk pilihan yang sesuai untuk memenuhi kebutuhan Anda. Temukan kualitas terbaik, penawaran menarik, dan solusi yang tepat hanya dalam satu kali klik!`
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("h1", { className: "text-xl text-center capitalize font-semibold text-gray-800", children: [
      "Cari ",
      keyword
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 lg:mt-auto", children: /* @__PURE__ */ jsxs("div", { className: "w-full mt-[1.875rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: products.data.map((item, index) => {
        const linkProduct = item.category.slug === "mesin" || item.category.slug === "consumable" ? `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}` : `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.slug}`;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            href: linkProduct,
            className: "rounded-lg overflow-hidden",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/storage/${item.thumbnail}`,
                    alt: item.slug
                  }
                ),
                item.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-bold", children: item.name }),
                /* @__PURE__ */ jsx("h2", { className: "text-center text-sm font-normal", children: item.another_name })
              ] })
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full flex justify-end mt-[3.125rem]", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: products.links.map((link, index) => {
        if (index === 0) {
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url != null ? `${link.url}&q=${keyword}` : null,
              "aria-label": "link prev",
              className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
              children: /* @__PURE__ */ jsx(FaChevronLeft, {})
            },
            index
          );
        }
        if (index === products.links.length - 1) {
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url != null ? `${link.url}&q=${keyword}` : null,
              "aria-label": "link next",
              className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
              children: /* @__PURE__ */ jsx(FaChevronRight, {})
            },
            index
          );
        }
        return /* @__PURE__ */ jsx(
          Link,
          {
            href: `${link.url}&q=${keyword}`,
            "aria-label": `link pagination ${link.label}`,
            className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
            children: link.label
          },
          index
        );
      }) }) })
    ] }) })
  ] });
};
Search.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Search
}, Symbol.toStringTag, { value: "Module" }));
const show = "";
function Descriptions({ product }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("h1", { className: "capitalize text-base font-semibold text-gray-800", children: [
      "Deskripsi ",
      product.category.name
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "product_description text-sm font-normal text-gray-500 mt-4",
        dangerouslySetInnerHTML: { __html: product.description }
      }
    )
  ] });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Descriptions
}, Symbol.toStringTag, { value: "Module" }));
const specification = "";
function Specification({ product }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Spesifikasi Mesin" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "specification_table_content mt-4",
        dangerouslySetInnerHTML: { __html: product.specification }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-[1rem]", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs mb-0", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg text-red-500", children: "*" }),
        "Spesifikasi di atas dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs mb-0", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg text-red-500", children: "*" }),
        "Untuk informasi lebih lanjut silahkan hubungi tim sales kami melalui link contact diatas."
      ] })
    ] })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Specification
}, Symbol.toStringTag, { value: "Module" }));
function Results({ product }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Hasil Mesin" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/storage/${product.work_result}`,
        alt: product.slug,
        className: "w-full"
      }
    ) })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Results
}, Symbol.toStringTag, { value: "Module" }));
function SalesCard$1({
  product,
  sales,
  url,
  breadcrumbUrlResult,
  order
}) {
  const BASE_URL = window.location.origin;
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${sales.phone}&text=Jual%20${breadcrumbUrlResult.replace(
    /[/\s]/g,
    "%20"
  )}%20${encodeURIComponent(
    product.name
  )}%20Murah%20Surabaya%20${BASE_URL}${url}`;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: linkWhatsapp,
      target: "_blank",
      "data-sales": sales.name.toLowerCase(),
      className: `sales_cta_link lg:w-[80%] h-[5rem] flex items-center gap-[1.5rem] rounded-full relative py-2 pl-[7rem] ${order == 1 ? "bg-vicentra-blue" : "bg-green-600"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[5.5rem] h-[5.5rem] rounded-full border-[0.188rem] border-white relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${sales.image}`,
              alt: sales.name,
              className: "rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-[1.5rem] h-[1.5rem] flex justify-center items-center bg-white rounded-full absolute right-[-0.75rem] top-[50%] transform translate-y-[-50%]", children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-green-500" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mr-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-sm font-medium text-white/50 capitalize", children: sales.name }),
            /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center text-xs font-semibold text-white bg-white/20 px-2 rounded-md capitalize", children: "online" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm font-medium text-white mt-1", children: sales.additional_sentence })
        ] })
      ]
    }
  );
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SalesCard$1
}, Symbol.toStringTag, { value: "Module" }));
const ShowProduct$1 = ({ product, teamSales, similarProducts }) => {
  const { url } = usePage();
  const urlSegments = url.split("/");
  const urlTarget = `${urlSegments[2]}/${urlSegments[3]}`;
  const breadcrumbUrlResult = urlTarget.split("/").map(
    (segment) => segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  ).join("/");
  const [activeProductItem, setActiveProductItem] = useState(
    product.media[0]
  );
  const [listProductAssets, setListProductAssets] = useState(product.media);
  const [tabItems, setTabsItems] = useState([
    {
      name: "Deskripsi",
      isActive: true
    },
    {
      name: "Rekomendasi",
      isActive: false
    }
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
  const convertToPreviewUrl = (shareUrl) => {
    const match = shareUrl.match(
      /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/
    );
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      throw new Error("Invalid Google Drive share URL format");
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Produk ",
        product.name,
        " ",
        product.another_name ?? ""
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Produk ${product.name} ${product.another_name ?? ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/product/${product.category.slug}/${product.category.subCategory.slug}/${product.category.subCategory.subSubCategory.slug}/${product.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Produk ${product.name} ${product.another_name ?? ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/product/${product.category.slug}/${product.category.subCategory.slug}/${product.category.subCategory.subSubCategory.slug}/${product.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-2 gap-[1.25rem]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { children: activeProductItem.type === "image" ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${activeProductItem.file}`,
              alt: activeProductItem.slug,
              className: "w-full h-full lg:h-[37.5rem] object-contain"
            }
          ),
          product.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[2rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
        ] }) : /* @__PURE__ */ jsx("div", { className: "w-full h-[21.438rem] lg:h-[37.5rem]", children: activeProductItem.type_source_link === "youtube" ? /* @__PURE__ */ jsx(
          ReactPlayer$1,
          {
            url: activeProductItem.file,
            light: true,
            width: "100%",
            height: "100%",
            controls: true
          }
        ) : /* @__PURE__ */ jsx(
          "iframe",
          {
            src: convertToPreviewUrl(
              activeProductItem.file
            ),
            width: "100%",
            height: "100%",
            allow: "autoplay",
            allowFullScreen: "",
            title: "Google Drive Video Player"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-x-2 mt-[1rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100", children: listProductAssets.map((item, index) => {
          if (item.type === "image") {
            return /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.file}`,
                alt: "mesin-xuli-eco-solvent",
                className: `w-[10rem] h-[10rem] hover:cursor-pointer ${item.isActive ? "border-2 border-gray-600" : "border-2 border-white"} object-contain`,
                onClick: () => toogleActiveProductItem(index)
              },
              index
            );
          } else if (item.type === "video") {
            return /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.video_thumbnail}`,
                alt: "mesin-xuli-eco-solvent",
                className: `w-[10rem] h-[10rem] hover:cursor-pointer ${item.isActive ? "border-2 border-gray-600" : "border-2 border-white"} object-contain`,
                onClick: () => toogleActiveProductItem(index)
              },
              index
            );
          }
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-800", children: product.name }),
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-normal text-gray-600", children: product.another_name })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-sm text-justify text-gray-500 mt-[1.25rem]",
            dangerouslySetInnerHTML: {
              __html: product.shortDescription
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-semibold", children: [
            product.category.name,
            "/",
            product.category.subCategory.name,
            "/",
            product.category.subCategory.subSubCategory.name
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "SKU: " }),
            product.sku
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Brand: " }),
            product.brand
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 mt-[1.25rem]", children: teamSales.map((sales, index) => /* @__PURE__ */ jsx(
          SalesCard$1,
          {
            product,
            sales,
            url,
            breadcrumbUrlResult,
            order: index + 1
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-[3.125rem] lg:mt-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "space-x-2", children: tabItems.map((item, index) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `text-sm font-semibold ${item.isActive ? "bg-vicentra-blue text-white" : "bg-gray-100 text-gray-500"} px-4 py-2 rounded-md`,
          onClick: () => toggleActiveTab(index),
          children: item.name
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
        activeTab === "Deskripsi" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Descriptions, { product }),
          product.specification != null && /* @__PURE__ */ jsx(Specification, { product }),
          product.work_result != null && /* @__PURE__ */ jsx(Results, { product })
        ] }),
        activeTab === "Rekomendasi" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Rekomendasi Produk" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: similarProducts.map((item, index) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`,
              className: "rounded-lg overflow-hidden",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden relative", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${item.thumbnail}`,
                      alt: item.slug
                    }
                  ),
                  item.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                  /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-bold", children: item.name }),
                  /* @__PURE__ */ jsx("h2", { className: "text-center text-sm font-normal", children: item.another_name })
                ] })
              ]
            },
            index
          )) }) })
        ] })
      ] })
    ] })
  ] });
};
ShowProduct$1.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ShowProduct$1
}, Symbol.toStringTag, { value: "Module" }));
const ShowProduct = ({ product, teamSales, similarProducts }) => {
  const { url } = usePage();
  const urlSegments = url.split("/");
  const urlTarget = `${urlSegments[2]}/${urlSegments[3]}`;
  const breadcrumbUrlResult = urlTarget.split("/").map(
    (segment) => segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  ).join("/");
  const [activeProductItem, setActiveProductItem] = useState(
    product.media[0]
  );
  const [listProductAssets, setListProductAssets] = useState(product.media);
  const [tabItems, setTabsItems] = useState([
    {
      name: "Deskripsi",
      isActive: true
    },
    {
      name: "Rekomendasi",
      isActive: false
    }
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
  const convertToPreviewUrl = (shareUrl) => {
    const match = shareUrl.match(
      /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/
    );
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      throw new Error("Invalid Google Drive share URL format");
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Produk ",
        product.name,
        " ",
        product.another_name ?? ""
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Produk ${product.name} ${product.another_name ?? ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/product/${product.category.slug}/${product.category.subCategory.slug}/${product.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Produk ${product.name} ${product.another_name ?? ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/product/${product.category.slug}/${product.category.subCategory.slug}/${product.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-2 gap-[1.25rem]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { children: activeProductItem.type === "image" ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${activeProductItem.file}`,
              alt: activeProductItem.slug,
              className: "w-full h-full lg:h-[37.5rem] object-contain"
            }
          ),
          product.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[2rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
        ] }) : /* @__PURE__ */ jsx("div", { className: "w-full h-[21.438rem] lg:h-[37.5rem]", children: activeProductItem.type_source_link === "youtube" ? /* @__PURE__ */ jsx(
          ReactPlayer$1,
          {
            url: activeProductItem.file,
            light: true,
            width: "100%",
            height: "100%",
            controls: true
          }
        ) : /* @__PURE__ */ jsx(
          "iframe",
          {
            src: convertToPreviewUrl(
              activeProductItem.file
            ),
            width: "100%",
            height: "100%",
            allow: "autoplay",
            allowFullScreen: "",
            title: "Google Drive Video Player"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-x-2 mt-[1rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100", children: listProductAssets.map((item, index) => {
          if (item.type === "image") {
            return /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.file}`,
                alt: "mesin-xuli-eco-solvent",
                className: `w-[10rem] h-[10rem] hover:cursor-pointer ${item.isActive ? "border-2 border-gray-600" : "border-2 border-white"} object-contain`,
                onClick: () => toogleActiveProductItem(index)
              },
              index
            );
          } else if (item.type === "video") {
            return /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.video_thumbnail}`,
                alt: "mesin-xuli-eco-solvent",
                className: `w-[10rem] h-[10rem] hover:cursor-pointer ${item.isActive ? "border-2 border-gray-600" : "border-2 border-white"} object-contain`,
                onClick: () => toogleActiveProductItem(index)
              },
              index
            );
          }
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-800", children: product.name }),
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-normal text-gray-600", children: product.another_name })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-sm text-justify text-gray-500 mt-[1.25rem]",
            dangerouslySetInnerHTML: {
              __html: product.shortDescription
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-semibold", children: [
            product.category.name,
            "/",
            product.category.subCategory.name
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "SKU: " }),
            product.sku
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Brand: " }),
            product.brand
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 mt-[1.25rem]", children: teamSales.map((sales, index) => /* @__PURE__ */ jsx(
          SalesCard$1,
          {
            product,
            sales,
            url,
            breadcrumbUrlResult,
            order: index + 1
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-[3.125rem] lg:mt-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "space-x-2", children: tabItems.map((item, index) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `text-sm font-semibold ${item.isActive ? "bg-vicentra-blue text-white" : "bg-gray-100 text-gray-500"} px-4 py-2 rounded-md`,
          onClick: () => toggleActiveTab(index),
          children: item.name
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
        activeTab === "Deskripsi" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Descriptions, { product }),
          product.specification != null && /* @__PURE__ */ jsx(Specification, { product }),
          product.work_result != null && /* @__PURE__ */ jsx(Results, { product })
        ] }),
        activeTab === "Rekomendasi" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Rekomendasi Produk" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: similarProducts.map((item, index) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`,
              className: "rounded-lg overflow-hidden",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden relative", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${item.thumbnail}`,
                      alt: item.slug
                    }
                  ),
                  item.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                  /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-bold", children: item.name }),
                  /* @__PURE__ */ jsx("h2", { className: "text-center text-sm font-normal", children: item.another_name })
                ] })
              ]
            },
            index
          )) }) })
        ] })
      ] })
    ] })
  ] });
};
ShowProduct.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ShowProduct
}, Symbol.toStringTag, { value: "Module" }));
const SubCategory$1 = ({ categoryProduct, category, subCategory, products }) => {
  const currentAccordion = `${category.slug}/${subCategory.slug}`;
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Produk ",
        category.name,
        " ",
        subCategory.name
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Produk ${category.name} ${subCategory.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/product/${category.slug}/${subCategory.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Produk ${category.name} ${subCategory.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/product/${category.slug}/${subCategory.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-12 lg:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-3", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl capitalize font-semibold text-gray-800", children: "Produk Kami" }),
        /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: categoryProduct.map((category2, index) => /* @__PURE__ */ jsxs(
          Accordion,
          {
            open: categoryOpen === category2.slug,
            children: [
              /* @__PURE__ */ jsx(
                AccordionHeader,
                {
                  className: "text-start text-sm font-semibold py-2",
                  onClick: () => handleCategoryOpen(category2.slug),
                  children: category2.name
                }
              ),
              /* @__PURE__ */ jsx(AccordionBody, { className: "py-0", children: /* @__PURE__ */ jsx("div", { className: "ml-4", children: category2.subMenu.map(
                (subMenu, index2) => /* @__PURE__ */ jsxs(
                  Accordion,
                  {
                    open: subCategoryOpen === subMenu.slug,
                    children: [
                      /* @__PURE__ */ jsx(
                        AccordionHeader,
                        {
                          className: `text-start text-sm font-medium py-2 ${subCategoryOpen === subMenu.slug ? "text-vicentra-blue font-semibold" : ""}`,
                          onClick: () => handleSubCategoryOpen(
                            subMenu.slug
                          ),
                          children: /* @__PURE__ */ jsx(
                            Link,
                            {
                              href: `/product/${category2.slug}/${subMenu.slug}`,
                              className: "w-full",
                              children: subMenu.name
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(AccordionBody, { className: "py-0", children: /* @__PURE__ */ jsx("ul", { className: "ml-4 mt-6", children: subMenu.subSubMenu.map(
                        (subSubMenu, index3) => /* @__PURE__ */ jsxs(
                          "li",
                          {
                            className: "w-full flex justify-between mb-2",
                            children: [
                              /* @__PURE__ */ jsx(
                                Link,
                                {
                                  href: `/product/${category2.slug}/${subMenu.slug}/${subSubMenu.slug}`,
                                  className: `${subSubCategoryOpen === subSubMenu.slug ? "w-[90%] text-vicentra-pink font-semibold pl-3 rounded-sm bg-[#acacac1f]" : "w-full"}`,
                                  children: subSubMenu.name
                                }
                              ),
                              /* @__PURE__ */ jsxs("span", { children: [
                                "(",
                                subSubMenu.count,
                                ")"
                              ] })
                            ]
                          },
                          index3
                        )
                      ) }) })
                    ]
                  },
                  index2
                )
              ) }) })
            ]
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-xl capitalize font-semibold text-gray-800", children: [
          "Rekomendasi ",
          `${category.name} ${subCategory.name}`,
          " ",
          "Kami"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full mt-[1.875rem]", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: products.data.map((item, index) => {
            const linkProduct = item.category.slug === "mesin" || item.category.slug === "consumable" ? `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}` : `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.slug}`;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                href: linkProduct,
                className: "rounded-lg overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden relative", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: `/storage/${item.thumbnail}`,
                        alt: item.slug
                      }
                    ),
                    item.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-bold", children: item.name }),
                    /* @__PURE__ */ jsx("h2", { className: "text-center text-sm font-normal", children: item.another_name })
                  ] })
                ]
              },
              index
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "w-full flex justify-end mt-[3.125rem]", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: products.links.map((link, index) => {
            if (index === 0) {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.url,
                  "aria-label": "link prev",
                  className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                  children: /* @__PURE__ */ jsx(FaChevronLeft, {})
                },
                index
              );
            }
            if (index === products.links.length - 1) {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.url,
                  "aria-label": "link next",
                  className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                  children: /* @__PURE__ */ jsx(FaChevronRight, {})
                },
                index
              );
            }
            return /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url,
                "aria-label": `link pagination ${link.label}`,
                className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                children: link.label
              },
              index
            );
          }) }) })
        ] })
      ] })
    ] })
  ] });
};
SubCategory$1.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SubCategory$1
}, Symbol.toStringTag, { value: "Module" }));
const SubCategory = ({
  categoryProduct,
  category,
  subCategory,
  subSubCategory,
  products
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Produk ",
        category.name,
        " ",
        subCategory.name,
        " ",
        subSubCategory.name
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Produk ${category.name} ${subCategory.name} ${subSubCategory.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/product/${category.slug}/${subCategory.slug}/${subSubCategory.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Produk ${category.name} ${subCategory.name} ${subSubCategory.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: `Vicentra menyediakan berbagai produk ${category.name} ${subCategory.name} ${subSubCategory.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/product/${category.slug}/${subCategory.slug}/${subSubCategory.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-12 lg:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-3", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl capitalize font-semibold text-gray-800", children: "Produk Kami" }),
        /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: categoryProduct.map((category2, index) => /* @__PURE__ */ jsxs(
          Accordion,
          {
            open: categoryOpen === category2.slug,
            children: [
              /* @__PURE__ */ jsx(
                AccordionHeader,
                {
                  className: "text-start text-sm font-semibold py-2",
                  onClick: () => handleCategoryOpen(category2.slug),
                  children: category2.name
                }
              ),
              /* @__PURE__ */ jsx(AccordionBody, { className: "py-0", children: /* @__PURE__ */ jsx("div", { className: "ml-4", children: category2.subMenu.map(
                (subMenu, index2) => /* @__PURE__ */ jsxs(
                  Accordion,
                  {
                    open: subCategoryOpen === subMenu.slug,
                    children: [
                      /* @__PURE__ */ jsx(
                        AccordionHeader,
                        {
                          className: `text-start text-sm font-medium py-2 ${subCategoryOpen === subMenu.slug ? "text-vicentra-blue font-semibold" : ""}`,
                          onClick: () => handleSubCategoryOpen(
                            subMenu.slug
                          ),
                          children: /* @__PURE__ */ jsx(
                            Link,
                            {
                              href: `/product/${category2.slug}/${subMenu.slug}`,
                              className: "w-full",
                              children: subMenu.name
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(AccordionBody, { className: "py-0", children: /* @__PURE__ */ jsx("ul", { className: "ml-4 mt-6", children: subMenu.subSubMenu.map(
                        (subSubMenu, index3) => /* @__PURE__ */ jsxs(
                          "li",
                          {
                            className: "w-full flex justify-between mb-2",
                            children: [
                              /* @__PURE__ */ jsx(
                                Link,
                                {
                                  href: `/product/${category2.slug}/${subMenu.slug}/${subSubMenu.slug}`,
                                  className: `${subSubCategoryOpen === subSubMenu.slug ? "w-[90%] text-vicentra-pink font-semibold pl-3 rounded-sm bg-[#acacac1f]" : "w-full"}`,
                                  children: subSubMenu.name
                                }
                              ),
                              /* @__PURE__ */ jsxs("span", { children: [
                                "(",
                                subSubMenu.count,
                                ")"
                              ] })
                            ]
                          },
                          index3
                        )
                      ) }) })
                    ]
                  },
                  index2
                )
              ) }) })
            ]
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 mt-[2rem] lg:mt-auto", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-xl capitalize font-semibold text-gray-800", children: [
          "Rekomendasi",
          " ",
          `${category.name} ${subCategory.name} ${subSubCategory.name}`,
          " ",
          "Kami"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full mt-[1.875rem]", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: products.data.map((item, index) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`,
              className: "rounded-lg overflow-hidden",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden relative", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${item.thumbnail}`,
                      alt: item.slug
                    }
                  ),
                  item.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                  /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-bold", children: item.name }),
                  /* @__PURE__ */ jsx("h2", { className: "text-center text-sm font-normal", children: item.another_name ?? "" })
                ] })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "w-full flex justify-end mt-[3.125rem]", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: products.links.map((link, index) => {
            if (index === 0) {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.url,
                  "aria-label": "link prev",
                  className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                  children: /* @__PURE__ */ jsx(FaChevronLeft, {})
                },
                index
              );
            }
            if (index === products.links.length - 1) {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.url,
                  "aria-label": "link next",
                  className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                  children: /* @__PURE__ */ jsx(FaChevronRight, {})
                },
                index
              );
            }
            return /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url,
                "aria-label": `link pagination ${link.label}`,
                className: `w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${link.active ? `bg-vicentra-blue text-white` : `bg-gray-200 text-gray-800`} rounded-lg`,
                children: link.label
              },
              index
            );
          }) }) })
        ] })
      ] })
    ] })
  ] });
};
SubCategory.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SubCategory
}, Symbol.toStringTag, { value: "Module" }));
const PatternShowcasePage = "http://127.0.0.1:8000/build/assets/pattern-showcase-page-d4023bd1.webp";
const VicentraLogoShowcase = "http://127.0.0.1:8000/build/assets/logo-vicentra-showcase-d76398cc.webp";
function SalesCard({ sales, slider, order }) {
  const { url } = usePage();
  const BASE_URL = window.location.origin;
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${sales.phone}&text=Hallo%20Kak%20Mau%20Tanya%20${slider.name.split(" ").join("%20")}%20${BASE_URL}${url}`;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: linkWhatsapp,
      target: "_blank",
      "data-sales": sales.name.toLowerCase(),
      className: `sales_cta_link h-[5rem] flex items-center gap-[1.5rem] rounded-full relative py-2 pl-[7rem] ${order == 1 ? "bg-vicentra-blue" : "bg-green-600"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[5.5rem] h-[5.5rem] rounded-full border-[0.188rem] border-white relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${sales.image}`,
              alt: sales.name,
              className: "rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-[1.5rem] h-[1.5rem] flex justify-center items-center bg-white rounded-full absolute right-[-0.75rem] top-[50%] transform translate-y-[-50%]", children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-green-500" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mr-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-sm font-medium text-white/50 capitalize", children: sales.name }),
            /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center text-xs font-semibold text-white bg-white/20 px-2 rounded-md capitalize", children: "online" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm font-medium text-white mt-1", children: "Ada yang bisa saya bantu terkait promo ini?" })
        ] })
      ]
    }
  );
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SalesCard
}, Symbol.toStringTag, { value: "Module" }));
function Show({ slider, teamSales }) {
  const { keywords } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - ",
        slider.name
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - ${slider.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: `Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/showcase/${slider.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - ${slider.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: `Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/showcase/${slider.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-screen flex flex-col justify-center items-center bg-red-400 overflow-x-hidden py-10",
        style: {
          backgroundImage: `url(${PatternShowcasePage})`
          // backgroundSize: "cover",
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: VicentraLogoShowcase,
                alt: "vicentra-logo-showcase",
                className: "w-[10rem] h-[10rem] rounded-full"
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl font-bold uppercase text-white mt-4", children: "vicentra" }),
            /* @__PURE__ */ jsx("h2", { className: "text-center text-xl font-bold uppercase text-white mt-4", children: slider.name }),
            /* @__PURE__ */ jsxs("div", { className: "w-[90vw] lg:w-[50vw] h-[15rem] lg:h-[20rem] bg-vicentra-blue rounded-md overflow-hidden mt-5", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_desktop}`,
                  alt: slider.name,
                  className: "w-full h-full hidden lg:block"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_mobile}`,
                  alt: slider.name,
                  className: "w-full h-full lg:hidden"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-[90vw] lg:w-[50vw] flex flex-col space-y-4 mt-10", children: teamSales.map((sales, index) => /* @__PURE__ */ jsx(
            SalesCard,
            {
              sales,
              slider,
              order: index + 1
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-white mt-10", children: [
            "Copyright ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " vicentra.com"
          ] }) })
        ]
      }
    )
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
const TermsAndConditions = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_kfmdtge",
      "template_uo5mbpr",
      form.current,
      {
        publicKey: "62jmOIjCR-WsSK0b6"
      }
    ).then(
      () => {
        console.log("SUCCESS!");
        alert("Terimakasih, Pesan Anda Sudah Terkirim.");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vicentra - Syarat & Ketentuan Perbaikan Mesin" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: "Vicentra - Syarat & Ketentuan Perbaikan Mesin"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: "https://vicentra.co.id/terms-and-conditions"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Vicentra - Syarat & Ketentuan Perbaikan Mesin"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: "https://vicentra.co.id/terms-and-conditions"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl text-center font-semibold text-gray-800", children: "Layanan Dan Perbaikan Mesin" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          ref: form,
          onSubmit: sendEmail,
          className: "lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "user_name", children: "Nama Lengkap" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Masukan nama lengkap anda",
                  id: "user_name",
                  name: "user_name",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "user_email_or_phone", children: "Email atau No Telepon" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Masukan email atau nomor telepon anda",
                  id: "user_email_or_phone",
                  name: "user_email_or_phone",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "type_of_assistance", children: "Kategori Service" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "type_of_assistance",
                  name: "type_of_assistance",
                  defaultValue: "Garansi",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "Garansi", children: "Garansi" }),
                    /* @__PURE__ */ jsx("option", { value: "Non Garansi", children: "Non Garansi" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "type_of_assistance", children: "Isi Keluhan" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: "Isi keluhan keluhan anda disini",
                  id: "message",
                  name: "message",
                  cols: "30",
                  rows: "10",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md",
                children: "Kirim"
              }
            )
          ]
        }
      )
    ] })
  ] });
};
TermsAndConditions.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TermsAndConditions
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/AboutUs/Index.jsx": __vite_glob_0_0, "./Pages/AboutUs/components/TeamCard.jsx": __vite_glob_0_1, "./Pages/Beranda/Index.jsx": __vite_glob_0_2, "./Pages/Beranda/components/Faq.jsx": __vite_glob_0_3, "./Pages/Beranda/components/Hero.jsx": __vite_glob_0_4, "./Pages/Beranda/components/Testimonial.jsx": __vite_glob_0_5, "./Pages/Beranda/components/Why.jsx": __vite_glob_0_6, "./Pages/Beranda/components/Youtube.jsx": __vite_glob_0_7, "./Pages/Blog/Index.jsx": __vite_glob_0_8, "./Pages/Blog/Show.jsx": __vite_glob_0_9, "./Pages/Blog/components/BlogCard.jsx": __vite_glob_0_10, "./Pages/Help/Index.jsx": __vite_glob_0_11, "./Pages/Product/Category.jsx": __vite_glob_0_12, "./Pages/Product/Search.jsx": __vite_glob_0_13, "./Pages/Product/Show.jsx": __vite_glob_0_14, "./Pages/Product/ShowSparepart.jsx": __vite_glob_0_15, "./Pages/Product/SubCategory.jsx": __vite_glob_0_16, "./Pages/Product/SubSubCategory.jsx": __vite_glob_0_17, "./Pages/Product/components/Descriptions.jsx": __vite_glob_0_18, "./Pages/Product/components/Results.jsx": __vite_glob_0_19, "./Pages/Product/components/SalesCard.jsx": __vite_glob_0_20, "./Pages/Product/components/Specification.jsx": __vite_glob_0_21, "./Pages/ShowCase/Show.jsx": __vite_glob_0_22, "./Pages/ShowCase/components/SalesCard.jsx": __vite_glob_0_23, "./Pages/TermsAndConditions/Index.jsx": __vite_glob_0_24 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
      hydrateRoot(el, /* @__PURE__ */ jsx(App, { ...props }));
    }
  })
);
