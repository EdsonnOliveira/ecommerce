import styled from "styled-components";

import theme from "@/atomic/constants/colors";

import { IndexStyledProps } from "./models";

export const Main = styled.div<IndexStyledProps>`
    width: max-content;
    height: max-content;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: ${({ color }) => color ? theme.default.colors[color] : theme.default.colors.azureRadiance};
`