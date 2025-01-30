import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { usePage } from "@inertiajs/react";
import SalesCard from "./SalesCard-7c7ab82b.mjs";
import "react";
import "react-icons/fa";
const PatternShowcasePage = "http://127.0.0.1:8000/build/assets/pattern-showcase-page-d4023bd1.webp";
const VicentraLogoShowcase = "http://127.0.0.1:8000/build/assets/logo-vicentra-showcase-d76398cc.webp";
function Show({ slider, teamSales }) {
  const { keywords } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - ",
        slider.name
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: `Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - ${slider.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: `Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`
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
          content: `https://vicentra.co.id/showcase/${slider.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - ${slider.name}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: `Silakan nikmati promo ${slider.name}, hanya di Vicentra! Jangan lewatkan kesempatan emas untuk berbelanja hemat dan membawa pulang produk impian Anda. Buruan, promo terbatas sampai stok habis!`
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
          content: `https://vicentra.co.id/showcase/${slider.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-screen flex flex-col justify-center items-center bg-red-400 overflow-x-hidden py-10",
        style: {
          backgroundImage: `url(${PatternShowcasePage})`
          // backgroundSize: "cover",
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: VicentraLogoShowcase,
                alt: "vicentra-logo-showcase",
                className: "w-[10rem] h-[10rem] rounded-full"
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl font-bold uppercase text-white mt-4", children: "vicentra" }),
            /* @__PURE__ */ jsx("h2", { className: "text-center text-xl font-bold uppercase text-white mt-4", children: slider.name }),
            /* @__PURE__ */ jsxs("div", { className: "w-[90vw] lg:w-[50vw] h-[15rem] lg:h-[20rem] bg-vicentra-blue rounded-md overflow-hidden mt-5", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_desktop}`,
                  alt: slider.name,
                  className: "w-full h-full hidden lg:block"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_mobile}`,
                  alt: slider.name,
                  className: "w-full h-full lg:hidden"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-[90vw] lg:w-[50vw] flex flex-col space-y-4 mt-10", children: teamSales.map((sales, index) => /* @__PURE__ */ jsx(
            SalesCard,
            {
              sales,
              slider,
              order: index + 1
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-white mt-10", children: [
            "Copyright ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " vicentra.com"
          ] }) })
        ]
      }
    )
  ] });
}
export {
  Show as default
};
