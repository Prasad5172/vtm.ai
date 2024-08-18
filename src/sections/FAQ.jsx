import FAQ from "../components/FAQ";
import Button from "../components/Button";

function FAQSection() {
  return (
    <>
      <div className="mt-32 px-8 md:px-32">
        <FAQ />;
        <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA] py-[64px] flex flex-col items-center text-center gap-[24px] rounded-md">
          <h3 className="text-[36px] md:text-[40px] font-bold px-3 leading-tight md:leading-normal">
            Have Any Queries? Get In Touch!
          </h3>
          <Button normalcase="true" arrow="true">
            <a href="mailto:info@vtm.ai">info@vtm.ai</a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default FAQSection;
