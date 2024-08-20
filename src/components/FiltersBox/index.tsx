import { useEffect, useState } from "react"
import genreRequest from "../../common/requests/genreRequest"
import { IGenre } from "../../common/types/IFilmDetails"
import GenreBox from "../GenreBox"

import { FiltersContainer, Session, Title, Genres, Label, Dates, Date, InputDate, Icon, Divider } from "./styles"

export default function FiltersBox() {
    const [genres, setGenres] = useState<Array<IGenre>>([]);
    const [selectedGenres, setSelectedGenres] = useState<Array<number>>([])

    useEffect(() => {
        (async () => {
            const tempGenres = await genreRequest();
            setGenres(tempGenres.slice(0, 7));
        })();
    }, []);
    
    function toogleSelected(id : number) {
        let temp : Array<number> = []
        if(selectedGenres.includes(id)) {
            temp = selectedGenres.filter(item => item !== id);
        } else {
            temp = [...selectedGenres, id]
        }
        setSelectedGenres(temp);
    }

    return (
        <FiltersContainer>
            <Session>
                <Title>Gêneros cinematográficos</Title>
                <Genres>
                    {
                        genres.map((genre, key) => (
                            <GenreBox
                                key={key}
                                genre={genre}
                                selected={selectedGenres.includes(genre.id)}
                                onClick={() => toogleSelected(genre.id)}
                            />
                        ))
                    }
                </Genres>
                <Label>Mostrar mais ∨</Label>
            </Session>
            <Divider />
            <Session>
                <Title>Data de lançamento</Title>
                <Dates>
                    <Date>
                        <InputDate type="date"/>
                        <Icon src={require("../../assets/images/calendar.png")} />
                    </Date>
                    <Label>a</Label>
                    <Date>
                        <InputDate type="date"/>
                        <Icon src={require("../../assets/images/calendar.png")} />
                    </Date>
                </Dates>
            </Session>
        </FiltersContainer>
    )
}
