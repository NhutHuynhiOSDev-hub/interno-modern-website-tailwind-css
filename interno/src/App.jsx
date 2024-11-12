import "./App.css";

import logo from "./assets/logo.svg";
import about from "./assets/about/img.png";
import test01 from "./assets/testimonial/01.png";
import test02 from "./assets/testimonial/02.png";
import test03 from "./assets/testimonial/03.png";
import test04 from "./assets/testimonial/04.png";

import brand01 from "./assets/brands/01.svg";
import brand02 from "./assets/brands/02.svg";
import brand03 from "./assets/brands/03.svg";
import brand04 from "./assets/brands/04.svg";
import brand05 from "./assets/brands/05.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const toggleButton = () => {
  const navMenu = document.querySelector("#nav_menu");
  navMenu.classList.toggle("nav-is-open");
};

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-30 px-12 py-8">
      <div className="flex flex-row justify-between items-center">
        <a href="#">
          <img src={logo} />
        </a>
        <nav>
          {/* Mobile Trigger */}
          <button className="cursor-pointer lg:hidden" onClick={toggleButton}>
            <i className="ri-menu-4-line text-4xl text-primary"></i>
          </button>
          <ul
            className="lg:h-auto h-0 fixed lg:relative w-full mt-9 px-12 lg:mt-0 lg:p-0 left-0 right-0 overflow-hidden border-top lg:border-none flex flex-col lg:flex-row gap-4 transition-all duration-300"
            id="nav_menu"
          >
            <li>Home</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Our Work</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <HeroSection />
      <StepsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <BrandsSection />
      <div className="h-[3000px] bg-slate-300"></div>
    </main>
  );
};

const HeroSection = () => {
  return (
    <section className="hero h-[740px] xl:h-[840px] bg-hero bg-cover lg:bg-center bg-no-repeat xl:rounded-bl-[290px] relative z-20">
      <div className="lg:mx-24 h-full flex items-center justify-center xl:justify-start">
        <div className="hero__text w-[567px] flex space-y-8 flex-col items-center text-center xl:text-left xl:items-start">
          <h1 className="h1">Let Your Home Be Unique</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available,variations of the passages.
          </p>
          <button className="btn btn-primary">
            Get free estimation
            <i className="text-accent ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  return (
    <section id="steps" className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className=" px-12">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col justify-center items-center space-y-5 p-5 text-center ">
            <i className="ri-compasses-2-line text-5xl text-accent"></i>
            <h3 className="h3">Project Planning</h3>
            <p className="max-w-md text-center">
              There are many variations of the passages of lorem Ipsum from
              available, majority. Btn text: Read more
            </p>
            <a href="#" className="font-medium flex justify-center gap-2">
              Read more
              <i className="text-accent ri-arrow-right-line"></i>
            </a>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col justify-center items-center space-y-5 p-5 text-center ">
            <i className="ri-magic-line text-5xl text-accent"></i>
            <h3 className="h3">Gaining Materials</h3>
            <p className="max-w-md text-center">
              There are many variations of the passages of lorem Ipsum from
              available, majority. Btn text: Read more
            </p>
            <a href="#" className="font-medium flex justify-center gap-2">
              Read more
              <i className="text-accent ri-arrow-right-line"></i>
            </a>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col justify-center items-center space-y-5 p-5 text-center ">
            <i className="ri-tools-line text-5xl text-accent"></i>
            <h3 className="h3">Project Execution</h3>
            <p className="max-w-md text-center">
              There are many variations of the passages of lorem Ipsum from
              available, majority. Btn text: Read more
            </p>
            <a href="#" className="font-medium flex justify-center gap-2">
              Read more
              <i className="text-accent ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <section id="about" className=" mt-[80px] xl:mt-[200px] relative z-20">
      <div className="flex px-12 space-y-12 flex-col xl:flex-row-reverse text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
        {/* Image */}
        <div className=" max-w-[553px]">
          <img src={about} />
        </div>
        <div className="flex flex-col flex-1 space-y-12 justify-center items-center xl:items-start">
          <h2 className="h2">We Create The Art Of Stylish Living Stylishly</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          {/* Phone */}
          <div className="flex flex-row justify-center lg:justify-start items-center space-x-8">
            <div className="bg-accent/15 rounded-full w-[93px] h-[93px] flex justify-center items-center">
              <i className="ri-phone-fill text-accent text-4xl"></i>
            </div>
            <div className="flext justify-center items-center text-left space-y-4 ">
              <p className="text-2xl font-bold">0987 653 321</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          {/* Button */}
          <button className="btn btn-primary">
            Get free estimation
            <i className="text-accent ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="mt-[80px] xl:mt-[200px] relative z-20"
    >
      <div className="p-12 bg-accent-secondary rounded-[70px] ">
        <div className="w-full">
          <h2 className="h2 text-center mb-9">What clients say</h2>
          <Swiper
            className=" h-[400px] w-full"
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
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px]">
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
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px]">
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
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px]">
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
              <div className="flex flex-col space-y-2 w-full max-w-[370px] max-h-[450px] bg-white justify-center items-center p-9 rounded-[30px]">
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

const BrandsSection = () => {
  return (
    <section id="brands" className=" mt-[80px] xl:mt-[200px] relative z-20">
      <div className="px-12 flex flex-col xl:flex-row justify-center items-center gap-12">
        <img src={brand01} alt="brand-logo" />
        <img src={brand02} alt="brand-logo" />
        <img src={brand03} alt="brand-logo" />
        <img src={brand04} alt="brand-logo" />
        <img src={brand05} alt="brand-logo" />
      </div>
    </section>
  );
};

export default App;
