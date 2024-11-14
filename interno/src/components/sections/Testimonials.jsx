import ScrollReveal from "scrollreveal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import test01 from "../../assets/testimonial/01.png";
import test02 from "../../assets/testimonial/02.png";
import test03 from "../../assets/testimonial/03.png";
import test04 from "../../assets/testimonial/04.png";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".testimonials__bg", { origin: "bottom", delay: 800 });
sr.reveal(".testimonials__title", { origin: "bottom" });
sr.reveal(".testimonials__slider", { origin: "bottom", delay: 1000 });

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials mt-[100px] xl:mt-[200px] relative z-20"
    >
      <div className="testimonials__bg p-12 bg-accent-secondary rounded-[70px] ">
        <div className="w-full">
          <h2 className="testimonials__title h2 text-center my-12">
            What clients say
          </h2>
          <Swiper
            className="testimonials__slider h-[400px] w-full"
            loop={true}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              320: {
                // width: 32r0,
                slidesPerView: 1,
              },
              960: {
                // width: 960,
                slidesPerView: 2,
              },
              1200: {
                // width: 1200,
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px] mx-auto">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <img src={test01} />
                  <div className="flex flex-col items-center space-y-2">
                    <h3>Nattasha Mith</h3>
                    <p>Greenville, USA</p>
                  </div>
                </div>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px] mx-auto">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <img src={test02} />
                  <div className="flex flex-col items-center space-y-2">
                    <h3>Jessica White</h3>
                    <p>Oak Ridge, USA</p>
                  </div>
                </div>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px] mx-auto">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <img src={test03} />
                  <div className="flex flex-col items-center space-y-2">
                    <h3>Mike Davis</h3>
                    <p>Berlin, Germany</p>
                  </div>
                </div>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px] mx-auto">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <img src={test04} />
                  <div className="flex flex-col items-center space-y-2">
                    <h3>Olivia Wilson</h3>
                    <p>Blue Ridge, France</p>
                  </div>
                </div>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
