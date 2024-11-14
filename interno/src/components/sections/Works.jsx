import work01 from "../../assets/work/01.png";
import work02 from "../../assets/work/02.png";
import work03 from "../../assets/work/03.png";
import work04 from "../../assets/work/04.png";

import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".works__title", { origin: "bottom" });
sr.reveal(".works__subtitle", { origin: "bottom", delay: 800 });
sr.reveal(".works__grid", { origin: "bottom" });
sr.reveal(".works__item", { origin: "bottom", delay: 600 });

const Works = () => {
  return (
    <section
      id="works"
      className="px-12 lg:px-24 works mt-[100px] xl:mt-[200px] relative z-20"
    >
      <div className="flex flex-col space-y-12 justify-center items-center text-center mb-24">
        <h2 className="works__title h2 mb-4 ">Follow Our Projects</h2>
        <p className="works__subtitle max-w-3xl">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.p
        </p>
      </div>
      <div className="works__grid grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* Work 1 */}
        <div className="works__item w-full h-full">
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
        <div className="works__item w-full h-full">
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
        <div className="works__item w-full h-full">
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
        <div className="works__item w-full h-full">
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

export default Works;
