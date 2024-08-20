import { IGenre } from "../../common/types/IFilmDetails";
import { GenreContainer } from "./styles";

interface Props {
    genre: IGenre
    selected?: boolean
    onClick?: () => void
}

export default function GenreBox({ genre, selected, onClick} : Props) {
    return (
        <GenreContainer
            background={selected ? "#313131" : "transparent"}
            onClick={onClick}
        >
            { genre.name }
        </GenreContainer>
    )
}

