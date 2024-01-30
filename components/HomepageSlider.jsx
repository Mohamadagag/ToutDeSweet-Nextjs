'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import slide1 from '../public/carousel/Slide1.png'
import slide2 from '../public/carousel/Slide2.png'
import slide3 from '../public/carousel/Slide3.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HomepageSlider = () => {
    return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        className='h-[600px]'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className='absolute bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center sm:bottom-72'>
            <h3 className='tracking-wider font-semibold '>ENTREMET</h3>
            <p className='mt-5'>The finest and artisanal handcrafted cakes. Experience the flavors in each cake.</p>
          </div>
          <Image src={slide1} className='w-full h-full object-cover' alt='slide 1' />
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='absolute bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center sm:bottom-72'>
            <h3 className='tracking-wider font-semibold '>TARTS</h3>
            <p className='mt-5'>A crispy golden crust with diverse and creative twists of mousses or cremeux.</p>
          </div>
          <Image src={slide2} className='w-full h-full object-cover' alt='slide 1' />
        </SwiperSlide>

        <SwiperSlide>
        <div className='absolute bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center sm:bottom-72'>
            <h3 className='tracking-wider font-semibold text-[#35464f]'>VIENNOISERIES</h3>
            <p className='mt-5 text-[#35464f]'>Have special weekend mornings with our exceptional butter croissants.</p>
          </div>
          <Image src={slide3} className='w-full h-full object-cover' alt='slide 1' />
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className='absolute bottom-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
            <h3 className='tracking-wider font-semibold '>TARTS</h3>
            <p className='mt-5'>A crispy golden crust with diverse and creative twists of mousses or cremeux.</p>
          </div>
          <Image src={slide2} className='w-full h-full object-cover' alt='slide 2' />
        </SwiperSlide>

        <SwiperSlide>
        <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center sm:bottom-60'>
            <h3 className='tracking-wider font-semibold text-[#35464f]'>VIENNOISERIES</h3>
            <p className='mt-5 text-[#35464f]'>Have special weekend mornings with our exceptional butter croissants, pains au chocolat, almond croissants, and others.</p>
          </div>
          <Image src={slide3} className='w-full h-full object-cover' alt='slide 1' />
        </SwiperSlide> */}

      </Swiper>
    </div>
    )
}

export default HomepageSlider