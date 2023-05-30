import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TabsProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}


interface TabProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
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

const Tab: React.FC<TabProps> = ({ title, isActive, onClick }) => {
    return (
        <motion.div
            className={`cursor-pointer tab ${isActive ? 'active border-b-2 border-b-gray-300 bg-gray-200 ' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'} md:hover:bg-gray-200`}
            onClick={onClick}
        >
            <motion.p
                whileTap={{ scale: 0.8 }}
                className={`${isActive ? 'font-semibold' : ''} uppercase h-full py-4 select-none`}
            >{title}</motion.p>
        </motion.div>
    );
};


const Tabs: React.FC<TabsProps> = ({ categories, activeCategory, onSelectCategory }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const header = document.querySelector('header')
    const [tabsTopPx, setTabsTopPx] = useState(10)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                console.log("observer")
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


    useEffect(() => {

    }, [])


    return (
        <div ref={sectionRef} className="tabs grid grid-cols-3 text-center border-b border-t">
            {categories.map((category) => (
                <Tab
                    key={category}
                    title={category}
                    isActive={activeCategory === category}
                    onClick={() => onSelectCategory(category)}
                />
            ))}
        </div>
    );
};

export default Tabs