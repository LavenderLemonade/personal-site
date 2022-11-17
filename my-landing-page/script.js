const profPic = document.getElementById("this-pic");

function makeBig(){
    profPic.classList.add('playing');
}

function regularSize(){
    profPic.classList.remove('playing');
}

profPic.addEventListener('mouseover', makeBig);
profPic.addEventListener('mouseout', regularSize);


let newArray = [1,2,3,4];

function myArray(x)
{
    x.forEach((thing)  => {console.log(thing)});

}

myArray(newArray);