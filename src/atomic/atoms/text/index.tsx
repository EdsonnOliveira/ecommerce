import { memo } from "react";

import { IndexProps } from "./models";
import { Main } from "./style";
import { Skeleton } from "..";

/**
 * @author Edson Pinheiro
 * @prop {TextType} type - Type text
 * @prop {ColorType} color - Color text
 * @default color = theme.default.colors.black
 * @prop {TextWeight} weight - Weight text
 * @default weight = 500
 * @prop {string} letterSpacing - Letter Spacing text
 * @prop {string} wordSpacing - Word Spacing text
 * @prop {TextAlign} align - Align text
 * @prop {SetVoid} onClick - Action
 * @prop {TextTransform} transform - Transform text
 * @prop {TextDecoration} decoration - Decoration text
 * @prop {Margins} mt - Margin Top
 * @prop {Margins} mr - Margin Right
 * @prop {Margins} mb - Margin Bottom
 * @prop {Margins} ml - Margin Left
 * 
 * @example <Text
 *  type='H1'
 *  color={theme.default.colors.black}
 *  weight='600'
 *  mb='20px'
 * >
 *  Texto de teste
 * </Text>
 */
const Text: React.FC<IndexProps> = ({
    isRendering,
    widthRendering,
    heightRendering,
    radiusRendering,

    type,
    color,

    weight,
    letterSpacing,
    wordSpacing,

    align,

    onClick,

    transform,
    decoration = onClick ? 'underline' : 'none',

    mt,
    mr,
    mb,
    ml,

    children,
}) => isRendering ? (
    <Skeleton
        widthRendering={widthRendering}
        heightRendering={heightRendering}
        radiusRendering={radiusRendering}
    />
) : (
    <Main
        isRendering={false}
        
        type={type}
        color={color}

        weight={weight}
        letterSpacing={letterSpacing}
        wordSpacing={wordSpacing}
        
        align={align}

        onClick={onClick}

        transform={transform}
        decoration={decoration}

        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
    >
        { children }
    </Main>
)

export default memo(Text);