import { useState } from "react";

import './styles.css'

const Carta = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <section id="carta" className="pb-6">

            <div className="flex flex-col ">
                <div className="bg-gray-100">
                    <div className="py-6 pl-4  md:pl-12">

                        <h1 className="font-bold text-xl md:text-3xl">NUESTRA CARTA</h1>
                        <h2 className="text-gray-500 font-light text-sm md:text-md">GEURE MENUA</h2>
                    </div>
                    <div className="">
                        <ul className="flex flex-wrap justify-around text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(1)} className={`${activeTab === 1 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase px-4 py-2 rounded-t-lg  `} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pizzas</button>
                            </li>
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(2)} className={`${activeTab === 2 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase inline-block px-4 py-2 rounded-t-lg`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Postres</button>
                            </li>
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(3)} className={`${activeTab === 3 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase inline-block px-4 py-2 rounded-t-lg`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Bebidas</button>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="">


                    <div className="">
                        {activeTab === 1 &&
                            <div>
                                <div className="flex flex-wrap justify-center overflow-auto py-4">

                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2 aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">MARGARITA</h4>
                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Tomate, mozzarella, parmesano, aceite de oliva y albahaca.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right">10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2 aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">MARGARITA</h4>

                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Tomate, mozzarella, parmesano, aceite de oliva y albahaca.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right"><span className="mx-2 text-xs">P.V.P</span>10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2  aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1571407921708-4202261ea9e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">MARGARITA</h4>

                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Tomate, mozzarella, parmesano, aceite de oliva y albahaca.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right"><span className="mx-2 text-xs">P.V.P</span>10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2  aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">MARGARITA</h4>
                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Tomate, mozzarella, parmesano, aceite de oliva y albahaca.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right"><span className="mx-2 text-xs">P.V.P</span>10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        {activeTab === 2 &&
                            <div>
                                <div className="flex flex-wrap justify-center overflow-auto py-4">

                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2 aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1639744211487-b27e3551b07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">TIRAMISÚ</h4>
                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Capas de bizcocho empapado en café, mascarpone y cacao en polvo espolvoreado.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Italiako pastela, kafean bustitako bizkotxo-geruzekin, maskarpone krema eta kakao hautsez hautseztatua.

                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right">10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2 aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">CHEESECAKE</h4>

                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Tarta de queso con base crujiente, relleno cremoso de queso y fresas.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right"><span className="mx-2 text-xs">P.V.P</span>10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2  aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="https://images.unsplash.com/photo-1615235739538-95040f341ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">CRÈME BRÛLÉE</h4>

                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Crema de vainilla suave y caramelizada en la parte superior.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right"><span className="mx-2 text-xs">P.V.P</span>10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-carta flex h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2  aspect-square" alt='Pizza margarita de Pizzeria Junkal' src="/images/carta/baserri.webp" />
                                        <div className="flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8">
                                            <div className="flex flex-col justify-around">
                                                <h4 className="menu-title text-xl font-medium pb-2">TARTA DE MANZANA</h4>
                                            </div>
                                            <div>
                                                <h4 className="menu-detail text-sm sm:text-md">
                                                    Delicioso pastel de manzana con base de masa quebrada y un toque de canela.
                                                </h4>
                                                <hr className="h-0.5 bg-gray-300 mx-4 my-2" />
                                                <h4 className="menu-detail text-xs text-gray-500">
                                                    Tomatea, mozzarella, parmigiano gazta, oliba olio eta albahaca.
                                                </h4>
                                            </div>
                                            <div className="col-span-1 menu-price-detail">
                                                <h4 className="menu-price font-medium text-lg sm:text-2xl text-right"><span className="mx-2 text-xs">P.V.P</span>10,00 €</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                        {activeTab === 3 && <div> </div>}
                    </div>
                </div>



            </div>
        </section>

    )
}

export default Carta