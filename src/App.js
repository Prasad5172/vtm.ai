import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import ProductsSection from "./sections/Products";
import NewsSection from "./sections/News";
import DirectorsSection from "./sections/Directors";
import FAQSection from "./sections/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <head>
        <title>VICTORIUM</title>
        <meta
          name="description"
          content="Dive into a world where technology enhances life and work in unimaginable ways. At Victoriam, we're passionate about creating Al solutions that are not just advanced, but also intuitive and tailored to meet the evolving needs of our world."
        />
      </head>
      <div className="dark:bg-[#111920] scroll-smooth">
        <header>
          <Navbar />
        </header>

        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <NewsSection />
        <DirectorsSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
