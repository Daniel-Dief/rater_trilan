export default interface IFilmDetais {
    id: number
    title: string
    overview: string
    backdrop_path: string
    vote_average: number
    vote_count: number
    genres: Array<Genre>
    release_date: Date
    runtime: number
    adult: boolean
}

interface Genre {
    id: number
    name: string
}