import { jsxs, jsx } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
/* empty css                  *//* empty css                  */function Testimonial({ testimonials }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination, Autoplay],
        loop: true,
        spaceBetween: 50,
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          1200: {
            slidesPerView: 3
          }
        },
        autoplay: true,
        pagination: {
          el: ".swiper-testimonial-section-custom-pagination",
          clickable: true
        },
        children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "w-full min-h-[10rem] grid grid-cols-3 gap-2 rounded-xl border-2 p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-vicentra-pink h-[6.5rem] lg:h-[7rem] rounded-md overflow-hidden", children: testimonial.image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${testimonial.image}`,
              alt: testimonial.person,
              className: "w-full h-full"
            }
          ) : null }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-md font-semibold", children: testimonial.person }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-normal mt-2", children: testimonial.content })
          ] })
        ] }) }, index))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center items-center mt-4", children: /* @__PURE__ */ jsx("div", { className: "swiper-testimonial-section-custom-pagination w-fit" }) })
  ] });
}
export {
  Testimonial as default
};
