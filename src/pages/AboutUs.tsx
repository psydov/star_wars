import React, { useEffect, useState } from "react";
import {
  BASE_URL,
  characters,
  lukeDefault,
  month,
  navItems,
} from "../utils/constants";
import { withHeroId } from "../hoc/withHeroId";
import { IHero, Itransport } from "../utils/types";

const AboutUs = ({ heroId }: { heroId: string }) => {
  const [data, setData] = useState<IHero | Itransport | undefined>(undefined);

  useEffect(() => {
    const hero1 = JSON.parse(localStorage.getItem(heroId)!);

    if (hero1 && (Date.now() - hero1.time) < month) {
      setData(hero1.payload);
    } else {
      fetch(characters[heroId].url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          const info = {
            payload: data,
            time: Date.now(),
          };
          localStorage.setItem(heroId, JSON.stringify(info));
        })
        .catch(() => {
          setData(lukeDefault);
          localStorage.setItem('luke', JSON.stringify({
            payload: lukeDefault,
            time: Date.now()
          }))
        });
    }
  }, [heroId]);

  const isHero = (data: IHero | Itransport | undefined): data is IHero => {
    return (data as IHero).birth_year !== undefined;
  };

  return !data ? (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <div>
      {data && (
        <>
          <img src={`${BASE_URL}/${data.image}`} alt={data.name}></img>
          {isHero(data) ? (
            <>
              <p>birth_year: {data.birth_year}</p>
              <p>eye_color: {data.eye_color}</p>
              <p>gender: {data.gender}</p>
              <p>hair_color: {data.hair_color}</p>
              <p>height: {data.height}</p>
              <p>mass: {data.mass}</p>
              <p>skin_color: {data.skin_color}</p>
            </>
          ) : (
            <>
              <h1>{data.name}</h1>
              <p>Model: {data.model}</p>
              <p>Manufacturer: {data.manufacturer}</p>
              <p>Cost in credits: {data.cost_in_credits}</p>
              <p>Length: {data.length}</p>
              <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>
              <p>Crew: {data.crew}</p>
              <p>Passengers: {data.passengers}</p>
              <p>Cargo capacity: {data.cargo_capacity}</p>
              <p>Consumables: {data.consumables}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default withHeroId(navItems[1].route)(AboutUs);
