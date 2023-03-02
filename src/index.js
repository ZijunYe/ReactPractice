//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();
const time = currentTime.getHours;
let greeting;

//inline css
const customerCSS = {
  color: ""
};
if (time < 12) {
  greeting = "Good Morning!";
  customerCSS.color = "red";
} else if (time <= 18) {
  greeting = "Good Afternoon!";
  customerCSS.color = "green";
} else if (18 < time < 24) {
  greeting = "Good Night!";
  customerCSS.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customerCSS}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
