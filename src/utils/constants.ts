import friend1 from "../images/friend1.jpg";
import friend2 from "../images/friend2.jpg";
import friend3 from "../images/friend3.jpg";
import friend4 from "../images/friend4.jpg";
import friend5 from "../images/friend5.jpg";
import friend6 from "../images/friend6.jpg";
import friend7 from "../images/friend7.jpg";
import friend8 from "../images/friend8.jpg";
import friend9 from "../images/friend9.jpg";
import friend0 from "../images/main.jpg";
import { Characters, IHero, Item, Itransport } from "./types";

export const BASE_URL = "https://sw-info-api.herokuapp.com";

export const characters: Characters = {
  luke: {
    name: "Luke Skywalker",
    img: friend0,
    url: `${BASE_URL}/v1/peoples/1`,
  },
  c3po: {
    name: "C-3PO",
    img: friend2,
    url: `${BASE_URL}/v1/peoples/2`,
  },
  r2d2: {
    name: "R2-D2",
    img: friend1,
    url: `${BASE_URL}/v1/peoples/3`,
  },
  leia: {
    name: "Leia Organa",
    img: friend6,
    url: `${BASE_URL}/v1/peoples/5`,
  },
  obi_wan: {
    name: "Obi-Wan Kenobi",
    img: friend8,
    url: `${BASE_URL}/v1/peoples/10`,
  },
  chewbacca: {
    name: "Chewbacca",
    img: friend4,
    url: `${BASE_URL}/v1/peoples/13`,
  },
  han_solo: {
    name: "Han Solo",
    img: friend5,
    url: `${BASE_URL}/v1/peoples/14`,
  },
  yoda: {
    name: "Yoda",
    img: friend9,
    url: `${BASE_URL}/v1/peoples/0`,
  },
  ewok: {
    name: "Wicket Systri Warrick",
    img: friend3,
    url: `${BASE_URL}/v1/peoples/30`,
  },
  falcon: {
    name: "Millennium Falcon",
    img: friend7,
    url: `${BASE_URL}/v1/transports/10`,
  },
};

export const friends = Object.keys(characters);

export const defaultHero = friends[0];

export const navItems: Item[] = [
  { title: "Home", route: "home" },
  { title: "About me", route: "about_me" },
  { title: "Star Wars", route: "star_wars" },
  { title: "Contact", route: "contact" },
];

export const month = 30 * 24 * 60 * 60 * 1000;

export type Change = (page: string) => void;

export interface IChange {
  changePage: Change;
}

export const lukeDefault: IHero & Itransport = {
  id: 1,
  edited: "2014-12-20T21:17:56.891Z",
  name: "Luke Skywalker",
  created: "2014-12-09T13:50:51.644Z",
  gender: "male",
  skin_color: "fair",
  hair_color: "blond",
  height: "172",
  eye_color: "blue",
  mass: "77",
  homeworld: 1,
  birth_year: "19BBY",
  image: "luke_skywalker.jpg",
  cargo_capacity: '',
  consumables: '',
  cost_in_credits: '',
  crew: '',
  length: '',
  manufacturer:'',
  max_atmosphering_speed: '',
  model:"",
  passengers:'',
};
