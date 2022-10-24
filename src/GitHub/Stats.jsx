import React from "react";
import "./Stats.css";


export const Stats = () => {

    return (
        <div className="statsBox">
            <h3>GitHub Stats</h3>
        <div className="statsContainer">
            <div>
                <a href="https://github.com/lokesh-patidar">
                    <img align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=lokesh-patidar"/>
                </a>
            </div>

            <div>
                <a href="https://github.com/lokesh-paidar">
                    <img align="center" href="https://github-readme-stats.vercel.app/api/top-langs/?username=lokesh-patidar" alt=""/>
                </a>

                <a href="https://github.com/lokesh-paidar">
                    <img align="left" href="https://github-readme-stats.vercel.app/api/?username=lokesh-patidar&count_private=true&show_icons=true" alt=""/>
                </a>
            </div>
        </div>
        </div>
        
    );
}