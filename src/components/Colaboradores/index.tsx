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
    }

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
                <h1 className="font-bold text-xl md:text-3xl">CONOCE EL PRODUCTO</h1>
                <p className="text-gray-500 font-light text-md">PRODUCTUA EZAGUTU</p>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-4 bg-gray-100 px-2 py-4 md:px-6 md:py-10 gap-y-2 gap-x-2`}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0.4 }}
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
