import { ALL_VISIBLE, FILTERED_VISIBLE } from "./visibilityType"

export const allUserVisible = () => {
    return {
        type: ALL_VISIBLE
    }
}

export const filterUserBy = keyword => {
    return {
        type: FILTERED_VISIBLE,
        payload: keyword
    }
}