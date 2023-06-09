const MasInformacion = () => {
  return (
    <section id="servicios" className="py-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-4/6 px-4 py-6 ">
          <div className="pb-4 pl-4 md:pl-12">
            <h1 className="font-bold text-xl md:text-3xl">HORARIOS</h1>
            <p className="text-gray-500 font-light text-md">ORDUTEGIA</p>
          </div>
          <div className="">
            <div className="">
              <p className="text-xs">
                <span className="font-semibold">L:</span> Cerrado
              </p>
              <p className="text-xs">
                <span className="font-semibold">M:</span> Cerrado
              </p>
              <p className="text-xs">
                <span className="font-semibold">X:</span> 19:00 - 22:30h
              </p>
              <p className="text-xs">
                <span className="font-semibold">J:</span> 19:00 - 22:00h
              </p>
              <p className="text-xs">
                <span className="font-semibold">V:</span> 19:00 - 23:00h
              </p>
              <p className="text-xs">
                <span className="font-semibold">S:</span> 19:00 - 23:00h
              </p>
              <p className="text-xs">
                <span className="font-semibold">D:</span> 19:00 - 22:00h
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-2/6 flex flex-wrap justify-around gap-6">
          <div className="flex flex-col items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              id="credit-card"
              className="w-16 h-16"
            >
              <rect
                width="465"
                height="286"
                x="39.5"
                y="57.5"
                fill="#1067ae"
                rx="30"
              ></rect>
              <path
                fill="#0a56a4"
                d="M474.5,57.5h-30a30,30,0,0,1,30,30v226a30,30,0,0,1-30,30h30a30,30,0,0,0,30-30V87.5A30,30,0,0,0,474.5,57.5Z"
              ></path>
              <rect
                width="465"
                height="64"
                x="39.5"
                y="109.5"
                fill="#57565c"
              ></rect>
              <rect
                width="30"
                height="64"
                x="474.5"
                y="109.5"
                fill="#3c3b41"
              ></rect>
              <rect
                width="465"
                height="286"
                x="7.5"
                y="153.5"
                fill="#227fc0"
                rx="30"
              ></rect>
              <path
                fill="#2370b5"
                d="M442.5,153.5h-30a30,30,0,0,1,30,30v226a30,30,0,0,1-30,30h30a30,30,0,0,0,30-30v-226A30,30,0,0,0,442.5,153.5Z"
              ></path>
              <rect
                width="131"
                height="32"
                x="293.5"
                y="198.5"
                fill="#fff"
                rx="10"
              ></rect>
              <path
                fill="#e1e1e3"
                d="M414.5,198.5h-30a10,10,0,0,1,10,10v12a10,10,0,0,1-10,10h30a10,10,0,0,0,10-10v-12A10,10,0,0,0,414.5,198.5Z"
              ></path>
              <rect
                width="70"
                height="51"
                x="55.5"
                y="198.5"
                fill="#f8be32"
                rx="10"
              ></rect>
              <path
                fill="#fed030"
                d="M115.5,198.5H94.13a10,10,0,0,1,10,10v31a10,10,0,0,1-10,10H115.5a10,10,0,0,0,10-10v-31A10,10,0,0,0,115.5,198.5Z"
              ></path>
              <path
                fill="#fff"
                d="M212.08 372H55.51a7.5 7.5 0 1 1 0-15H212.08a7.5 7.5 0 1 1 0 15zM141.5 402H55.85a7.5 7.5 0 0 1 0-15H141.5a7.5 7.5 0 0 1 0 15z"
              ></path>
              <circle cx="402" cy="381" r="22.5" fill="#f9a242"></circle>
              <path
                fill="#f69531"
                d="M402,358.5a22.46,22.46,0,0,0-7.5,1.29,22.5,22.5,0,0,1,0,42.42A22.5,22.5,0,1,0,402,358.5Z"
              ></path>
              <circle cx="372" cy="381" r="22.5" fill="#f8be32"></circle>
              <path
                fill="#fed030"
                d="M372,358.5a22.46,22.46,0,0,0-7.5,1.29,22.5,22.5,0,0,1,0,42.42A22.5,22.5,0,1,0,372,358.5Z"
              ></path>
              <path
                fill="#fff"
                d="M120.85 320h-65a7.5 7.5 0 0 1 0-15h65a7.5 7.5 0 1 1 0 15zM222.06 320h-65a7.5 7.5 0 0 1 0-15h65a7.5 7.5 0 0 1 0 15zM323.28 320h-65a7.5 7.5 0 0 1 0-15h65a7.5 7.5 0 0 1 0 15zM424.5 320h-65a7.5 7.5 0 0 1 0-15h65a7.5 7.5 0 0 1 0 15z"
              ></path>
            </svg>
            <p className="text-center font-light">Pagos con tarjeta</p>
          </div>
          <div className="relative flex flex-col items-center justify-center ">
            <img
              className="w-16 h-16"
              src="/images/servicios/delivery-icon.svg"
            ></img>
            <p className="text-center font-light">No repartimos a domicilio</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              id="pizza"
              className="h-16 w-16"
            >
              <path
                fill="#fbfbfb"
                d="m75.587 461.939 355.439-4.475-46.103-148.469-257.843.001-51.493 152.943z"
              ></path>
              <path
                fill="#ffc97a"
                d="M148 449a108 108 0 0 1 216 0l-108 45Z"
              ></path>
              <path
                fill="#ffc166"
                d="M256 341a109.178 109.178 0 0 0-11.525.613A108.012 108.012 0 0 1 340.95 449l-96.475 40.198L256 494l108-45a108 108 0 0 0-108-108Z"
              ></path>
              <path
                fill="#fbfbfb"
                d="m425.27 52.501-.91 15-11.36 187H99l-11.36-187-.91-15 1.57-29.97.79-15.03h333.82l.79 15.03 1.57 29.97z"
              ></path>
              <path
                fill="#f7f7f7"
                d="m423.7 22.531-.79-15.03h-30l.79 15.03 1.57 29.97-.91 15-11.36 187h30l11.36-187 .91-15-1.57-29.97z"
              ></path>
              <path
                fill="#dedede"
                d="m428 449.5-43.077-139.999L413 254.5l60 195h-45z"
              ></path>
              <path
                fill="#f7f7f7"
                d="m425.27 52.501-.91 15H282.7a26.7 26.7 0 1 1-53.4 0H87.64l-.91-15 1.57-29.97c.26-.02.52-.03.79-.03h333.82c.27 0 .53.01.79.03Z"
              ></path>
              <path
                fill="#f66"
                d="M75.202 52.5h154.095a26.703 26.703 0 1 0 53.406 0h154.095a6 6 0 0 0 5.692-7.897L432.4 14.338a10 10 0 0 0-9.487-6.838H89.087a10 10 0 0 0-9.487 6.838L69.51 44.603a6 6 0 0 0 5.692 7.897Z"
              ></path>
              <path
                fill="#ff4e4e"
                d="M442.49 44.602 432.4 14.338a10 10 0 0 0-9.486-6.838h-45a10 10 0 0 1 9.486 6.838l10.089 30.264a6 6 0 0 1-5.692 7.898h45a6 6 0 0 0 5.692-7.898Z"
              ></path>
              <path
                fill="#f66"
                d="M473 449.5H282.703a26.703 26.703 0 1 1-53.406 0H39v45a10 10 0 0 0 10 10h414a10 10 0 0 0 10-10Z"
              ></path>
              <path
                fill="#ff4e4e"
                d="M428 449.5v45a10 10 0 0 1-10 10h45a10 10 0 0 0 10-10v-45Z"
              ></path>
              <path
                fill="#dedede"
                d="m39 449.5 60-195 28.08 55.002-43.08 140-45-.002z"
              ></path>
              <path
                fill="#f2f2f2"
                d="M127.08 309.502h257.84L413 254.5H99l28.08 55.002z"
              ></path>
              <circle cx="203.984" cy="410" r="15" fill="#f66"></circle>
              <circle cx="262.924" cy="383.749" r="15" fill="#f66"></circle>
              <circle cx="316.411" cy="417.5" r="15" fill="#f66"></circle>
              <path
                fill="#ff4e4e"
                d="M316.41 402.5a14.93 14.93 0 0 0-5.244.961 14.979 14.979 0 0 1 0 28.078 14.994 14.994 0 1 0 5.245-29.039zm-53.486-33.75a14.93 14.93 0 0 0-5.245.96 14.979 14.979 0 0 1 0 28.078 14.994 14.994 0 1 0 5.245-29.039zM203.984 395a14.93 14.93 0 0 0-5.244.961 14.979 14.979 0 0 1 0 28.078A14.994 14.994 0 1 0 203.984 395z"
              ></path>
              <path
                fill="#272a33"
                d="M203.984 387.5a22.5 22.5 0 1 0 22.5 22.5 22.526 22.526 0 0 0-22.5-22.5Zm0 30a7.5 7.5 0 1 1 7.5-7.5 7.508 7.508 0 0 1-7.5 7.5Zm276.478 31.25c-.014-.14-.04-.276-.062-.414-.016-.104-.026-.207-.047-.31a7.408 7.408 0 0 0-.205-.797l-59.58-193.632L432.329 60h4.47a13.5 13.5 0 0 0 12.806-17.769l-10.088-30.266A17.48 17.48 0 0 0 422.914 0H89.086a17.48 17.48 0 0 0-16.603 11.966L62.396 42.229A13.5 13.5 0 0 0 75.202 60h4.47L91.43 253.597l-59.58 193.632a7.405 7.405 0 0 0-.204.796c-.021.104-.031.207-.048.31-.021.139-.047.275-.061.416a7.465 7.465 0 0 0-.038.81V494.5A17.52 17.52 0 0 0 49 512h414a17.52 17.52 0 0 0 17.5-17.5v-44.939a7.47 7.47 0 0 0-.038-.81ZM462.846 442h-29.307l-40.554-131.799 18.286-35.819ZM256 333.5A115.644 115.644 0 0 0 140.718 442H94.155l38.464-124.999h246.765L417.845 442h-46.563A115.644 115.644 0 0 0 256 333.5ZM356.252 442h-73.549a7.5 7.5 0 0 0-7.5 7.5 19.203 19.203 0 0 1-38.406 0 7.5 7.5 0 0 0-7.5-7.5h-73.55a100.496 100.496 0 0 1 200.505 0Zm44.499-180-20.42 40.001H131.67L111.25 262Zm-294.693-15L94.7 60h127.925a34.209 34.209 0 0 0 66.75 0H417.3l-11.358 187ZM77.284 45l9.43-28.291A2.496 2.496 0 0 1 89.08 15l.01.001h333.83a2.496 2.496 0 0 1 2.366 1.707L434.716 45H282.703a7.5 7.5 0 0 0-7.5 7.5 19.203 19.203 0 0 1-38.406 0 7.5 7.5 0 0 0-7.5-7.5Zm23.445 229.381 18.288 35.821L78.461 442H49.154ZM465.5 494.5a2.502 2.502 0 0 1-2.5 2.5H49a2.502 2.502 0 0 1-2.5-2.5V457h37.464l.04.003.036-.003h138.586a34.209 34.209 0 0 0 66.75 0h138.598l.024.002.026-.002H465.5ZM221.345 363.495a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8ZM293.91 417.5a22.5 22.5 0 1 0 22.5-22.5 22.526 22.526 0 0 0-22.5 22.5Zm30 0a7.5 7.5 0 1 1-7.5-7.5 7.508 7.508 0 0 1 7.5 7.5Zm-19.639-30a8 8 0 1 0-8-8 8.01 8.01 0 0 0 8 8Zm-41.348-26.251a22.5 22.5 0 1 0 22.5 22.5 22.526 22.526 0 0 0-22.5-22.5Zm0 30a7.5 7.5 0 1 1 7.5-7.5 7.508 7.508 0 0 1-7.5 7.5ZM256 424.5a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Z"
              ></path>
            </svg>
            <p className="text-center font-light">Solo para llevar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasInformacion;
