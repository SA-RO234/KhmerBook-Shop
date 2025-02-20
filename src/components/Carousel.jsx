// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  faAngleDoubleRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = ({ Avertiment }) => {
  return (
    <Swiper
      // Install swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      pagination={{ clickable: true }}
    >
      {Avertiment.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="carousel-container  pl-[50px] w-full flex justify-evenly items-center h-[500px]">
            <div className="carousel-main ">
              <h4 className="text-[25px] font-bokor">សៀវភៅ</h4>
              <h2 className="title text-maroon text-[50px]  font-bokor">
                {item.title}
              </h2>
              <h4 className="text-[30px]  font-bokor">តម្លៃ</h4>
              <h1 className=" text-maroon text-[50px]  font-bokor font-bold">
                {item.price}
                <sup>៛​</sup>
              </h1>
              <button
                type="button"
                className="bg-black absolute bottom-[70px] left-[200px] font-bokor  p-[10px_30px] flex gap-[10px] items-center justify-center rounded-[25px] group text-white cursor-pointer hover:bg-primary duration-[0.3s] border-none"
              >
                ជាវឥឡូវនេះ
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="group-hover:inline-block hidden duration-[0.8s]"
                ></FontAwesomeIcon>
              </button>
            </div>
            <img className="w-[350px] h-[350px] object-cover" src={item.img} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
