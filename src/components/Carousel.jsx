// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'animate.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import Slide from './Slide'

import bgimg1 from '../assets/volunteer_1.jpg'
import bgimg2 from '../assets/volunteer_2.2.jpg'
import bgimg3 from '../assets/volunteer_3.jpg'
import Slide from './Slide'

export default function Carousel() {
    return (
        <div className='container px-6 py-5 mx-auto'>
            <h1 className='text-center mb-2 text-4xl text-[#eca12c] font-semibold animate__animated animate__bounce animate__delay-2s animate__infinite'>Hey volunteers!</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Join Our Volunteering Team'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Be a Hero in Someones Story'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Become a part of our mission and change lives.'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
