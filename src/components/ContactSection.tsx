const contactSection = () => {
  return (
    <section
      className="min-h-[41rem] flex items-center max-xmd:py-[8rem]"
      id="Contact"
    >
      <div className="cssContainer text-start max-xmd:text-center">
        <h2 className="text-[1.7rem] font-bold text-[#147efb] mb-[1rem]">
          contact
        </h2>
        <h1 className="text-[2.5rem] font-bold">Don't be shy! Hit me up! 👇</h1>
        <div className="flex gap-[8rem] mt-[6rem] max-xmd:flex-col max-xmd:items-center max-xmd:gap-[5rem]">
          <div className="flex gap-[1.5rem] items-center max-xmd:flex-col ">
            <span className="w-[5rem] h-[5rem] rounded-full bg-white shadow-pm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-map-search text-[#147efb]"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-[.5rem]">
              <h2 className="text-[1.7rem] font-bold">Location</h2>
              <h3 className="text-[1.7rem] text-[#767676] hover:text-[#147efb] duration-300 cursor-pointer">
                Damascus, Syria
              </h3>
            </div>
          </div>
          <div className="flex gap-[1.5rem] items-center max-xmd:flex-col ">
            <span className="w-[5rem] h-[5rem] rounded-full bg-white shadow-pm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail text-[#147efb]"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-[.5rem]">
              <h2 className="text-[1.7rem] font-bold">Mail</h2>
              <a
                href="mailto:hamza.outlookaa@gmail.com"
                className="no text-[1.7rem] text-[#767676] hover:text-[#147efb] duration-300 cursor-pointer"
              >
                hamza.outlookaa@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default contactSection;
