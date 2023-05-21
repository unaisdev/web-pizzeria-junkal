import "./styles.css";
import SocialMediaButtons from '../general/SocialMediaButtons';

const Footer = () => {
    return (
        <>
            <footer
                aria-label="Site Footer"
                className="bg-gray-100 border-t-gray-300 transition duration-500"
            >
                <div className="flex items-center justify-between mx-auto max-w-screen-xl px-2 py-2 ">
                    <SocialMediaButtons />
                    <p className="font-medium text-xs">2023 - Pizzeria Junkal</p>
                    <p className="max-w-md font-extralight text-center leading-relaxed text-gray-500 text-xs md:text-sm ">
                        <strong></strong>
                        <span className="flex flex-row text-xxs md:text-xs">diseñado por</span>
                        <a href="https://github.com/unaisdev">Unai Canales</a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
