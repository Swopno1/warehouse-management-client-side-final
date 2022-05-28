import React from "react";
import Banner from "../../components/Banner/Banner";
import Inventory from "../../components/Inventories/Inventories";
import ContactForm from "../../components/ContactForm/ContactForm";
import RecentNews from "./RecentNews";

const Home = () => {
  return (
    <main>
      <Banner />
      <Inventory />
      <RecentNews />
      <ContactForm />
    </main>
  );
};

export default Home;
