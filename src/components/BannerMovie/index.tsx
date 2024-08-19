import { useEffect, useState } from "react";
import IFilmDetails from "../../common/types/IFilmDetails"
import GenreBox from "../GenreBox";
import creditsRequest from "../../common/requests/creditsRequest";
import ICast from "../../common/types/ICast";

import { BannerBox, Movie, TrailerButton, Icon, Genres, Info, About, DivTop, Title, StarsBox, Evaluation, EvaluationCount, DivMid, Cast, CastSession, Label, Value, LabelTitle } from "./styles";

interface Props {
    movie: IFilmDetails
}

export default function BannerMovie({ movie } : Props) {
    const params = new URLSearchParams(window.location.search).get("id");
    const background : string = process.env.REACT_APP_IMAGE_API_URL + movie.backdrop_path
    const movieYear : number = new Date(movie.release_date).getFullYear();
    const [cast, setCast] = useState<Array<Array<ICast>>>([[], [], []]);

    useEffect(() => {
        (async () => {
            const castReturn = await creditsRequest(Number(params));
            let tempCast: Array<Array<ICast>> = [[], [], []]

            castReturn.map((person : ICast) => {
                switch (person.known_for_department) {
                    case "Directing":
                        if(tempCast[0].length <= 2) {
                            tempCast[0].push(person);
                        }
                        break;
                    case "Crew":
                        if(tempCast[1].length <= 2) {
                            tempCast[1].push(person);
                        }
                        break;
                    case "Acting":
                        if(tempCast[2].length <= 2) {
                            tempCast[2].push(person);
                        }
                        break;
                    default:
                        break;
                }
            })

            setCast(tempCast);
        })();
    }, []);

    const labelDirecting = cast[0].map(person => person.name).join(", ");
    const labelCrew = cast[1].map(person => person.name).join(", ");
    const labelActing = cast[2].map(person => person.name).join(", ");

    return (
        <BannerBox>
            <Movie background={background}>
                <TrailerButton>
                    <p>Assistir ao trailer</p>
                    <Icon src={require("../../assets/images/play.png")} alt="Play" />
                </TrailerButton>
            </Movie>
            <Genres>
                {
                    movie.genres.map((genre, key) => (
                        <GenreBox
                            key={key}
                            genre={genre}
                        />
                    ))
                }
            </Genres>
            <Info>
                <About>
                    <DivTop>
                        <Title>{movie.title}</Title>
                        <StarsBox>
                            <Icon src={require("../../assets/images/star.png")}/>
                            <Evaluation>{Math.round(movie.vote_average * 10) / 10}</Evaluation>
                            <p>|</p>
                            <EvaluationCount>{Math.round(movie.vote_count / 1000) + " mil"}</EvaluationCount>
                        </StarsBox>
                    </DivTop>
                    <DivMid>
                        <Value>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</Value>
                        <Value>&bull;</Value>
                        <Value>{movie.adult ? "18" : "L"}</Value>
                        <Value>&bull;</Value>
                        <Value>{movieYear}</Value>
                    </DivMid>
                    <Label>{movie.overview}</Label>
                </About>
                <Cast>
                    <CastSession>
                        <LabelTitle>Direção</LabelTitle>
                        <Value>{labelDirecting === "" ? "Desconhecido" : labelDirecting}</Value>
                    </CastSession>
                    <CastSession>
                        <LabelTitle>Roteiristas</LabelTitle>
                        <Value>{labelCrew === "" ? "Desconhecido" : labelCrew}</Value>
                    </CastSession>
                    <CastSession>
                        <LabelTitle>Artistas</LabelTitle>
                        <Value>{labelActing === "" ? "Desconhecido" : labelActing}</Value>
                    </CastSession>
                </Cast>
            </Info>
        </BannerBox>
    )
}