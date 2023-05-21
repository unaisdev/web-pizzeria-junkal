import { useState } from "react";

const Carta = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="carta">

            <div className="flex flex-col py-4">
                <div className="">
                    <h1 className="text-center font-bold text-2xl">NUESTRA CARTA</h1>
                    <p className="text-center text-gray-500 font-light text-md">GEURE MENUA</p>
                </div>

                <div className="flex flex-wrap justify-center overflow-auto">

                    <div className="flex w-auto h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
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
                    <div className="flex w-auto h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
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
                    <div className="flex w-auto h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
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
                    <div className="flex w-auto h-auto my-2 mx-4 items-center justify-around bg-slate-200">
                        <img className="h-56 w-36 sm:w-56 object-center object-cover p-2" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
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
            </div>
        </section>

    )
}

export default Carta