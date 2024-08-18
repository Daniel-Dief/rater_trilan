export default interface IFilmDetails {
    id: number
    title: string
    overview: string
    backdrop_path: string
    vote_average: number
    vote_count: number
    genres: Array<IGenre>
    release_date: Date
    runtime: number
    adult: boolean
}

export interface IGenre {
    id: number
    name: string
}