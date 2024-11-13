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

import work01 from "./assets/work/01.png";
import work02 from "./assets/work/02.png";
import work03 from "./assets/work/03.png";
import work04 from "./assets/work/04.png";

import news01 from "./assets/news/01.png";
import news02 from "./assets/news/02.png";
import news03 from "./assets/news/03.png";

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
      <Footer />
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
      <WorksSection />
      <StatsSection />
      <NewsSection />
      <ContactSection />
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
    <section
      id="about"
      className="px-12  mt-[80px] xl:mt-[200px] relative z-20"
    >
      <div className="flex space-y-12 flex-col xl:flex-row-reverse text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
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
      <div className="px-12  mx-auto flex flex-col xl:flex-row justify-center items-center gap-12">
        <img src={brand01} alt="brand-logo" />
        <img src={brand02} alt="brand-logo" />
        <img src={brand03} alt="brand-logo" />
        <img src={brand04} alt="brand-logo" />
        <img src={brand05} alt="brand-logo" />
      </div>
    </section>
  );
};

const WorksSection = () => {
  return (
    <section
      id="works"
      className="px-12 works mt-[80px] xl:mt-[200px] relative z-20"
    >
      <div className="flex flex-col space-y-12 justify-center items-center text-center mb-24">
        <h2 className="works__title h2 mb-4 ">Follow Our Projects</h2>
        <p className="works__subTitle max-w-3xl">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.p
        </p>
      </div>
      <div className=" works__grid grid grid-cols-1 xl:grid-cols-2 gap-[50px]">
        {/* Work 1 */}
        <div className="w-full h-full">
          <img className="mb-6 w-full" src={work02} alt="work-image" />
          <div className="flex justify-between items-center w-full">
            <div>
              <h3>Modern Kitchen</h3>
              <p>Decor/Architecture</p>
            </div>
            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
              <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
            </button>
          </div>
        </div>
        {/* Work 2 */}
        <div className="w-full h-full">
          <img className="mb-6 w-full" src={work01} alt="work-image" />
          <div className="flex justify-between items-center w-full">
            <div>
              <h3>Modern Kitchen</h3>
              <p>Decor/Architecture</p>
            </div>
            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
              <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
            </button>
          </div>
        </div>
        {/* Work 3 */}
        <div className="w-full  h-full">
          <img className="mb-6 w-full" src={work04} alt="work-image" />
          <div className="flex justify-between items-center w-full">
            <div>
              <h3>Modern Kitchen</h3>
              <p>Decor/Architecture</p>
            </div>
            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
              <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
            </button>
          </div>
        </div>
        {/* Work 4 */}
        <div className="w-full  h-full">
          <img className="mb-6 w-full" src={work03} alt="work-image" />
          <div className="flex justify-between items-center w-full">
            <div>
              <h3>Modern Kitchen</h3>
              <p>Decor/Architecture</p>
            </div>
            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
              <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section
      id="stats"
      className="stats mt-[80px] xl:mt-[200px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]"
    >
      <div className="px-12">
        <div className="stats__grid grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="stats_item text-center xl:border-r xl:border-accent">
            <h3 className="h1 font-primary text-accent">12</h3>
            <p>Years Of Experience</p>
          </div>
          <div className="stats_item text-center xl:border-r xl:border-accent">
            <h3 className="h1 font-primary text-accent">85</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stats_item text-center xl:border-r xl:border-accent">
            <h3 className="h1 font-primary text-accent">15</h3>
            <p>Active Projects</p>
          </div>
          <div className="stats_item text-center">
            <h3 className="h1 font-primary text-accent">95</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  return (
    <section
      id="news"
      className="news px-12 mt-[50px] xl:mt-[100px] relative z-20"
    >
      <div className="w-full text-center mb-[52px] flex flex-col justify-center items-center space-y-12">
        <h2 className="news_title h2 mb-3">Articles & News</h2>
        <p className="news_subtitle max-w-3xl">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div className="news_grid grid grid-cols-1 xl:grid-cols-3 gap-[30px]">
        <div className="news_item w-full max-w-[400px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto">
          <img className="mb-5 w-full bg-center" src={news01} />
          <div className="flex flex-col gap-[30px]">
            <h3 className="h3">
              Let’s Get Solution For Building Construction Work
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-base">22 June, 2024</p>
              <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="news_item w-full max-w-[400px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto">
          <img className="mb-5 w-full bg-center" src={news02} />
          <div className="flex flex-col gap-[30px]">
            <h3 className="h3">Low Cost Latest Invented Interior Designing</h3>
            <div className="flex justify-between items-center">
              <p className="text-base">24 June,2024</p>
              <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="news_item w-full max-w-[400px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto">
          <img className="mb-5 w-full bg-cover" src={news03} />
          <div className="flex flex-col gap-[30px]">
            <h3 className="h3">
              Best For Any Office & Business Interior Solution
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-base">28 June, 2024</p>
              <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="contact relative mt-[50px] xl:mt-[100px] mx-12 z-20"
    >
      <div className="contact__container mx-auto bg-primary rounded-[70px] p-20 ">
        <div className="contact_text text-center max-w-[640px] mx-auto">
          <h3 className="h2 text-white mb-4">Do you want to join Interno?</h3>
          <p className="text-white mb-12">
            It is a long established fact will be distracted.
          </p>
          <button className="btn bg-accent mx-auto">
            Connect with us
            <i className="ri-arrow-right-line text-primary"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer relative mt-[50px] xl:mt-[100px] mx-12 z-20"
    >
      <div className="flex flex-col xl:flex-row gap-26 xl:gap-36 mx-auto ">
        <div className="w-full w-max-[400px] flex flex-col items-center xl:items-start space-y-8 text-center xl:text-start mb-8">
          <a>
            <img src={logo} alt="logo" />
          </a>
          <p className="text-xl">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <ul className="text-primary flex flex-row gap-14 justify-center items-center xl:justify-start ">
            <li>
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-linkedin-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-instagram-fill"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col xl:flex-row text-center xl:text-start gap-12 xl:gap-28 justify-center xl:justify-end">
          {/* Pages */}
          <div className="foooter__item">
            <h3 className="h3 mb-3 ">Pages</h3>
            <ul className="flex flex-col gap-4">
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Our Works</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="foooter__item">
            <h3 className="h3 mb-3 ">Services</h3>
            <ul className="flex flex-col gap-4">
              <li>Kitchen</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <li>Bedroom</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="foooter__item max-w-[260px] mx-auto xl:mx-0">
            <h3 className="h3 mb-3 ">Contact</h3>
            <ul className="flex flex-col gap-6 text-xl">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer_copyright mt-12 p-12 text-xl text-center xl:border-t bg-white">
        Copyright © Interno 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default App;
