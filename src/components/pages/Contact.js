import React from 'react';
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn_Logo.png'
export default function Contact() {
  return (
    <div>
        <h1>Phone Number:</h1>
        <p id="phoneNumber">(614) 586-3474</p>
        <h1>Email Address:</h1>
        <a href='mailto:bradybuchholz.dev@gmail.com' id="emailAddress">BradyBuchholz.dev@gmail.com</a><br></br>
<br></br>
<h1>GitHub</h1>
      <a href='https://github.com/Brady1052' target='_blank' rel='noreferrer'><img src={GitHub} id='gitHub'  alt='GitHub Profile'></img></a>
<div>
  <h1 id='linkedInh1'>LinkedIn</h1>
      <a href='https://www.linkedin.com/in/brady-buchholz-032b3a221/' target='_blank' rel='noreferrer'><img src={LinkedIn} id='linkedIn'  alt='LinkedIn Profile'></img></a>
      </div>
    </div>

  );
}
