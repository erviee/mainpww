// Create an object:
const root = {
    familyName: "Saiko Family",
    godFather: "Don Magnifico El",
};

const person1 = {
    firstName: "Dimah",
    lastName: "Saiko",
    age: "23",
    eyeColor: "dark brown",
};

const person2 = {
    firstName: "Juana",
    lastName: "Saiko",
    age: "21",
    eyeColor: "dark brown",
};

const person3 = {
    firstName: "Fiona",
    lastName: "Saiko",
    age: "22",
    eyeColor: "green",
};

const family = {
    surName: "Saiko Family",
    personality : "mysterious",
    image: "respected",
};
    // Display some data from the object:
    document.getElementById('father').innerHTML = 
    "<b>" + root.familyName + "</b>" + " is one of the royal family here in cavite, with " + "<b>" + root.godFather + "</b>" + " the GodFather of her 4 daughters." 

    document.getElementById('demo').innerHTML = 
    "Her first name is " + "<b>"  + person1.firstName + "</b> " + "<b>" + person1.lastName + ",</b>" + " she is " + "<b>" + person1.age + "</b>" + " and her eye color is " + "<b>"  + person1.eyeColor + "</b>" +  "."; 

    document.getElementById('demo2').innerHTML = 
    "Her first name is " + "<b>"  + person2.firstName + "</b>" + "<b> " + person1.lastName + ",</b>" + " she is " + "<b>" + person2.age + "</b>" + " and her eye color is " + "<b>"  + person2.eyeColor + "</b>" +  "."; 

    document.getElementById('demo3').innerHTML = 
    "Her first name is " + "<b>"  + person3.firstName + "</b>" + "<b> " + person3.lastName + ",</b>" + " she is " + "<b>" + person3.age + "</b>" + " and her eye color is " + "<b>"  + person3.eyeColor + "</b>" +  "."; 

    document.getElementById('demo4').innerHTML =
    "They are the most " + "<b>" + family.image + "</b>" + " and " + "<b>" + family.personality + ",</b>" + " family here in cavite because of their wealth and unexpected helps or donation from the poor."
