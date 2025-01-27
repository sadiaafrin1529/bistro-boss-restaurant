import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import BistroBoss from "../BistroBoss/BistroBoss";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
       <Helmet>
                <title>Bistro Boss | Home</title>
              </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <BistroBoss/>
      <Featured />
      <Testimonials/>
    </div>
  );
}

export default Home;
