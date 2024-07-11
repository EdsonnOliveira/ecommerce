import theme from "@/atomic/constants/colors";
import Image from "next/image";
import styled from "styled-components";

export const Main = styled.div`
    width: 325px;
    padding: 10px;
    border: 1px solid ${theme.default.colors.mediumGray};
    border-radius: 10px;
    gap: 10px;
`

export const Img = styled(Image).attrs({
    width: 300,
    height: 300,
})`
    border-radius: 10px;
`