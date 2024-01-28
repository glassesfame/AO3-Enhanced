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
