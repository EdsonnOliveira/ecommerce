import { ItemBuy } from "@/constants/utils";
import { SetVoid } from "@/types/set";

export interface IndexProps extends ItemBuy {
    onClick: SetVoid
    isRemove?: boolean
}