
const twButton = document.createElement("button"); 
const ul = document.getElementsByClassName("work navigation actions")[0];
const popuptext = document.createElement("div");

twButton.id = "tw-button";
twButton.innerText = "Check for Trigger Warnings";
twButton.style.position = "relative"; 
twButton.style.display = "inline-block";
twButton.style.cursor = "pointer";

popuptext.id = "my-popup";;
popuptext.setAttribute("class","popuptext");
popuptext.style.visibility = "hidden"; 
popuptext.style.textWrap = "wrap";
popuptext.style.backgroundColor = "#900"; 
popuptext.style.color = "#fff";
popuptext.style.textAlign = "center";
popuptext.style.borderRadius = "6px";
popuptext.style.padding = "8px 0";
popuptext.style.position = "absolute";
popuptext.style.bottom = "fit-content";
popuptext.style.left = "50%";
popuptext.style.marginLeft = "-80px";

twButton.appendChild(popuptext);
ul.appendChild(twButton);

//document.body.appendChild(twButton);
//const twButton = document.getElementById("tw-button");
document.getElementById("tw-button").onclick = function(){
    return findTW();
}

function findTW(){
    var popup = document.getElementById("my-popup");
    if (popup.style.visibility == "hidden"){
        popup.style.visibility = "visible";
    }
    else  popup.style.visibility = "hidden";
    //popup.classList.toggle("show");

    const notes = document.getElementsByClassName("notes module");
    popup.innerText = "No TW found!"
    for (var j=0; j<notes.length; j++){
        const p = notes[j].getElementsByTagName("p");
        for(var i = 0; i < p.length; i++){
            const text = p[i].innerText
            if (text.includes("TW") || text.includes("CW") || text.includes("warning")){
                if (popup.innerText == "No TW found!") {
                    popup.innerText = "";
                }
                popup.innerText += text;
            }
        }
    }
}

function createButton(theID, buttonText) {

    const name = document.createElement("button"); 
    name.id = theID;
    name.innerText = buttonText;
    ul.appendChild(name);

    return name;

}

function imageManagement(x) {
    userDocs = document.querySelectorAll('[class="userstuff"], [class="userstuff module"]'); // need to get the areas in which there are user control
    for (let docs of userDocs) { // looping through the different areas
        console.log(docs)
        let imageList = docs.getElementsByTagName('img'); // getting the images in those areas
        console.log(imageList)
        for (let image of imageList) { // acting on each of those images individually
            console.log(image);
            decideAndAct(image, x);
        }
    }
}

function decideAndAct(image, x) {
    // if x is odd, then we are hiding; if x is even, then we will show.
    console.log(x);
    if (x % 2 == 0) {
        show(image);
        textBubble = 'Hide Images';
    } else {
        console.log(image);
        hide(image);
        textBubble = 'Show Images';  
    }
}


// the action functions that we can take:
function show(image) { 
    image.style.display = 'inline';
}

function hide(image) { 
    image.style.display = 'none';
}


// the button and going forward
x = 1;
textBubble = "Hide Images";
imgButton = createButton("img-button", textBubble);
imgButton.style.display = 'inline';

imgButton.onclick = function(){
    imageManagement(x);
    imgButton.innerText = textBubble;
    x = x + 1;
}
