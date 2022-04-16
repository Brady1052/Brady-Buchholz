import React from 'react';
import movieDBImage from '../../images/MovieDB.png';
import weatherDashboard from '../../images/Weather_Dashboard.png';
import workDayScheduler from '../../images/Work_Day_Scheduler.png';
import noteTaker from '../../images/Note_Taker.png';
import fitnessTracker from '../../images/Workout_Tracker.png';
import employeeManagementSystem from '../../images/Employee_Management_System.png';
export default function Portfolio() {
  return (
    <div>
      <br></br>
      <h1 id="firstWorkText">The Movie DB</h1>
      <p>
        Below is "The Movie DB". An application created by my group and I that
        allows users to see and leave reviews for movies. The application allows
        users to create an account, and/or login if they want to leave reviews.
        Below is a link to the website, and our repository.
      </p>
      <strong>Technologies used:</strong> Handlebars.js, Node and Express Web
      Server, SQL, Get and Post Routes, Heroku, Sessions, Bcrypt (to hash the
      user's password in the database)
      <div class="firstProject">
        <a id="repoLink" href="https://github.com/Brady1052/Group-Project-2">
          Click Here to see Repository
        </a>
        <a href="https://arcane-basin-64105.herokuapp.com/">
          {' '}
          <img id="movie_db" src={movieDBImage} alt="The Movie DB Screenshot" />
        </a>
      </div>
      <div>
        <br></br>
        <h3>Weather Dashboard</h3>
        <p>
          The Weather Dashboard project was created mainly as a way to gain and
          show experience using Javascript. The app uses fetch to make XML
          request to the Open Weather API, and then uses Javscript to manipulate
          the DOM and present the data received. The entire app was written by
          me, therefore I also wrote the HTML, and CSS.
        </p>
        <strong>What the app does:</strong>
        <p>
          {' '}
          Weather Dashboard allows the user to search by city and receive
          information related to the weather in that city. The app provides
          weather reporting for that specific day, as well as provides a five
          day forecast. Weather Dashboard also saves the user's searches and
          allows them to simply click the city in the dropwdown instead of
          having to always type in their search request.To try the app yourself
          simply click the picture below.
        </p>
        <strong> Technologies used: </strong>
        <p>
          HTML5, CSS, Bootstrap, Javascript(ES6), Fetch Requests, Open Weather
          API, Promise Handling, DOM Manipulation, Local Storage
        </p>
        <div class="firstProject">
          <a
            id="repoLink"
            href="https://github.com/Brady1052/Weather-Dashboard"
          >
            Click Here to see Repository
          </a>

          <a href="https://brady1052.github.io/Weather-Dashboard/">
            <img
              id="weather-dashboard"
              src={weatherDashboard}
              alt="Weather Dashboard Screenshot"
            />
          </a>
        </div>
      </div>
      <div>
        <br></br>
        <h3>Employee Management System</h3>
        <p>
          The Employee Management System allows users to create, add, and update
          employees, roles, and departments within a company. Click the image
          for a brief demonstration of the app.
        </p>
        <strong> Technologies used: </strong> npm Inquirer, mySQL2, and
        Javascript.
        <div class="firstProject" />
        <a
          id="repoLink"
          href="https://github.com/Brady1052/Employee-Management-System"
        >
          Click Here to see Repository
        </a>
        <a href="https://watch.screencastify.com/v/lqIrv81yhnMIpUErRmmc">
          <img
            id="em_System"
            src={employeeManagementSystem}
            alt="Employee Management System"
          />
        </a>
      </div>
      <div>
        <br></br>
        <h3>Work Day Scheduler</h3>
        <p>
          {' '}
          Below is an application I made for scheduling your day in one hour
          increments
        </p>
        <div class="firstProject">
          <a
            id="repoLink"
            href="https://github.com/Brady1052/Work-Day-Scheduler"
          >
            Click Here to see Repository
          </a>

          <a href="https://brady1052.github.io/Work-Day-Scheduler/">
            <img
              id="workDayimg"
              src={workDayScheduler}
              alt="Work Day Scheduler"
            />
          </a>
        </div>
      </div>
      <div>
        <br></br>
        <h3>Note Taker</h3>
        <p>
          This application allows the user to add and save notes to the note
          taker.
        </p>
        <strong>Technologies used: </strong>Express, Heroku, JSON.
        <div class="firstProject" />
        <a id="repoLink" href="https://github.com/Brady1052/Note-Taker">
          Click Here to see Repository
        </a>
        <a href="https://note-take-brady.herokuapp.com/">
          <img id="note_taker" src={noteTaker} alt="Note Taker App" />
        </a>
      </div>
      <div>
        <br></br>
        <h3>Fitness Tracker</h3>
        <p>
          "For this assignment, you'll create a workout tracker. You have
          already been provided with the front end code in the Develop folder.
          This assignment will require you to create Mongo database with a
          Mongoose schema and handle routes with Express." - Courtesy of The
          Ohio State Full Stack Bootcamp <br></br>
        </p>
        <div class="firstProject" />
        <a id="repoLink" href="https://github.com/Brady1052/Fitness-Tracker">
          Click Here to see Repository
        </a>
        <a href=" https://sheltered-tor-12441.herokuapp.com/">
          <img id="note_taker" src={fitnessTracker} alt="Note Taker App" />
        </a>
      </div>
    </div>
  );
}
