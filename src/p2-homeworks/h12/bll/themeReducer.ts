export type initStateType = {
    color: string
}

const initState: initStateType = {
    color: 'red'
};



export const themeReducer = (state = initState, action: changeThemeAC): initStateType => { // fix any
    switch (action.type) {
        case "set-color": {
            return {...state, color: action.color};
        }

        default:
            return state;

    }
};

type changeThemeAC = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (color: string) => {
    return {
        type: "set-color",
        color
    }
}; // fix any