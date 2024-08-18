import IPeopleSummary from "../../common/types/IPeopleSummary";
import IFilmSummary from "../../common/types/IFilmSummary";

interface Props {
    title: string
    arrType: "movie" | "people"
    arrItens: Array<IFilmSummary> | Array<IPeopleSummary>
}

export function Slider({ title, arrType, arrItens } : Props) {
    return (
        <></>
    )
}