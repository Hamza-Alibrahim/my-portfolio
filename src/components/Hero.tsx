import MyImage from "../../public/IMG_20230506_120900_496.jpg";
import TechIcons from "./TechIcons";

const Main = () => {
  return (
    <main
      className="min-h-screen flex flex-col pt-[18rem] max-xmd:py-[11rem] max-xmd:text-center pb-[2rem] bg-[#f9f9f9]"
      id="Home"
    >
      <div className="cssContainer">
        <div className="flex gap-[10rem] mb-[6rem] max-xmd:flex-col-reverse max-xmd:items-center max-xmd:gap-[5rem]">
          <div className="relative max-w-[50rem] flex flex-col gap-[3rem]">
            <h1 className="text-[5.5rem] max-xsm:text-[4rem] font-bold leading-[1.2] transition-[font-size] duration-500">
              Front-End React Developer👋
            </h1>
            <p className="text-[1.8rem] font-medium text-[#555]">
              Hi, I'm Hamza Alibrahim. A passionate Front-end React Developer
              based in Damascus, Syria. 📍
            </p>
            <div className="flex gap-4 max-xmd:justify-center">
              <a
                href="https://www.linkedin.com/in/hamza-ibr-858680307/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a href="https://github.com/Hamza-Alibrahim" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img
              className="w-[35rem] h-[35rem] max-xsm:w-[28rem] max-xsm:h-[28rem] object-cover rounded-full transition-[width,height] duration-500 myImage border-4 border-black"
              src={MyImage}
              alt="MyImage"
            />
          </div>
        </div>
        <div className="flex max-xmd:flex-col items-center">
          <p className="text-[1.7rem] font-semibold xmd:pr-[1.5rem] xmd:border-r-2 border-[#939395] xmd:mr-[6rem] max-xmd:border-b-2 max-xmd:pb-[1rem] max-xmd:mb-[3rem] text-headingColor">
            Tech Stack
          </p>
          <TechIcons />
        </div>
      </div>
    </main>
  );
};
export default Main;
