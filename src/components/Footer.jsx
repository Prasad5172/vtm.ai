import DarkLogo from "../Assets/LogoDark";

function Footer() {
  return (
    // <footer className="text-gray-400 bg-black body-font mt-10 md:mt-32 flex flex-col items-center ">
    //   <div className="pt-10">
    //     <DarkLogo />
    //   </div>

    //   <div className="container px-10 md:px-32 py-16 mx-auto justify-content-center" >
    //     <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-content-center">

    //     <div className="lg:w-1/6 md:w-1/2 w-full px-4">
    //         <a href="#products" className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">

    //         </a>
    //       </div>

    //       <div className="lg:w-1/6 md:w-1/2 w-full px-4">
    //         <a href="#products" className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
    //           Products
    //         </a>
    //       </div>
    //       <div className="lg:w-1/6 md:w-1/2 w-full px-4">
    //         <a href="#team" className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
    //           Team
    //         </a>
    //       </div>
    //       <div className="lg:w-1/6 md:w-1/2 w-full px-4">
    //         <a href="#Faq" className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
    //           FAQ
    //         </a>
    //       </div>
    //       <div className="lg:w-1/6 md:w-1/2 w-full px-4">
    //         <a href="#Faq" className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">

    //         </a>
    //       </div>

    //     </div>
    //   </div>

    //   <div className=" w-full h-px max-w-5xl mx-auto my-1 bg-[#262626]"></div>

    //   <p className="text-gray-400 text-sm text-center sm:text-left md:text-center px-10 md:px-32 py-5">
    //     Copyright ©2024 victoriam AI - All rights reserved
    //   </p>
    // </footer>
    <footer className="text-gray-400 bg-black body-font mt-10 md:mt-32 flex flex-col items-center ">
      <div className="pt-10">
        <DarkLogo />
      </div>

      <div className="container px-10 md:px-32 py-8 mx-auto justify-content-center">
        <div className="container px-10  md:px-32 py-8 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/3  w-full px-4">
              <a
                href="#products"
                className="title-font font-medium text-white tracking-widest text-sm mb-4 flex justify-center items-center col-lg-4"
              >
                Product
              </a>
            </div>
            <div className="lg:w-1/3  w-full px-4">
              <a
                href="#team"
                className="title-font font-medium text-white tracking-widest text-sm mb-4 flex justify-center items-center col-lg-4"
              >
                Team
              </a>
            </div>
            <div className="lg:w-1/3  w-full px-4">
              <a
                href="#Faq"
                className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center col-lg-4"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-px max-w-5xl mx-auto my-1 bg-[#262626]"></div>

      <p className="text-gray-400 text-sm text-center sm:text-left md:text-center px-10 md:px-32 py-5">
        Copyright ©2024 Victoriam - All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
