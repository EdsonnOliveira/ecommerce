import styled from "styled-components";

import { IndexStyledProps } from "./models";

import { MarginStyled } from "@/atomic/constants/spacing";
import theme from "@/atomic/constants/colors";

export const Main = styled.h1<IndexStyledProps>`
    ${({ type }) => {
        switch (type) {
            case 'H1':
                return 'font-size: 60px;';
            case 'H2':
                return 'font-size: 50px;';
            case 'H3':
                return 'font-size: 45px;';
            case 'H4':
                return 'font-size: 40px;';
            case 'H5':
                return 'font-size: 32px;';
            case 'H6':
                return 'font-size: 26px;';
            case 'H7':
                return 'font-size: 20px;';
            case 'H8':
                return 'font-size: 16px;';
            case 'H9':
                return 'font-size: 14px;';
            case 'H10':
                return 'font-size: 12px;';
        }
    }}

    ${({ onClick }) => onClick && 'cursor: pointer;'};

    font-weight: ${({ weight }) => weight ?? '300'};

    color: ${({ color }) => color ? theme.default.colors[color] : theme.default.colors.black};

    letter-spacing: ${({ letterSpacing }) => letterSpacing ?? '.5px'};
    word-spacing: ${({ wordSpacing }) => wordSpacing ?? 'normal'};

    text-align: ${({ align }) => align ?? 'left'};
    
    text-transform: ${({ transform }) => transform ?? 'initial'};
    text-decoration: ${({ decoration }) => decoration ?? 'initial'};

    ${MarginStyled};
`