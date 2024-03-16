export interface Hero {
    name: string,
    img: string,
    url: string,
}

export interface Characters {
    [key: string]: Hero
}

export interface Item {
    title: string,
    route: string
}

export interface IHero {
    id: number;
    edited: string;
    name: string;
    created: string;
    gender: string;
    skin_color: string;
    hair_color: string;
    height: string;
    eye_color: string;
    mass: string;
    homeworld: number;
    birth_year: string;
    image: string;
  }
  
  export interface Itransport {
    id: number;
    edited: string;
    consumables: string;
    name: string;
    created: string;
    cargo_capacity: string;
    passengers: string;
    max_atmosphering_speed: string;
    crew: string;
    length: string;
    model: string;
    cost_in_credits: string;
    manufacturer: string;
    image: string;
  }