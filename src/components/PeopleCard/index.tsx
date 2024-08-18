import { CardPeople, Name, Age } from "./styles"
import IPeopleSummary from "../../common/types/IPeopleSummary"

export default function PeopleCard({ id, age, name, profile_path } : IPeopleSummary) {
    const backgroundUrl = process.env.REACT_APP_IMAGE_API_URL + profile_path

    function redirectActor() {
        window.location.href = `/actor?id=${id}`;
    }

    return (
        <CardPeople onClick={redirectActor} background={backgroundUrl}>
            <Name>{name}</Name>
            <Age>{age}</Age>
        </CardPeople>
    )
}