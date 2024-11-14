import "./App.css";

import {
  Footer,
  Header,
  Hero,
  Steps,
  AboutUs,
  Testimonials,
  Brands,
  Works,
  Stats,
  News,
  Contact,
} from "../src/components";

const App = () => {
  return (
    <div className="bg-white max-w-[7680px] mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Main = () => {
  return (
    <main className="mx-auto overflow-hidden">
      <Hero />
      <Steps />
      <AboutUs />
      <Testimonials />
      <Brands />
      <Works />
      <Stats />
      <News />
      <Contact />
    </main>
  );
};

export default App;
