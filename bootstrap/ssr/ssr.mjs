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
      /* @__PURE__ */ Object.assign({ "./Pages/AboutUs/Index.jsx": () => import("./assets/Index-b63bcebd.mjs"), "./Pages/AboutUs/components/TeamCard.jsx": () => import("./assets/TeamCard-8d81df78.mjs"), "./Pages/Beranda/Index.jsx": () => import("./assets/Index-2066f798.mjs"), "./Pages/Beranda/components/Faq.jsx": () => import("./assets/Faq-416bdf32.mjs"), "./Pages/Beranda/components/Hero.jsx": () => import("./assets/Hero-1be23699.mjs"), "./Pages/Beranda/components/Testimonial.jsx": () => import("./assets/Testimonial-6a44bcce.mjs"), "./Pages/Beranda/components/Why.jsx": () => import("./assets/Why-a2467983.mjs"), "./Pages/Beranda/components/Youtube.jsx": () => import("./assets/Youtube-9dce7598.mjs"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-4c537518.mjs"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-fb78a405.mjs"), "./Pages/Blog/components/BlogCard.jsx": () => import("./assets/BlogCard-ab9b2423.mjs"), "./Pages/Help/Index.jsx": () => import("./assets/Index-021a7174.mjs"), "./Pages/Product/Category.jsx": () => import("./assets/Category-48b0512d.mjs"), "./Pages/Product/Search.jsx": () => import("./assets/Search-3874f508.mjs"), "./Pages/Product/Show.jsx": () => import("./assets/Show-33d29b02.mjs"), "./Pages/Product/ShowSparepart.jsx": () => import("./assets/ShowSparepart-8e83f795.mjs"), "./Pages/Product/SubCategory.jsx": () => import("./assets/SubCategory-3a54151e.mjs"), "./Pages/Product/SubSubCategory.jsx": () => import("./assets/SubSubCategory-3e0e6c7b.mjs"), "./Pages/Product/components/Descriptions.jsx": () => import("./assets/Descriptions-1fdc4a2c.mjs"), "./Pages/Product/components/Results.jsx": () => import("./assets/Results-12c7c414.mjs"), "./Pages/Product/components/SalesCard.jsx": () => import("./assets/SalesCard-dfec0daf.mjs"), "./Pages/Product/components/Specification.jsx": () => import("./assets/Specification-82f3db92.mjs"), "./Pages/ShowCase/Show.jsx": () => import("./assets/Show-930cb4db.mjs"), "./Pages/ShowCase/components/SalesCard.jsx": () => import("./assets/SalesCard-7c7ab82b.mjs"), "./Pages/TermsAndConditions/Index.jsx": () => import("./assets/Index-f37204dd.mjs") })
    ),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
