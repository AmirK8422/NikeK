import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import shoeImage from "../assets/shoe.png";
import "./Slider.css";

const slides = [
  { id: 1, title: "Travis Bandana", img: shoeImage },
  { id: 2, title: "Travis All Black", img: "/productPics/shoe1/AllBlack1.jpg" },
  {
    id: 3,
    title: "Travis Utopia",
    img: "/productPics/shoe13/TravisUtopia.jpg",
  },
  { id: 4, title: "Nike Pink Pony", img: "/productPics/shoe12/nikePony.jpg" },
  {
    id: 5,
    title: "White & Red Converse",
    img: "/productPics/shoe3/whiteRedConverse.jpg",
  },
];

function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={20}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="slider-slide">
            <img src={slide.img} alt={slide.title} className="slider-img" />
            <div className="slider-text">{slide.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
