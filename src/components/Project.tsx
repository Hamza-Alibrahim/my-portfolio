interface Props {
  name: string;
  img: string;
  description: string;
  github: string;
  vercel: string;
  reverse?: boolean;
}

const Project = ({
  name,
  img,
  description,
  github,
  vercel,
  reverse,
}: Props) => {
  return (
    <div
      className={`flex max-[950px]:flex-col max-[950px]:mx-auto ${
        reverse ? "lg:flex-row-reverse" : ""
      } bg-white shadow-project rounded-[.8rem]`}
    >
      <div className="basis-[55%] p-[1.6rem] flex items-center">
        <img
          className="h-[80%] min-h-[220px] max-[950px]:h-full rounded-[.4rem] shadow-project"
          src={img}
          alt="Project Image"
        />
      </div>
      <div className="basis-[45%] text-center my-[3.2rem] max-[950px]:my-[1.6rem] flex flex-col gap-[1.6rem] px-[1.6rem]">
        <h1 className="text-[2.2rem] font-bold ">
          {name}{" "}
          <span className="text-[1.8rem] text-[#151313c5]">
            (September 2024)
          </span>
        </h1>
        <p className="text-[#767676] text-[1.7rem] font-medium max-[450px]:text-[1.6rem]">
          {description}
        </p>
        <div className="flex justify-center gap-[1.6rem]">
          <p className="p-[.8rem] rounded-[.3rem] text-[1.8rem] font-semibold shadow-project">
            Next
          </p>
          <p className="p-[.8rem] rounded-[.3rem] text-[1.8rem] font-semibold shadow-project">
            Tailwind
          </p>
        </div>
        <div className="mt-[1rem] flex justify-center gap-[3rem] items-center">
          <a href={github} target="_blank">
            <button className="flex items-center gap-[.5rem] text-[1.7rem] font-medium max-[450px]:text-[1.6rem]">
              <span className="uppercase">Code</span>
              <span className="mb-[.3rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-[2rem] h-[2rem]"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.173.55-.38 0-.19-.007-.74-.01-1.45-2.022.439-2.445-.49-2.585-.94-.093-.24-.49-.94-.84-1.13-.29-.14-.725-.5-.003-.51.674-.013 1.15.62 1.32.88.77 1.29 2.021.91 2.488.69.076-.56.3-1.01.55-1.24-1.8-.2-3.33-.9-3.33-4 0-.88.31-1.6.82-2.17-.08-.2-.36-1.01.08-2.1 0 0 .68-.22 2.23.84.65-.18 1.35-.27 2.04-.27.69 0 1.39.09 2.04.27 1.55-1.06 2.23-.84 2.23-.84.44 1.09.16 1.9.08 2.1.51.57.82 1.29.82 2.17 0 3.1-1.52 3.8-3.33 4 .31.27.6.8.6 1.61 0 1.16-.01 2.1-.01 2.39 0 .21.15.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </span>
            </button>
          </a>
          <a href={vercel} target="_blank">
            <button className="flex items-center gap-[.5rem] text-[1.7rem] font-medium max-[450px]:text-[1.6rem]">
              <span className="uppercase">Live Demo</span>
              <span className="mb-[.3rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="w-[2rem] h-[2rem]"
                >
                  <path
                    fill="currentColor"
                    d="M8.16 3L6.75 4.41L9.34 7H4c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-5.34l2.59-2.59L15.84 3L12 6.84zM4 9h13v10H4zm15.5 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"
                  ></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
