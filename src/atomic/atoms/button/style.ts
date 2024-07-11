import styled, { css } from "styled-components";

import theme, { ColorType } from "@/atomic/constants/colors";
import { AllCenter } from "@/atomic/constants/align";
import { MarginStyled } from "@/atomic/constants/spacing";

import { IndexStyledProps } from "./models";

function bgColor({ color, isDisabled }: { color: ColorType, isDisabled?: boolean }) {
    return isDisabled ? css`
        background-color: ${theme.default.colors.gray};
        cursor: not-allowed;
    ` : css`
        background-color: ${theme.default.colors[color]};
        cursor: pointer;

        &:hover {
            filter: brightness(1.4);
        }
    `
}

export const Main = styled.button<IndexStyledProps>`
    gap: 10px;

    ${({ type }) => {
        switch (type) {
            case 'biggest':
                return 'width: 100%; height: 40px;'
            case 'big':
                return 'width: 175px; height: 45px;'
            case 'medium':
                return 'width: 150px; height: 45px;'
            case 'small':
                return 'width: 90px; height: 33px; gap: 5px;'
            case 'icon':
                return 'width: 45px; height: 45px;'
        }
    }}

    border-radius: 50px;
    transition: .5s;
    flex-direction: row;

    ${AllCenter};
    ${({ isDisabled, color }) => bgColor({ color, isDisabled })}
    ${({ isLoading }) => isLoading && `cursor: wait;`}
    ${MarginStyled}
`