import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { P as PagesLayout } from "./PagesLayout-a424847f.mjs";
import BlogCard from "./BlogCard-ab9b2423.mjs";
import { d as dateFormatIdn } from "./helpers-0a343f18.mjs";
import "react";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
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
export {
  Blog as default
};
