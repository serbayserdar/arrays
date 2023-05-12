// const students = ["Kattu", "Teano", "Allan", "Bob"]
// console.log(students[1]);
// console.log(students[3]);

// students[3] = "Cliff";
// console.log(students)

// const user = ["Allan", 27 ,false, true];
// console.log(user[2]);


// console.log(students.length)





// const scores = [20, 60, 100, 88, 43];


// console.log("Before push()", scores);


// const newLength = scores.push(77, 13, 20);


// console.log("After push()", scores);


// console.log("The new length: ", newLength);




// const scores = [20, 60, 100, 88, 43];


// console.log("Before shift()", scores);


// const removedElement = scores.shift();


// console.log("After shift()", scores);

// console.log("The removed element is ", removedElement);

// console.log("Before unshift()", scores);


//  const newLength = scores.unshift(1, 90, 55);


// console.log("After unshift()", scores);

// console.log("The new length of the array", newLength)







//  const frontEndDevs = ["Barbara", "Chris"];
//  const backEndDevs = ["Bruno", "Dennis"];
//  const designers = ["Phil", "Philip"];

//  const developers = frontEndDevs.concat(backEndDevs);

//  const mimoTeam  = frontEndDevs.concat(backEndDevs, designers, "Allan");

//  console.log("Developers", developers);
//  console.log("Mimo Team", mimoTeam);

//  console.log("Front-end devs", frontEndDevs);
//  console.log("Back-end devs", backEndDevs);




// const mimoTeam = ['Barbara', 'Chris', 'Bruno', 'Dennis', 'Phil', 'Philip'];



// console.log("Before splice()", mimoTeam);

// mimoTeam.splice(3, 1);

// console.log("After splice()", mimoTeam);




// console.log("Before splice()", mimoTeam);

// mimoTeam.splice(2, 0, "Allan", "Cliff");

// console.log("After splice()", mimoTeam);




// console.log("Before splice()", mimoTeam);

// mimoTeam.splice(4, 1, "Allan")

// console.log("After splice()", mimoTeam);




const mimoTeam = ['Barbara', 'Chris', 'Bruno', 'Dennis', 'Phil', 'Philip'];




const backEndDevs = mimoTeam.slice(2, 4);
const frontEndDevs = mimoTeam.slice(0, 2);
const designers = mimoTeam.slice(4);

console.log("Backend devs", backEndDevs);

console.log("Frontend devs", frontEndDevs);

console.log("Designers", designers);

console.log(mimoTeam); 




