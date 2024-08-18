import IFilmSummary from "./IFilmSummary"
import ISerieSummary from "./ISerieSummary"

export default interface IPeopleDetails {
    name: string
    birthday: string
    place_of_birth: string
    profile_path: string
    known_for_department: string
    movies_and_series: Array<IFilmSummary | ISerieSummary>
}