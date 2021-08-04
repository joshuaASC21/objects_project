
let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        // Person #2
        firstName: "Joshua",
        lastName: "De La Cruz",
        heightFeet: "5",
        heighInches: "6",
        favoriteFood: "Mangu",
        favoriteColor : "Azure Blue",
        
    },
    2: {
        // Person #3
        firstName: "Bruce",
        lastName: "Wayne",
        heightFeet: "6",
        heighInches: "4",
        favoriteFood: "Pancakes",
        favoriteColor: "Black",
    },
    3: {
        // Person #4

        firstName: "William",
        lastName: "Wonka",
        heightFeet: "6",
        heighInches:"6",
        favoriteFood: "Chocalate",
        favoriteColor: "purple",
    },
}

let content = document.querySelector("#content");

let firstPerson = document.querySelector("#first");
let secondPerson = document.querySelector("#second");
let thirdPerson= document.querySelector("#third");
let fourthPerson = document.querySelector('#fourth');

firstPerson.onclick= function(event){
    let newDiv= document.createElement("div");
    let newText1 = document.createElement("p");
    let newText2= document.createElement("p");
    let newText3= document.createElement('p');
newText1.innerHTML = "My name is " + info[0].firstName + info[0].lastName + ".";
newText2.innerHTML = "I am " + info[0].heightFeet+ " Feet and " + info[0].heighInches + " inches tall.";  
newText3.innerHTML = "My favorite food is " + info[0].favoriteFood + " and my favorite color is " + info[0].favoriteColor;

newDiv.appendChild(newText1);
newDiv.appendChild(newText2);
newDiv.appendChild(newText3);

content.appendChild(newDiv);

newDiv.style.color= "white";
newDiv.style.fontSize= "50px";
newDiv.style.margin = "5% 20% 5% 20%"
newDiv.style.padding = "30px";
newDiv.style.border = "solid black 5px"
event.preventDefault();
}


secondPerson.onclick= function(event){
    let newDiv= document.createElement("div");
    let newText1 = document.createElement("p");
    let newText2= document.createElement("p");
    let newText3= document.createElement('p');
    event.preventDefault();

newText1.innerHTML = "My name is " + info[1].firstName + info[1].lastName + ".";
newText2.innerHTML = "I am " + info[1].heightFeet+ " Feet and " + info[1].heighInches + " inches tall.";  
newText3.innerHTML = "My favorite food is " + info[1].favoriteFood + " and my favorite color is " + info[1].favoriteColor;

newDiv.appendChild(newText1);
newDiv.appendChild(newText2);
newDiv.appendChild(newText3);

content.appendChild(newDiv);

newDiv.style.color= "white";
newDiv.style.fontSize= "50px";
newDiv.style.margin = "5% 20% 5% 20%"
newDiv.style.padding = "30px";
newDiv.style.border = "solid black 5px"
}


thirdPerson.onclick= function(event){
    let newDiv= document.createElement("div");
    let newText1 = document.createElement("p");
    let newText2= document.createElement("p");
    let newText3= document.createElement('p');
    event.preventDefault();

newText1.innerHTML = "My name is " + info[2].firstName + info[2].lastName + ".";
newText2.innerHTML = "I am " + info[2].heightFeet+ " Feet and " + info[2].heighInches + " inches tall.";  
newText3.innerHTML = "My favorite food is " + info[2].favoriteFood + " and my favorite color is " + info[2].favoriteColor;

newDiv.appendChild(newText1);
newDiv.appendChild(newText2);
newDiv.appendChild(newText3);

content.appendChild(newDiv);

newDiv.style.color= "white";
newDiv.style.fontSize= "50px";
newDiv.style.margin = "5% 20% 5% 20%"
newDiv.style.padding = "30px";
newDiv.style.border = "solid black 5px"
}


fourthPerson.onclick= function(event){
    let newDiv= document.createElement("div");
    let newText1 = document.createElement("p");
    let newText2= document.createElement("p");
    let newText3= document.createElement('p');
    event.preventDefault();

newText1.innerHTML = "My name is " + info[3].firstName + info[3].lastName + ".";
newText2.innerHTML = "I am " + info[3].heightFeet+ " Feet and " + info[3].heighInches + " inches tall.";  
newText3.innerHTML = "My favorite food is " + info[3].favoriteFood + " and my favorite color is " + info[3].favoriteColor;

newDiv.appendChild(newText1);
newDiv.appendChild(newText2);
newDiv.appendChild(newText3);

content.appendChild(newDiv);

newDiv.style.color= "white";
newDiv.style.fontSize= "50px";
newDiv.style.margin = "5% 20% 5% 20%"
newDiv.style.padding = "30px";
newDiv.style.border = "solid black 5px"
}

