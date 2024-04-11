import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from "../Photos/1.webp"
import photo2 from "../Photos/2.webp"
import photo3 from "../Photos/3.webp"


// function Arrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   }


function PhotoPlayer() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   nextArrow: <Arrow />,
    //   prevArrow: <Arrow />
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={photo1} alt="" className="photo"/> 
          </div>
          <div>
            <img src={photo2} alt="" className="photo"/> 
          </div>
          <div>
            <img src={photo3} alt="" className="photo"/> 
          </div>
        </Slider>
      </div>
    );
  }

export default PhotoPlayer