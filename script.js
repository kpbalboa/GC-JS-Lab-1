let name = "Kevin Balboa";
let age = 22;
let birthday = "July 26";
let detroitGC = true;
let lifeEvents = [
  "I graduated with a bachelors in marketing",
  "I can cook pretty well and perfer my food to anyone else's",
  "I play basketball and was a point gaurd in highschool",
  "I am learning to DJ"
];

if ((detroitGC = true)) {
  console.log(
    "My name is " +
      name +
      "and I am a student at Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
} else {
  console.log(
    "My name is " +
      name +
      "and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
}
let i = 0;
while (i < 4) {
  console.log(lifeEvents[i]);
  i = i + 1;
}
randomNumber = Math.round(Math.random() * 9);
let counter = 0;
while (true) {
  if (randomNumber !== 5) {
    console.log(randomNumber + " !== 5");
    randomNumber = Math.round(Math.random() * 10 + 1);
    counter++;
  } else {
    counter++;
    console.log(
      "5===5. It took " +
        counter +
        " iterations to randomly generate the number 5."
    );
    break;
  }
}
