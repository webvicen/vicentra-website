import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { P as PagesLayout } from "./PagesLayout-02df36db.mjs";
import { d as dateFormatIdn } from "./helpers-0a343f18.mjs";
import "react";
import "react-icons/fa";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
const show = "";
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
export {
  ShowBlog as default
};
