import {configureStore} from "@reduxjs/toolkit"


//type ---------------------------------------------------
type State = {
    counter: number;
}

export type IcrementAction = {
    type: 'increment'
}

export type DecrementAction = {
    type: 'decrement'
}

type Action = IcrementAction | DecrementAction;


//init state----------------------------------------------------------
const initialState: State = {
    counter: 1,
}


//reducer------------------------------------------------------------------
const reducer = (state = initialState, action: Action): State => {
    switch(action.type) {
        case "increment":
            return {
                ...state, 
                counter: state.counter + 1
            };
        case "decrement":
            return {
                ...state, 
                counter: state.counter - 1
            };
        default:
            return state;       
    }
};


//store -------------------------------------------------
export const store = configureStore({
    reducer: reducer 
});


/*
store.dispatch;
store.getState;
store.subscribe;
*/
