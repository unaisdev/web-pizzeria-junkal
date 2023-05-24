import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export type Item = {
  name: string;
  desc: string;
  desc_eus: string;
  image_path: string;
  price: string;
  recommended?: boolean;
};

interface Props {
  items: Item[];
}

const List = ({ items }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, scale: 1 });
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div ref={sectionRef} className="flex flex-wrap justify-center overflow-auto py-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`relative item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200 shadow-md shadow-gray-300`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={controls}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          onClick={() => handleClick(index)}
        >
          <img
            className="h-56 w-36 sm:w-56 object-center object-cover p-2 aspect-square"
            alt={item.name}
            src={item.image_path}
          />
          <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
            <div className="flex flex-col justify-around">
              {item.recommended &&
                <div className='absolute -top-1 -right-2 flex justify-end bg-slate-800 px-1 py-2 shadow-md shadow-gray-600'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
                  </svg> */}
                  <p className="text-xxs md:text-xs text-white" style={{ writingMode: 'vertical-lr' }}>Recomendado</p>

                </div>
              }
              <h4 className="menu-title text-xl font-medium uppercase">{item.name}</h4>

            </div>
            <div>
              <h4 className="menu-detail text-sm sm:text-md">{item.desc}</h4>
              <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
              <h4 className="menu-detail text-xs text-gray-500">{item.desc_eus}</h4>
            </div>
            <div className="flex justify-end items-center">

              <h4 className="menu-price font-medium text-lg sm:text-2xl text-right">{item.price}</h4>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default List;
