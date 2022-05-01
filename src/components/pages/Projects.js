import React from 'react';
import movieDBImage from '../../images/MovieDB.png';
import weatherDashboard from '../../images/Weather_Dashboard.png';
import workDayScheduler from '../../images/Work-Day-Scheduler.png';
import noteTaker from '../../images/Note_Taker.png';
import employeeManagementSystem from '../../images/Employee_Management_System.png';
export default function Projects() {
  return (
    <div id="projectContainer">
      {/* Weather Dashboard container */}
      <div id="weatherDashboardContainer">
        <br></br>
        <h1>Weather Dashboard</h1>
        <p>
          The Weather Dashboard project was created mainly as a way to gain and
          show experience using Javascript. The app uses fetch to make XML
          requests to the Open Weather API, and then uses Javascript to
          manipulate the DOM and present the data received.
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
        <strong> Technologies Used: </strong>
        <p>
          HTML5, CSS, Bootstrap, Javascript(ES6), Fetch Requests, Open Weather
          API, Promise Handling, DOM Manipulation, Local Storage
        </p>
        <a id="repoLink" href="https://github.com/Brady1052/Weather-Dashboard">
          Click Here to see Repository
        </a>
        <div>
          <a
            id="weather-dashboard-anchor"
            href="https://brady1052.github.io/Weather-Dashboard/"
          >
            <img
              id="weather-dashboard"
              src={weatherDashboard}
              alt="Weather Dashboard Screenshot"
            />
          </a>
        </div>
      </div>
      <br></br>
      {/* MovieDB Container */}
      <div id="movieDbContainer">
        <h1 id="firstWorkText">The Movie DB</h1>
        <p>
          Below is "The Movie DB". An application created by my group and I that
          allows users to see and leave reviews for movies. The application
          allows users to create an account, and/or login if they want to leave
          reviews. Below is a link to the website, and our repository.
        </p>
        <strong>Technologies Used:</strong>{' '}
        <p>
          Handlebars.js, Node and Express Web Server, SQL, Get and Post Routes,
          Heroku, Sessions, Bcrypt
        </p>
        <div class="firstProject">
          <a id="repoLink" href="https://github.com/Brady1052/Group-Project-2">
            Click Here to see Repository
          </a>
          <a
            id="movie_db_anchor"
            href="https://arcane-basin-64105.herokuapp.com/"
          >
            {' '}
            <img
              id="movie_db"
              src={movieDBImage}
              alt="The Movie DB Screenshot"
            />
          </a>
        </div>
      </div>
      <br></br>
      {/* Work Day Scheduler Container */}
      <div id="Work Day Scheduler Container">
        <h1>Work Day Scheduler</h1>
        <p>
          {' '}
          The work day scheduler was created as a way to gain and show
          experience using primarily JQuery, and Bootstrap. The app's front end
          was primarily created using Bootstrap. Then with the help of Jquery
          and vanilla Javascript allows the user to click on different time
          blocks, enter their schedule for that hour, and then save it for when
          they come back. Each hour has a different color based on what the time
          is. For example, the photo below was taken around noon. The time block
          sectioned out for 12 o'clock is red. The time blocks that have already
          passed are white, and the time blocks that are in the future are
          green.
        </p>
        <strong>Technologies Used:</strong>
        <p>
          HTML, CSS, Bootstrap, Jquery, Javascript, DOM Manipulation(primarily
          w/Jquery), Local Storage
        </p>
        <div class="firstProject">
          <a
            id="repoLink"
            href="https://github.com/Brady1052/Work-Day-Scheduler"
          >
            Click Here to see Repository
          </a>

          <a
            id="work-day-anchor"
            href="https://brady1052.github.io/Work-Day-Scheduler/"
          >
            <img
              id="workDayimg"
              src={workDayScheduler}
              alt="Work Day Scheduler"
            />
          </a>
        </div>
      </div>
      <br></br>
      {/* Employee Managment System Container */}
      <div id="emsContainer">
        <h1>Employee Management System</h1>
        <p>
          The Employee Management System allows users to create, add, and update
          employees, roles, and departments within a company. Click the image
          for a brief demonstration of the app.
        </p>
        <strong> Technologies used: </strong>
        <p>npm Inquirer, mySQL2, and Javascript</p>
        <div class="firstProject" />
        <a
          id="repoLink"
          href="https://github.com/Brady1052/Employee-Management-System"
        >
          Click Here to see Repository
        </a>
        <div>
          <a
            id="em-system-anchor"
            href="https://watch.screencastify.com/v/lqIrv81yhnMIpUErRmmc"
          >
            <img
              id="em_System"
              src={employeeManagementSystem}
              alt="Employee Management System"
            />
          </a>
        </div>
      </div>
      <br></br>
      <div id="noteTakerContainer">
        <h1>Note Taker</h1>
        <p>
          This application allows the user to add and save notes to the note
          taker.
        </p>
        <strong>Technologies used: </strong>
        <p>Express, Heroku, JSON</p>
        <div class="firstProject" />
        <a id="repoLink" href="https://github.com/Brady1052/Note-Taker">
          Click Here to see Repository
        </a>
        <div>
          <a
            id="note_taker_anchor"
            href="https://note-take-brady.herokuapp.com/"
          >
            <img id="note_taker" src={noteTaker} alt="Note Taker App" />
          </a>
        </div>
      </div>
    </div>
  );
}
