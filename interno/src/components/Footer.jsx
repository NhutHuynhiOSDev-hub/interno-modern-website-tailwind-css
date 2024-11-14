import logo from "../assets/logo.svg";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".footer__item", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
});
sr.reveal(".footer__copyright", { origin: "bottom", delay: 800 });

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer relative mt-[100px] xl:mt-[200px] px-12 lg:px-24 z-20"
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
          <div className="footer__item">
            <h3 className="h3 mb-3 ">Pages</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#works">Our Works</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__item">
            <h3 className="h3 mb-3 ">Services</h3>
            <ul className="flex flex-col gap-4">
              <li>Kitchen</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <li>Bedroom</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
            <h3 className="h3 mb-3 ">Contact</h3>
            <ul className="flex flex-col gap-6 text-xl">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer__copyright mt-12 p-12 text-xl text-center xl:border-t bg-white">
        Copyright © Interno 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
