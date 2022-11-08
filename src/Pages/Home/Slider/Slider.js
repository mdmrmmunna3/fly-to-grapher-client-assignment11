import React from 'react';

import img1 from '../../../assets/SliderImg/img1.png';
import img2 from '../../../assets/SliderImg/img2.png';
import img3 from '../../../assets/SliderImg/img3.png';
import img4 from '../../../assets/SliderImg/img4.png';
import SliderImge from './SliderImge/SliderImge';

const Slider = () => {

    const SliderData = [

        {
            image: img1,

            prev: 4,
            id: 1,
            next: 2,
            title: 'Couples are opting for more candid, natural shots versus overly posed pictures. Most of my couples are ditching the traditional bridal party photograph',
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3,
            title: 'Philosophy of Photography is a cluster of research activities thats concerned with the role of the mechanically produced and digitally disseminated image in contemporary culture',
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4,
            title: `Philosophy of Photography is a cluster of research activities thats concerned with the role of the mechanically produced and digitally disseminated image in contemporary culture`,
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 1,
            title: 'There is a lot more to sports photography as a career than just showing up at games and other sporting events.',
        },

    ]

    return (
        <div className="carousel w-full ">
            {
                SliderData.map(slider => <SliderImge
                    key={slider.id}
                    slider={slider}
                ></SliderImge>)
            }
        </div>
    );
};

export default Slider;