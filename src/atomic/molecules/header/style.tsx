import theme from "@/atomic/constants/colors";
import Link from "next/link";
import styled from "styled-components";
import { OptionStyledProps } from "./models";

export const Main = styled.header`
    width: 100%;
    height: 130px;
    border-bottom: 1px solid ${theme.default.colors.veryLightGray};
    background-color: ${theme.default.colors.darkCerulean};
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
`

export const Option = styled(Link)<OptionStyledProps>`
    color: ${theme.default.colors.white};
    font-size: 20px;
    font-weight: ${({ selected }) => selected ? '700' : '400'};
    text-align: center;
`