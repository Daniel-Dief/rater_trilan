import { useEffect, useState, useRef} from "react"
import genreRequest from "../../common/requests/genreRequest"
import { IGenre } from "../../common/types/IFilmDetails"
import GenreBox from "../GenreBox"
import CalendarContainer from "../CalendarContainer"
import { Value } from "../../common/types/TValue"


import { FiltersContainer, Session, Title, Genres, Label, Dates, Date, InputDate, Icon, Divider, SlicersContainer } from "./styles"

export default function FiltersBox() {
    const [iniDate, setIniDate] = useState<Value>(null);
    const [endDate, setEndDate] = useState<Value>(null);
    const [genres, setGenres] = useState<Array<IGenre>>([]);
    const [selectedGenres, setSelectedGenres] = useState<Array<number>>([])

    const [iniInputFocus, setIniInputFocus] = useState<boolean>(false);
    const [endInputFocus, setEndInputFocus] = useState<boolean>(false);

    const iniInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

    const iniCalendarRef = useRef<HTMLDivElement>(null);
    const endCalendarRef = useRef<HTMLDivElement>(null);

    function onIniInputFocus() {
        setIniInputFocus(true)
        setEndInputFocus(false)
    }

    function onEndInputFocus() {
        setEndInputFocus(true)
        setIniInputFocus(false)
    }

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

    function handleClickOutside(event: MouseEvent) {
        if (iniCalendarRef.current && !iniCalendarRef.current.contains(event.target as Node)){
            setIniInputFocus(false);
        }
        if (endCalendarRef.current && !endCalendarRef.current.contains(event.target as Node)){
            setEndInputFocus(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function toogleCalendar() {
        if(iniInputFocus){
            return <CalendarContainer
                ref={iniCalendarRef}
                onChange={setIniDate}
                value={iniDate}
            />
        } else if(endInputFocus) {
            return <CalendarContainer
                ref={endCalendarRef}
                onChange={setEndDate}
                value={endDate}
            />
        }
    }

    return (
        <SlicersContainer>
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
                        <InputDate onFocus={onIniInputFocus} ref={iniInputRef} type="text" placeholder="00/00/0000" value={iniDate?.toLocaleString().slice(0, 10)}/>
                        <Icon src={require("../../assets/images/calendar.png")} />
                    </Date>
                    <Label>a</Label>
                    <Date>
                        <InputDate onFocus={onEndInputFocus} ref={endInputRef} type="text" placeholder="00/00/0000" value={endDate?.toLocaleString().slice(0, 10)}/>
                        <Icon src={require("../../assets/images/calendar.png")} />
                    </Date>
                </Dates>
            </Session>
        </FiltersContainer>
        {
            toogleCalendar()
        }
        </SlicersContainer>
    )
}
