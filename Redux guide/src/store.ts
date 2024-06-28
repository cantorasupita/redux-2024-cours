import {configureStore} from "@reduxjs/toolkit"


//type ---------------------------------------------------
type CounterState = {
    counter: number;
}
export type CounterId = string


type State = {
    counters: Record<CounterId, CounterState | undefined>;
}

export type IcrementAction = {
    type: 'increment';
    payload: {
        counterId: CounterId
    }
}

export type DecrementAction = {
    type: 'decrement';
    payload: {
        counterId: CounterId
    }

}

type Action = IcrementAction | DecrementAction;


//init state----------------------------------------------------------
const initialCounterState: CounterState = { counter: 0}
const initialState: State = {
    counters: {},
}


//reducer------------------------------------------------------------------
const reducer = (state = initialState, action: Action): State => {
    switch(action.type) {
        case "increment":
            const { counterId } = action.payload;
            const currentCounter = state.counters[counterId] ?? initialCounterState;
            return {
                ...state, 
                counters: {
                    ...state.counters, 
                    [counterId ]: {
                        ...currentCounter,
                        counter: currentCounter.counter +1
                    }
                }
            };
        case "decrement": {
            const { counterId } = action.payload;
            const currentCounter = state.counters[counterId] ?? initialCounterState;
            return {
                ...state, 
                counters: {
                    ...state.counters, 
                    [counterId ]: {
                        ...currentCounter,
                        counter: currentCounter.counter -1
                    }
                }
            };
        }
           
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
