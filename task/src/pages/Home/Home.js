import React,{Component} from 'react'
import './Home.scss'
import Calendar from "../../components/Calendar/Calendar";

export default class Home extends Component {

    render(){
        return(
            <div className="home">
                <div className="bg-image">
                        <div className="header-text">
                            <h1>Choose the day for the meeting</h1>
                            <p>We encourage you to book your appointment online.</p>
                            <p>This will save you time.</p>
                        </div>
                </div>
                <Calendar/>
            </div>
        );
    }
}
