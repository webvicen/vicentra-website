import { jsxs, jsx } from "react/jsx-runtime";
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
export {
  Descriptions as default
};
