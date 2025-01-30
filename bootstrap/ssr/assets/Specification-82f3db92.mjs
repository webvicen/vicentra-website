import { jsxs, jsx } from "react/jsx-runtime";
const specification = "";
function Specification({ product }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Spesifikasi Mesin" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "specification_table_content mt-4",
        dangerouslySetInnerHTML: { __html: product.specification }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-[1rem]", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs mb-0", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg text-red-500", children: "*" }),
        "Spesifikasi di atas dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs mb-0", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg text-red-500", children: "*" }),
        "Untuk informasi lebih lanjut silahkan hubungi tim sales kami melalui link contact diatas."
      ] })
    ] })
  ] });
}
export {
  Specification as default
};
