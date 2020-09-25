import {HIDE_POPUP, NEXT_MONTH, PREV_MONTH, SHOW_POPUP} from "../actionTypes";

function padNum(num = 0) {
    return num.toString().padStart(2, 0);
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekDays = [
    {name:'S', original: 'Sunday'},
    {name:'M', original: 'Monday'},
    {name:'T', original: 'Tuesday'},
    {name:'W', original: 'Wednesday'},
    {name:'T', original: 'Thursday'},
    {name:'F', original: 'Friday'},
    {name:'S', original: 'Saturday'},
]

const date = new Date()
date.setDate(1)
const calendar = () => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    date.setDate(1)
    const prevDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const firstDayIndex = date.getDay()
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    const nextDays = 7 - lastDayIndex - 1

    const getPrevDays = () => {
        let idx = 0
        const prevDays = []
        for (let i = firstDayIndex; i > 0; i--) {
            if (idx > 6) {
                idx = 0
            }
            prevDays.push({
                el: padNum(prevDay - i + 1),
                className: 'prev-date',
                month: months[date.getMonth() - 1]
            })
            idx++
        }
       return prevDays
    }

    const getDays = () => {
        let idx = 0
        return new Array(lastDay)
            .fill(null)
            .map((_, index) => {
                if (idx > 6) {
                    idx = 0
                }
                let dayEl = {
                    el:padNum(index + 1),
                    day: weekDays[idx],
                    className: '',
                    month: months[date.getMonth()]
                }
                if (index + 1 === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    dayEl.className = 'today'
                }
                idx++
                return dayEl
            })
    }

    const getNextDays = () => {
        let idx = 0
        const lastDays = []
        for (let i = 0; i <= nextDays; i++) {
            if (idx > 6) {
                idx = 0
            }
            lastDays.push({
                el: padNum(i + 1),
                className: 'next-date',
                month: months[date.getMonth() + 1]
            })
        }
        return lastDays
    }

    return {prevDays: getPrevDays(), days: getDays(), nextDays: getNextDays()}
}


const initialState = {
    monthName: months[date.getMonth()],
    year: date.getFullYear(),
    prevDays: calendar().prevDays,
    days: calendar().days,
    nextDays: calendar().nextDays,
    weekDays,

    popupVisible: false,
    month: '',
    day: ''
}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case PREV_MONTH: {
            date.setMonth(date.getMonth() - 1)
            const data = calendar()
            return {
                ...state,
                ...data,
                monthName: months[date.getMonth()],
            }
        }
        case NEXT_MONTH: {
            date.setMonth(date.getMonth() + 1)
            const data = calendar()
            return {
                ...state,
                ...data,
                monthName: months[date.getMonth()],
            }
        }
        case SHOW_POPUP:
            return {...state, popupVisible: true, ...action.payload}
        case HIDE_POPUP:
            return {...state, popupVisible: false, day: '', month: ''}
        default: return state
    }
}