import React from "react";
import Project from "../../components/Project"
import buffalo from "./buffalo.jpg"
import music from "./music.jpg"
import playermodel from "./playermodel.png"
import weather from "./weather.png"
import schedule from "./schedule.png"
import quiz from "./quiz.png"
import note from "./note.png"
import burger from "./burger.png"

function Portfolio() {
    return (
        <div class="col-md-8 articlebox">
            <div class="container">
                <div class="row">
                    <div class="col">
                    <h1 class="articletitle">Portfolio</h1>
                    </div>
                </div>

                <div class="row articlecontent">
                    <Project name="AnimalDex" img={buffalo} link="https://kesuh42.github.io/NU-Project-One/"/>
                    <Project name="MusicPlayer" img={music} link="https://spiderfly.herokuapp.com/"/>
                </div>

                <div class="row articlecontent">
                    <Project name="Open World RPG" img={playermodel} link="https://kesuh42.github.io/RPG"/>
                    <Project name="Weather Application" img={weather} link="https://kesuh42.github.io/Homework6/"/>
                </div>

                <div class="row articlecontent">
                    <Project name="Day Scheduler" img={schedule} link="https://kesuh42.github.io/Homework5/"/>
                    <Project name="Quiz" img={quiz} link="https://kesuh42.github.io/Homework4/"/>
                </div>
                
                <div class="row articlecontent">
                    <Project name="Note Taker" img={note} link="https://notetakersuh.herokuapp.com/"/>
                    <Project name="Burger Devourer" img={burger} link="https://burgerdevourerksuh.herokuapp.com/"/>
                </div>



          

            </div>
        </div>
    )
}

export default Portfolio;