import React from 'react';
import Slider from 'react-slick';
import rec from '../assets/rec.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const FeaturedDapps = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-lg rounded-xl mx-auto my-5 lg:w-screen md:w-[650px] bg-white w-80 py-10 ">
            <h2 className="text-2xl font-bold text-center mb-8">Featured dApps</h2>
            <Slider {...settings}>
                <div className="p-4">
                    <img src={rec} alt="League of Kingdoms" className="w-full rounded-lg" />
                    <h3 className="text-lg font-bold text-center mt-4">League of Kingdoms</h3>
                    <p className="text-center text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
                    </p>
                </div>
                <div className="p-4">
                    <img src={rec} alt="Plant vs Undead" className="w-full rounded-lg" />
                    <h3 className="text-lg font-bold text-center mt-4">Plant vs Undead</h3>
                    <p className="text-center text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
                    </p>
                </div>
                <div className="p-4">
                    <img src={rec} alt="My DeFi Pet" className="w-full rounded-lg" />
                    <h3 className="text-lg font-bold text-center mt-4">My DeFi Pet</h3>
                    <p className="text-center text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
                    </p>
                </div>
            </Slider>
        </div>
    );
}

export default FeaturedDapps;
