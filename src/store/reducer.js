const initialState = {
    personalInfo: {
        fullName: '',
        email: '',
    },
    workExperience: {
    },
    education: {
    },
    skills: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_INPUT_VALUE":
            state[action.blockName][action.key] = action.value;
            break;
        default: console.error("Wrong action type");
    }
    return state
}

export default reducer;