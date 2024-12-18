import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../assets/css/custom.css";

export default function Hero({ sliders }) {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay
                pagination={{
                    el: ".swiper-hero-section-custom-pagination",
                    clickable: true,
                }}
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <a
                            href={
                                slider.type === "promo"
                                    ? `/showcase/${slider.slug}`
                                    : slider.link
                            }
                            target="_blank"
                            className="w-full lg:h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl overflow-hidden"
                        >
                            <img
                                src={`/storage/${slider.image_desktop}`}
                                alt={slider.name}
                                className="h-full hidden lg:block"
                            />
                            <img
                                src={`/storage/${slider.image_mobile}`}
                                alt={slider.name}
                                className="h-full lg:hidden"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-2 justify-center items-center mt-4">
                <div className="swiper-hero-section-custom-pagination w-fit" />
            </div>
        </div>
    );
}
