import React from 'react'

const Form = () => {
    return (
        <div id='form'>
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h4>Please Enter Your Email Below</h4></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h4>Short Message</h4></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
    )
}

export default Form
