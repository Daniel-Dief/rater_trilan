import highlightsRequest from "../../common/requests/highlightsRequest";
import { useEffect, useState } from "react";
import IFilmHighlight from "../../common/types/IFilmHighlight";
import SlideHighlights from "../SlideHighlights";
import FilmContainer from "../FilmContainer";
import { HighlightsContainer } from "./styles";

//Estava com dificuladade de chamar a função assincrona para o elemento
//sem que tonasse o Highlights asyncrono, por isso, usei o ChatGPT

export default function Highlights() {
    const [films, setFilms] = useState<Array<IFilmHighlight>>([]);

    useEffect(() => {
        (async () => {
            const films = await highlightsRequest();
            setFilms(films);
        })();
    }, []);    

    return (
        <HighlightsContainer>
            {
                films.length > 0
                ? (<FilmContainer id={films[0].id} />)
                : (<></>)
            }
            <SlideHighlights 
                arrFilms={films}
            />
        </HighlightsContainer>
    );
}
