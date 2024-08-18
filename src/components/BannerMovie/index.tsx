import IFilmDetails from "../../common/types/IFilmDetails"
import GenreBox from "../GenreBox";
import { BannerBox, Movie, TrailerButton, Icon, Genres, Info, About, DivTop, Title, StarsBox, Evaluation, EvaluationCount, DivMid, Cast, CastSession, Label, Value, LabelTitle } from "./styles";

interface Props {
    movie: IFilmDetails
}

export default function BannerMovie({ movie } : Props) {
    const background : string = process.env.REACT_APP_IMAGE_API_URL + movie.backdrop_path
    const movieYear : number = new Date(movie.release_date).getFullYear();

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
                        <Value>asd</Value>
                    </CastSession>
                    <CastSession>
                        <LabelTitle>Roteiristas</LabelTitle>
                        <Value>asd</Value>
                    </CastSession>
                    <CastSession>
                        <LabelTitle>Artistas</LabelTitle>
                        <Value>asd</Value>
                    </CastSession>
                </Cast>
            </Info>
        </BannerBox>
    )
}