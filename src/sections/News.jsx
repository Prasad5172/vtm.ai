import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import Arrow from "../Assets/Arrow";

function NewsSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position relative to container
      const opacity = Math.min(1, (scrollTop - containerTop + viewportHeight) / containerHeight);

      // Calculate translation value for content (X-direction)
      const translation = Math.min(400, 400 - 400 * opacity);

      // Apply opacity and translation to content
      contentRef.current.style.opacity = opacity;
      contentRef.current.style.transform = `translateX(${translation}px)`;

      // Apply opacity to image
      imageRef.current.style.opacity = opacity;
      headingRef.current.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);

    // Call handleScroll initially to handle pre-scrolled content
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="px-10 md:px-32 mt-32 text-[#111920] dark:text-white overflow-x-hidden">
      <div className="items-center mb-6 text-center lg:text-left md:text-center">
        <h2 className="text-[36px] md:text-[40px] leading-9 md:leading-normal font-bold " ref={headingRef}>
          Latest News
        </h2>
      </div>

      <div className="grid  space-x-6 grid-col-1 md:grid-cols-1 lg:grid-cols-2 text-center md:text-left">
        <div className="md:justify-center  justify-center lg:justify-start xl:justify-start 2xl:justify-start inline-flex items-center ">
          <div className="flex justify-start ">
            <img
              ref={imageRef}
              className="object-cover rounded h-[300px] w-full"
              src="news-1.png"
            />
          </div>
        </div>
        <div ref={contentRef} className="justify-center text-left   inline-flex items-center">
          <div>
            <h2 className="text-[30px] md:text-[23px] leading-[40px] font-bold my-2 text-center lg:text-left md:text-left">
              {/* Victoriam launching the Speech Therapists  */}
              Victoriam Introduces Next Generation Speech Therapy
            </h2>
            <p className="text-center  text-[15.5px] tracking-lighter lg:text-left md:text-[14px] lg:text-[15.5px] mt-6  lg:tracking-lighter">
              Embark on a transformative journey with IzzyAI's comprehensive
              assessment, leveraging cutting-edge AI models. These assessments
              meticulously analyze your speech patterns, precisely identifying
              areas for enhancement. Our personalized approach guarantees
              optimal therapy outcomes from the outset. With IzzyAI, monitoring
              your progress becomes effortless. Post each session, gain detailed
              reports showcasing improvements, highlighting areas requiring
              further attention, and providing insights into your overall speech
              evolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
