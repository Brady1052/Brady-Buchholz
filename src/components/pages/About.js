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
            I am currently enrolled in Ohio State's web development bootcamp program, and once finished will
            continue my education surrounding web development. I also have a BAS in Psychology from Ohio
            University.
            I plan on combining my fascination with Psychology, and passion for web development to become a
            leader in the web development workforce.
        </p>
        <img id='certificateImg' src={BootcampCertificate} alt='Bootcamp Certificate'/>
    </div>
      </p>
    </div>
  );
}
