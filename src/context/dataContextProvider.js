import React, {createContext} from "react";
import {
    STORE_PERSONAL_INFO,
    STORE_SKILLS,
    DELETE_SKILLS
} from '../actions/actions'

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();

const initialState = {
    personalInfo: {},
    skills: [],
    workExperience: [],
    education: []
}
function reducer (state, action) {
    const data = action.data;
    switch (action.type) {
        case STORE_PERSONAL_INFO:
            // Store given data's key and value in new obj
            const newParam = {};
            newParam[data.key] = data.value;

            return {
                ...state,
                personalInfo: {...state.personalInfo, ...newParam}
            };

        case STORE_SKILLS: {
            return {
                ...state,
                skills: [...state.skills, data],
            };
        }

        case DELETE_SKILLS: {
            return {
                ...state,
                skills: state.skills.filter((skill, index) => index !== data)
            }
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
