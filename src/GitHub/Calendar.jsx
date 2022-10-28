import React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './Calendar.css';

export const Calendar = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear && 
                monthOfDay > currentMonth - shownMonths && 
                monthOfDay <= currentMonth
            );
        });
    };


    return (
        <div>
        <div className="calendarContainer">

            <div className="calendarBox">
                <h3>GitHub Calender</h3>
                <GitHubCalendar
                username="lokesh-patidar"
                transformData={selectLastHalfYear}
                hideTotalCount
                hideColorLegend
                style={{
                    height: "130px",
                    width: "100%",
                    cursor: "pointer"
                }}
                >
                    <ReactTooltip delayShow={20}/>
                </GitHubCalendar>
                
            </div>
        </div>
        <div className="graph">
           <a href="https://github.com/lokesh-patidar/github-readme-activity-graph">
            <img alt="lokesh-patidar Activity Graph" 
            src="https://activity-graph.herokuapp.com/graph?username=lokesh-patidar&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
           </a>
        </div>
        <hr id="projectsPageSection"/>
        </div>
    );
}