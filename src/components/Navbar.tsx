import { useEffect, useState } from "react";

interface Target {
  innerWidth: number;
}

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleResize = function (e: UIEvent) {
      const x = e.currentTarget as Target | null;
      if (x!.innerWidth > 900 && expand) setExpand(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="py-[26px] pl-12 pr-16 bg-white shadow-md shadow-[#00000017] fixed top-0 w-full flex items-center justify-between z-50">
      <a href="/">
        <h1 className="text-[2rem] font-bold">Hamza.dev</h1>
      </a>
      <svg
        onClick={() => setExpand(true)}
        className="xmd:hidden cursor-pointer mobile-menu hover:text-[#147efb]"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6l16 0"></path>
        <path d="M4 12l16 0"></path>
        <path d="M4 18l16 0"></path>
      </svg>
      <nav
        className={`flex gap-5 max-xmd:absolute max-xmd:transition-[left] max-xmd:duration-500 max-xmd:flex-col max-xmd:items-center max-xmd:justify-center max-xmd:top-0 max-xmd:gap-[3.5rem] max-xmd:w-screen max-xmd:h-screen max-xmd:bg-white max-xmd:-left-[100rem] ${
          expand && "!left-0"
        }`}
      >
        <svg
          onClick={() => setExpand(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-x absolute right-[3rem] top-[3rem] hover:text-[#147efb] xmd:hidden"
        >
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
        <a
          className="max-xmd:text-[2.3rem] max-xmd:font-medium"
          onClick={() => setExpand(false)}
          href="#Home"
        >
          Home
        </a>
        <a
          className="max-xmd:text-[2.3rem] max-xmd:font-medium"
          onClick={() => setExpand(false)}
          href="#About"
        >
          About
        </a>
        <a
          className="max-xmd:text-[2.3rem] max-xmd:font-medium"
          onClick={() => setExpand(false)}
          href="#Projects"
        >
          Projects
        </a>
        <a
          className="max-xmd:text-[2.3rem] max-xmd:font-medium"
          onClick={() => setExpand(false)}
          href="#Contact"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
