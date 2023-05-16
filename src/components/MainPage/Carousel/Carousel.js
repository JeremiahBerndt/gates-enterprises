import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HouseCarousel = () => {
        return (
            <Carousel>
                <div>
                    <img src="https://res.cloudinary.com/ocimages/image/upload/c_scale,w_1229/f_auto,q_auto/v1/uploads/prod/roofing/shingle_api_assets/TDD_Driftwood_RGB_house_full_sky_06_2022"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
};

export default HouseCarousel;

