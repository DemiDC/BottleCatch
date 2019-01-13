// take the flow chart and number the possible outcomes.
// then reorder the items in video_files, video_titles and options according to the list items
// make sure the links and buttons are in the correct order of your case logic


var video_files=["/ZwDvSS58WoU","/oWSSxPIqFQ0","/jhLoQcw5iO8","/dWwc8sevzzo","/FNyVagkTEWM","/3DgbYrKrOo0","/Q1XdYl8IXxE","/4umUWjQ5geM","/pqvQEL5j6KI","/SO7S3M0VHaU","/0KoIGFaM1zM"];
var video_titles=["Get text","Going back to sleep","Saizeriya Bottle","Saizeriya","MonssterAttack02","MonsterAttack","Throwing Bottle Away","Litter","Keep Bottle","Buying Water","Bottle Decision"];
var options =[];

var item=false;

var answer;
var canvas = document.getElementById("video-player");
var button = document.getElementById("choice");

function main(){
    answer=document.getElementById('option').value;
    runLogic();
}

function writeOptions(position){
    button.innerHTML=options[position];
}

function renderVideo(position){
    canvas.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed'+ video_files[position]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function runLogic(){
    switch(answer){
        case 1:
            renderVideo(1);
            writeOptions(1);
        break;

        case 2:
            renderVideo(2);
            writeOptions(2);
        break;
        case 3:
            renderVideo(3);
            writeOptions(3);
        break;
        case 4:
            renderVideo(4);
            writeOptions(4);
        break;
        case 5:
            renderVideo(5);
            writeOptions(5);
        break;
        case 6:
            renderVideo(6);
            writeOptions(6);
        break;
        case 7:
            renderVideo(7);
            writeOptions(7);
        break;
        case 8:
            renderVideo(8);
            writeOptions(8);
        break;
        case 9:
            renderVideo(9);
            writeOptions(9);
        break;
        case 10:
            renderVideo(9);
            writeOptions(9);
        break;
        default:
            renderVideo(0);
            writeOptions(0);
        break;

    }
}







---------------------------------------------
    
let first = document.getElementByID("button1");
let second = document.getElementByID("button2");


function main(){
    choice = document.getElementByID(id);
    if(first === "Try going back to sleep") {
        document.getElementById("first").innerHTML = links[15]
    }
    else if(second === "Go to Saizeriya anyways") {
        document.getElementById("second").innerHTML = links[0]
    }
}


------------------------------------------------


['<div>
    <label for="First">Try going back to sleep</label><input type="checkbox" id = "First" onclick = "button1";>
    <label for="Second">Go to Saizeriya anyways</label><input type="checkbox"  id = "Second" onclick = "button2";>
</div>'

<button onclick="main();">
    Submit
</button>']
