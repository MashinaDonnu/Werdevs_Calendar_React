import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Calendar.scss'
import {hidePopup, nextMonth, prevMonth, showPopup} from "../../store/actionCreataors";
import {Popup} from "../Popup/Popup";

class Calendar extends Component{

    drawCalendarDays = () => {
        let idx = 0
        const allDays = [
            ...this.props.calendar.prevDays,
            ...this.props.calendar.days,
            ...this.props.calendar.nextDays
        ].map(day => {
            if (idx > 6) {
                idx = 0
            }
            day.day = this.props.calendar.weekDays[idx].original
            idx++
            return day
        })

        return allDays
    }

    next = () => {
        this.props.nextMonth()
    }

    prev = () => {
        this.props.prevMonth()
    }

    showPopup = event => {
        const month = event.target.dataset.month
        const day = `${event.target.textContent}th ${event.target.dataset.day}`
        this.props.showPopup({month, day})
    }
    hidePopup = event => {
        if (event.target.dataset.close) {
            this.props.hidePopup()
        }
    }

    render() {
        this.drawCalendarDays()
        const {calendar} = this.props

        return (
            <div className="calendar-wrapper">
                {calendar.popupVisible ? <Popup month={calendar.month} day={calendar.day} closePopup={this.hidePopup} /> : null}
                <div className="calendar">
                    <div className="month">
                        <span className="material-icons prev" onClick={this.prev}>arrow_back_ios</span>
                        <div className="month-text">
                            {calendar.monthName} {calendar.year}
                        </div>
                        <span className="material-icons next" onClick={this.next}>arrow_forward_ios</span>
                    </div>
                    <div className="days">
                        {this.drawCalendarDays().map((day, index) => {
                            return <div
                                        key={index}
                                        data-day={day.day}
                                        data-month={day.month}
                                        className={day.className}
                                        onClick={event => this.showPopup(event)}
                                    >
                                        {day.el}
                                   </div>
                        })}
                    </div>

                    <div className="week-days">
                        <div className="week-days-wrapper">
                            {calendar.weekDays.map((day, index) => {
                                return <div key={index}>{day.name}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        calendar: state.calendarReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextMonth: () => dispatch(nextMonth()),
        prevMonth: () => dispatch(prevMonth()),

        showPopup: data => dispatch(showPopup(data)),
        hidePopup: () => dispatch(hidePopup()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)