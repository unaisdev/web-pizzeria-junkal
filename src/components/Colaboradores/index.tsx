import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ColaboradorCard from './ColaboradorCard';

const items = [
    {
        name: 'Carnes',
        image_path: '/images/colaboradores/sello-km0.webp',
        desc: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
    },
    {
        name: 'Carnes',
        image_path: '/images/colaboradores/sello-ecologico.webp',
        desc: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        name: 'Carnes',
        image_path: '/images/colaboradores/sello-ecolabel.webp',
        desc: ' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet \n Lorem ipsum dolor sit amet'
    },
    {
        name: 'Carnes',
        image_path: '/images/colaboradores/sello-ccpae.webp',
        desc: ' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet \n Lorem ipsum dolor sit amet'
    },
    {
        name: 'Carnes',
        image_path: '/images/colaboradores/sello-km0.webp',
        desc: ' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet \n Lorem ipsum dolor sit amet'
    },
    {
        name: 'Carnes',
        image_path: '/images/colaboradores/sello-km0.webp',
        desc: ' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet \n Lorem ipsum dolor sit amet'
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
            <div className="flex flex-wrap items-center bg-slate-300 p-6 justify-around">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ColaboradorCard item={item} index={index} currentIndex={currentIndex} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Colaboradores;
