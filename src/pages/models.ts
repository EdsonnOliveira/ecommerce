import { CartTypes } from "@/services/redux/reducers/cart/models";
import { SetIndex } from "@/types/set";

export interface IndexProps {
    data: CartTypes['data']
    setDataItems: (data: CartTypes['data']) => void
}

export interface ViewProps {
    onAdd: SetIndex
}