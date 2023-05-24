import ListSection from "../Carta/List";
import "./styles.css";

const DondeEstamos = () => {
  return (
    <section id="info" className="py-6">
      <div className="block">
        <div className="pb-4 pl-4  md:pl-12">
          <h1 className="font-bold text-xl md:text-3xl">DÓNDE ESTAMOS</h1>
          <p className="text-gray-500 font-light text-md">
            NUN AURKITUKO GAITUZU
          </p>
        </div>
        <div className="w-full flex-wrap items-center bg-slate-200">
          <div className="grow-0 shrink-0 basis-auto block w-full ">
            <div className="h-64 w-full">
              <iframe
              title="Donde estamos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.6836067757067!2d-1.7892138234148407!3d43.34180937111852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5109b3baad636d%3A0x6c8445e6d1312157!2sPizzer%C3%ADa%20Junkal!5e0!3m2!1ses!2ses!4v1682554743611!5m2!1ses!2ses"
                className="h-full w-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DondeEstamos
