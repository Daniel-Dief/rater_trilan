import { useState, useEffect } from "react"
import ICatalogue from "../../common/types/ICatalogue"
import catalogueRequest from "../../common/requests/catalogueRequest"
import { CatalogueContainer, Label, Grid, Navigators, Buttons, NavButton } from "./styles"
import SmallCard from "../SmallCard"

export default function Catalogue() {
    const params = new URLSearchParams(window.location.search).get("id");
    const [page, setPage] = useState<number>(1);
    const [catalogue, setCatalogue] = useState<Array<ICatalogue>>();
    const [maxPage, setMaxPage] = useState<number>(1);

    useEffect(() => {
        (async () => {
            let [tempCatalogue, maxPage] = await catalogueRequest(Number(params));
            tempCatalogue = tempCatalogue.slice(15 * page, 15 * page +  15);
            setCatalogue(tempCatalogue);
            setMaxPage(maxPage);
        })();
    }, [page]);

    const currentPage = `${page} de ${maxPage} páginas`;

    function nextPage() {
        if(page < maxPage){
            setPage(page + 1)
        }
    }

    function previusPage() {
        if(page > 1){
            setPage(page - 1)
        }
    }

    return (
        <CatalogueContainer>
            <Label>Filmes e séries</Label>
            <Grid>
                {
                    catalogue
                    ?
                        catalogue!.map((iten, key) => (
                            <SmallCard
                                key={key}
                                iten={iten}
                            />
                        ))
                    : ""
                }
            </Grid>
            <Navigators>
                <p>{currentPage}</p>
                <Buttons>
                    <NavButton onClick={previusPage} src={require("../../assets/images/scroll-left.png")} />
                    <NavButton onClick={nextPage} src={require("../../assets/images/scroll-right.png")} />
                </Buttons>
            </Navigators>
        </CatalogueContainer>
    )
}
