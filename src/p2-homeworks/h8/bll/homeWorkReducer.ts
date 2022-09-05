import {UserType} from "../HW8";

type ActionType = 'sort' | 'check'
type ActionSortNamePayLoadType = 'up' | 'down'


type Action = ActionSortNameType | ActionCheckAgeType
type ActionSortNameType = {
    type: ActionType
    payload: ActionSortNamePayLoadType
}
type ActionCheckAgeType = {
    type: ActionType
    payload: number
}


export const homeWorkReducer = (state: UserType[], action: Action): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix

            const newState = [...state].sort((a, b) => {
                return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0
            })
            return action.payload === 'up' ? newState : newState.reverse()

        }
        case 'check': {
            // need to fix
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}