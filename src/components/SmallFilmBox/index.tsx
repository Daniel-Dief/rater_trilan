import IfilmHighlight from "../../common/types/IfilmHighlight"
import { CardMovie, StarsBox, Icon, Title, TrailerButton, DivBottom } from "./styles"

export default function SmallFilmBox({ id, title, vote_average, backdrop_path } : IfilmHighlight) {
    const backgroundUrl = process.env.REACT_APP_IMAGE_API_URL + backdrop_path

    return (
        <CardMovie background={backgroundUrl}>
            <StarsBox>
                <Icon src={require("../../../assets/images/star.png")} alt="Star"/>
                <p>{Math.round(vote_average * 10) / 10}</p>
            </StarsBox>
            <DivBottom>
                <Title>{title}</Title>
                <TrailerButton>
                    <p>Assistir ao trailer</p>
                    <Icon src={require("../../../assets/images/play.png")} alt="Play" />
                </TrailerButton>
            </DivBottom>
        </CardMovie>
    )
}