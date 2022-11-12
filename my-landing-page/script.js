const profPic = document.getElementById("this-pic");

function makeBig(){
    profPic.classList.add('playing');
}

function regularSize(){
    profPic.classList.remove('playing');
}

profPic.addEventListener('mouseover', makeBig);
profPic.addEventListener('mouseout', regularSize);