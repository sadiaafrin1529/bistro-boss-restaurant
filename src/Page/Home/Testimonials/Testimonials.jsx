import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";
function Testimonials() {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
  return (
    <section>
      <SectionTitle
        subheading={"What out client say"}
        heading={"Testimonials"}
      />
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="flex flex-col items-center my-20 mx-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={review?.rating}
                readOnly
              />
              <p className='py-9'>{review?.details}</p>
              <h3 className="text-2xl text-orange-500">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials