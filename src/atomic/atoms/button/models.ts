import { SetVoid } from "@/types/set"
import { ColorType } from "@/atomic/constants/colors"
import { Margins } from "@/atomic/constants/spacing"

export interface IndexProps extends Margins {
    text: string
    color: ColorType
    type: ButtonType
    onClick: SetVoid
    isDisabled?: boolean
    isLoading?: boolean
}

type ButtonType = 'biggest' | 'big' | 'medium' | 'small' | 'icon'

export type IndexStyledProps = Omit<IndexProps, 'text' | 'onClick'>