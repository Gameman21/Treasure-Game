//quest vars
var elementHome = document.getElementById("startgame");
var elementQuest1 = document.getElementById("quest1");
var elementEndMSG = document.getElementById("endmsg");

// quest 1
var elementStudyMapPath = document.getElementById("studymappath");
var elementAskOriginsPath = document.getElementById("askoriginspath");
var elementIgnoreMapPath = document.getElementById("investigatepathpath");

//study map path
var elementFollowPathPath = document.getElementById("followpathpath");
var elementOtherPathPath = document.getElementById("otherpathpath");
var elementInvestigatePathPath = document.getElementById("investigatepathpath");

//ask origins path
var elementNarrowPathPath = document.getElementById("narrowpathpath");
var elementOvergrownPathPath = document.getElementById("overgrownpathpath");


//quest death
function endmsg() {
    window.location.href = "endmsg.html";
}

//start
function startGame(){
    elementQuest1.classList.toggle("show"); //show
    elementHome.classList.toggle("show"); //hide
}

//quest 1
function studyMap() {
    elementStudyMapPath.classList.toggle("show") //show
    elementQuest1.classList.toggle("show") //hide
}

function askOrigins() {
    elementQuest1.classList.toggle("show") //hide
    elementAskOriginsPath.classList.toggle("show") //show
}

function ignoreMap() {
    elementQuest1.classList.toggle("show") //hide
    elementIgnoreMapPath.classList.toggle("show") //show
}

// Study Map Path

function followpath() {
    elementStudyMapPath.classList.toggle("show") //hide
    elementFollowPathPath.classList.toggle("show") //show
}

function otherpath() {
    elementStudyMapPath.classList.toggle("show") //hide
    elementOtherPathPath.classList.toggle("show") //show
}

function investigatepath() {
    elementStudyMapPath.classList.toggle("show") //hide
    elementInvestigatePathPath.classList.toggle("show") //show
}

// ask origins path

function narrowpath() {
    elementAskOriginsPath.classList.toggle("show") //hide
    elementNarrowPathPath.classList.toggle("show") //show
}

function overgrownpath() {
    elementAskOriginsPath.classList.toggle("show") //hide
    elementOvergrownPathPath.classList.toggle("show") //show
}