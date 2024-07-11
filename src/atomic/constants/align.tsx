import { css } from "styled-components"

export type flexdirection = 'row' | 'column' | 'column-reverse'
export type JustifyContent = 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center'
export type AlignItems = 'flex-start' | 'flex-end' | 'center'
export type FlexWrap = 'unset' | 'wrap' | 'wrap-reverse'
export type Rotate = '180deg' | '90deg' | '270deg';
export type Position = 'relative' | 'absolute'

export type Alignments = {
    flexdirection?: flexdirection;
    justifycontent?: JustifyContent;
    alignitems?: AlignItems;
    gap?: string;
    flexwrap?: FlexWrap;
    position?: Position;
    zIndex?: number;
}

export type AlignmentsStyledProps = Alignments

export const AllCenter = css`
    justify-content: center;
    align-items: center;
`