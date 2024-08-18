import { useEffect, useRef } from "react";
import Arrow from "../Assets/Arrow";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"

function ProductsSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position relative to container
      const opacity = Math.min(1, 1.5*(scrollTop - sectionTop + viewportHeight) / sectionHeight);

      // Calculate translation value for content (X-direction)
      const translation = Math.min(400, 400 - 400 * opacity);

      // Apply opacity and translation to content
      sectionRef.current.style.opacity = opacity;
      gridRef.current.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to handle pre-scrolled content

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  

  return (
    <div id="products" className="px-12 md:px-32 dark:text-white overflow-x-hidden overflow-y-hidden" ref={sectionRef}>
      <h2 className="mb-8 capitalize text-center lg:text-left md:text-left font-bold text-[40px] md:text-[46px]">
        Product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 text-[#111920] dark:text-white">
        <div 
            ref={gridRef}
            style={{ opacity: 0, transition: "opacity 0.5s, transform 0.5s" }}
        >
          <div className="flex justify-between items-center my-3">
            <h3 className="font-bold text-[24px] md:text-[32px]">IzzyAI</h3>
           
            <p>
              <div className="z-0 rounded-[40px] relative p-[8px] md:z-10 custom-gradient-box">
                <button id="go_to_agentverse" className="relative z-50 flex w-full items-center gap-[10px] rounded-[40px]  ">
                  <a
                    href="http://izzyai.com/"
                   className="px-4 py-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r rounded-[40px] dark:from-[#0CC8E8] dark:to-[#2DEEAA] border border-black dark:border-[#283642] hover:border-transparent dark:hover:border-transparent cursor-pointer flex items-center uppercase font-bold ">
                    Try IzzyAI <Arrow />
                  </a>
                </button>
              </div>
            </p>
          </div>
          <p className="text-xl font-bold mt-4 text-center lg:text-left md:text-left">
            Your Personal Digital Speech Therapy Companion
          </p>
          <p className="text-center text-[15.5px] tracking-lighter lg:text-left md:text-[14px] lg:text-[15.5px] mt-6 lg:tracking-lighter">
            Begin your journey with IzzyAI’s comprehensive assessment, powered by advanced AI models. These initial
            evaluations accurately identify your speech patterns, pinpointing areas for improvement. This tailored
            approach ensures that you receive the most effective therapy right from the start. With IzzyAI, tracking your
            progress is seamless. After each session, receive comprehensive reports detailing your improvements, areas
            that need more attention, and insights into your overall speech development.
          </p>
        </div>
        <div>
          <img className="object-cover rounded h-full w-full" src="/products-1.png" alt="Product 1" 
            data-aos = "fade-up"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
