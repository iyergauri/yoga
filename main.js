function clean(movement) {
  return movement.replace(/_/g, " ")
}

$(document).ready(function () {
  const exercises = {
    plank: ["low_plank"],
    low_plank: ["upward_dog"],
    upward_dog: ["downward_dog"],
    downward_dog: ["threeLegDog"],
    threeLegDog: ["kneeToNose", "kneeToTricep", "lowLunge"],
    kneeToNose: ["threeLegDog", "lowLunge"],
    kneeToTricep: ["threeLegDog"],
    lowLunge: ["openTwist", "crescentLunge"],
    breathe: ["breathe", "tuckAndCurl"], 
    tuckAndCurl: ["forwardFold", "crow"],
  };

  let current = "downward_dog";
  let routine = [];

  while (routine.push(current) < 8) {
    if (exercises[current]) {
      possibleExercises = exercises[current];
      nextExerciseIndex = Math.trunc(Math.random() * possibleExercises.length);
      current = possibleExercises[nextExerciseIndex];
    } else {
      current = "breathe"
    }
  }

  let HTMLroutine = "";
  for (movement of routine) {
    textmvmt = clean(movement);
    HTMLroutine += `<div><p>${textmvmt}</p></div>`
  }
  $('#content').html(HTMLroutine);
});