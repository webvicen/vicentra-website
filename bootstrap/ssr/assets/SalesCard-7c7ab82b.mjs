import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { FaWhatsapp } from "react-icons/fa";
function SalesCard({ sales, slider, order }) {
  const { url } = usePage();
  const [baseUrl, setBaseUrl] = useState("");
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${sales.phone}&text=Hallo%20Kak%20Mau%20Tanya%20${slider.name.split(" ").join("%20")}%20${baseUrl}${url}`;
  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: linkWhatsapp,
      target: "_blank",
      "data-sales": sales.name.toLowerCase(),
      className: `sales_cta_link h-[5rem] flex items-center gap-[1.5rem] rounded-full relative py-2 pl-[7rem] ${order == 1 ? "bg-vicentra-blue" : "bg-green-600"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[5.5rem] h-[5.5rem] rounded-full border-[0.188rem] border-white relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${sales.image}`,
              alt: sales.name,
              className: "rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-[1.5rem] h-[1.5rem] flex justify-center items-center bg-white rounded-full absolute right-[-0.75rem] top-[50%] transform translate-y-[-50%]", children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-green-500" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mr-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-sm font-medium text-white/50 capitalize", children: sales.name }),
            /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center text-xs font-semibold text-white bg-white/20 px-2 rounded-md capitalize", children: "online" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm font-medium text-white mt-1", children: "Ada yang bisa saya bantu terkait promo ini?" })
        ] })
      ]
    }
  );
}
export {
  SalesCard as default
};
