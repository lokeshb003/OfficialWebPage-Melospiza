import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Autoplay } from 'swiper';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import '../../styles/testimonials.css'
import ParticlesJS from "../Particles";

const Testimonials = () => {
  return (
    <div className="container">
      <ParticlesJS/>
      <h1 className="Testimonials__title">Testimonials</h1>
      
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // autoplay={delay:4000,}
        slidesPerView={"auto"}
        autoplay={{
          delay:3000,
          // waitForTransition:true,
          // stopOnLastSlide:false,
          // pauseOnMouseEnter:true,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide
          className="swiperslide"
        >
          <div style={{ background: "blue" }} className='testimonials'>
            <p className="testimonials__content">
              "Melospiza exceeded my expectations with their web services. Their
              user experience is top-notch and the pricingis unbeatable. Highly
              recommend them!"
            </p>
            <p className="client__name">
              Jagadeesh <h6>Anish Cashews</h6>
            </p>
            <p className="place">Panruti, Cuddalore</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide "
        >
          <div style={{ background: "brown" }} className='testimonials'>
            <p className="testimonials__content">
              "I have been using Melospiza's services for all of my app
              development needs and have never been disappointed. Their team is
              professional and the pricing is very competative."
            </p>
            <p className="client__name">Giridharan</p>
            <p className="place">Chennai</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
        >
          <div style={{ background: "white" }} className='testimonials'>
            <p className="testimonials__content">
              "Melospiza's web and app services have helped my business grow
              exponentially. Their user experience is unmatched and the pricing
              is very aggressive. I highly recommend them."
            </p>
            <p className="client__name">Ajay Patel</p>
            <p className="place">New Delhi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
        >
          <div style={{ background: "blue" }} className='testimonials'>
          <p className="testimonials__content">
              "Melospiza's web and app services have helped my business grow
              exponentially. Their user experience is unmatched and the pricing
              is very aggressive. I highly recommend them."
            </p>
            <p className="client__name">Ajay Patel</p>
            <p className="place">New Delhi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
        >
          <div style={{ background: "red" }} className='testimonials'>
          <p className="testimonials__content">
              "Melospiza's web and app services have helped my business grow
              exponentially. Their user experience is unmatched and the pricing
              is very aggressive. I highly recommend them."
            </p>
            <p className="client__name">Ajay Patel</p>
            <p className="place">New Delhi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
        >
          <div style={{ background: "yellow" }} className='testimonials'>
          <p className="testimonials__content">
              "Melospiza's web and app services have helped my business grow
              exponentially. Their user experience is unmatched and the pricing
              is very aggressive. I highly recommend them."
            </p>
            <p className="client__name">Ajay Patel</p>
            <p className="place">New Delhi</p>
          </div>
        </SwiperSlide>

        <div className="slider-controller">
          {/* <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div> */}
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
