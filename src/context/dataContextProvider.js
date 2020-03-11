import React, {createContext} from "react";
import {STORE_PERSONAL_INFO, STORE_SKILLS} from '../actions/actions'

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();

const initialState = {
    personalInfo: {},
    skills: [],
    workExperience: [],
    education: []
}
function reducer (state, action) {
    const dataToStore = action.data;

    switch (action.type) {
        case STORE_PERSONAL_INFO:
            const newParam = {};
            newParam[dataToStore.key] = dataToStore.value;

            return {
                ...state,
                personalInfo: {...state.personalInfo, ...newParam}
            };

        case STORE_SKILLS: {
            return {
                ...state,
                skills: [...state.skills, dataToStore],
            };
        }

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
