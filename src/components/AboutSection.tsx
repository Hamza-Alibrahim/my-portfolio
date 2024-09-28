import AboutImage from "../../public/about-img.62b47e7f183d4b4e9feb.webp";
import RoundText from "../../public/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import WorkingEmoji from "../../public/working-emoji.c5325f52b5be329995a5.png";

const AboutSection = () => {
  return (
    <section className="min-h-[65.5rem] flex items-center py-[8rem]" id="About">
      <div className="cssContainer flex max-lg:flex-col max-lg:justify-center items-center gap-[7rem]">
        <div className="shrink-0 relative flex justify-center">
          <img
            className="w-[41rem] h-[35rem] max-ism:w-[96%] max-ism:h-auto rounded-[1.7rem]"
            src={AboutImage}
            alt="AboutImage"
          />
          <span className="bg-white absolute -bottom-[4rem] -right-[4rem] animate-spin-slow rounded-full max-smd:hidden">
            <img className=" w-[19rem]" src={RoundText} alt="RoundText" />
          </span>
          <img
            className="absolute bottom-[3.5rem] right-[2.5rem] w-[6rem] max-smd:hidden"
            src={WorkingEmoji}
            alt="WorkingEmoji"
          />
        </div>
        <div className="max-lg:text-center max-w-[54rem]">
          <h2 className="text-[1.7rem] font-bold text-[#147efb] mb-[1rem]">
            ABOUT ME
          </h2>
          <h1 className="text-[2.5rem] font-bold mb-[2rem]">
            Front-end Developer <br /> based in Damascus, Syria 📍
          </h1>
          <p className="text-[1.7rem] font-medium text-[#767676]">
            Hey, my name is Hamza, and I'm a Frontend Developer. My passion is
            to develop a clean UI/UX for my users.
            <br />
            <br />
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
