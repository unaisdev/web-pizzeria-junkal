import { useState } from "react";

import "./styles.css";
import List, { Item } from "./List";
import { motion } from "framer-motion";
import Tabs from "./Tabs";

const pizzas: Item[] = [
  {
    name: "Margarita",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/pizza_margarita.webp",
    price: "10,00 €",
    recommended: true,
  },
  {
    name: "Del Aita",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/pizza_del_aita.webp",
    price: "10,00 €",
    recommended: true,
  },
  {
    name: "Vegana",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/pizza_vegana.jpg",
    price: "10,00 €",
  },
  {
    name: "Cuatro Quesos",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
  },
  {
    name: "Baserri",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
  },
  {
    name: "Cuatro Quesos",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
    recommended: true,
  },
  {
    name: "Baserri",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
  },
];

const postres: Item[] = [
  {
    name: "Margarita",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
  },
  {
    name: "Cuatro Quesos",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
    recommended: true,
  },
  {
    name: "Baserri",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
  },
];

const bebidas: Item[] = [
  {
    name: "Margarita",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
    recommended: true,
  },
  {
    name: "Cuatro Quesos",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
  },
  {
    name: "Baserri",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.",
    image_path: "/images/carta/baserri.webp",
    price: "10,00 €",
    recommended: true,
  },
];
interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive, onClick }) => {
  return (
    <motion.div
      className={`tab ${isActive ? "active" : ""}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.div>
  );
};

const Carta = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Pizzas");

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  return (
    <section id="carta" className="md:pb-6">
      <div className="flex flex-col ">
        <div className="bg-gray-100">
          <div className="py-6 pl-4  md:pl-12">
            <h1 className="font-bold text-xl md:text-3xl">NUESTRA CARTA</h1>
            <h2 className="text-gray-500 font-light text-md">GEURE MENUA</h2>
          </div>
          {/* <div className="">
                        <ul className="flex flex-wrap justify-around text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick()} className={`${activeTab === 1 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase px-4 py-2 rounded-t-lg  `} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pizzas</button>
                            </li>
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(2)} className={`${activeTab === 2 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase inline-block px-4 py-2 rounded-t-lg`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Postres</button>
                            </li>
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(3)} className={`${activeTab === 3 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase inline-block px-4 py-2 rounded-t-lg`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Bebidas</button>
                            </li>

                        </ul>
                    </div> */}
          <Tabs
            categories={["Pizzas", "Postres", "Bebidas"]}
            activeCategory={activeTab}
            onSelectCategory={handleTabClick}
          />
        </div>

        <div className="">
          <div className="">
            <div className={`${activeTab !== "Pizzas" && "hidden"}`}>
              <List items={pizzas} />
            </div>
            <div className={`${activeTab !== "Postres" && "hidden"}`}>
              <List items={postres} />
            </div>
            <div className={`${activeTab !== "Bebidas" && "hidden"}`}>
              <List items={bebidas} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carta;
