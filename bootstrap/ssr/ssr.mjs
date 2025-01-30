import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => resolvePageComponent(
      `./${name}.jsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/AboutUs/Index.jsx": () => import("./assets/Index-2fd00ea4.mjs"), "./Pages/AboutUs/components/TeamCard.jsx": () => import("./assets/TeamCard-8d81df78.mjs"), "./Pages/Beranda/Index.jsx": () => import("./assets/Index-f5e2ed39.mjs"), "./Pages/Beranda/components/Faq.jsx": () => import("./assets/Faq-416bdf32.mjs"), "./Pages/Beranda/components/Hero.jsx": () => import("./assets/Hero-1be23699.mjs"), "./Pages/Beranda/components/Testimonial.jsx": () => import("./assets/Testimonial-6a44bcce.mjs"), "./Pages/Beranda/components/Why.jsx": () => import("./assets/Why-a2467983.mjs"), "./Pages/Beranda/components/Youtube.jsx": () => import("./assets/Youtube-9dce7598.mjs"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-b77425cd.mjs"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-577a150f.mjs"), "./Pages/Blog/components/BlogCard.jsx": () => import("./assets/BlogCard-ab9b2423.mjs"), "./Pages/Help/Index.jsx": () => import("./assets/Index-8568440a.mjs"), "./Pages/Product/Category.jsx": () => import("./assets/Category-5cf79fc0.mjs"), "./Pages/Product/Search.jsx": () => import("./assets/Search-15794e7d.mjs"), "./Pages/Product/Show.jsx": () => import("./assets/Show-087e6461.mjs"), "./Pages/Product/ShowSparepart.jsx": () => import("./assets/ShowSparepart-8bdd9c89.mjs"), "./Pages/Product/SubCategory.jsx": () => import("./assets/SubCategory-3b2a2c32.mjs"), "./Pages/Product/SubSubCategory.jsx": () => import("./assets/SubSubCategory-655cc1fd.mjs"), "./Pages/Product/components/Descriptions.jsx": () => import("./assets/Descriptions-1fdc4a2c.mjs"), "./Pages/Product/components/Results.jsx": () => import("./assets/Results-12c7c414.mjs"), "./Pages/Product/components/SalesCard.jsx": () => import("./assets/SalesCard-dfec0daf.mjs"), "./Pages/Product/components/Specification.jsx": () => import("./assets/Specification-82f3db92.mjs"), "./Pages/ShowCase/Show.jsx": () => import("./assets/Show-dc0b462b.mjs"), "./Pages/ShowCase/components/SalesCard.jsx": () => import("./assets/SalesCard-7c7ab82b.mjs"), "./Pages/TermsAndConditions/Index.jsx": () => import("./assets/Index-4de49952.mjs") })
    ),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
