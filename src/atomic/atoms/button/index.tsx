import { memo } from "react"

import { ColorType } from "@/atomic/constants/colors"
import Text from "../text"
import { TextType } from "../text/models"

import { IndexProps } from "./models"
import { Main } from "./style"

/**
 * @author Edson Pinheiro
 * @prop {string} text - Label Text
 * @prop {ColorType} color - Background Color button
 * @prop {ButtonType} type - Size or Type
 * @prop {SetVoid} onClick - Action
 * @prop {boolean} isDisabled - Without actions and Color Type
 * @prop {boolean} isLoading - Loading spinner
 * @prop {Margins} mt - Margin Top
 * @prop {Margins} mr - Margin Right
 * @prop {Margins} mb - Margin Bottom
 * @prop {Margins} ml - Margin Left
 * 
 * @example <Button
 *  text='Texto do botao'
 *  color='azureRadiance'
 *  type='medium'
 *  onClick={() => alert('Clique no botão')}
 *  isLoading
 * />
 */
const Button: React.FC<IndexProps> = ({
    text,
    color,
    type,
    onClick,
    isDisabled,
    isLoading,
    mt,
    mr,
    mb,
    ml,
}) => {
    const findSizeText = (): TextType => {
        switch (type) {
            case 'biggest':
                return 'H7'
            case 'medium':
                return 'H8'
            default:
                return 'H9'
        }
    }

    const findColorText = (): ColorType => {
        switch (color) {
            case 'azureRadiance':
            case 'mandy':
            case 'black':
                return 'white'
            default:
                return 'black'
        }
    }
    
    return (
        <Main
            color={color}
            type={type}
            onClick={() => isDisabled || isLoading ? null : onClick()}
            isDisabled={isDisabled}
            isLoading={isLoading}

            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
        >
            <Text
                type={findSizeText()}
                color={findColorText()}
            >
                { text }
            </Text>
        </Main>
    )
}

export default memo(Button)