import FilmCard from "../FilmCard";
import highlightsRequest from "../../common/requests/highlightsRequest";
import { useEffect, useState } from "react";
import IFilmHighlight from "../../common/types/IFilmHighlight";
import SlideHighlights from "../SlideHighlights";

//Estava com dificuladade de chamar a função assincrona para o elemento
//sem que tonasse o Highlights asyncrono, por isso, usei o ChatGPT

export default function Highlights() {
    const [films, setFilms] = useState(Array<IFilmHighlight>);

    useEffect(() => {
        (async () => {
            const films = await highlightsRequest();
            setFilms(films);
        })();
    }, []);

    return (
        <div>
            <SlideHighlights 
                arrFilms={films}
            />
        </div>
    );
}
