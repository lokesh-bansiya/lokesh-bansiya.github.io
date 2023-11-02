import React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './Calendar.css';

export const Calendar = () => {

    // const selectLastHalfYear = (contributions) => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 12;

    //     return contributions.filter((day) => {
    //         const date = new Date(day.date);
    //         const monthOfDay = date.getMonth();

    //         return (
    //             date.getFullYear() === currentYear &&
    //             monthOfDay > currentMonth - shownMonths &&
    //             monthOfDay <= currentMonth
    //         );
    //     });
    // };


    return (
        <div className="outerBox">
            <div className="calendarContainer">

                <div className="calendarBox">
                    <h3>GitHub Calender</h3>
                    <GitHubCalendar
                        username="lokesh-patidar"
                        color="yellow"
                        hideTotalCount
                        hideColorLegend
                        style={{
                            width: "100%",
                            cursor: "pointer"
                        }}
                        className="react-activity-calendar"
                    >
                        <ReactTooltip delayShow={20} />
                    </GitHubCalendar>
                </div>
            </div>

            <div className="graph">
                <p align="center">
                    <img align="center" src="https://github-readme-activity-graph.vercel.app/graph?username=lokesh-patidar&theme=github-compact" alt="lokesh-patidar Activity Graph" />
                </p>
            </div>
            <hr id="projectsPageSection" />
        </div>
    );
}