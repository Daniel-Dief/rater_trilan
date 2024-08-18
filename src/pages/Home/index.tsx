import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Highlights from "../../components/Highlights";
import Slider from "../../components/Slider";
import { useEffect, useState } from "react";
import IFilmSummary from "../../common/types/IFilmSummary";
import releasesRequest from "../../common/requests/releasesRequest";

export default function Home() {
    const [releases, setReleases] = useState<Array<IFilmSummary>>([]);

    useEffect(() => {
        (async () => {
            const films = await releasesRequest();
            setReleases(films);
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
            <Footer />
        </>
    );
}