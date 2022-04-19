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
            I am a recent college graduate seeking a full time front end web
            development position. Recently I earned a certificate in full stack
            web development from The Ohio State University College of
            Engineering. The technologies taught in the bootcamp were HTML5,
            CSS3, JavaScript, Node js, Express, React js, Bootstrap, JQuery,
            MySQL, GraphQL, and MongoDB. I continue to grow my skills as a
            developer every day as web development is more than just a career
            path, but a hobby and passion of mine. I enjoy working on and
            learning web development on my own and continue to take courses, and
            work on projects every week. I encourage anybody interested in
            finding out more about my work to check out my project section.
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
