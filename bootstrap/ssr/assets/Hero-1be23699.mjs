import { jsxs, jsx } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
/* empty css                  *//* empty css                  */const navigation = "";
function Hero({ sliders, isSticky }) {
  return /* @__PURE__ */ jsxs("div", { className: `swiper-container ${isSticky ? "sticky-slider" : ""}`, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "swiper-button-prev",
        "aria-label": "Slide ke sebelumnya"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "swiper-button-next",
        "aria-label": "Slide ke berikutnya"
      }
    ),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination, Autoplay, Navigation],
        loop: true,
        spaceBetween: 50,
        slidesPerView: 1,
        autoplay: { delay: 5e3 },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-hero-section-custom-pagination",
          clickable: true
        },
        children: sliders.map((slider, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: slider.type === "promo" ? `/showcase/${slider.slug}` : slider.link,
            target: "_blank",
            "data-promo-name": slider.slug.replace(/-/g, "_"),
            className: "slider_promo_link w-full lg:h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_desktop}`,
                  alt: slider.name,
                  className: "h-full hidden lg:block"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/${slider.image_mobile}`,
                  alt: slider.name,
                  className: "h-full lg:hidden"
                }
              )
            ]
          }
        ) }, index))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pagination flex gap-2 justify-center items-center mt-4", children: /* @__PURE__ */ jsx("div", { className: "swiper-hero-section-custom-pagination w-fit" }) })
  ] });
}
export {
  Hero as default
};
