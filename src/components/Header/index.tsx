import searchRequest from "../../common/requests/searchRequest";
import { useRef, useState } from "react";
import { HeaderContainer, LogoImg, FilterCamp, SearchCamp, LensDiv, Image, InputSearch, SlicersDiv, EmptyDiv, DivTop, DivFloat } from "./styles";
import ISearch from "../../common/types/ISearch";
import ResultBox from "../ResultBox";

export default function Header(){
    const [resultSearch, setResultSearch] = useState<Array<ISearch>>([]);
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [slicerFocus, setSlicerFocus] = useState<boolean>(false);
    const searchInput = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    function redirectHome() {
        window.location.href = `/home`;
    }

    function onInputFocus() {
        setInputFocus(true)
    }

    //Usei ChatGPT pois estava funcionando, porem era uma gambiarra
    function handleBlur (event: React.FocusEvent<HTMLInputElement>) {
        if (containerRef.current && !containerRef.current.contains(event.relatedTarget as Node)) {
            setInputFocus(false)
        }
    };

    function search() {
        if(inputFocus){
            (async () => {
                const tempPeople = await searchRequest(searchInput.current?.value ?? "");
                setResultSearch(tempPeople);
            })();
        }
    }

    return (
        <HeaderContainer>
            <LogoImg onClick={redirectHome} src={require("../../assets/images/logo.png")} alt="Rater" />
            <FilterCamp>
                <DivTop>
                    <SearchCamp>
                        <LensDiv>
                            <Image src={require("../../assets/images/search.png")} alt="Lupa" />
                        </LensDiv>
                        <InputSearch onFocus={onInputFocus} onBlur={handleBlur} onChange={search} ref={searchInput} type="text" placeholder="Pesquisar..." />
                    </SearchCamp>
                    <SlicersDiv>
                        <Image src={require("../../assets/images/sliders-horizontal.png")} alt="Filtros" />
                    </SlicersDiv>
                </DivTop>
                {
                    resultSearch.length >= 1 && inputFocus
                    ?
                    <DivFloat ref={containerRef}>
                        <ResultBox
                            results={resultSearch}
                        />
                    </DivFloat>
                    : ""
                }
            </FilterCamp>
            <EmptyDiv />
        </HeaderContainer>
    )
}