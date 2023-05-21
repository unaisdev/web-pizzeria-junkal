// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, EffectFlip, EffectCards, EffectCoverflow, EffectCreative, SwiperOptions } from 'swiper';

import './styles.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperCarousel = () => {
    return (
        <Swiper
            // install Swiper modules
            effect="fade"
            className='mb-4 swiper-photos'
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            draggable
            loop
            navigation
            
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
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=743&q=80' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80' />
            </SwiperSlide>
        </Swiper>
    );
};


export default SwiperCarousel