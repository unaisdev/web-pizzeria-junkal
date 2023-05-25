import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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

const Tab: React.FC<TabProps> = ({ title, isActive, onClick }) => {
    return (
        <motion.div
            className={`cursor-pointer tab ${isActive ? 'active border-b-2 border-b-gray-300 bg-gray-200 ' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'} py-4  md:hover:bg-gray-200`}
            onClick={onClick}
            
        >
            <motion.p className={`${isActive ? 'font-semibold' : ''} uppercase`}>{title}</motion.p>
        </motion.div>
    );
};


const Tabs: React.FC<TabsProps> = ({ categories, activeCategory, onSelectCategory }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.target ) {
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