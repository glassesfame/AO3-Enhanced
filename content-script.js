console.log("Content script is running on this page.")

const complete = document.createElement("button"); 
complete.id = "complete-button";
complete.innerText = "Sort for completed works";
document.body.appendChild(complete);

const incomplete = document.createElement("button"); 
incomplete.id = "incomplete-button";
incomplete.innerText = "Sort for incomplete works";
document.body.appendChild(incomplete);