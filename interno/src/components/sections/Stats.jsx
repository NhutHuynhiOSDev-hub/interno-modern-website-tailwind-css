import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".stats", { origin: "bottom" });
sr.reveal(".stats__item", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
});

const Stats = () => {
  return (
    <section
      id="stats"
      className="stats mt-[100px] xl:mt-[200px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]"
    >
      <div className="px-12 lg:px-24">
        <div className=" grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 font-primary text-accent">12</h3>
            <p>Years Of Experience</p>
          </div>
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 font-primary text-accent">85</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 font-primary text-accent">15</h3>
            <p>Active Projects</p>
          </div>
          <div className="stats__item text-center">
            <h3 className="h1 font-primary text-accent">95</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
