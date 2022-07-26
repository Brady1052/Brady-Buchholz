import React from 'react';
import BootcampCertificate from '../../images/bootcampCertificate.png';
import ProfessionalPhoto from '../../images/Professional_Photo.png';

export default function About() {
  return (
    <div>
      <h1>Brady Buchholz</h1>
      <p>
        <img id="profilePicture" src={ProfessionalPhoto} alt="Developer" />
        <div>
          <h1 id="aboutmeheader">About Me</h1>
          <p id="pAboutMe">
            Passionate front end web developer with experience in taking web
            designs and developing them into beautiful UI{'('}s{')'}. I am a
            goal orientated team player who's focus is to deliver superior
            results. Additionally I am a big fan of the UFC, and Ohio State
            basketball. As well as both physical and mental health/ fitness! I
            encourage anybody interested to look through my projects page and
            contact me with any job opportunities!
            <div>
              <br></br>
              <span className="bold">Versed in:</span> React/Redux, Javascript,
              CSS, Git, API's, JQuery, HTML, and Bootstrap
            </div>{' '}
            <div>
              {' '}
              <span className="bold">Experience with: </span>Node js, Express,
              MySQL, GraphQL, MongoDB, and Working in Agile Environments
            </div>
            <div>
              <span className="bold"> Deployed sites to:</span> Heroku, GitHub
              Pages
            </div>
          </p>
          <img
            id="certificateImg"
            src={BootcampCertificate}
            alt="Bootcamp Certificate"
          />
        </div>
      </p>
    </div>
  );
}
