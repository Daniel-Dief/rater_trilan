import { CardMovie, StarsBox, Icon, Title, TrailerButton, DivBottom } from "./styles"
import IFilmSummary from "../../common/types/IFilmSummary"

export default function FilmCard({ id, title, vote_average, backdrop_path } : IFilmSummary) {
    const backgroundUrl = process.env.REACT_APP_IMAGE_API_URL + backdrop_path

    function redirectMovie() {
        window.location.href = `/movie?id=${id}`;
    }

    return (
        <CardMovie background={backgroundUrl}>
            <StarsBox>
                <Icon src={require("../../assets/images/star.png")} alt="Star"/>
                <p>{Math.round(vote_average * 10) / 10}</p>
            </StarsBox>
            <DivBottom>
                <Title>{title}</Title>
                <TrailerButton onClick={redirectMovie}>
                    <p>Assistir ao trailer</p>
                    <Icon src={require("../../assets/images/play.png")} alt="Play" />
                </TrailerButton>
            </DivBottom>
        </CardMovie>
    )
}