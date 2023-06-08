import { Disclosure, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import RedesSociales from "../../general/RedesSociales";

interface HeaderProps {
    open: boolean;
    handleClose: () => void;
    
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

const MobileNav = ({ open, handleClose }: HeaderProps) => {
    const handleInicioClick = () => {
        const anchor = document.querySelector("body");
        const offset = 80; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        handleClose()
    }
    const handleCartaClick = () => {
        const anchor = document.querySelector("#carta");
        const offset = 90; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        handleClose()
    }

    const handleInfoClick = () => {
        const anchor = document.querySelector("#info");
        const offset = 80; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        handleClose()
    }

    function handleClickColaboradores() {
        const anchor = document.querySelector("#colaboradores");
        const offset = 100; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        handleClose()

    }

    console.log(open)
    return (
        <>
            <Transition show={open}>
                {/* Sliding sidebar */}
                <Transition.Child
                    className="fixed flex right-0 top-0 w-[180px] z-30 h-screen"
                    enter="transition ease-in-out duration-500 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-500 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div
                        id="sidebar"
                        className={`fixed flex justify-between bg-opacity-100 right-0 top-0 w-[180px] h-screen bg-white pt-12 p-8 z-50 py-24`}
                    >
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="">
                                <div className="">
                                    <p className="text-xs"><span className="font-semibold">L:</span> Cerrado</p>
                                    <p className="text-xs"><span className="font-semibold">M:</span> Cerrado</p>
                                    <p className="text-xs"><span className="font-semibold">X:</span> 19:00 - 22:30h</p>
                                    <p className="text-xs"><span className="font-semibold">J:</span> 19:00 - 22:00h</p>
                                    <p className="text-xs"><span className="font-semibold">V:</span> 19:00 - 23:00h</p>
                                    <p className="text-xs"><span className="font-semibold">S:</span> 19:00 - 23:00h</p>
                                    <p className="text-xs"><span className="font-semibold">D:</span> 19:00 - 22:00h</p>
                                </div>
                            </div>
                            <ul className="flex flex-col space-y-3 mb-6">
                                <motion.li
                                    variants={variants}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <p
                                        onClick={handleInicioClick}
                                        className="cursor-pointer"
                                    >
                                        Inicio
                                    </p>
                                </motion.li>
                                <motion.li
                                    variants={variants}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <p
                                        onClick={handleCartaClick}
                                        className="cursor-pointer"
                                    >
                                        Nuestra carta
                                    </p>
                                </motion.li>
                                <motion.li
                                    variants={variants}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <p
                                        onClick={handleClickColaboradores}
                                        className="cursor-pointer "
                                    >
                                        El producto
                                    </p>
                                </motion.li>
                                <motion.li
                                    variants={variants}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <p
                                        onClick={handleInfoClick}
                                        className="cursor-pointer"
                                    >
                                        Dónde estamos
                                    </p>
                                </motion.li>
                            </ul>

                            <div className="">
                                <RedesSociales iconClassName={"fill-black w-8 h-8 md:w-10 md:h-10"} hideText={true}/>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
                <Transition.Child
                    enter="transition-opacity ease-linear duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        onClick={handleClose}
                        className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
                    ></div>
                </Transition.Child>
            </Transition>
        </>
    );
};

export default MobileNav;
