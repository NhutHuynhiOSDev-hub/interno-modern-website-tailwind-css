import ScrollReveal from "scrollreveal";
import about from "../../assets/about/img.png";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 800 });

function AboutUs() {
  return (
    <section
      id="about"
      className="px-12 lg:px-48 mt-[100px] xl:mt-[200px] relative z-20"
    >
      <div className="flex space-y-12 flex-col xl:flex-row-reverse text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
        {/* Image */}
        <div className="about__img about max-w-[553px]">
          <img src={about} />
        </div>
        <div className="about__text flex flex-col flex-1 space-y-12 justify-center items-center xl:items-start">
          <div className="space-y-6">
            <h2 className="h2">
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
          </div>
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
}

export default AboutUs;
