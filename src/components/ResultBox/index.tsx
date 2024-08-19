import ISearch from "../../common/types/ISearch";
import ResultIten from "../ResultIten";
import { ResultContainer, Title, List } from "./styles"; 

interface Props {
    results: Array<ISearch>
}

export default function ResultBox({ results } : Props){
    return (
        <ResultContainer>
            <Title>Resultados</Title>
            <List>
                {
                    results.map(iten => (
                        <ResultIten
                            iten={iten}
                        />
                    ))
                }
            </List>
        </ResultContainer>
    )
}