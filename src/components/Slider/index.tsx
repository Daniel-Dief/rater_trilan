import IPeopleSummary from "../../common/types/IPeopleSummary";
import IFilmSummary from "../../common/types/IFilmSummary";
import FilmCard from "../FilmCard";
import PeopleCard from "../PeopleCard";
import { SliderBox, Title, Container, ScrollButtonBox, ScrollButton, DivTop } from "./styles";
import { useRef } from "react";

interface Props {
    title: string
    arrFilms?: Array<IFilmSummary>
    arrPeople?: Array<IPeopleSummary>
}

export default function Slider({ title, arrFilms, arrPeople } : Props) {
    const sliderBoxRef =  useRef<HTMLDivElement>(null);

    function scrollLeft() {
        sliderBoxRef.current?.scrollBy({ left: -400, behavior: 'smooth' }); //apenas essa linha ChatGPT
    }

    function scrollRight() {
        sliderBoxRef.current?.scrollBy({ left: 400, behavior: 'smooth' }); //apenas essa linha ChatGPT
    }

    return (
        <Container>
            <DivTop>
                <Title>{title}</Title>
                <ScrollButtonBox>
                    <ScrollButton onClick={scrollLeft} src={require("../../assets/images/scroll-left.png")} />
                    <ScrollButton onClick={scrollRight} src={require("../../assets/images/scroll-right.png")} />
                </ScrollButtonBox>
            </DivTop>
            <SliderBox ref={sliderBoxRef}>
                {
                    arrFilms 
                    ?
                        arrFilms.map((film, key) => (
                            <FilmCard
                                key={key}
                                id={film.id}
                                title={film.title}
                                vote_average={film.vote_average}
                                backdrop_path={film.backdrop_path}
                            />
                        ))
                    :
                    arrPeople
                    ?
                        arrPeople.map((people, key) => (
                            <PeopleCard
                                key={key}
                                id={people.id}
                                name={people.name}
                                age={people.age}
                                profile_path={people.profile_path}
                            />
                        ))
                    : ""
                }
            </SliderBox>
        </Container>
    )
}