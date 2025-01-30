import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { P as PagesLayout } from "./PagesLayout-a424847f.mjs";
import Faq from "./Faq-416bdf32.mjs";
import Testimonial from "./Testimonial-6a44bcce.mjs";
import Hero from "./Hero-1be23699.mjs";
import Why from "./Why-a2467983.mjs";
import Youtube from "./Youtube-9dce7598.mjs";
import "react-icons/fa";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
import "@material-tailwind/react/components/Accordion/index.js";
import "@material-tailwind/react/components/Accordion/AccordionHeader.js";
import "@material-tailwind/react/components/Accordion/AccordionBody.js";
import "swiper/react";
import "swiper/modules";
/* empty css                  *//* empty css                  */import "react-icons/io";
import "react-icons/fa6";
const Beranda = ({ sliders, categoryProducts, testimonials, faqs }) => {
  const isServer = typeof window === "undefined";
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".sticky");
      if (heroSection) {
        const isDesktop = window.innerWidth >= 1280;
        if (window.scrollY > heroSection.offsetHeight && isDesktop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Selamat datang di Vicentra, destinasi utama Anda untuk semua kebutuhan percetakan. Kami menyediakan produk mesin dan bahan baku percetakan terbaik, dengan fokus pada kualitas, dukungan pelanggan, dan layanan purna jual yang unggul. Sejak 2012, kami telah melayani pelanggan di seluruh Indonesia dengan dedikasi penuh terhadap produk percetakan berkualitas tinggi. Hubungi kami untuk informasi lebih lanjut atau dukungan."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: "Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Selamat datang di Vicentra, destinasi utama Anda untuk semua kebutuhan percetakan. Kami menyediakan produk mesin dan bahan baku percetakan terbaik, dengan fokus pada kualitas, dukungan pelanggan, dan layanan purna jual yang unggul. Sejak 2012, kami telah melayani pelanggan di seluruh Indonesia dengan dedikasi penuh terhadap produk percetakan berkualitas tinggi. Hubungi kami untuk informasi lebih lanjut atau dukungan."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vicentra.co.id" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Selamat datang di Vicentra, destinasi utama Anda untuk semua kebutuhan percetakan. Kami menyediakan produk mesin dan bahan baku percetakan terbaik, dengan fokus pada kualitas, dukungan pelanggan, dan layanan purna jual yang unggul. Sejak 2012, kami telah melayani pelanggan di seluruh Indonesia dengan dedikasi penuh terhadap produk percetakan berkualitas tinggi. Hubungi kami untuk informasi lebih lanjut atau dukungan."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "https://vicentra.co.id" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sticky lg:relative top-0 z-[10] bg-white", children: /* @__PURE__ */ jsx(Hero, { sliders, isSticky }) }),
    /* @__PURE__ */ jsx("section", { className: "my-[3.125rem] lg:my-[6.25rem]", children: /* @__PURE__ */ jsx(Why, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "my-[3.125rem] lg:my-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-yellow rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-gray-800 font-semibold capitalize", children: "Produk Kami" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 lg:gap-[2rem] mt-[1.875rem]", children: categoryProducts.map((category, index) => /* @__PURE__ */ jsx(Link, { href: `/product/${category.slug}`, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: `/storage/${category.thumbnail}`,
          alt: `category-${category.slug}`,
          className: "rounded-xl shadow-md"
        }
      ) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gray-100 my-[3.125rem] lg:my-[6.25rem] p-5 rounded-lg", children: /* @__PURE__ */ jsx(Youtube, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "my-[3.125rem] lg:my-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-pink rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "Testimoni Customer" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: /* @__PURE__ */ jsx(Testimonial, { testimonials }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "my-[3.125rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-black rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "FAQ" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem]", children: !isServer ? /* @__PURE__ */ jsx(Faq, { faqs }) : /* @__PURE__ */ jsx("div", { children: "Loading..." }) })
    ] })
  ] });
};
Beranda.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
export {
  Beranda as default
};
