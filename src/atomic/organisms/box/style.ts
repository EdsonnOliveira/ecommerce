import styled from "styled-components";

import theme from "@/atomic/constants/colors";
import { MarginStyled, Margins } from "@/atomic/constants/spacing";

export const Main = styled.section<Margins>`
    width: max-content;
    height: max-content;
    padding: 20px;
    background-color: ${theme.default.colors.white};
    border-radius: 35px;
    box-shadow: 0px 10px 25px 0px ${theme.default.colors.mediumGray}25;

    ${MarginStyled};
`