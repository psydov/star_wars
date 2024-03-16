import { createContext } from "react";
import { defaultHero } from "./constants";

export const AppContext = createContext({
    hero: defaultHero,
    changeHero: (hero: string) => {}
});

export const DreamTeamContext = createContext({
    photoContext: '',
    numberContext: 1
})