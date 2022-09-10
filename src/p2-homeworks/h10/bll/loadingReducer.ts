export type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type loadingACType = {
    type: 'SET_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: 'SET_LOADING',
        isLoading
    }
} // fix any