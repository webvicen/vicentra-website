import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { FaCaretDown, FaFacebook, FaInstagramSquare, FaYoutube, FaSearch, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
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
            className: `${toggleMobileMenu ? "block" : "hidden"} bg-white border rounded-md p-4 mt-[1rem] absolute left-0 right-0 bottom-[-17rem] shadow-md z-[999]`,
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
export {
  PagesLayout as P
};
