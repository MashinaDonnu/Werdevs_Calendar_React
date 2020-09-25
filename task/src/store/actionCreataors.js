import {HIDE_POPUP, NEXT_MONTH, PREV_MONTH, SHOW_POPUP} from "./actionTypes";

export const nextMonth = () => {
    return {
        type: NEXT_MONTH
    }
}

export const prevMonth = () => {
    return {
        type: PREV_MONTH
    }
}

export const showPopup = payload => {
    return {
        type: SHOW_POPUP,
        payload
    }
}

export const hidePopup = () => {
    return {
        type: HIDE_POPUP
    }
}