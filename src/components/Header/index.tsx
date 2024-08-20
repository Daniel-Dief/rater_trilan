import searchRequest from "../../common/requests/searchRequest";
import { useRef, useState, useEffect } from "react";
import { HeaderContainer, LogoImg, FilterCamp, SearchCamp, LensDiv, Image, InputSearch, SlicersDiv, EmptyDiv, DivTop, DivFloat } from "./styles";
import ISearch from "../../common/types/ISearch";
import ResultBox from "../ResultBox";
import FiltersBox from "../FiltersBox";

export default function Header(){
    const [resultSearch, setResultSearch] = useState<Array<ISearch>>([]);
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [slicerFocus, setSlicerFocus] = useState<boolean>(false);
    const searchInput = useRef<HTMLInputElement>(null);
    const resultContainerRef = useRef<HTMLDivElement>(null);
    const slicerContainerRef = useRef<HTMLDivElement>(null);

    function redirectHome() {
        window.location.href = `/home`;
    }

    function onInputFocus() {
        setInputFocus(true)
    }

    function onSlicerFocus() {
        setSlicerFocus(true)
    }

    //Usei ChatGPT pois estava funcionando, porem era uma gambiarra, e encontrei uma maneira melhor de fazer
    function handleClickOutside(event: MouseEvent) {
        if (resultContainerRef.current && !resultContainerRef.current.contains(event.target as Node)){
            setInputFocus(false);
        }
        if (slicerContainerRef.current && !slicerContainerRef.current.contains(event.target as Node)){
            setSlicerFocus(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                        <InputSearch onFocus={onInputFocus} onChange={search} ref={searchInput} type="text" placeholder="Pesquisar..." />
                    </SearchCamp>
                    <SlicersDiv onClick={onSlicerFocus}>
                        <Image src={require("../../assets/images/sliders-horizontal.png")} alt="Filtros" />
                    </SlicersDiv>
                </DivTop>
                {
                    resultSearch.length >= 1 && inputFocus
                    ?
                    <DivFloat ref={resultContainerRef}>
                        <ResultBox
                            results={resultSearch}
                        />
                    </DivFloat>
                    : ""
                }
                {
                    slicerFocus
                    ?
                    <DivFloat ref={slicerContainerRef}>
                        <FiltersBox />
                    </DivFloat>
                    : ""
                }
            </FilterCamp>
            <EmptyDiv />
        </HeaderContainer>
    )
}