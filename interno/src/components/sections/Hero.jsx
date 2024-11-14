import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".hero__text", { origin: "top" });
const Hero = () => {
  return (
    <section
      id="hero"
      className="hero h-[740px] xl:h-[840px] bg-hero bg-cover lg:bg-center bg-no-repeat xl:rounded-bl-[290px] relative z-20"
    >
      <div className="hero__container px-12 lg:px-48 h-full flex items-center justify-center xl:justify-start">
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

export default Hero;
