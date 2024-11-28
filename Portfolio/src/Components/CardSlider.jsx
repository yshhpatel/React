// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import '../CSS/CardSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function CardSlider() {
  const data = [
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Lays Clone",
    },
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Nexus",
    },
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Admin Dashboards",
    },
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Republic of Gamer",
    },
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Time Zone",
    },
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Deer Host",
    },
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Pato Place",
    },
   
    {
      info: "Web Design, App Design",
      img : "/project.png",
      head: "Pixel",
    },
  
  ];  
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      
      
    ]
  };


  return (
    <>
      <div className="main">
        <div className="main-sliders">
        <div className="name-slider">
          <span className='span-slide'>MY WORK</span>
        </div>
        <h2 className='slider-h2'>RECENT PROJECTS</h2>
        <div className="slide">
          <Slider {...settings} className='sliders'>
          {data.map((e) => {
            return (  
              <div className="slide-box" key={e.name}>
                <img src={e.img} alt="" />
                <div className="project-information">
                  <div className="info-1"> 
                  <h5>{e.head}</h5>
                  <span>{e.info}</span>
                  </div>
                  <div className="info-2">
                    <div className="cri">
                    <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </Slider>
        </div>
        </div>
      </div>
    </>
  );
}
