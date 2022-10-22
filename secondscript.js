document.getElementById("my-name").innerHTML = " Changed Up!";

document.getElementsByClassName("in-there")[0].innerHTML = "Boo!";

function MouseOver(){
    document.getElementsByClassName("in-there")[0].style.color = "red";
}

function MouseOut(){
    document.getElementsByClassName("in-there")[0].style.color = "black";
}

