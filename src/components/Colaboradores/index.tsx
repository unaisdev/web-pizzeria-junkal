// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, EffectFlip, EffectCards, EffectCoverflow, EffectCreative, SwiperOptions } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// https://usehooks-ts.com/react-hook/use-intersection-observer

const Colaboradores = () => {
    return (
        <>

            <section id="colaboradores" className='py-6'>
                <div className="pb-4 pl-4 md:pl-12">
                    <h1 className="font-bold text-xl md:text-3xl">COLABORADORES</h1>
                    <p className="text-gray-500 font-light text-md">HARREMANAK</p>
                </div>

                <div className='flex flex-wrap bg-slate-300 p-4 justify-around'>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                </div>

            </section>



            {/* <Swiper
                // install Swiper modules
                effect="fade"
                className='mb-4'
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                draggable
                loop
                navigation
                freeMode
                autoplay={{
                    delay: 0,
                    waitForTransition: true,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='flex justify-around'>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex'>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full m-2 shadow-md">

                    </div>
                </SwiperSlide>

            </Swiper>*/}
        </> 
    )
}

export default Colaboradores