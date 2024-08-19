import ISearch from "../../common/types/ISearch";
import { ItenContainer, Image, Info, DivTop, Title, StarsBox, Icon, Evaluation, Summary, Text } from "./styles";

interface Props {
    iten: ISearch
}

export default function ResultIten({ iten } : Props) {
    const imageUrl = process.env.REACT_APP_IMAGE_API_URL + (iten.backdrop_path ?? iten.poster_path ?? iten.profile_path ?? "");
    const year = new Date(iten.first_air_date ?? iten.release_date ?? "").getFullYear();
    const evaluationValue = iten.vote_average ? Math.round(iten.vote_average * 10) / 10 : 0

    function redirectMedia() {
        if(iten.media_type == "movie") {
            window.location.href = `/movie?id=${iten.id}`;
        } else {
            window.location.href = `/actor?id=${iten.id}`;
        }
    }

    return (
        <ItenContainer onClick={redirectMedia}>
            <Image src={imageUrl}/>
            <Info>
                <DivTop>
                    <Title>{iten.title ?? iten.name}</Title>
                    {
                        iten.media_type != "person" ?
                        <StarsBox>
                            <Icon src={require("../../assets/images/star.png")} />
                            <Evaluation>{evaluationValue}</Evaluation>
                        </StarsBox>
                        : ""
                    }
                </DivTop>
                <Summary>
                    {
                        iten.media_type != "person"
                        ?    <Text>{year}</Text>
                        :   <Text>{iten.known_for_department}</Text>
                    }
                </Summary>
            </Info>
        </ItenContainer>
    )
}