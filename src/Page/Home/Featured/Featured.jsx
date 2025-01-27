import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Feacture.css";
function Featured() {
  return (
    <div className="featured-item text-white bg-fixed  pt-10 my-20">
      <SectionTitle subheading={"Check it out"} heading={"featured items"} />
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-10 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>March 20,2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            tempore ut nihil recusandae in non facilis similique exercitationem
            facere perferendis iusto cupiditate illo, doloribus aspernatur ipsa
            eius eveniet nam consequatur omnis! Ullam commodi maiores reiciendis
            vitae? Atque repellendus minus enim labore veniam. Dolorem nemo
            reiciendis non, blanditiis saepe vel quibusdam?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
