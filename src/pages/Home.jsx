import React from "react";

import Maincontent from "../components/Maincontent";
import CardList from "../components/CardBook/CardList";
import Navbar from "../components/navbar";
import { MenuProvider } from "../context/MenuProvider";

const Home = () => {
  return (
    <div className="xl:w-[90%] w-full xl:m-auto xl:pt-5">
      <MenuProvider>
        <Navbar />
        <Maincontent />
      </MenuProvider>
      <CardList />
    </div>
  );
};

export default Home;
