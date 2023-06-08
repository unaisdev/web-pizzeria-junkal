import RedesSociales from '../general/RedesSociales'
import './styles.css'

const Presentacion = () => {
    return (
        <div className='relative'>
            {/* <div className='swiper-box h-full absolute bottom-0 w-full text-center flex items-center justify-center bg-opacity-20'>
                <div className='w-auto pt-10'>
                    <h2 className='font-semibold text-3xl text-white px-8'><span className='text-orange-500'>El secreto</span> de la elaboración</h2>
                    <p className='text-xs md:text-sm text-white mt-2 px-8'>Nuestra masa, con harinas ecológicas y procesos de larga fermentación, consigue que el producto sea digestivo...</p>
                </div>

            </div> */}
            <div className='absolute bottom-0 w-full flex items-center justify-center z-[1] xl:hidden'>
                <RedesSociales iconClassName={"fill-white w-10 h-10 md:w-14 md:h-14"} hideText={true}/>

            </div>
            <img className="presentation-img w-full object-cover object-top" src="/images/principal.webp" alt='Foto principal de presentacion pizzeria junkal irun' />
            <div className="w-full h-60 presentation-shadow absolute bottom-0">
            </div>
        </div>

    )
}

export default Presentacion