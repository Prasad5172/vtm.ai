import React, { useEffect, useRef } from "react";
import 'aos/dist/aos.css';

function AboutSection() {
  const introductionRef = useRef(null);
  const ambitionRef = useRef(null);
  const journeyRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      // Calculate opacity for introduction
      const introRect = introductionRef.current.getBoundingClientRect();
      const introOpacity = Math.min(1, 1.8 *(viewportHeight - introRect.top) / viewportHeight);
      introductionRef.current.style.opacity = introOpacity;

      // Calculate opacity for ambition
      const ambitionRect = ambitionRef.current.getBoundingClientRect();
      const ambitionOpacity = Math.min(1, 1.8 *(viewportHeight - ambitionRect.top) / viewportHeight);
      ambitionRef.current.style.opacity = ambitionOpacity;

      // Calculate opacity for journey
      const journeyRect = journeyRef.current.getBoundingClientRect();
      const journeyOpacity = Math.min(1, 1.8 *(viewportHeight - journeyRect.top) / viewportHeight);
      journeyRef.current.style.opacity = journeyOpacity;

      // Calculate opacity for images
      const image1Rect = image1Ref.current.getBoundingClientRect();
      const image1Opacity = Math.min(1, 1.8 *(viewportHeight - image1Rect.top) / viewportHeight);
      image1Ref.current.style.opacity = image1Opacity;

      const image2Rect = image2Ref.current.getBoundingClientRect();
      const image2Opacity = Math.min(1, 1.8 *(viewportHeight - image2Rect.top) / viewportHeight);
      image2Ref.current.style.opacity = image2Opacity;

      const image3Rect = image3Ref.current.getBoundingClientRect();
      const image3Opacity = Math.min(1, 1.8 *(viewportHeight - image3Rect.top) / viewportHeight);
      image3Ref.current.style.opacity = image3Opacity;
    };

    window.addEventListener("scroll", handleScroll);

    // Call handleScroll initially to handle pre-scrolled content
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <section
      id="research"
      className="grid grid-cols-1 md:grid-cols-1 text-center md:text-center w-full gap-20 md:gap-32 my-24 md:my-32 px-12 md:px-32 overflow-x-hidden overflow-y-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-16">
        <div className="text-center lg:text-left md:text-left order-2 md:order-none" ref={introductionRef}>
          <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">Introduction</h2>
          <p className="my-4 text-center text-[15.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
            Dive into a world where technology enhances life and work in unimaginable ways. At Victoriam, we're passionate about creating AI solutions that are not just advanced, but also intuitive and tailored to meet the evolving needs of our world.
          </p>
        </div>
        <div style={{ height: "290px", width: "100%" }} className="md:order-none" ref={image1Ref}>
          <img style={{ height: "100%", width: "100%" }} className="rounded-md" src="/about-1.jpg" alt="about-1" data-aos="fade-right"  />
        </div>
        <div style={{ height: "290px", width: "100%" }} className="order-3 md:order-none" ref={image2Ref}>
          <img style={{ height: "100%", width: "100%" }} className="rounded-md" src="/about-2.jpg" alt="about-2" data-aos="fade-up" />
        </div>
        <div className="text-center lg:text-left md:text-left order-4 md:order-none" ref={ambitionRef}>
          <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">Our Ambition Is Simple</h2>
          <p className="my-4 text-center text-[15.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
            To integrate AI into everyday life, making it more efficient, creative, and enjoyable. We envision a future where our innovations serve as the backbone for this transformation, accessible to all.
          </p>
        </div>
        <div className="text-center lg:text-left md:text-left order-6 md:order-none" ref={journeyRef}>
          <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">Our Journey</h2>
          <p className="my-4 text-center text-[15.5px] tracking-lighter lg:text-left lg:text-[15.5px] mt-6 lg:tracking-lighter text-[#111920] dark:text-white">
            From a spark of inspiration to a beacon of innovation, Victoriam has always been driven by the potential of AI to change the world. Our journey is marked by a commitment to excellence, curiosity, and a deep desire to make a positive impact.
          </p>
        </div>
        <div style={{ height: "290px", width: "100%" }} className="order-5 md:order-none" ref={image3Ref}>
          <img style={{ height: "100%", width: "100%" }} className="rounded-md" src="/about-3.jpg" alt="about-3" data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
