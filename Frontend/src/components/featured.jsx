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
        <div className=" bg-white rounded-lg py-2 my-4">
            <h1 className='font-bold text-black m-3 ml-8 text-lg'>Featured dApps</h1>
        <div className="  rounded-xl mx-auto my-5 lg:w-[610px] xl:w-[600px] md:w-[530px] text-black bg-white w-80 py-1 ">
            
            <Slider {...settings}>
                <div className="p-1">
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
        </div>
    );
}

export default FeaturedDapps;
