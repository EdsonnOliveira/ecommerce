import { useCallback, useMemo } from "react";
import View from "./view";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IndexProps } from "./models";
import { CartTypes } from "@/services/redux/reducers/cart/models";

const Cart: React.FC<IndexProps> = ({
    data,
    setDataItems,
}) => {
    const valueTotal = useMemo(() => data.reduce((acc, item) => acc + Number(item.price), 0), [data])

    const onRemove = useCallback((index: number) => {
        let prevData = data.filter((_, i) => i !== index)
        setDataItems(prevData)
        alert('Item removido com sucesso!')
    }, [data])

    return (
        <View
            items={data}
            onRemove={onRemove}
            valueTotal={valueTotal}
        />
    )
}

const mapStateToProps = ({
    cartReducer
}: {
    cartReducer: CartTypes
}) => ({
    data: cartReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataItems: (data: CartTypes['data']) => dispatch({ type: 'SET_CART_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);