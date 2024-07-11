import theme from "@/atomic/constants/colors";
import styled from "styled-components";

export const Main = styled.section`
    width: 100vw;
    background: ${theme.default.colors.white};
    overflow: auto;
`

export const Section = styled.div`
    width: 100%;
    margin-top: 50px;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    padding: 15px 40px;

    @media only screen and (max-width: 800px) {
        & {
            flex-direction: column;
            padding: 10px 15px;
        }
    }
`