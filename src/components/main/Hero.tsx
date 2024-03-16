import React, { useContext } from "react";
import { AppContext } from "../../utils/context";
import { characters } from "../../utils/constants";

// rafce - React Arrow Function Component Export
// rce - React Class Export

const Hero = () => {
  const { hero } = useContext(AppContext);
  return (
    <section className="float-start me-3 w-25">
      <img className="w-100" src={characters[hero].img} alt={characters[hero].name} />
    </section>
  );
};

export default Hero;
