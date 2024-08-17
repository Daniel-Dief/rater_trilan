import SmallFilmBox from "../SmallFilmBox";
import highlightsRequest from "../../common/requests/highlightsRequest";
import { useEffect, useState } from "react";
import IfilmHighlight from "../../common/types/IfilmHighlight";

//Estava com dificuladade de chamar a função assincrona para o elemento
//sem que tonasse o Highlights asyncrono, por isso, usei o ChatGPT

export default function Highlights() {
    const [films, setFilms] = useState(Array<IfilmHighlight>);

    useEffect(() => {
        (async () => {
            const films = await highlightsRequest();
            setFilms(films);
        })();
    }, []);

    return (
        <>
            {
                films.map((film, key) => (
                    <SmallFilmBox
                        key={key}
                        id={film.id}
                        title={film.title}
                        vote_average={film.vote_average}
                        backdrop_path={film.backdrop_path}
                    />
                ))
            }
        </>
    );
}
