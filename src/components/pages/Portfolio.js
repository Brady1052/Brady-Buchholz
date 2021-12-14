import React from 'react';
import movieDBImage from '../../images/MovieDB.png'
import spotiweather from '../../images/Project1.png'
import weatherDashboard from '../../images/Weather_Dashboard.png'
import workDayScheduler from '../../images/Work_Day_Scheduler.png'
export default function Portfolio() {
  return (
    <div>
  <h1 id= "firstWorkText">The Movie DB</h1>
        <p>Below is "The Movie DB". An application created by my group and I that allows users to see and leave reviews for movies.
            The application allows users to create an account, and/or login if they want to leave reviews. Below is a link to the website, and our repository. 
            </p>
            <p>
            Tools / languages used: Handlebars.js, Node and Express Web Server, SQL, Get and Post Routes, Heroku, Sessions, Bcrypt (to hash the user’s password in the database)
                </p>
        <div class="firstProject">
            <a href="https://github.com/Brady1052/Group-Project-2">Click Here to see Repository</a>
            <a href="https://arcane-basin-64105.herokuapp.com/"> <img id="movie_db" src= {movieDBImage} alt="The Movie DB Screenshot"/></a>
    
    </div>
    <div>
        <h3 id="firstWorktxt">SpotiWeather</h3>

        <p>Below is a application created by my group and I that allows users to search for
            the weather of a city and
            pair it with music. It was created using HTML,CSS, Bootstrap (CSS styling framework), and javascript. We
            used the Open Weather API, and the YouTube API synchronistically. The Open Weather API was used to tell our
            application what the weather was like. And the YouTube API was used to find music. For example, a user might
            search Miami, and the weather happens to be sunny that day. The background of the application will change
            themes, and a song from YouTube will load that supplements the weather.
        </p>
    
        <div class="firstProject">
            <a href="https://github.com/Brady1052/API-Project-1">Click Here to see Repository</a>
            <a href="https://brady1052.github.io/API-Project-1/"> <img id="spotiweather" src={spotiweather}
                    alt="first work portfolio"/></a>
        </div>
    </div>

    <div>
        
        <h3>Weather Dashboard</h3>
        <h3>This application was created by fetching the Open Weather API, and
            displaying it's data to the user.
        </h3>
        <div class ="firstProject">
        <a href="https://github.com/Brady1052/Weather-Dashboard">Click Here to see Repository</a>
        
        <a href="https://brady1052.github.io/Weather-Dashboard/"><img id="weather-dashboard"
                src={weatherDashboard} alt="Weather Dashboard Screenshot"/></a>
        </div>
    </div>

    <div>
        <h3>Work Day Scheduler</h3>
        <h3> Below is an application I made for scheduling your day in one hour increments</h3>
        <div class="firstProject">
         <a href="https://github.com/Brady1052/Work-Day-Scheduler">Click Here to see Repository</a>
        
        <a href="https://brady1052.github.io/Work-Day-Scheduler/"><img id="workDayimg"
                src={workDayScheduler} alt="Work Day Scheduler"/></a>
                </div>
    </div>
    </div>
  );
  }


