import logo from "../assets/logo.svg";

const toggleButton = () => {
  const navMenu = document.querySelector("#nav_menu");
  navMenu.classList.toggle("nav-is-open");
};
const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-30 px-12 lg:px-24 py-8">
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
            className="fixed lg:relative flex flex-col items-end lg:flex-row lg:justify-end gap-4 lg:gap-8 h-0 lg:h-auto w-full left-0 right-0 mt-6 lg:mt-0 lg:p-0 px-12 overflow-hidden transition-all duration-300"
            id="nav_menu"
          >
            <li>
              <a href="#hero">Home</a>
            </li>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
