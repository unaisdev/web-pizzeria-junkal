'use client'

import { useEffect, useState } from "react";
import './styles.css';
import MobileNav from "./MobileNav";
import { motion } from "framer-motion"
import { debounce } from "../../../helpers";

type Props = {
    scrollTo: {
        handleScrollToInicio: () => void,
        handleScrollToExperience: () => void,
        handleScrollToProjects: () => void,
        handleScrollToTechnologies: () => void,
    };
}

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

    const handleOpenClick = () => {
        setOpen(true)
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
        <header className="container py-4 px-6 border-b-2" >
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        className="h-10 w-10 md:h-14 md:w-14"
                        src="images/pizza-svgrepo-com.svg"
                        alt="Snap Logo"
                    />
                    <div className="flex flex-col px-4">
                        <h1 className="text-xl sm:text-3xl font-bold">Pizzería Junkal</h1>
                        <h6 className="text-sm font-thin">Es otra historia</h6>
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
                                // onClick={scrollTo.handleScrollToInicio}
                                className="cursor-pointer sm:uppercase text-gray-400 hover:text-black hover:font-semibold"
                            >
                                INICIO
                            </p>
                        </motion.li>
                        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                        <motion.li
                            className="px-6"

                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                // onClick={scrollTo.handleScrollToExperience}
                                className="cursor-pointer sm:uppercase text-gray-400 hover:text-black"
                            >
                                NUESTRA CARTA
                            </p>
                        </motion.li>
                        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                // onClick={scrollTo.handleScrollToProjects}
                                className="cursor-pointer sm:uppercase text-gray-400 hover:text-black"
                            >
                                HISTORIA
                            </p>
                        </motion.li>
                        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                // onClick={scrollTo.handleScrollToTechnologies}
                                className="cursor-pointer sm:uppercase text-gray-400 hover:text-black"
                            >
                                DÓNDE ESTAMOS
                            </p>
                        </motion.li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center sm:hidden">
                    <button
                        onClick={debounce(() => {
                            console.log("click");

                            setOpen(true)
                        }, 150)}
                        aria-expanded={open}
                        aria-controls="sidebar"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24"><path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" /></svg>
                    </button>
                </div>
            </div>
            <MobileNav open={open} handleClose={handleCloseClick} />
        </header>
    )
}

export default Header;