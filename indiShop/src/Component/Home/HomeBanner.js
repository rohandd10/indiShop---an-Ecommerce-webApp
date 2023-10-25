import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import "./Home.css";

const HomeBanner =()=> {

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 },items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 },items: 1},
        mobile: { breakpoint: { max: 464, min: 0 },items: 1}
    };

    const bannerData = [
        { pic: '../media/Banner1.jpg' },
        { pic: '../media/Banner2.png' },
        { pic: '../media/Banner3.jpg' },
        { pic: '../media/Banner4.jpg' }
    ];

    return (
        <div>
            <Carousel swipeable={false} draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
                {
                    bannerData.map( data=>(<img className="carouselImg" src={data.pic} alt="pic"/>))
                }
            </Carousel>
        </div>
    )
}
export default HomeBanner;