import React from 'react'
import './Popup.scss'

export const Popup = ({month, day, closePopup}) => {

        return (
            <div className="popup-wrapper" data-close={true} onClick={event => closePopup(event)}>
                <div className="popup">
                    <div className="popup-header">
                        <span className="material-icons close" onClick={event => closePopup(event)} data-close={true}>close</span>
                    </div>
                    <div className="popup-content">
                        <div className="input-group">
                            <label htmlFor="popup-month">Month</label>
                            <input defaultValue={month} type="text" id="popup-month"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="popup-day">Day</label>
                            <input defaultValue={day} type="text" id="popup-day"/>
                        </div>
                    </div>
                </div>
            </div>
        )
}
