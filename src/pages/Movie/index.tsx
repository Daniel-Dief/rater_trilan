import { useEffect, useState } from "react"
import IPeopleSummary from "../../common/types/IPeopleSummary"
import IFilmSummary from "../../common/types/IFilmSummary"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BannerMovie from "../../components/BannerMovie"
import Slicer from "../../components/Slider"
import castRequest from "../../common/requests/castRequest"
import likeMoviesRequest from "../../common/requests/likeMoviesRequest"
import movieDetails from "../../common/requests/movieDetails"

import { Main } from "./styles"
import IFilmDetails from "../../common/types/IFilmDetails"

const defaultMovie : IFilmDetails = {
    id: 1,
    title: "default",
    overview: "default",
    backdrop_path: "default",
    vote_average: 1,
    vote_count: 1,
    genres: [],
    release_date: new Date(),
    runtime: 1,
    adult: false,
}

export default function Movie() {
    const params = Number(new URLSearchParams(window.location.search).get("id"));
    const [movie, setMovie] = useState<IFilmDetails>();
    const [cast, setCast] = useState<Array<IPeopleSummary>>([])
    const [likeMovies, setLikeMovies] = useState<Array<IFilmSummary>>([])

    useEffect(() => {
        (async () => {
            const tempMovie = await movieDetails(params);
            setMovie(tempMovie);
        })();
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
            <BannerMovie
                movie={movie ?? defaultMovie}
            />
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