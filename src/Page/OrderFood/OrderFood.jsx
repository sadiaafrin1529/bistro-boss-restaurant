import React, { useState } from "react";
import Cover from "../Home/Shared/Cover/Cover";
import orderfood from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { Helmet } from "react-helmet-async";

import OrderFoodTab from "./OrderFoodTab/OrderFoodTab";
import { useParams } from "react-router-dom";
function OrderFood() {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(tabIndex)
 
  const [menu] = useMenu(); 

  // console.log(category);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover
        title={"Order Food"}
        desc={
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eligendi?"
        }
        imgae={orderfood}
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderFoodTab items={salad}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={pizza}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={soup}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={desserts}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={drinks}></OrderFoodTab>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default OrderFood;
