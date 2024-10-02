import coindom from "../../public/coindom.png";
import car_rental from "../../public/car-rental.png";
import minimalist_e_commerce from "../../public/minimalist-e-commerce.png";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section className="py-[10rem] bg-[#f9f9f9]" id="Projects">
      <div className="cssContainer text-[#2d2e32] max-[950px]:text-center">
        <h3 className="text-[1.8rem] font-bold text-[#147efb] uppercase">
          Portfolio
        </h3>
        <h2 className="text-[2.2rem] font-bold">
          Each project is a unique piece of development 🧩
        </h2>
        <div className="flex flex-col gap-[5rem] mt-[5rem]">
          <Project
            name="Coindom"
            img={coindom}
            description="Coindom is a responsive front-end project focused on digital currencies like Bitcoin. Featuring a sleek and modern design, it displays real-time data, including prices, price changes, and additional details for various cryptocurrencies, enhancing user engagement and understanding of the digital currency market."
            github="https://github.com/Hamza-Alibrahim/coindom"
            vercel="https://coindom-seven.vercel.app/"
          />
          <Project
            name="Minimalist Ecommerce"
            img={minimalist_e_commerce}
            description="Minimalist Ecommerce is a responsive online store showcasing a curated selection of items with a clean and elegant design. This project emphasizes a user-friendly experience, enabling customers to easily browse and interact with products in a visually appealing environment."
            github="https://github.com/Hamza-Alibrahim/minimalist-e-commerce"
            vercel="https://minimalist-e-commerce-puce.vercel.app/"
            reverse={true}
          />
          <Project
            name="Car Rental"
            img={car_rental}
            description="Car Rental is a comprehensive, multi-page responsive website designed for effortless car renting. With a visually appealing layout, this project features various sections that provide users with detailed information about available vehicles, booking options, and rental policies, ensuring a seamless user experience in finding and renting their desired cars."
            github="https://github.com/Hamza-Alibrahim/car-rental"
            vercel="https://car-rental-one-inky.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
