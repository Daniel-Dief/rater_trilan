import { CardMovie, StarsBox, Icon, Title, TrailerButton, DivBottom } from "./styles"
import IFilmHighlight from "../../common/types/IFilmHighlight"

export default function SmallFilmBox({ id, name, vote_average, backdrop_path } : IFilmHighlight) {
    const backgroundUrl = process.env.REACT_APP_IMAGE_API_URL + backdrop_path

    return (
        <CardMovie background={backgroundUrl}>
            <StarsBox>
                <Icon src={require("../../assets/images/star.png")} alt="Star"/>
                <p>{Math.round(vote_average * 10) / 10}</p>
            </StarsBox>
            <DivBottom>
                <Title>{name}</Title>
                <TrailerButton>
                    <p>Assistir ao trailer</p>
                    <Icon src={require("../../assets/images/play.png")} alt="Play" />
                </TrailerButton>
            </DivBottom>
        </CardMovie>
    )
}