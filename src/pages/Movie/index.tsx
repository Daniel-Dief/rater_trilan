import { useEffect, useState } from "react"
import IPeopleSummary from "../../common/types/IPeopleSummary"
import IFilmSummary from "../../common/types/IFilmSummary"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Slicer from "../../components/Slider"
import castRequest from "../../common/requests/castRequest"
import likeMoviesRequest from "../../common/requests/likeMoviesRequest"

import { Main } from "./styles"

export default function Movie() {
    const params = Number(new URLSearchParams(window.location.search).get("id"));
    const [cast, setCast] = useState<Array<IPeopleSummary>>([])
    const [likeMovies, setLikeMovies] = useState<Array<IFilmSummary>>([])

    useEffect(() => {
        (async () => {
            const tempCast = await castRequest(params);
            setCast(tempCast);
        })();
        (async () => {
            const tempLikeMovies = await likeMoviesRequest(params);
            setLikeMovies(tempLikeMovies);
        })();
    }, []);
    
    return (
        <>
            <Header />
            <Main>
                <Slicer
                    title="Elenco principal"
                    arrPeople={cast}
                />
                <Slicer
                    title="Semelhantes"
                    arrFilms={likeMovies}
                />
            </Main>
            <Footer />
        </>
    )
}