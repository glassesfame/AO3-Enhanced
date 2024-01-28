console.log("Trigger Warnings")
const twButton = document.createElement("button"); 
const ul = document.getElementsByClassName("work navigation actions")[0];
const twResult = document.createElement("p");

twButton.id = "tw-button";
twButton.innerText = "Check for Trigger Warnings";
twResult.id = "tw-result";
twResult.innerText = "";

ul.appendChild(twButton);
ul.appendChild(twResult);
//document.body.appendChild(twButton);
//const twButton = document.getElementById("tw-button");
document.getElementById("tw-button").onclick = function(){
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
            if (text.includes("TW") || text.includes("CW") || text.includes("warning")){
                twResult.innerText += text;
            }
        }
    }
    if (twResult.innerText == ""){
        twResult.innerText = "No TW found!"
    }
}
