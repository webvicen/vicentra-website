import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { P as PagesLayout } from "./PagesLayout-02df36db.mjs";
import "react";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
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
export {
  Category as default
};
