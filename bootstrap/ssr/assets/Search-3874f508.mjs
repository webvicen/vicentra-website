import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { Link } from "@inertiajs/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { P as PagesLayout } from "./PagesLayout-a424847f.mjs";
import "react";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
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
export {
  Search as default
};
