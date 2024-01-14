import { useState } from "react";

import "./styles.css";
import List, { Item } from "./List";
import { motion } from "framer-motion";
import Tabs from "./Tabs";

const pizzas: Item[] = [
  {
    name: "Margarita",
    desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
    desc_eus: "Tomate, mozzarella, parmigiano gazta, oliba olioa eta albahaca.",
    image_path: "/images/carta/pizza_margarita.webp",
    price: "10,00 €",
  },
  {
    name: "Jamón y Queso",
    desc: "Tomate, mozzarella, jamón cocido, emmental y orégano.",
    desc_eus: "Tomate, mozzarella, york, emmental eta oreganoa.",
    image_path: "/images/carta/pizza_jamon_y_queso.jpg",
    price: "11,50 €",
    recommended: true,
  },
  {
    name: "Karbonara",
    desc: "Mozzarella, nata, bacon, cebolla pochada, parmesano, pimienta blanca y yema de huevo.",
    desc_eus:
      "Mozzarella, esne gaina, hirugiharra, tipula potxatua, parmigiano, piper zuria eta gorringoa.",
    image_path: "/images/carta/pizza_carbonara.jpg",
    price: "12,50 €",
  },

  {
    name: "Itsaso",
    desc: "Tomate, mozzarella, atún, pimiento rojo y cebolla pochada.",
    desc_eus: "Tomate, mozzarella, atuna, piper gorria eta tipula potxatua.",
    image_path: "/images/carta/pizza_itsaso.jpg",
    price: "13,00 €",
  },
  {
    name: "Barbakoa",
    desc: "Tomate, mozzarella, carne de ternera, bacon, cebolla y salsa barbacoa.",
    desc_eus:
      "Tomate, mozzarella, txahala, hirugiharra, tipula eta barbakoa saltsa.",
    image_path: "/images/carta/pizza_barbacoa.jpg",
    price: "13,00 €",
  },
  {
    name: "Cuatro Quesos",
    desc: "Mozzarella, gorgonzola, ricota y parmesano (tomate opcional).",
    desc_eus: "Mozzarella, gorgonzola, ricota y parmigiano (tomate aukerakoa).",
    image_path: "/images/carta/pizza_cuatro_quesos.jpg",
    price: "13,00 €",
  },
  {
    name: "Pollo Ali Oli",
    desc: "Mozzarella, pollo, nata, champiñon, cebolla pochada y salsa ali oli.",
    desc_eus: "Mozzarella, gorgonzola, ricota y parmigiano (tomate aukerakoa).",
    image_path: "/images/carta/pizza_pollo_alioli.jpg",
    price: "13,00 €",
  },
  {
    name: "Baserri",
    desc: "Salsa de carrilleras, mozzarella, carrillera de cerdo, pimiento rojo y cremoso de patata.",
    desc_eus:
      "Masailak saltsa, mozzarella, txerri masailak, piper gorria eta patata purea.",
    image_path: "/images/carta/pizza_baserri.jpg",
    price: "14,00 €",
  },
  {
    name: "Riojana",
    desc: "Tomate, mozzarella, chorizo riojano, patata y parmesano.",
    desc_eus: "Tomate, mozzarella, txorizoa, patata eta parmigiano.",
    image_path: "/images/carta/pizza_riojana.jpg",
    price: "13,00 €",
  },
  {
    name: "Ahuntza",
    desc: "Mozzarella, queso de cabra, bacon, nueces y membrillo.",
    desc_eus:
      "Mozzarella, ahuntz gazta, hirugiharra, intxaurrak eta irasagarra.",
    image_path: "/images/carta/pizza_ahuntza.jpg",
    price: "13,00 €",
  },
  {
    name: "Junkal",
    desc: "Mozzarella, crema de langostinos, cebolla, puerros y langostinos.",
    desc_eus: "Mozzarella, ganba krema, tipula, porruak eta ganbak.",
    image_path: "/images/carta/pizza_junkal.jpg",
    price: "15,00 €",
  },
  {
    name: "Vegana",
    desc: "Crema de guisantes, calabacín, alcachofas, cebolla pochada, pimiento rojo y aceite de oliva.",
    desc_eus:
      "Ilarra krema, kalabazin, alkatxofa, tipula potxatua, piper gorria eta oliba olioa.",
    image_path: "/images/carta/pizza_vegana.jpg",
    price: "14,00 €",
  },
];

const postres: Item[] = [
  // {
  //   name: "Margarita",
  //   desc: "Tomate, mozzarella, parmesano, aceite de oliva y albahaca.",
  //   desc_eus: "Tomate, mozzarella, parmigiano gazta, oliba olioa eta albahaca.",
  //   image_path: "/images/carta/pizza_margarita.webp",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Jamón y Queso",
  //   desc: "Tomate, mozzarella, jamón cocido, emmental y orégano.",
  //   desc_eus: "Tomate, mozzarella, york, emmental eta oreganoa.",
  //   image_path: "/images/carta/pizza_jamon_y_queso.jpg",
  //   price: "10,00 €",
  //   recommended: true,
  // },
  // {
  //   name: "Karbonara",
  //   desc: "Mozzarella, nata, bacon, cebolla pochada, parmesano, pimienta blanca y yema de huevo.",
  //   desc_eus:
  //     "Mozzarella, esne gaina, hirugiharra, tipula potxatua, parmigiano, piper zuria eta gorringoa.",
  //   image_path: "/images/carta/pizza_carbonara.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Barbakoa",
  //   desc: "Tomate, mozzarella, carne de ternera, bacon, cebolla y salsa barbacoa.",
  //   desc_eus:
  //     "Tomate, mozzarella, txahala, hirugiharra, tipula eta barbakoa saltsa.",
  //   image_path: "/images/carta/pizza_barbacoa.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Itsaso",
  //   desc: "Tomate, mozzarella, atún, pimiento rojo y cebolla pochada.",
  //   desc_eus: "Tomate, mozzarella, atuna, piper gorria eta tipula potxatua.",
  //   image_path: "/images/carta/pizza_itsaso.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Cuatro Quesos",
  //   desc: "Mozzarella, gorgonzola, ricota y parmesano (tomate opcional).",
  //   desc_eus: "Mozzarella, gorgonzola, ricota y parmigiano (tomate aukerakoa).",
  //   image_path: "/images/carta/pizza_cuatro_quesos.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Pollo Ali Oli",
  //   desc: "Mozzarella, pollo, nata, champiñon, cebolla pochada y salsa ali oli.",
  //   desc_eus: "Mozzarella, gorgonzola, ricota y parmigiano (tomate aukerakoa).",
  //   image_path: "/images/carta/pizza_pollo_alioli.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Baserri",
  //   desc: "Salsa de carrilleras, mozzarella, carrillera de cerdo, pimiento rojo y cremoso de patata.",
  //   desc_eus:
  //     "Masailak saltsa, mozzarella, txerri masailak, piper gorria eta patata purea.",
  //   image_path: "/images/carta/pizza_baserri.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Riojana",
  //   desc: "Tomate, mozzarella, chorizo riojano, patata y parmesano.",
  //   desc_eus: "Tomate, mozzarella, txorizoa, patata eta parmigiano.",
  //   image_path: "/images/carta/pizza_pollo_alioli.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Ahuntza",
  //   desc: "Mozzarella, queso de cabra, bacon, nueces y membrillo.",
  //   desc_eus:
  //     "Mozzarella, ahuntz gazta, hirugiharra, intxaurrak eta irasagarra.",
  //   image_path: "/images/carta/pizza_ahuntza.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Junkal",
  //   desc: "Mozzarella, crema de langostinos, cebolla, puerros y langostinos.",
  //   desc_eus: "Mozzarella, ganba krema, tipula, porruak eta ganbak.",
  //   image_path: "/images/carta/pizza_junkal.jpg",
  //   price: "10,00 €",
  // },
  // {
  //   name: "Vegana",
  //   desc: "Crema de guisantes, calabacín, alcachofas, cebolla pochada, pimiento rojo y aceite de oliva.",
  //   desc_eus:
  //     "Ilarra krema, kalabazin, alkatxofa, tipula potxatua, piper gorria eta oliba olioa.",
  //   image_path: "/images/carta/pizza_vegana.jpg",
  //   price: "10,00 €",
  // },
];

const bebidas: Item[] = [
  {
    name: "Coca-Cola",
    image_path: "/images/carta/bebidas/cocacola-lata.jpg",
    price: "2,00 €",
  },
  {
    name: "Kas Naranja",
    image_path: "/images/carta/bebidas/kas-naranja-lata.jpg",
    price: "2,00 €",
  },
  {
    name: "Agua",
    image_path: "/images/carta/bebidas/agua-mineral.jpg",
    price: "1,50 €",
  },
  {
    name: "Bidasoa",
    image_path: "/images/carta/bebidas/cerveza-bidasoa-brewery.jpg",
    price: "4,00 €",
  },
  {
    name: "Radler",
    image_path: "/images/carta/bebidas/cerveza-radler.jpg",
    price: "3,50 €",
  },
  // {
  //   name: "Txingudi",
  //   image_path: "/images/carta/bebidas/txingudi.webp",
  //   price: "4,50 €",
  // },
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
            <h2 className="text-gray-500 font-light text-md">GURE MENUA</h2>
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
