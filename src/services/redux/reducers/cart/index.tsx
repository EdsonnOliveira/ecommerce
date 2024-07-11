import { IndexProps } from "./models";

const initialState: IndexProps = {
    data: []
};

export default (state = initialState, action: { type: string, payload: IndexProps }) => {
    switch(action.type) {
        case 'SET_CART_DATA':
            return {...state, data: action.payload.data};
    }

    return state;
}