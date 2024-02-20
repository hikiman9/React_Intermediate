import { configureStore, createSlice } from '@reduxjs/toolkit'


let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, title: 'Goto Hitori', count: 2 },
        { id: 2, title: 'Kita Ikuyo', count: 1 }
    ],
    reducers: {
        addCount(state, action) {
            let index = state.findIndex((data) => {
                return data.id == action.payload;
            });
            state[index].count += 1;
        },

        addCart(state, action) {
           state.push(action.payload);
           return state;
        }
    }
})

export let { addCount, addCart } = cart.actions;


export default configureStore({
    reducer: {
        cart: cart.reducer,
    }
}) 