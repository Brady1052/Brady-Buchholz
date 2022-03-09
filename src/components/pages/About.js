import React from 'react';
import BootcampCertificate from '../../images/bootcampCertificate.png'
import ProfessionalPhoto from '../../images/Professional_Photo.jpeg'

export default function About() {
  return (
    <div>
      <h1>Brady Buchholz</h1>
      <p>
      <img id="profilePicture"
       src={ProfessionalPhoto}
        alt="Developer"/>
         <div>
        <h1 id="aboutmeheader">About Me</h1>
        <p id="pAboutMe">
          My name is Brady Buchholz and I am a Full Stack Web Developer leveraging a Psychology background to build a more intuitive user experience on the web. I recently earned a certificate in full stack development from the Ohio State University College of Engineering, with newly developed skills in HTML5, CSS3, JavaScript, Node Js, Express.js, React.js, Bootstrap, JQuery, Handlebars.js, MySQL,  and MongoDB. I am known as a relentless pursuer of growth, betterment, and achievement. I have a passion for learning, and developing my skills as a developer. Web development and the exponential room for growth and potential within the field highly excites me. I'm excited to continue to grow as a developer and hopefully join a welcoming and passionate team! Feel free to check out the portfolio section to see some of the projects I've worked on.
          
        </p>
        <img id='certificateImg' src={BootcampCertificate} alt='Bootcamp Certificate'/>
    </div>
      </p>
    </div>
  );
}
