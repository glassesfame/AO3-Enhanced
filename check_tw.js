console.log("Trigger Warnings")
const twButton = document.createElement("button"); 
twButton.id = "tw-button";
twButton.innerText = "Check for Trigger Warnings";
document.body.appendChild(twButton);
//const twButton = document.getElementById("tw-button");
twButton.onclick = function(){
    return findTW();
}

function findTW(){
    const twResult = document.getElementById("tw-result");
    const notes = document.getElementsByClassName("notes module");
    //console.log(notes);
    for (var j=0; j<notes.length; j++){
        const p = notes[j].getElementsByTagName("p");
        console.log(p)
        for(var i = 0; i < p.length; i++){
            const text = p[i].innerText
            if (text.includes("TW") || text.includes("CW")){
                twResult.innerText += text;
            }
        }
    }
    if (twResult.innerText == ""){
        twResult.innerText = "No TW found!"
    }
}

console.log("Toggle Images On and Off");


function imageManagement(x) {

    userDocs = document.querySelectorAll('[class="userstuff"]'); // need to get the areas in which there are user control
    for (let docs of userDocs) { // looping through the different areas
        let imageList = docs.getElementsByTagName('img'); // getting the images in those areas
        for (let image of imageList) { // acting on each of those images individually
            decideAndAct(image, x);
        };
    };
};

function decideAndAct(image, x) {
    // if x is odd, then we are hiding; if x is even, then we will show.
    console.log(x)
    if (x % 2 == 0) {
        show(image);
        textBubble = 'Hide Images';
    } else {
        console.log(image)
        hide(image);
        textBubble = 'Show Images';  
    };
    
};


// the action functions that we can take:
function show(image) { 
    image.style.display = 'inline';
};

function hide(image) { 
    image.style.display = 'none';
};


// the button and going forward
x = 1;

const imgButton = document.createElement("button"); 
imgButton.id = "img-button";
imgButton.innerText = 'Hide Images';
document.body.appendChild(imgButton);

imgButton.onclick = function(){
    imageManagement(x);
    imgButton.innerText = textBubble;
    x = x + 1;
};