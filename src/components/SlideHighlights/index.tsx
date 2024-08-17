import IFilmSummary from "../../common/types/IFilmSummary";
import FilmCard from "../FilmCard";
import { Slider, Label, Container } from "./styles"

interface Props {
    arrFilms : Array<IFilmSummary>
}

export default function SlideHighlights({ arrFilms } : Props) {
    return (
        <Container>
            <Label>Destaques também</Label>
            <Slider>
            {
                arrFilms.slice(1).map((film, key) => (
                    <FilmCard
                    key={key}
                    id={film.id}
                    title={film.title}
                    vote_average={film.vote_average}
                    backdrop_path={film.backdrop_path}
                    />
                ))
            }
            </Slider>
        </Container>
    )
}