import styled from 'styled-components'

import { MarginStyled, PaddingStyled, PositionStyled } from '@/atomic/constants/spacing';

import { IndexProps } from './models'

/**
 * @author Edson Pinheiro
 * 
 * @prop {string} width - width CSS
 * @prop {string} maxWidth - max-width CSS
 * @prop {string} height  - height CSS
 * @prop {number} flex - flex CSS
 * @prop {string} bgColor - background-color CSS
 * @prop {string} radius - border-radius CSS
 * @prop {string} border - border CSS
 * @prop {flexdirection} flexdirection - flex-direction CSS
 * @prop {JustifyContent} justifycontent - justify-content CSS
 * @prop {AlignItems} alignitems - align-items CSS
 * @prop {string} gap - gap CSS
 * @prop {FlexWrap} flexwrap - flex-wrap CSS
 * @prop {'initial' | 'scroll'} overflowX - overflow-x CSS
 * @prop {Position} position - position CSS
 * @prop {number} zIndez - z-index CSS
 * @prop {'flex' | 'none'} display - display CSS
 * 
 * @example <BoxCommon
 *  width='300px'
 *  height='300px'
 *  bgColor='red'
 *  radius='300px'
 * >
 *  { children }
 * </BoxCommon>
 */
const BoxCommon = styled.div<IndexProps>`
    width: ${({ width }) => width ?? 'null'};
    width: ${({ maxWidth }) => maxWidth ?? 'null'};
    height: ${({ height }) => height ?? 'null'};
    flex: ${({ flex }) => flex ?? 'none'};
    background-color: ${({ bgColor }) => bgColor ?? 'transparent'};

    border-radius: ${({ radius }) => radius ?? 'initial'};
    border: ${({ border }) => border ?? '0'};

    flex-direction: ${({ flexdirection }) => flexdirection ?? 'column'};
    justify-content: ${({ justifycontent }) => justifycontent ?? 'flex-start'};
    align-items: ${({ alignitems }) => alignitems ?? 'flex-start'};
    gap: ${({ gap }) => gap ?? '0px'};
    flex-wrap: ${({ flexwrap }) => flexwrap ?? 'nowrap'};

    overflow-x: ${({ overflowX }) => overflowX ?? 'initial'};

    position: ${({ position }) => position ?? 'relative'};
    z-index: ${({ zIndex }) => zIndex ?? 1};

    ${MarginStyled};
    ${PaddingStyled};
    ${PositionStyled};

    display: ${({ display }) => display ?? 'flex'};
`

export default BoxCommon;