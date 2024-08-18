import IPeopleSummary from "../../common/types/IPeopleSummary";
import IFilmSummary from "../../common/types/IFilmSummary";
import FilmCard from "../FilmCard";
import { SliderBox, Title, Container } from "./styles";

interface Props {
    title: string
    arrFilms?: Array<IFilmSummary>
    arrPeople?: Array<IPeopleSummary>
}

export default function Slider({ title, arrFilms, arrPeople } : Props) {
    console.log(arrFilms);
    

    return (
        <Container>
            <Title>{title}</Title>
            <SliderBox>
                {
                    arrFilms 
                    ?
                        arrFilms.map((film, key) => (
                            <FilmCard
                                key={key}
                                id={film.id}
                                title={film.title}
                                vote_average={film.vote_average}
                                backdrop_path={film.backdrop_path}
                            />
                        ))
                    :
                    ""
                }
            </SliderBox>
        </Container>
    )
}