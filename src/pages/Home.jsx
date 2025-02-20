import React from "react";

import Maincontent from "../components/Maincontent";
import CardList from "../components/CardBook/CardList";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="xl:w-[90%] w-full xl:m-auto xl:pt-5">
      <Navbar />
      <Maincontent />
      <CardList />
    </div>
  );
};

export default Home;
