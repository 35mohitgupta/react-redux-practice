import { ALL_VISIBLE, FILTERED_VISIBLE } from "./visibilityType"

const initialState = {
    allVisible: true,
    searchKeyword: ''
}

const visibilityReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_VISIBLE:
            return {
                ...initialState
            }
        case FILTERED_VISIBLE:
            return {
                allVisible: false,
                searchKeyword: action.payload
            }
        default:
            return state
    }
}

export default visibilityReducer