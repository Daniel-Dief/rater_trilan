import { HeaderContainer, LogoImg, FilterCamp, SearchCamp, LensDiv, Image, InputSearch, SlicersDiv, EmptyDiv } from "./styles";

export default function Header(){
    function redirectHome() {
        window.location.href = `/home`;
    }

    return (
        <HeaderContainer>
            <LogoImg onClick={redirectHome} src={require("../../assets/images/logo.png")} alt="Rater" />
            <FilterCamp>
                <SearchCamp>
                    <LensDiv>
                        <Image src={require("../../assets/images/search.png")} alt="Lupa" />
                    </LensDiv>
                    <InputSearch type="text" placeholder="Pesquisar..." />
                </SearchCamp>
                <SlicersDiv>
                    <Image src={require("../../assets/images/sliders-horizontal.png")} alt="Filtros" />
                </SlicersDiv>
            </FilterCamp>
            <EmptyDiv />
        </HeaderContainer>
    )
}