import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

function PopularMenu() {
  const [menu] = useMenu()
  const popluarItems = menu.filter((item)=>item.category === 'popular')
  return (
    <section className="mb-12 ">
      <SectionTitle heading="from our Menu" subheading="popular Items" />
      <div className="grid md:grid-cols-2 gap-10">
        {popluarItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="btn btn-outline border-0 border-b-4 ">
          View full menu
        </button>
      </div>
    </section>
  );
}

export default PopularMenu;
