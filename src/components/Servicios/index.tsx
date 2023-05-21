// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, EffectFlip, EffectCards, EffectCoverflow, EffectCreative, SwiperOptions } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Servicios = () => {
    return (
        <section>
            <div>
                <h1>COLABORADORES</h1>
            </div>

            <div className='flex bg-slate-500'>
                <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full slide">
                    
                </div>
                <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                    
                </div>
            </div>

            {/* <Swiper
                // install Swiper modules
                id="servicesSwiper"
                effect="fade"
                className='mb-4 '
                modules={[Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={4}
                watchSlidesProgress
                draggable
                loop
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
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                        a
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                        b
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                            vc
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                        e
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                        a
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                        b
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                            vc
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-24 w-24 md:w-52 md:h-52 bg-slate-200 rounded-full">
                        e
                    </div>
                </SwiperSlide>
            </Swiper> */}
        </section>
    )
}

export default Servicios