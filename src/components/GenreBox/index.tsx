import { IGenre } from "../../common/types/IFilmDetails";
import { GenreContainer } from "./styles";

interface Props {
    genre: IGenre
}

export default function GenreBox({ genre } : Props) {
    return (
        <GenreContainer>{ genre.name }</GenreContainer>
    )
}