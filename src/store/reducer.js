const initialState = {
    personalInfo: {
        name: '',
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
            state[action.infoType][action.key] = action.value;
    }
    return state
}

export default reducer;