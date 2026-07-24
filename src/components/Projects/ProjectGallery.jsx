import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "yet-another-react-lightbox/styles.css";

const ProjectGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image,
  }));

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-3xl overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Project ${index + 1}`}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              className="w-full h-[350px] object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Zoom]}
      />
    </>
  );
};

export default ProjectGallery;