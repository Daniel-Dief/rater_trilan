import ICatalogue from "../../common/types/ICatalogue";
import { SmallCardBox, Image, Info, Title, StarsBox, Icon, Label } from "./styles";

interface Props {
    iten: ICatalogue
}

export default function SmallCard({ iten } : Props) {
    const background = process.env.REACT_APP_IMAGE_API_URL + iten.backdrop_path;
    const year = new Date(iten.release_date ?? iten.first_air_date!).getFullYear();

    function redirectMovie() {
        window.location.href = `/movie?id=${iten.id}`;
    }

    return (
        <SmallCardBox onClick={redirectMovie}>
            <Image background={background} />
            <Info>
                <Title>{iten.title ?? iten.name}</Title>
                <StarsBox>
                    <Icon src={require("../../assets/images/star.png")} alt="Star"/>
                    <Title>{Math.round(iten.vote_average * 10) / 10}</Title>
                </StarsBox>
                <Label>{iten.character}</Label>
                <Label>{year}</Label>
            </Info>
        </SmallCardBox>
    )
}

