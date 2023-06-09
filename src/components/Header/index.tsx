"use client";

import { useEffect, useState } from "react";
import "./styles.css";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { debounce } from "../../../helpers";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -300 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [presentationPassed, setPresPass] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string, offset?: number) => {
    const anchor = document.querySelector(sectionId);
    if (anchor) {
      const y =
        anchor.getBoundingClientRect().top + window.scrollY - (offset ?? 0);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleClickCarta = () => {
    scrollToSection("#carta", 100);
  };

  const handleClickInfo = () => {
    scrollToSection("#info", 100);
  };

  const handleClickInicio = () => {
    scrollToSection("body");
  };

  const handleClickColaboradores = () => {
    scrollToSection("#colaboradores", 100);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setPresPass(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${scrolled ? "-translate-y-12" : "translate-y-0 "} ${
          presentationPassed ? "md:-translate-y-14" : "-translate-y-12 "
        } transition transform duration-300 fixed `}
      >
        <div
          className={`${
            presentationPassed ? "bg-black" : "degradado"
          } transition transform duration-600`}
        >
          <div className={`flex justify-end items-center px-4 md:px-12 py-2 `}>
            <div className="flex flex-col items-end">
              <a
                href="mailto:unaicanales@gmail.com"
                className={`flex items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>

                <h6 className="text-xs sm:text-sm font-medium flex  text-white">
                  pizzeriajunkal@gmail.com
                </h6>
              </a>
              <a href="tel:943265863" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2 fill-green-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>

                <h6 className="text-xs sm:text-sm font-semibold flex text-white">
                  <span className="font-light mr-1">+34</span> 943 26 58 63
                </h6>
              </a>
            </div>
          </div>
          <div
            className={`flex transition duration-300 justify-between items-center px-4 md:px-12 py-4  ${
              presentationPassed ? "" : "md:pb-8"
            } `}
          >
            <div className="flex items-center gap-12">
              <div>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleClickInicio}
                >
                  <img
                    className="h-10 w-10 md:h-14 md:w-14"
                    src="images/logo.svg"
                    alt="Logo Pizzeria Junkal Irun"
                  />
                  <div className="flex flex-col px-4">
                    <h1 className="text-2xl -mb-2 md:text-2xl lg:text-3xl font-bold text-white">
                      Pizzería Junkal
                    </h1>
                    <h6 className="text-xs sm:text-sm font-thin flex text-white">
                      Es otra historia
                    </h6>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block">
                <p className="text-xs text-white text-center pb-2 uppercase">
                  ¡Síguenos!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/pizza_junkal/"
                    target="_blank"
                  >
                    <svg
                      className={`w-6 h-6 fill-white hover:fill-gray-400`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/p/Pizza-Junkal-100083536950028/?_rdr"
                    target="_blank"
                  >
                    <svg
                      className={`w-6 h-6 fill-white hover:fill-gray-400`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className=""></div>
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

                  setOpen(true);
                }, 150)}
                aria-expanded={open}
                aria-controls="sidebar"
                aria-label="Open Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${
          scrolled ? "translate-x-0" : "translate-x-28"
        }  transition transform duration-300 fixed bottom-12 right-8 z-50`}
      >
        <a
          href="tel:943265863"
          className={`border animate-bounce  border-green-200 flex items-center justify-center  w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 z-50 shadow-md shadow-gray-600 active:bg-green-700 active:shadow-sm active:shadow-gray-400`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-black"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </a>
      </div>

      <MobileNav open={open} handleClose={handleCloseClick} />
    </>
  );
};

export default Header;
