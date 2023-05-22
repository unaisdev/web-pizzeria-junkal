import "./styles.css";

const DondeEstamos = () => {
  return (
    <section id="info" className="py-6">
      <div className="block">
        <div className="pb-4 pl-4  md:pl-12">
          <h1 className="font-bold text-xl md:text-3xl">DÓNDE ESTAMOS</h1>
          <p className="text-gray-500 font-light text-sm md:text-md">
            NUN AURKITUKO GAITUZU
          </p>
        </div>
        <div className="flex flex-wrap items-center bg-slate-200 md:px-4">
          <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
            <div className="flex h-52 md:h-96 flex-grow w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.6836067757067!2d-1.7892138234148407!3d43.34180937111852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5109b3baad636d%3A0x6c8445e6d1312157!2sPizzer%C3%ADa%20Junkal!5e0!3m2!1ses!2ses!4v1682554743611!5m2!1ses!2ses"
                className="left-0 top-0 h-full w-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full p-4 lg:p-12 lg:w-6/12 xl:w-8/12">
            {/* <div className="flex flex-wrap pt-12 lg:pt-0">
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-gray-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock text-white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1 text-md">HORARIO:</p>
                    <p className="text-gray-500 text-sm">
                      <strong>Lunes:</strong> CERRADO
                    </p>
                    <p className="text-gray-500 text-sm">
                      <strong>Martes:</strong> CERRADO
                    </p>
                    <p className="text-gray-500 text-sm">
                      <strong>Miércoles:</strong> 19:00h - 22:00h
                    </p>
                    <p className="text-gray-500 text-sm">
                      <strong>Jueves:</strong> 19:00h - 22:00h
                    </p>
                    <p className="text-gray-500 text-sm">
                      <strong>Viernes:</strong> 19:00h - 23:00h
                    </p>
                    <p className="text-gray-500 text-sm">
                      <strong>Sábado:</strong> 19:00h - 23:00h
                    </p>
                    <p className="text-gray-500 text-sm">
                      <strong>Domingo:</strong> 19:00h - 22:00h
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-gray-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="headset"
                        className="w-5 text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1 text-md lg:text-2xl">
                      Nº de Teléfono:
                    </p>
                    <p className="text-gray-500 text-sm lg:text-xl">
                      +34 943 26 58 63
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="">
              <div className="flex flex-wrap justify-around">
                <div className="flex text-center">
                  <div>
                    <div className="bg-slate-300 px-2 rounded-full ">
                      <p>Lunes y Mártes</p>
                    </div>
                    <p>Cerrado</p>
                  </div>
                </div>
                <div className="flex  text-center">
                  <div>
                    <div className="bg-slate-300 px-2 rounded-full">
                      <p>X, J, V, S y D</p>
                    </div>
                    <p>19:30h - 22:00h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DondeEstamos;
