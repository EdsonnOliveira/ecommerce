import { memo } from "react"

import Text from "../text"

import { Main } from "./style"
import { IndexProps } from "./models"
import { Skeleton } from ".."

/**
 * @author Edson Pinheiro
 * @prop {string} text - Text
 * @prop {ColorType} textColor - Color text
 * @prop {ColorType} color - Color Stamp
 * 
 * @example <Stamp
 * isRendering
 * widthRendering="80px"
 * heightRendering="30px"
 * 
 * text='R$ 1.000,00'
 * color='primary'
 * />
 */
const Stamp: React.FC<IndexProps> = ({
    isRendering,
    widthRendering,
    heightRendering,
    radiusRendering = '50px',

    text,
    textColor = 'white',
    color,
}) => isRendering ? (
    <Skeleton
        widthRendering={widthRendering}
        heightRendering={heightRendering}
        radiusRendering={radiusRendering}
    />
) : (
    <Main color={color}>
        <Text
            isRendering={false}
            
            type='H10'
            color={textColor}
            weight="500"
        >
            { text }
        </Text>
    </Main>
)

export default memo(Stamp)