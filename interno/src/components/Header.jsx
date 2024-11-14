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
            className="bg-white fixed lg:relative flex flex-col lg:flex-row gap-4 lg:gap-8 h-0 lg:h-auto w-full left-0 right-0 mt-6 lg:mt-0 lg:p-0 px-12 lg:px-24 overflow-hidden transition-all duration-300"
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

export default Header;
