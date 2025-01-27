import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../Home/Shared/Cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../hooks/useMenu";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
function Menu() {
  const [menu] = useMenu()
  const offered = menu?.filter((item) => item.category === "offered");
  const desserts = menu?.filter((item) => item.category === "dessert");
  const pizzas = menu?.filter((item) => item?.category === "pizza");
  const soups = menu?.filter((item) => item.category === "soup");
  const salads = menu?.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        imgae={menuImage}
        title={"our menu"}
        desc={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet facere maxime quis harum minus autem sunt eligendi et laboriosam."
        }
      />
      <SectionTitle subheading={"Don't Miss"} heading={"Today's Offered"} />
      <MenuCategory items={offered} />
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessert}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet facere maxime quis harum minus autem sunt eligendi et laboriosam."
        }
      />
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        img={pizza}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet facere maxime quis harum minus autem sunt eligendi et laboriosam."
        }
      />
      <MenuCategory
        items={soups}
        title={"soup"}
        img={soup}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet facere maxime quis harum minus autem sunt eligendi et laboriosam."
        }
      />
      <MenuCategory
        items={salads}
        title={"salad"}
        img={salad}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet facere maxime quis harum minus autem sunt eligendi et laboriosam."
        }
      />
    </div>
  );
}

export default Menu;
