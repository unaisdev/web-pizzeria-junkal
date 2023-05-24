import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    {
        name: 'Hola',
        image_path: 'asds',
    },
    {
        name: 'a',
        image_path: 'asds',
    },
    {
        name: '3',
        image_path: 'asds',
    },
    {
        name: 'f',
        image_path: 'asds',
    },
    {
        name: 'q',
        image_path: 'asds',
    },
    {
        name: 'g',
        image_path: 'asds',
    },
];

const Colaboradores = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [items.length]);

    return (
        <section id="colaboradores" className='py-6'>
            <div className="pb-4 pl-4 md:pl-12">
                <h1 className="font-bold text-xl md:text-3xl">PRODUCTO</h1>
                <p className="text-gray-500 font-light text-md">HARREMANAK</p>
            </div>
            <div className="flex flex-wrap bg-slate-300 p-4 justify-around">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Colaboradores;
