import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Accordion from "@material-tailwind/react/components/Accordion/index.js";
import AccordionHeader from "@material-tailwind/react/components/Accordion/AccordionHeader.js";
import AccordionBody from "@material-tailwind/react/components/Accordion/AccordionBody.js";
import { P as PagesLayout } from "./PagesLayout-a424847f.mjs";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
const SidebarAccordion = ({
  category,
  subCategory,
  subSubCategory,
  categoryProduct
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
  return /* @__PURE__ */ jsx(Fragment, { children: categoryProduct.map((category2, index) => /* @__PURE__ */ jsxs(Accordion, { open: categoryOpen === category2.slug, children: [
    /* @__PURE__ */ jsx(
      AccordionHeader,
      {
        className: "text-start text-sm font-semibold py-2",
        onClick: () => handleCategoryOpen(category2.slug),
        children: category2.name
      }
    ),
    /* @__PURE__ */ jsx(AccordionBody, { className: "py-0", children: /* @__PURE__ */ jsx("div", { className: "ml-4", children: category2.subMenu.map((subMenu, index2) => /* @__PURE__ */ jsxs(
      Accordion,
      {
        open: subCategoryOpen === subMenu.slug,
        children: [
          /* @__PURE__ */ jsx(
            AccordionHeader,
            {
              className: `text-start text-sm font-medium py-2 ${subCategoryOpen === subMenu.slug ? "text-vicentra-blue font-semibold" : ""}`,
              onClick: () => handleSubCategoryOpen(subMenu.slug),
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
    )) }) })
  ] }, index)) });
};
const SubCategory = ({
  categoryProduct,
  category,
  subCategory,
  subSubCategory,
  products
}) => {
  const isServer = typeof window === "undefined";
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
        /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: !isServer ? /* @__PURE__ */ jsx(
          SidebarAccordion,
          {
            category,
            subCategory,
            subSubCategory,
            categoryProduct
          }
        ) : /* @__PURE__ */ jsx("div", { children: "Loading..." }) })
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
export {
  SubCategory as default
};
