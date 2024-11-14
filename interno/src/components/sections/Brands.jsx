import ScrollReveal from "scrollreveal";

import brand01 from "../../assets/brands/01.svg";
import brand02 from "../../assets/brands/02.svg";
import brand03 from "../../assets/brands/03.svg";
import brand04 from "../../assets/brands/04.svg";
import brand05 from "../../assets/brands/05.svg";

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".brands__img", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
  delay: 600,
});

const Brands = () => {
  return (
    <section id="brands" className=" mt-[100px] xl:mt-[200px] relative z-20">
      <div className="px-12 lg:px-24 mx-auto flex flex-col xl:flex-row justify-center items-center gap-12">
        <img className="brands__img" src={brand01} alt="brand-logo" />
        <img className="brands__img" src={brand02} alt="brand-logo" />
        <img className="brands__img" src={brand03} alt="brand-logo" />
        <img className="brands__img" src={brand04} alt="brand-logo" />
        <img className="brands__img" src={brand05} alt="brand-logo" />
      </div>
    </section>
  );
};

export default Brands;
