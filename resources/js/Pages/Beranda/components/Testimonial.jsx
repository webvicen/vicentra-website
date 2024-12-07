import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../assets/css/custom.css";

export default function Testimonial() {
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
                <SwiperSlide>
                    <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                        <div>
                            <h1 className="text-md font-semibold">
                                Architecture Cutting Surabaya
                            </h1>
                            <p className="text-sm font-normal mt-3">
                                Untuk mesinnya oke, pelayanan cukup baik, tim
                                teknisi juga oke memberikan arahan dan solusi
                                dengan baik.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                        <div>
                            <h1 className="text-md font-semibold">
                                Architecture Cutting Surabaya
                            </h1>
                            <p className="text-sm font-normal mt-3">
                                Untuk mesinnya oke, pelayanan cukup baik, tim
                                teknisi juga oke memberikan arahan dan solusi
                                dengan baik.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                        <div>
                            <h1 className="text-md font-semibold">
                                Architecture Cutting Surabaya
                            </h1>
                            <p className="text-sm font-normal mt-3">
                                Untuk mesinnya oke, pelayanan cukup baik, tim
                                teknisi juga oke memberikan arahan dan solusi
                                dengan baik.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                        <div>
                            <h1 className="text-md font-semibold">
                                Architecture Cutting Surabaya
                            </h1>
                            <p className="text-sm font-normal mt-3">
                                Untuk mesinnya oke, pelayanan cukup baik, tim
                                teknisi juga oke memberikan arahan dan solusi
                                dengan baik.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                        <div>
                            <h1 className="text-md font-semibold">
                                Architecture Cutting Surabaya
                            </h1>
                            <p className="text-sm font-normal mt-3">
                                Untuk mesinnya oke, pelayanan cukup baik, tim
                                teknisi juga oke memberikan arahan dan solusi
                                dengan baik.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[12rem] flex items-center rounded-xl border-2 p-5">
                        <div>
                            <h1 className="text-md font-semibold">
                                Architecture Cutting Surabaya
                            </h1>
                            <p className="text-sm font-normal mt-3">
                                Untuk mesinnya oke, pelayanan cukup baik, tim
                                teknisi juga oke memberikan arahan dan solusi
                                dengan baik.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex gap-2 justify-center items-center mt-4">
                <div className="swiper-testimonial-section-custom-pagination w-fit" />
            </div>
        </div>
    );
}
