import React, { useContext } from "react";
import { friends } from "../../utils/constants";
import Friend from "./Friend";
import { AppContext, DreamTeamContext } from "../../utils/context";

const DreamTeam = () => {
  const { hero } = useContext(AppContext);
  return (
    <section className="float-end w-50 mx-1 border-warning border rounded-bottom-2 border-3 row">
      <h2 className="col-12 text-center">Dream Team</h2>
      {friends.filter(f => f !== hero).map((item, index) => (
        // <DreamTeamContext.Provider value={{numberContext: index + 1, photoContext: item}}>
          <Friend key={index} hero={item} number={index + 1} />
        // </DreamTeamContext.Provider>
      ))}
    </section>
  );
};

export default DreamTeam;
