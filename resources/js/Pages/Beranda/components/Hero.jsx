import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../assets/css/custom.css";

export default function Hero() {
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
                <SwiperSlide>
                    <div className="w-full h-[50vh] lg:h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl">
                        <h1 className="text-white">Slide 1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[50vh] lg:h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl">
                        <h1 className="text-white">Slide 2</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[50vh] lg:h-[80vh] bg-vicentra-blue flex justify-center items-center rounded-xl">
                        <h1 className="text-white">Slide 3</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex gap-2 justify-center items-center mt-4">
                <div className="swiper-hero-section-custom-pagination w-fit" />
            </div>
        </div>
    );
}
