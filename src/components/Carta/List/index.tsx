import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export type Item = {
  name: string;
  desc: string;
  desc_eus: string;
  image_path: string;
  price: string;
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
          className={`item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200 ${
            selectedItem === index ? 'scale-100' : 'scale-80'
          }`}
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
              <h4 className="menu-title text-xl font-medium pb-2 uppercase">{item.name}</h4>
            </div>
            <div>
              <h4 className="menu-detail text-sm sm:text-md">{item.desc}</h4>
              <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
              <h4 className="menu-detail text-xs text-gray-500">{item.desc_eus}</h4>
            </div>
            <div className="col-span-1 menu-price-detail">
              <h4 className="menu-price font-medium text-lg sm:text-2xl text-right">{item.price}</h4>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default List;
