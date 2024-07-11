import { useCallback } from "react";
import View from "./view";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { itemsBuy } from "@/constants/utils";
import { IndexProps } from "./models";
import { CartTypes } from "@/services/redux/reducers/cart/models";

const Home: React.FC<IndexProps> = ({
  data,
  setDataItems,
}) => {
  const onAdd = useCallback((index: number) => {
    let prevData = data ?? []
    prevData.push(itemsBuy[index])
    setDataItems(prevData)
    alert('Item adicionado com sucesso!')
  }, [])

  return (
    <View
      onAdd={onAdd}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);