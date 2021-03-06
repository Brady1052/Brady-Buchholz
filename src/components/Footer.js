import React from 'react';
const Footer = () => {
  return (
    <div id="logos">
      <br></br>
      <a href="https://www.linkedin.com/in/bradybuchholz/">
        {' '}
        <img
          id="LinkedIn"
          src="data:image/png;base64,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"
          alt="LinkedIn Logo"
        />{' '}
      </a>
      <a href="https://github.com/Brady1052?tab=repositories">
        <img
          id="GitHub"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFQQUnNGFvzOpaV2bTVmfgKdbdPJhM2JhmA&usqp=CAU"
          alt="GitHub Logo"
        ></img>{' '}
      </a>
      <a href="https://www.facebook.com/brady.buchholz?sk=wall&notif_id=1635595155650977&notif_t=wall&ref=notif">
        <img
          id="facebook"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU7V53///8yUZrf5O8jR5aDkr45VZwrTJhFYaTY3eo1U5tqfbNOZqb4+vzJ0ONkebCtuNSJmMFBXaDq7fS7w9t8jbuNnMKksM/l6fLb4OzS1+fGzeC9xdyzvNegrM2TocZbcatwg7Xw8/hUa6kfRZUGOpHhj9NWAAAEF0lEQVR4nO3d6XKbMBSGYSGIJOQYMLbxltRL0vu/xXqJm3baYAER50jzvX8yk5kQnjG7AIvko6IpaxFLdTkr7jBx+1GZTFpFPWPflrIyM9UfwrTU8ejuKV2md2FuJPXseEma/CZMIwUKYU16FZaxAs+fYnkRVpp6Pjymq7PQxLeR+UyZRGwz6rnwWlaIJt618JJsRGmpZ8JrthR1zKvheUWM51AUIYQQQgghhBBCCPnt80KZUpFdNFNWaq3l74ud6vyLy28uSSlt2F51ppjJbLUo8nT+0TpNN/m22L28rn7sZ8vJ4VnoQIc9ldbPs0U6TdqbTk/rraGe2R5JfVilD3CfyufQPkSlbePMC1CotFk9WjZDFipZd/QFJlT6ad3RF5ZQml1nX1BCfTz1AIYjVNm+jy8gYVb1AwYj1C89gaEI9WtfYCBCveoNDEOoZ/2BQQjtoetxTGhC2f1AJiyh7rufCEVoD4OAAQj1JnKhfBoGZC9Utsv5fIjCwR8hd6GS28iFcjIUyF044Ig7DKGq55EL5XIwkLlQL2IXqkHH3AEI1cBD0luchbLbme9pnW+Lf9pxHnvqsBrOF8u32t5HR/+KWtGWdD2t2CyvI8GMF8evcrvIPW20DBB3zr65ASeBDmSfhUcn4ZH1mtaa26a0CvjRQafrwNMQty/3nHYWr+Euo0JkLgOik5Cf/swczu9P1DM5qCx/LMxDXkhF5nBI8xK20OFC4ip64T7kDY2TcBa98AlC1kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5F4dQtfTuJGybAodHu01L0uVqYusULtEa7fBbDx+1ob0oPoJwF72Q+BXIIwiJBzZGEB6jF77RviHYv3BK6htDOCceQfUvzInvJ/Iv3EUvpB7n9y+kHgX3L5wQv07ev5D6Nnbvwin1+aF34Zr6hiLvwm30wkX0wh/RC5fUl+K8C8m/XcW7kHp36F1If4+0b+GG/Gkh38KCelPqXUj/MIZv4T56Ifnu0LuQfHfoW8jgMW7Pwjm1z7swJ98d+hYSj6xdUmWaf93W4TVt65a/33B4oEb97wH6ez8dRrmX7y0TYABsz+1OBeq5HFIcd5u0BSGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgg7VNO8ImQsoaoF0at6xhLaUjQ0C/tYQtmILc0ro8cSZoVIaL7oYyShMokg+pKIkYS6OguTkmJNHEcoy+QiTA3B5nQUoTXpVZjkZvxPcQyhNHlyEyZpqcfe3PgXKl1e/4e4TawyWtoxlX6FykptqttUxH1yRVPW30l4kF9hXTbFfSq/AEUxTy1Jf882AAAAAElFTkSuQmCC"
          alt="FaceBook Logo"
        ></img>{' '}
      </a>
    </div>
  );
};

export default Footer;
