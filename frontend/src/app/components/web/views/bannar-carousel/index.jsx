import React from 'react'
import Slider from 'react-slick'


function BannarSlider() {
    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    return (
        <Slider {...settings}>
            <div className="owl-item">
                <img src="img/banners/offer-1.jpg" alt="supermarket"/>
            </div>
             <div className="owl-item">
                <img src="img/banners/offer-2.jpg" alt="supermarket"/>
            </div>
             <div className="owl-item">
                <img src="img/banners/offer-3.jpg" alt="supermarket"/>
            </div>
        </Slider>
    )
}

export default BannarSlider
