
"use strict";

const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (currentState === "green"){
    trafficLight.state = "orange";
    if (currentState === "orange"){
    trafficLight.state = "red";
if (currentState === "red"){
    rotations++;
    trafficLight.state = "green";
  }  
  }  
  } else {
    console.log("The traffic light stopped working.");
    break;
    }
  }

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/