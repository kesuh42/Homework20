import React from "react";
import "./style.css";
import me from "./me.jpg"

function About() {
    return (
        <div className="col-md-8 articlebox">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="articletitle">About me</h1>
              </div>
            </div>

            <div className="row articlecontent">
              <div className="col-md-4">
                <img className="kevinpic" src={me} alt="Kevin" />
              </div>

              <div className="col-md-8">
                <p className="articletext">Hi, I'm Kevin and I graduated from Northwestern University with a BA in Classical Studies. You probably couldn't guess from my major, but I was a premed student for all four years of my college education. After a ridiculous amount of effort getting good grades in my premed classes, I actually decided not to go to med school. Shame, isn't it? Anyways, after 2 years spent recovering from the traumas of my difficult college life and thinking about my career options, I decided to do something entirely different and go into CS. I will be spending the next 6 months learning to code at Northwestern's Coding Boot Camp, and hopefully I will be able to finally figure out my career path. We'll see how that works out.</p>
              </div>
            </div>

          </div>
        </div>
    )
}

export default About;