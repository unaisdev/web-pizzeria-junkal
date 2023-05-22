'use client'

import { useEffect, useState } from "react";
import './styles.css';
import MobileNav from "./MobileNav";
import { motion } from "framer-motion"
import { debounce } from "../../../helpers";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -300 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [open, setOpen] = useState(false)

    function handleClickCarta() {
        const anchor = document.querySelector("#carta");
        const offset = 100; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function handleClickInfo() {
        const anchor = document.querySelector("#info");
        const offset = 100; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect()?.top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function handleClickInicio() {
        const anchor = document.querySelector("body");
        const offset = 80; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function handleClickColaboradores() {
        const anchor = document.querySelector("#colaboradores");
        const offset = 110; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    const handleCloseClick = () => {
        setOpen(false)
    }


    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const opacity = position > 0 ? 0.75 : 1; /* Ajusta el nivel de opacidad que deseas para el fondo al hacer scroll */
            setHeaderOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed pt-4 pb-6 px-6" >
            <div className="flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={handleClickInicio}>
                    <img
                        className="h-10 w-10 md:h-14 md:w-14"
                        src="images/pizza-svgrepo-com.svg"
                        alt="Snap Logo"
                    />
                    <div className="flex flex-col px-4">
                        <h1 className="text-lg -mb-2 sm:text-3xl font-bold text-white">Pizzería Junkal</h1>
                        <h6 className="text-xs sm:text-sm font-thin flex text-white">Es otra historia</h6>
                    </div>
                </div>
                <nav className="hidden sm:flex">
                    <ul className="hidden lg:flex lg:ml-14">
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickInicio}
                                className="cursor-pointer sm:uppercase text-white hover:underline "
                            >
                                INICIO
                            </p>
                        </motion.li>
                        <motion.li
                            className="px-6"

                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickCarta}
                                className="cursor-pointer sm:uppercase text-white hover:underline"
                            >
                                NUESTRA CARTA
                            </p>
                        </motion.li>
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickColaboradores}
                                className="cursor-pointer sm:uppercase text-white  hover:underline"
                            >
                                COLABORADORES
                            </p>
                        </motion.li>
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickInfo}
                                className="cursor-pointer sm:uppercase text-white hover:underline"
                            >
                                DÓNDE ESTAMOS
                            </p>
                        </motion.li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center lg:hidden">
                    <button
                        onClick={debounce(() => {
                            console.log("click");

                            setOpen(true)
                        }, 150)}
                        aria-expanded={open}
                        aria-controls="sidebar"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-white" viewBox="0 0 24 24"><path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" /></svg>
                    </button>
                </div>
            </div>
            <MobileNav open={open} handleClose={handleCloseClick} />
        </header>
    )
}

export default Header;