import{r as l}from"./index.e32f9efa.js";import{j as a}from"./jsx-runtime.84e2601f.js";import{a as g,s as u,u as h,b as z,m}from"./motion.492277fe.js";function x(e){e.values.forEach(s=>s.stop())}function b(){const e=new Set,s={subscribe(t){return e.add(t),()=>void e.delete(t)},start(t,i){const o=[];return e.forEach(c=>{o.push(g(c,t,{transitionOverride:i}))}),Promise.all(o)},set(t){return e.forEach(i=>{u(i,t)})},stop(){e.forEach(t=>{x(t)})},mount(){return()=>{s.stop()}}};return s}function j(){const e=h(b);return z(e.mount,[]),e}const f=j;const d=({items:e})=>{const s=l.useRef(null),t=f(),[i,o]=l.useState(null);l.useEffect(()=>{const r=new IntersectionObserver(n=>{const[p]=n;p.isIntersecting&&t.start({opacity:1,scale:1})});return s.current&&r.observe(s.current),()=>{s.current&&r.unobserve(s.current)}},[]);const c=r=>{o(r)};return e.length===0?a.jsxs("div",{className:"grid p-12 text-center gap-y-4",children:[a.jsx("h2",{className:"text-xl md:text-2xl",children:"Pregúntanos a la hora de hacer tu pedido."}),a.jsxs("h3",{className:"text-sm",children:[" ","¡Estaremos encantados de decirte qué postres tenemos hoy para ofrecerte!"]})]}):a.jsxs("div",{className:"flex flex-col items-center justify-center",children:[a.jsx("div",{ref:s,className:"flex flex-wrap justify-center overflow-auto py-4",children:e.map((r,n)=>a.jsxs(m.div,{className:"relative item-carta flex h-auto my-2 mx-4 items-center justify-around bg-gray-100 shadow-md shadow-gray-300",initial:{opacity:0,scale:.6},animate:t,transition:{duration:.5,delay:n*.3},onClick:()=>c(n),children:[a.jsx("img",{className:"h-56 w-36 sm:w-56 object-center object-cover p-2 aspect-square",alt:r.name,src:r.image_path}),a.jsxs("div",{className:"flex flex-col flex-grow justify-between h-full p-2 sm:py-4 sm:pr-8",children:[a.jsxs("div",{className:"flex flex-col justify-around",children:[r.recommended&&a.jsx("div",{className:"absolute -top-1 -right-2 flex justify-end bg-orange-500 p-1 md:p-1.5 shadow-md shadow-gray-400 rounded-full",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 md:w-5 md:h-5 stroke-white fill-orange-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",children:[a.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.jsx("path",{d:"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"})]})}),a.jsx("h4",{className:"menu-title text-xl font-medium uppercase",children:r.name})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"menu-detail text-sm sm:text-md",children:r.desc}),a.jsx("hr",{className:"h-0.5 bg-gray-300 mx-4 my-2"}),a.jsx("h4",{className:"menu-detail text-xs text-gray-500",children:r.desc_eus})]}),a.jsx("div",{className:"flex justify-end items-center",children:a.jsx("h4",{className:"menu-price font-medium text-lg sm:text-2xl text-right",children:r.price})})]})]},n))}),a.jsxs(m.div,{initial:{opacity:0,scale:.6},animate:t,transition:{duration:.5,delay:e.length*.3},className:"flex justify-center items-center px-2 py-2 mt-4",children:[a.jsx("div",{className:"flex justify-end bg-orange-500 p-1 md:p-1.5 shadow-md shadow-gray-400 rounded-full mr-3",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 md:w-5 md:h-5 stroke-white fill-orange-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",children:[a.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.jsx("path",{d:"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"})]})}),a.jsxs("p",{className:"text-black font-light text-sm",children:[" ","Recomendado por nosotros mismos"]})]})]})},y=({title:e,isActive:s,onClick:t})=>a.jsx(m.div,{className:`cursor-pointer tab ${s?"active border-b-2 border-b-gray-300 bg-gray-200 ":"bg-gray-100 hover:bg-gray-200"} md:hover:bg-gray-200`,onClick:t,children:a.jsx(m.p,{whileTap:{scale:.8},className:`${s?"font-bold":""} uppercase h-full py-4 text-sm md:text-base select-none text-black`,children:e})}),v=({categories:e,activeCategory:s,onSelectCategory:t})=>{const i=l.useRef(null);return document.querySelector("header"),l.useState(10),l.useEffect(()=>{const o=new IntersectionObserver(c=>{const[r]=c;r.isIntersecting&&console.log("observer")});return i.current&&o.observe(i.current),()=>{i.current&&o.unobserve(i.current)}},[]),l.useEffect(()=>{},[]),a.jsx("div",{ref:i,className:"tabs grid grid-cols-3 text-center border-b border-t",children:e.map(o=>a.jsx(y,{title:o,isActive:s===o,onClick:()=>t(o)},o))})},_=[{name:"Margarita",desc:"Tomate, mozzarella di latte, parmesano, aceite de oliva y albahaca.",desc_eus:"Tomate, mozzarella di latte, parmigiano gazta, oliba olioa eta albahaca.",image_path:"/images/carta/pizza_margarita.jpeg",price:"10,00 €"},{name:"Jamón y Queso",desc:"Tomate, mozzarella di latte, jamón cocido, emmental y orégano.",desc_eus:"Tomate, mozzarella di latte, york, emmental eta oreganoa.",image_path:"/images/carta/pizza_jamon_y_queso.jpeg",price:"11,50 €",recommended:!0},{name:"Karbonara",desc:"Mozzarella di Latte, nata, bacon, cebolla pochada, parmesano, pimienta blanca y yema de huevo.",desc_eus:"Mozzarella di Latte, esne gaina, hirugiharra, tipula potxatua, parmigiano, piper zuria eta gorringoa.",image_path:"/images/carta/pizza_carbonara.jpeg",price:"12,50 €"},{name:"Itsaso",desc:"Tomate, mozzarella di latte, atún, pimiento rojo y cebolla pochada.",desc_eus:"Tomate, mozzarella di latte, atuna, piper gorria eta tipula potxatua.",image_path:"/images/carta/pizza_itsaso.jpeg",price:"13,00 €"},{name:"Barbakoa",desc:"Tomate, mozzarella di latte, carne de ternera, bacon, cebolla y salsa barbacoa.",desc_eus:"Tomate, mozzarella di latte, txahala, hirugiharra, tipula eta barbakoa saltsa.",image_path:"/images/carta/pizza_barbacoa.jpeg",price:"13,00 €"},{name:"Cuatro Quesos",desc:"Mozzarella di Latte, gorgonzola, ricota y parmesano (tomate opcional).",desc_eus:"Mozzarella di Latte, gorgonzola, ricota y parmigiano (tomate aukerakoa).",image_path:"/images/carta/pizza_cuatro_quesos.jpeg",price:"13,00 €"},{name:"Pollo Ali Oli",desc:"Mozzarella di Latte, pollo, nata, champiñon, cebolla pochada y salsa ali oli.",desc_eus:"Mozzarella di Latte, gorgonzola, ricota y parmigiano (tomate aukerakoa).",image_path:"/images/carta/pizza_pollo_alioli.jpeg",price:"13,00 €"},{name:"Baserri",desc:"Salsa de carrilleras, mozzarella di latte, carrillera de cerdo, pimiento rojo y cremoso de patata.",desc_eus:"Masailak saltsa, mozzarella di latte, txerri masailak, piper gorria eta patata purea.",image_path:"/images/carta/pizza_baserri.jpeg",price:"14,00 €"},{name:"Riojana",desc:"Tomate, mozzarella di latte, chorizo riojano, patata y parmesano.",desc_eus:"Tomate, mozzarella di latte, txorizoa, patata eta parmigiano.",image_path:"/images/carta/pizza_riojana.jpeg",price:"13,00 €"},{name:"Ahuntza",desc:"Mozzarella di Latte, queso de cabra, bacon, nueces y membrillo.",desc_eus:"Mozzarella di Latte, ahuntz gazta, hirugiharra, intxaurrak eta irasagarra.",image_path:"/images/carta/pizza_ahuntza.jpeg",price:"13,00 €"},{name:"Junkal",desc:"Mozzarella di Latte, crema de langostinos, cebolla, puerros y langostinos.",desc_eus:"Mozzarella di Latte, ganba krema, tipula, porruak eta ganbak.",image_path:"/images/carta/pizza_junkal.jpeg",price:"15,00 €"},{name:"Vegana",desc:"Crema de guisantes, calabacín, alcachofas, cebolla pochada, pimiento rojo y aceite de oliva.",desc_eus:"Ilarra krema, kalabazin, alkatxofa, tipula potxatua, piper gorria eta oliba olioa.",image_path:"/images/carta/pizza_vegana.jpeg",price:"14,00 €"},{name:"Bolonia",desc:"Mozzarella di Latte, mortadela de Bolonia, ricotta y tapenade.",desc_eus:"Mozzarella di Latte, bologna mortadela, ricotta eta tapenade.",image_path:"/images/carta/pizza_bolonia.jpeg",price:"14,00 €"},{name:"Gorgonpera",desc:"Mozzarella di Latte, jamón serrano curado, gorgonzola, pera y reducción de vino dulce.",desc_eus:"Mozzarella di Latte, urdaiazpiko serrano ondua, gorgonzola, madaria eta ardo gozoaren murrizketa.",image_path:"/images/carta/pizza_gorgonpera.jpeg",price:"14,00 €"}],k=[{name:"Helados artesanales",desc:"Avellana, dulce de leche, pistacho, chocolate, café y mango.",image_path:"/images/carta/postres/helados.jpeg",price:"2,90 €"},{name:"Tiramisú",desc:"Bizcocho empapado en cafe, mascarpone, Amaretto y cacao.",desc_eus:"Kafean bustitako tarta, mascarpone, Amaretto eta kakao.",image_path:"/images/carta/postres/tiramisu.jpeg",price:"2,90 €"}],N=[{name:"Coca-Cola (Zero)",image_path:"/images/carta/bebidas/cocacola-lata.jpg",price:"1,50 €"},{name:"Kas Naranja",image_path:"/images/carta/bebidas/kas-naranja-lata.jpg",price:"1,50 €"},{name:"Agua",image_path:"/images/carta/bebidas/agua-mineral.jpg",price:"1 €"},{name:"Estrella Galicia",image_path:"/images/carta/bebidas/cerveza-estrella-galicia.jpeg",price:"3,00 €"},{name:"Bidasoa IPA",image_path:"/images/carta/bebidas/cerveza-bidasoa-brewery-ipa.jpeg",price:"3,00 €"},{name:"Bidasoa Radler",image_path:"/images/carta/bebidas/cerveza-bidasoa-radler.jpeg",price:"2,50 €"},{name:"Bidasoa Lager Blonde",image_path:"/images/carta/bebidas/cerveza-bidasoa-lager.jpeg",price:"2,50 €"}],C=()=>{l.useState(!1);const[e,s]=l.useState("Pizzas"),t=i=>{s(i)};return a.jsx("section",{id:"carta",className:"md:pb-6",children:a.jsxs("div",{className:"flex flex-col ",children:[a.jsxs("div",{className:"bg-gray-100",children:[a.jsxs("div",{className:"py-6 pl-4  md:pl-12",children:[a.jsx("h1",{className:"font-bold text-xl md:text-3xl",children:"NUESTRA CARTA"}),a.jsx("h2",{className:"text-gray-500 font-light text-md",children:"GURE MENUA"})]}),a.jsx(v,{categories:["Pizzas","Postres","Bebidas"],activeCategory:e,onSelectCategory:t})]}),a.jsx("div",{className:"",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:`${e!=="Pizzas"&&"hidden"}`,children:a.jsx(d,{items:_})}),a.jsx("div",{className:`${e!=="Postres"&&"hidden"}`,children:a.jsx(d,{items:k})}),a.jsx("div",{className:`${e!=="Bebidas"&&"hidden"}`,children:a.jsx(d,{items:N})})]})})]})})};export{C as default};
