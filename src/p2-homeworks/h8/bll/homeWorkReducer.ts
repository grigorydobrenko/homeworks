import {UserType} from "../HW8";

type ActionType = 'sort' | 'check'


type Action = ActionSortNameType | ActionCheckAgeType
type ActionSortNameType = {
    type: ActionType, payload: string
}
type ActionCheckAgeType = {
    type: ActionType, payload: number
}


export const homeWorkReducer = (state: UserType[], action: Action): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix

            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name < b.name ? -1 : 1
                )]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => a.name < b.name ? 1 : -1
                )]
            }
            return state


        }
        case 'check': {
            // need to fix
            return state.filter(u => u.age >= 18)


        }
        default:
            return state
    }
}