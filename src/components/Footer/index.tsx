import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer
        aria-label="Site Footer"
        className="bg-gray-100 border-t-gray-300 transition duration-500 mt-14 py-2"
      >
        <div className="flex items-center justify-between px-6 py-2 ">
          <p className="font-medium text-sm">
            {`${new Date().getFullYear()}`} - Pizzeria Junkal
          </p>
          <p className="max-w-md flex flex-row items-center justify-center font-extralight leading-relaxed text-gray-500 text-xs md:text-sm ">
            <span className="flex items-start justify-center md:flex-row text-xxxs md:text-xxs mt-0.5">
              diseñado por{" "}
            </span>
            <a
              className="text-xxs md:text-xs ml-1"
              href="https://unaicanales.vercel.app"
            >
              Unai Canales
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
