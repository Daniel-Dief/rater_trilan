import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Highlights from "../../components/Highlights";
import Slider from "../../components/Slider";
import { useEffect, useState } from "react";
import IFilmSummary from "../../common/types/IFilmSummary";
import IPeopleSummary from "../../common/types/IPeopleSummary";
import releasesRequest from "../../common/requests/releasesRequest";
import recommendationsRequest from "../../common/requests/recommendationsRequest";
import celebritiesRequest from "../../common/requests/celebritiesRequest";

export default function Home() {
    const [releases, setReleases] = useState<Array<IFilmSummary>>([]);
    const [recommendations, setRecommendations] = useState<Array<IFilmSummary>>([]);
    const [celebrities, setCelebrities] = useState<Array<IPeopleSummary>>([]);

    useEffect(() => {
        (async () => {
            const tempFilms = await releasesRequest();
            setReleases(tempFilms);
        })();
        (async () => {
            const tempFilms = await recommendationsRequest();
            setRecommendations(tempFilms);
        })();
        (async () => {
            const tempPersons = await celebritiesRequest();
            setCelebrities(tempPersons);
        })();
    }, []);

    return (
        <>
            <Header />
            <Highlights />
            <Slider
                title="Ultimos lançamentos"
                arrFilms={releases}
            />
            <Slider
                title="Recomendados"
                arrFilms={recommendations}
            />
            <Slider
                title="Celebridades"
                arrPeople={celebrities}
            />
            <Footer />
        </>
    );
}