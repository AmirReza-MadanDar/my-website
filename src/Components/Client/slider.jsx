import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/9.png";
import img2 from "../../images/10.png";
import img3 from "../../images/11.png";
import "./slider.css";
const MySlider = () => {
  const cards = [
    {
      image: img1,
      title: "Mary Jans,",
      description: "Marketing Head",
      details:
        " In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. ",
    },
    {
      image: img2,
      title: "Jully Doe,",
      description: "Design Startegist",
      details:
        " In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. ",
    },
    {
      image: img3,
      title: "John Doe",
      description: "CEO Management",
      details:
        " In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. ",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider className="main-slider" {...settings}>
        {cards.map((card, index) => (
          <div className="cart-container" key={index}>
            <img className="img" src={card.image} alt={`Card ${index + 1}`} />
            <h3>{card.title}</h3>
            <p className="description">{card.description}</p>
            <p className="details">{card.details}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MySlider;
