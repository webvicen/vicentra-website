import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../assets/css/custom.css";

export default function Brands({ brands }) {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
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
                    el: ".swiper-brand-section-custom-pagination",
                    clickable: true,
                }}
            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[12rem] flex justify-center items-center rounded-xl border-2 p-5">
                            <img
                                src={`/storage/${brand.image}`}
                                alt={brand.slug}
                                className="h-[5rem] aspect-[2/1] object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-2 justify-center items-center mt-4">
                <div className="swiper-brand-section-custom-pagination w-fit" />
            </div>
        </div>
    );
}
