import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import destination1 from '../../assets/sundorbon.png'
import destination2 from '../../assets/Sreemongol.png'
import destination3 from '../../assets/Sajek.png'
import { Link } from 'react-router-dom';

const Slider = () => {
    const coxBazar = {
        title : 'cox bazar',
        description :'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',
        
    }
    const sreeMongol = {
        title : 'sree mongol',
        description :'Sree Mongol is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',
        
    }
    const sajek = {
        title : 'sajek',
        description :'sajek is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',
        
    }
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                Autoplay={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                <SwiperSlide>
                    <Link to='/destination' data={coxBazar}>
                        <div className="relative">
                            <img src={destination1} alt="Cox bazar" />
                            <h2 className='absolute bottom-6 left-3 text-white text-4xl'>COX BAZAR</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/destination'>
                        <div className="relative">
                            <img src={destination2} alt="Cox bazar" />
                            <h2 className='absolute bottom-6 left-3 text-white text-4xl'>SHREE MONGOL</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/destination'>
                        <div className="relative">
                            <img src={destination3} alt="Cox bazar" />
                            <h2 className='absolute bottom-6 left-3 text-white text-4xl'>SAZEK</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/destination'>
                        <div className="relative">
                            <img src={destination1} alt="Cox bazar" />
                            <h2 className='absolute bottom-6 left-3 text-white text-4xl'>COX BAZAR</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;