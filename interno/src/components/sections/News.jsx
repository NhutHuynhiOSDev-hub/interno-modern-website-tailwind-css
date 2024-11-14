import ScrollReveal from "scrollreveal";

import news01 from "../../assets/news/01.png";
import news02 from "../../assets/news/02.png";
import news03 from "../../assets/news/03.png";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".news__title", { origin: "bottom", delay: 800 });
sr.reveal(".news__subtitle", { origin: "bottom", delay: 800 });
sr.reveal(".news__grid", { origin: "bottom", delay: 800 });
sr.reveal(".news__item", {
  origin: "bottom",
  distance: "100px",
  delay: 1000,
  interval: 100,
});

const News = () => {
  return (
    <section
      id="news"
      className="news px-12 lg:px-24 mt-[100px] xl:mt-[200px] relative z-20"
    >
      <div className="w-full text-center mb-[52px] flex flex-col justify-center items-center space-y-12">
        <h2 className="news__title h2 mb-3">Articles & News</h2>
        <p className="news__subtitle max-w-3xl">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[30px]">
        <div className="news__item w-full max-w-[400px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto">
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
        <div className="news__item w-full max-w-[400px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto">
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
        <div className="news__item w-full max-w-[400px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto">
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

export default News;
