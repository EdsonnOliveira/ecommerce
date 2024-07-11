import { ColorType } from "@/atomic/constants/colors";
import { Margins } from "@/atomic/constants/spacing";

import { ChildrenType } from "@/types/variables";
import { SetVoid } from "@/types/set";
import { SkeletonProps } from "../skeleton/models";

export interface IndexProps extends Margins, SkeletonProps {
    /**
     * @param H1 font-size: 60px
     * @param H2 font-size: 50px
     * @param H3 font-size: 45px
     * @param H4 font-size: 40px
     * @param H5 font-size: 32px
     * @param H6 font-size: 26px
     * @param H7 font-size: 20px
     * @param H8 font-size: 16px
     * @param H9 font-size: 14px
     * @param H10 font-size: 12px
     */
    type: TextType
    color?: ColorType
    
    weight?: TextWeight
    letterSpacing?: string
    wordSpacing?: string

    align?: TextAlign

    onClick?: SetVoid
    
    transform?: TextTransform
    decoration?: TextDecoration


    children: ChildrenType
}

export type TextType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7' | 'H8' | 'H9' | 'H10'
type TextAlign = 'left' | 'center' | 'right' | 'justify'
type TextWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
type TextTransform = 'capitalize' | 'lowercase' | 'none' | 'uppercase'
type TextDecoration = 'dashed' | 'dotted' | 'double' | 'line-through' | 'none' | 'overline' | 'solid' | 'underline' | 'wavy'

export type IndexStyledProps = Omit<IndexProps, 'children'>