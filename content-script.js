console.log("Content script is running on this page.");

function bookmarkEffect(boole) {
    
    const bookmarks = document.getElementsByClassName("bookmark index group")[0]; // take the first index from the element
    let bookmarkList = bookmarks.querySelectorAll('[role="article"]'); // this gives us a list of bookmarks
    for (let bookmark of bookmarkList) {

        let complete = bookmark.querySelectorAll('[class="complete-yes iswip"]');
       
        //1 = complete 0 = incomplete because of the list length 
        if (complete.length == boole) {
            bookmark.remove();
        }
    }
}

const dl = document.getElementsByClassName("more group")[0].getElementsByTagName("dl")[0];
const dt = document.createElement("dt");
//dt.id = "toggle_work_complete";
//dt.class = "filter-toggle status expanded";
dt.setAttribute("id","toggle_work_complete");
//dt.setAttribute("class","filter-toggle status collapsed")

const complete = document.createElement("button"); 
complete.type = "button";
complete.id = "complete";
complete.innerText = "Completion Status";

dt.appendChild(complete);
dl.appendChild(dt);
document.getElementById("complete").setAttribute("class","expander");

const COMP_TYPE = ["Complete works only", "Works in progress only"];
const COMP_VAL = ["T","F"];
const COMP_ID = ["work_search_complete_t", "work_search_complete_f"];
const COMP_CLICK = [];

const ul = document.createElement("ul");

for (var i=0; i<COMP_TYPE.length; i++){
    let li = document.createElement("li");

    let label = document.createElement("label");
    label.setAttribute("for",COMP_ID[i]);
    //label.for = COMP_ID[i];

    let input = document.createElement("input");
    input.type = "radio";
    input.value = COMP_VAL[i];
    input.name = COMP_ID[0];
    input.id = COMP_ID[i];

    const span = document.createElement("span");
    span.setAttribute("class", "indicator");
    //span.class = "indicator";

    const span2 = document.createElement("span");
    span.innerText = COMP_TYPE[i];

    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(span2);
    li.appendChild(label);
    ul.appendChild(li);
}

const dd = document.createElement("dd");
dd.setAttribute( "work_complete","expandable");
dd.appendChild(ul);

const filter = document.createElement("button"); 
filter.id = "filter";
filter.innerText = "Filter for Completion";
filter.type = "button";
//filter.onclick = 'history.go(0)';

dl.appendChild(dd);
dl.appendChild(filter);

document.getElementById("filter").onclick = function(){
    return filter_completion();
}

console.log(document.getElementById("filter").onclick);

function filter_completion(){
    console.log(document.getElementById(COMP_ID[0]).checked);
    if (document.getElementById(COMP_ID[0]).checked)
        return bookmarkEffect(0);
    else if (document.getElementById(COMP_ID[1]).checked){
        return bookmarkEffect(1);
    }
}
