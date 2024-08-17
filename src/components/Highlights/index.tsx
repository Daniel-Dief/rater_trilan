import SmallFilmBox from "../SmallFilmBox";
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
        <>
            {
                films.slice(1).map((film, key) => (
                    <SmallFilmBox
                        key={key}
                        id={film.id}
                        name={film.name}
                        vote_average={film.vote_average}
                        backdrop_path={film.backdrop_path}
                    />
                ))
            }
        </>
    );
}
