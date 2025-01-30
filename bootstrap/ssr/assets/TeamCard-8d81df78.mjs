import { jsxs, jsx } from "react/jsx-runtime";
function TeamCard({ sales }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md overflow-hidden shadow-md", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gray-300 h-[10rem]" }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-base text-center font-semibold text-gray-800", children: "Tim Sales" }),
      /* @__PURE__ */ jsx("h2", { className: "text-sm text-center font-normal text-gray-500 mt-[0.5rem]", children: sales.name })
    ] })
  ] });
}
export {
  TeamCard as default
};
