import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".steps__text", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
});

const Steps = () => {
  return (
    <section id="steps" className="mt-[100px] xl:mt-[200px] relative z-20">
      <div className="px-12 lg:px-48">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          {/* Step 1 */}
          <div className="steps__text flex flex-col justify-center items-center space-y-6 p-5 text-center ">
            <i className="ri-compasses-2-line text-5xl text-accent"></i>
            <h3 className="h3">Project Planning</h3>
            <p className="text-center">
              There are many variations of the passages of lorem Ipsum from
              available, majority. Btn text: Read more
            </p>
            <a href="#" className="font-medium flex justify-center gap-2">
              Read more
              <i className="text-accent ri-arrow-right-line"></i>
            </a>
          </div>
          {/* Step 2 */}
          <div className="steps__text flex flex-col justify-center items-center space-y-5 p-5 text-center ">
            <i className="ri-magic-line text-5xl text-accent"></i>
            <h3 className="h3">Gaining Materials</h3>
            <p className="text-center">
              There are many variations of the passages of lorem Ipsum from
              available, majority. Btn text: Read more
            </p>
            <a href="#" className="font-medium flex justify-center gap-2">
              Read more
              <i className="text-accent ri-arrow-right-line"></i>
            </a>
          </div>
          {/* Step 3 */}
          <div className="steps__text flex flex-col justify-center items-center space-y-5 p-5 text-center ">
            <i className="ri-tools-line text-5xl text-accent"></i>
            <h3 className="h3">Project Execution</h3>
            <p className="text-center">
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

export default Steps;
