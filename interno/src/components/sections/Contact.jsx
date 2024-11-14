import ScrollReveal from "scrollreveal";
const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 600,
});

sr.reveal(".contact__container", { origin: "bottom" });
sr.reveal(".contact_text", { origin: "bottom", delay: 800 });

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact relative mt-[100px] xl:mt-[200px] px-12 lg:px-24 z-20"
    >
      <div className="contact__container w-full mx-auto bg-primary rounded-[70px] p-20 ">
        <div className="contact__text text-center max-w-[640px] mx-auto">
          <h3 className="h2 text-white mb-4">Do you want to join Interno?</h3>
          <p className="text-white mb-12">
            It is a long established fact will be distracted.
          </p>
          <button className="btn btn-accent mx-auto">
            Connect with us
            <i className="ri-arrow-right-line text-primary"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
