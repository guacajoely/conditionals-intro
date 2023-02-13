// 1.CHECK YOUR MATH

mathCheck = ( (6/2) >= 0 )

if (mathCheck == true){
  console.log("True fact!");
}
else {
  console.log("LIES!");
}

// 2. DOG PEOPLE VS. CAT PEOPLE

let likesDogs = true;

if (likesDogs == true){
  console.log("You're a dog person!");
}
else {
  console.log("You're a cat person!");
}


// 3.GREETINGS

let newObject = {
    name: "Robert",
    prefLang: "english",
  }
  
  if (newObject.prefLang === "spanish"){
    console.log("Hola, " + newObject.name)
  }
  
  else if (newObject.prefLang === "french"){
    console.log("Bonjour, " + newObject.name)
  }
  
  else {
    console.log("Hello, " + newObject.name)
  }

  // 4.STUDENT GRADES

let grade = 90;

if (grade < 70){
  console.log("You got an F")
}

else if (grade < 77){
  console.log("you got a D")
}

else if (grade < 85){
  console.log("you got a C")
}

else if (grade < 93){
  console.log("you got a B")
}

else {
  console.log("You got an A")
}
