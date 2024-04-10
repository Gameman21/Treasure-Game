//quest vars
var elementHome = document.getElementById("startgame");
var elementQuest1 = document.getElementById("quest1");
var elementTreeChopped = document.getElementById("treechopped");


//quest death
function death() {
    alert("Wrong answer, this will not make u succeed your quests.");
    window.location.reload();
}

//start
function startGame(){
    elementQuest1.classList.toggle("show"); //show
    elementHome.classList.toggle("show"); //hide
}

//quest 1
function chopTree() {
    elementQuest1.classList.toggle("show") //hide
    elementTreeChopped.classList.toggle("show") //show
}

function leaveTree() {
    elementQuest1.classList.toggle("show") //hide
    elementTreeChopped.classList.toggle("show") //show
}

//quest 2

function woodenSword() {
    elementwoodensword.classList.toggle("show") //show
    elementTreeChopped.classList.toggle("show") //hide
}