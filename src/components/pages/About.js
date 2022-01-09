import React from 'react';
import BootcampCertificate from '../../images/bootcampCertificate.png'

export default function About() {
  return (
    <div>
      <h1>Brady Buchholz</h1>
      <p>
      <img id="profilePicture"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQE7dZfiV8YYWA/profile-displayphoto-shrink_400_400/0/1641744534841?e=1647475200&v=beta&t=xK4_H4O3HG2g0Pfj3JKuzb8dOjVHadspKL79MWSx2TY"
        alt="Developer"/>
         <div>
        <h1 id="aboutmeheader">About Me</h1>
        <p id="pAboutMe">
          Full Stack Junior Web Developer leveraging a Psychology background to build a more intuitive user experience on the web. I recently earned a certificate in full stack development from the Ohio State University College of Engineering, with newly developed skills in HTML5, CSS3, JavaScript, Node Js, Express.js, React.js, Bootstrap, JQuery, Handlebars.js, MySQL,  and MongoDB. Known as a relentless pursuer of growth, betterment, and achievement. I have a passion for developing user focused apps that my team and I can be proud of. I’m excited to leverage my skills as part of a fast-paced, user-driven team to build better experiences for both web users and developers. Feel free to check out the portfolio section to see some of the projects I've worked on!
          
        </p>
        <img id='certificateImg' src={BootcampCertificate} alt='Bootcamp Certificate'/>
    </div>
      </p>
    </div>
  );
}
