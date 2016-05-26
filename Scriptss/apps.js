//Main JavaScript File
//This is a global scope
//IIFE Imemediately Inovked Function Expression
// Structure, Style/presentation, Behaviour
 console.log("Welcome !"); 
function writeToFirstParagraph () {
    //to debugg only
    console.log("Executing writeToFirstParagraph")
    //creating a reference to index.html <p> with an id of "secondParagraph"
    var firstParagraph = document.getElementById("firstParagraph");
    if (firstParagraph == null)
        return;
    firstParagraph.textContent = "These are my websites I began my journey with.";
}

function writeToSecondParagraph () {
    //to debugg only
    console.log("Executing writeToSecondParagraph")
    //creating a reference to index.html <p> with an id of "secondParagraph"
    var secondParagraph = document.getElementById("secondParagraph");
    secondParagraph.textContent = "My name is Hassan Kobeissi, and my personal mission is to learn how to professionally equip chopsticks.";
}

function myfunc (){ 
    "Use Strict";
      
    //codes in here
/*Console.log("App Started...");
var firstParagraph = document.getElementById("firstParagraph");
firstParagraph.textContent =  "";
   //declare named function
function writeToFirstParagraph() {
    //for debugging only
    console.log("Executing writeToFirstParagraph")
    //create a reference to a p element with an id of "firstParagraph
    var firstParagraph = document.getElementById("firstParagraph");
    firstParagraph.textContent = "My name is Hassan Kobeissi, I'm a Software Engineer at Centennial College.";
}*/
//declare a variable that's pointing towards an anonymous function.

}

writeToFirstParagraph();
writeToSecondParagraph();
