import React from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import Hero from "../components/Hero";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
