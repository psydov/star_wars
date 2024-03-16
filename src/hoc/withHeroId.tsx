import { useNavigate, useParams } from "react-router-dom"
import { characters, defaultHero } from "../utils/constants"
import { useContext, useEffect } from "react";
import { AppContext } from "../utils/context";

export const withHeroId = (route: string) => (Component: React.FC<any>) => (props: any) => {
    let { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(AppContext);
    // Программный переход на новый адрес
    const navigate = useNavigate();

    heroId = characters[heroId] ? heroId : defaultHero;

    useEffect(() => {
        navigate(`/${route}/${heroId}`);
        changeHero(heroId);
    }, [heroId])

    return <Component heroId={heroId} {...props} />
}