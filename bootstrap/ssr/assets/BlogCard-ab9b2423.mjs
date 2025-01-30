import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
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
export {
  BlogCard as default
};
