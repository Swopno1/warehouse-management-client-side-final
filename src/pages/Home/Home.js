import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import Inventories from "./Inventories";
import RecentNews from "./RecentNews";

const Home = () => {
  return (
    <main>
      <Banner />
      <Inventories />
      <RecentNews />
      <ContactForm />
    </main>
  );
};

export default Home;
