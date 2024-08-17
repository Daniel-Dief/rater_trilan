import IFilmHighlight from "../../common/types/IFilmHighlight";
import FilmCard from "../FilmCard";
import { Slider, Label } from "./styles"

interface Props {
    arrFilms : Array<IFilmHighlight>
}

export default function SlideHighlights({ arrFilms } : Props) {
    return (
        <Slider>
            <Label>Destaques também</Label>
            {
                arrFilms.slice(1).map((film, key) => (
                    <FilmCard
                        key={key}
                        id={film.id}
                        name={film.name}
                        vote_average={film.vote_average}
                        backdrop_path={film.backdrop_path}
                    />
                ))
            }
        </Slider>
    )
}