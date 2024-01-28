console.log("Content script is running on this page.");

function bookmarkEffect(boole) {
    const bookmarks = document.getElementsByClassName("bookmark index group")[0]; // take the first index from the element
    let bookmarkList = bookmarks.querySelectorAll('[role="article"]'); // this gives us a list of bookmarks
    for (let bookmark of bookmarkList) {

        let complete = bookmark.querySelectorAll('[class="complete-yes iswip"]');
        console.log(complete);

        if (complete.length == boole) {
            bookmark.remove();
        };
    };
};

const complete = document.createElement("button"); 
complete.id = "complete-button";
complete.innerText = "Sort for completed works";
document.body.appendChild(complete);
complete.onclick = function() {
    return bookmarkEffect(0);
};

const incomplete = document.createElement("button"); 
incomplete.id = "incomplete-button";
incomplete.innerText = "Sort for incomplete works";
document.body.appendChild(incomplete);
incomplete.onclick = function() {
    return bookmarkEffect(1);
};