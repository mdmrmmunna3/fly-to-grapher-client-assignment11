import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import imge1 from '../../../assets/latestImg/news1.png';
import imge2 from '../../../assets/latestImg/news2.png';
import imge3 from '../../../assets/latestImg/news3.png';
import imge4 from '../../../assets/latestImg/news4.png';

import './LatestNews.css';

const LatestNews = () => {
    return (
        <div className='my-16 text-center'>
            <div className='news-title'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl mb-4 text-white'>Latest News</h1>
                <h3 className='text-white'>Latest Update for  Sport </h3>
            </div>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper "
                >
                    <SwiperSlide className=''>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={imge1} alt='' />
                        <br />
                        <p className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>The Premier League has said the 2023-24 season will take place from 12 August 2023 to 19 May 2024.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={imge2} alt='' />
                        <br />
                        <p className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            The countdown is on to the Fifa World Cup Qatar 2022.The tournament kicks off on 20 November with hosts Qatar facing Ecuador.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={imge3} alt='' />
                        <br />
                        <p className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>2023 World Cup: BCCI set to lose $58-116m if Indian government denies ICC tax waiver</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={imge4} alt='' />
                        <br />
                        <p className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>I think that this has been one of the craziest years in NASCAR history.after becoming only the 17th multitime champion of NASCAR's premier series.</p>
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default LatestNews;

