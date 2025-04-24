import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "../../../assets/css/custom.css";

export default function Hero({ sliders, isSticky }) {
    return (
        <div className={`swiper-container ${isSticky ? "sticky-slider" : ""}`}>
            <button
                className="swiper-button-prev"
                aria-label="Slide ke sebelumnya"
            ></button>
            <button
                className="swiper-button-next"
                aria-label="Slide ke berikutnya"
            ></button>
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
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
                            data-promo-name={slider.slug.replace(/-/g, "_")}
                            className="slider_promo_link w-full bg-vicentra-blue flex justify-center items-center rounded-xl overflow-hidden"
                        >
                            {index === 0 ? (
                                <>
                                    <img
                                        src={`/storage/${slider.image_desktop}`}
                                        alt={slider.name}
                                        className="w-full h-auto object-cover hidden lg:block"
                                        width="1280"
                                        height="512"
                                        fetchpriority="high"
                                        loading="eager"
                                    />
                                    <img
                                        src={`/storage/${slider.image_mobile}`}
                                        alt={slider.name}
                                        className="w-full h-auto object-cover lg:hidden"
                                        fetchpriority="high"
                                        loading="eager"
                                    />
                                </>
                            ) : (
                                <>
                                    <img
                                        src={`/storage/${slider.image_desktop}`}
                                        alt={slider.name}
                                        className="w-full h-auto object-cover hidden lg:block"
                                        width="1280"
                                        height="512"
                                        loading="lazy"
                                    />
                                    <img
                                        src={`/storage/${slider.image_mobile}`}
                                        alt={slider.name}
                                        className="w-full h-auto object-cover lg:hidden"
                                        loading="lazy"
                                    />
                                </>
                            )}
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="pagination flex gap-2 justify-center items-center mt-4">
                <div className="swiper-hero-section-custom-pagination w-fit" />
            </div>
        </div>
    );
}
