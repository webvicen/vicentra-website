import { jsxs, jsx } from "react/jsx-runtime";
function Results({ product }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Hasil Mesin" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/storage/${product.work_result}`,
        alt: product.slug,
        className: "w-full"
      }
    ) })
  ] });
}
export {
  Results as default
};
