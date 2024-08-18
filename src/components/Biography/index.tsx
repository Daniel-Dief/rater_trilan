import IPeopleDetails from "../../common/types/IPeopleDetails";
import { BiographyContainer, PerfilImg, NameLabel, Session, Label, Value } from "./styles";

interface Props {
    people: IPeopleDetails
}

export default function Biography({ people } : Props) {
    const backgroundUrl = process.env.REACT_APP_IMAGE_API_URL + people.profile_path
    
    const lastYearAlive = people.deathday ? new Date(people.deathday).getFullYear() : new Date().getFullYear();
    const age = lastYearAlive - new Date(people.birthday).getFullYear();
    const ageValue = people.birthday ? `${people.birthday} (${age} anos)` : "Desconhecido";    

    return (
        <BiographyContainer>
            <PerfilImg src={backgroundUrl} alt="Perfil" />
            <NameLabel>{people.name}</NameLabel>
            <Session>
                <Label>Nascido(a) em:</Label>
                <Value>{ageValue}</Value>
            </Session>
            <Session>
                <Label>Origem:</Label>
                <Value>{people.place_of_birth ?? "Desconhecido"}</Value>
            </Session>
            <Session>
                <Label>Sobre:</Label>
                <Value>{people.biography ?? "Não informado"}</Value>
            </Session>
        </BiographyContainer>
    )
}