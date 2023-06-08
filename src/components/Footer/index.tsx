import "./styles.css";

const Footer = () => {
    return (
        <>
            <footer
                aria-label="Site Footer"
                className="bg-gray-100 border-t-gray-300 transition duration-500"
            >
                <div className="flex items-center flex-col justify-between mx-auto max-w-screen-xl px-6 py-2 ">
                    <p className="font-medium text-xs">2023 - Pizzeria Junkal</p>
                    <p className="max-w-md font-extralight text-center leading-relaxed text-gray-500 text-xs md:text-sm ">
                        <strong></strong>
                        <span className="flex items-center justify-center md:flex-row text-xxxs md:text-xs ">diseñado por <a className="text-xxs md:text-xs ml-1" href="https://github.com/unaisdev">Unai Canales</a></span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
