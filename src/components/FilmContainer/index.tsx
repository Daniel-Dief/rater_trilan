import { useEffect, useState } from "react";
import IFilmDetails from "../../common/types/IFilmDetails";
import { Container, InHighlight, InHighlightLabel, Title, TrailerButton, Synopsis, Stars, Details, DetailsFilm, Genres, StarsTop, DivTop } from "./styles"
import movieDetails from "../../common/requests/movieDetails";


interface Props {
    id: number
}

const defaultFilm : IFilmDetails = {
    id: 1,
    title: "Default title",
    overview: "Default overview",
    backdrop_path: "Default backdrop_path",
    vote_average: 1,
    vote_count: 1,
    genres: [],
    release_date: new Date(),
    runtime: 1,
    adult: false,
}

export default function FilmContainer({ id } : Props) {
    const [film, setFilm] = useState<IFilmDetails>(defaultFilm)
    useEffect(() => {
        (async () => {
            const film = await movieDetails(id);
            setFilm(film);
        })();
    }, []);    

    const backgroundUrl = process.env.REACT_APP_IMAGE_API_URL + film.backdrop_path;
    
    let vote_count : number | string = 0;
    if(film.vote_count){
        vote_count = Math.round(film.vote_count / 1000) + " mil";
    }

    let runtime = `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}m`
    
    function redirectMovie() {
        window.location.href = `/movie?id=${id}`;
    }

    return (
        <Container
            background={backgroundUrl}
        >
            <DivTop>
                <InHighlight>
                    <img src={require("../../assets/images/highlight.png")} alt="Destaque"/>
                    <InHighlightLabel>Em Destaque</InHighlightLabel>
                </InHighlight>
                <StarsTop>
                    <img src={require("../../assets/images/star.png")} alt="Star" />
                    <p>{Math.round(film.vote_average * 10) / 10}</p>
                </StarsTop>
            </DivTop>
            <Title>{film.title}</Title>
            <Details>
                <Stars>
                    <img src={require("../../assets/images/star.png")} alt="Star" />
                    <p>{Math.round(film.vote_average * 10) / 10} | {vote_count}</p>
                </Stars>
                <DetailsFilm>
                    <p>{runtime}</p>
                    <p>&bull;</p>
                    <Genres>{film.genres.map(genre => genre.name).join(", ")}</Genres>
                    <p>&bull;</p>
                </DetailsFilm>
                <p>{new Date(film.release_date).getFullYear()}</p>
            </Details>
            <Synopsis>
                {film.overview}
            </Synopsis>
            <TrailerButton onClick={redirectMovie}>
                <p>Assistir ao trailer</p>
                <img src={require("../../assets/images/play.png")} alt="Play" />
            </TrailerButton>
        </Container>
    )
}