import "./App.css";
import logo from "./assets/logo.svg";

const toggleButton = () => {
  const navMenu = document.querySelector("#nav_menu");

  console.log("CLICK: ", navMenu);
  navMenu.classList.toggle("nav-is-open");
};

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white px-12 py-8">
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
            className="bg-white lg:h-auto h-0 fixed lg:relative w-full mt-9 px-12 lg:mt-0 lg:p-0 left-0 right-0 overflow-hidden border-top lg:border-none flex flex-col lg:flex-row gap-4 transition-all duration-300"
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
      {/* Hero */}
      <section className="hero h-[740px] xl:h-[840px] bg-hero bg-cover lg:bg-center bg-no-repeat xl:rounded-bl-[290px] relative z-20">
        <div className="mx-auto lg:mx-24 h-full flex items-center justify-center xl:justify-start">
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
      {/* Steps */}
      <section className="mt-[80px] xl:mt-[200px] relative z-20">
        <div className="px-12">
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
      <div className="h-[3000px] bg-slate-300"></div>
    </main>
  );
};

export default App;
