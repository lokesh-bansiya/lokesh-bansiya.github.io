import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./Calendar.css";

export const Calendar = () => {
  return (
    <div className="outerBox">
      <div className="calendarContainer">
        <div className="calendarBox">
          <h3>GitHub Calender</h3>
          <GitHubCalendar
            username="lokesh-bansiya"
            color="yellow"
            hideTotalCount
            hideColorLegend
            style={{
              width: "100%",
              cursor: "pointer",
            }}
            className="react-activity-calendar"
          >
            <ReactTooltip delayShow={20} />
          </GitHubCalendar>
        </div>
      </div>

      <div className="graph">
        <p align="center">
          <img
            align="center"
            src="https://github-readme-activity-graph.vercel.app/graph?username=lokesh-bansiya&theme=github-compact"
            alt="lokesh-bansiya Activity Graph"
          />
        </p>
      </div>
      <hr id="projectsPageSection" />
    </div>
  );
};
