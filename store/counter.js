import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment (state) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        },
        increase (state, action) {
            state.counter = state.counter + action.payload;  //payload hold any extra data that is being passed
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;   //All the action items or functions will be exported by default when this is used and have to export it.

export default counterSlice.reducer;