function clean(movement) {
  return movement.replace(/_/g, " ")
}

$(document).ready(function () {
  const exercises = {
    plank: ["low_plank"],
    low_plank: ["upward_dog"],
    upward_dog: ["downward_dog"],
    breathe: ["breathe"]
  };

  let current = "plank";
  let routine = [];

  while (routine.push(current) < 5) {
    if (exercises[current]) {
      current = exercises[current][0];
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