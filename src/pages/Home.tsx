import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Wrapper = styled.div`
    padding: 60px;
    text-align: center;
`;

export default function Home() {
    return (
        <Wrapper>
            <h1>Movie Search</h1>
            <SearchBar />
        </Wrapper>
    );
}
