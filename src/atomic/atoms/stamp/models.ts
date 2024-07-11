import { ColorType } from "@/atomic/constants/colors"
import { SkeletonProps } from "../skeleton/models"

export interface IndexProps extends SkeletonProps {
    text: string
    textColor?: ColorType
    color: ColorType
}

export type StampType = Omit<IndexProps, keyof SkeletonProps>

export type IndexStyledProps = Pick<IndexProps, 'color'>