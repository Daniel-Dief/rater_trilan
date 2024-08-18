import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Biography from "../../components/Biography"
import Catalogue from "../../components/Catalogue"
import { ActorContainer, Main } from "./styles"
import { useEffect, useState } from "react";
import peopleDetails from "../../common/requests/peoplesDetails";
import IPeopleDetails from "../../common/types/IPeopleDetails";

const defaultPeople : IPeopleDetails = {
    id: 0,
    name: "default",
    birthday: "default",
    deathday: "default",
    place_of_birth: "default",
    profile_path: "default",
    known_for_department: "default",
    biography: "default"
}

export default function Actor(){
    const params = new URLSearchParams(window.location.search).get("id");
    const [people, setPeople] = useState<IPeopleDetails>()

    useEffect(() => {
        (async () => {
            const tempPeople = await peopleDetails(Number(params));
            setPeople(tempPeople);
        })();
    }, []);

    return (
        <ActorContainer>
            <Header />
            <Main>
                {
                    people
                    ?
                    <>
                    <Biography
                        people={people}
                    />
                    <Catalogue />
                    </>
                    :
                    <>
                    <Biography
                        people={defaultPeople}
                        />
                    <Catalogue />
                    </>
                }
            </Main>
            <Footer />
        </ActorContainer>
    )
}