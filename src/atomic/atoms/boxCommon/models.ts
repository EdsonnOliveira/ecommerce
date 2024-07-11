import { SetVoid } from "../../../types/set";
import { Alignments } from "../../constants/align";
import { Margins, Padding, Position } from "../../constants/spacing";

export interface IndexProps extends Margins, Padding, Position, Alignments {
    width?: string;
    maxWidth?: string;
    height?: string;

    flex?: number;
    bgColor?: string | undefined;
    scroll?: string;
    radius?: string
    border?: string;
    children: React.ReactNode | React.ReactNode[] | undefined;

    display?: 'flex' | 'none';
    overflowX?: 'initial' | 'scroll'

    onClick?: SetVoid;
}