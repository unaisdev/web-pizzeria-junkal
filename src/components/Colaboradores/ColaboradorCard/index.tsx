import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
    item: {
        name: string;
        image_path: string;
        desc: string;
    }
    index: number;
    currentIndex: number;
}

const ColaboradorCard = ({ item, index, currentIndex }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);


    useEffect(() => {
        index === currentIndex ? setIsExpanded(true) : setIsExpanded(false)

    }, [currentIndex])

    return (
        <motion.img
            src={item.image_path}
            className="relative flex object-cover justify-center items-center h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full shadow-md"
            initial={{ scale: 0.7 }}
            animate={{ scale: isExpanded ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
        >
            {/* <div className="absolute bottom-0 bg-gray-700 bg-opacity-25 w-full">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <motion.p
                    className="text-sm"
                    initial={{ opacity: 0, display: 'none' }}
                    animate={{ opacity: isExpanded ? 1 : 0, display: isExpanded ? '' : 'none' }}
                    transition={{ duration: 1 }}
                >
                    {item.desc}
                </motion.p>
            </div> */}

        </motion.img>
    )
}

export default ColaboradorCard