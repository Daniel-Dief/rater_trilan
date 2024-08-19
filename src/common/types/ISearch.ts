export default interface ISearch {
    media_type: "tv" | "person" | "movie"
    //tv
    name?: string
    first_air_date?: string
    vote_average?: number
    backdrop_path?: string

    //person
    profile_path?: string
    known_for_department:string

    // movie
    poster_path?: string
    release_date?: string
    title?: string
}