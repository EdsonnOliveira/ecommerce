import { css } from "styled-components";

export interface Margins {
    mt?: string | number;
    ml?: string | number;
    mr?: string | number;
    mb?: string | number;
}

export const MarginStyled = css<Margins>`
    margin-top: ${({ mt }) => mt ?? 'initial'};
    margin-left: ${({ ml }) => ml ?? 'initial'};
    margin-right: ${({ mr }) => mr ?? 'initial'};
    margin-bottom: ${({ mb }) => mb ?? 'initial'};
`

export interface Padding {
    pt?: string | number;
    pl?: string | number;
    pr?: string | number;
    pb?: string | number;
}

export const PaddingStyled = css<Padding>`
    padding-top: ${({ pt }) => pt ?? 'initial'};
    padding-left: ${({ pl }) => pl ?? 'initial'};
    padding-right: ${({ pr }) => pr ?? 'initial'};
    padding-bottom: ${({ pb }) => pb ?? 'initial'};
`

export interface Position {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
}

export const PositionStyled = css<Position>`
    top: ${({ top }) => top ?? 'initial'};
    left: ${({ left }) => left ?? 'initial'};
    right: ${({ right }) => right ?? 'initial'};
    bottom: ${({ bottom }) => bottom ?? 'initial'};
`