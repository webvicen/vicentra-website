import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../assets/css/custom.css";

export default function Testimonial({ testimonials }) {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                autoplay
                pagination={{
                    el: ".swiper-testimonial-section-custom-pagination",
                    clickable: true,
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full min-h-[10rem] grid grid-cols-3 gap-2 rounded-xl border-2 p-5">
                            <div className="bg-vicentra-pink h-[8rem] lg:h-[7rem] rounded-md overflow-hidden">
                                {testimonial.image ? (
                                    <img
                                        src={`/storage/${testimonial.image}`}
                                        alt={testimonial.person}
                                        className="w-full h-full"
                                    />
                                ) : null}
                            </div>
                            <div className="col-span-2">
                                <h1 className="text-md font-semibold">
                                    {testimonial.person}
                                </h1>
                                <p className="text-sm font-normal mt-2">
                                    {testimonial.content}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-2 justify-center items-center mt-4">
                <div className="swiper-testimonial-section-custom-pagination w-fit" />
            </div>
        </div>
    );
}
