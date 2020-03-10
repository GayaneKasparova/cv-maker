import React, {createContext} from "react";
import {storeInputValue} from '../actions/actions'

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();

const initialState = {
    data: []
}
function reducer (state, action) {
    console.log(state)
    const dataToStore = action.data;
    switch (action.type) {
        case storeInputValue:
            return {
                ...state,
                data: [...state.data, dataToStore]
            };

        default:
            return {
                ...state,
                state,
            };
    }
}

const DataContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <DataStateContext.Provider value={state}>
            <DataDispatchContext.Provider value={dispatch}>
                {children}
            </DataDispatchContext.Provider>
        </DataStateContext.Provider>
    );
}

export default DataContextProvider;
