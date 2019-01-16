let video_files=["/ZwDvSS58WoU?&autoplay=1","/oWSSxPIqFQ0","/4hKIDNXEuk0","/V1BL_tt1ZAM","/HTjRevSJ2Qg","/UiAuOCgUUb8","/7ZzKfJVaf6Q","/SO7S3M0VHaU","/0KoIGFaM1zM","/4umUWjQ5geM","/Q1XdYl8IXxE","/pqvQEL5j6KI","/dWwc8sevzzo","/jhLoQcw5iO8","/3DgbYrKrOo0","/FNyVagkTEWM"];

let options=['<button style="height:30px" class="left-button" onclick="run(1)">Try going back to sleep?</button><button style="height:30px" class="right-button" onclick="run(4)">Go to Saizeriya anyways?</button>',
             '<button style="height:30px" class="left-button" onclick="run(2)">Next</button>',
             '<button style="height:30px" class="left-button" onclick="run(3)">Next</button>',
             '<button style="height:30px" class="left-button" onclick="run(5)">Listen to the Gypsy?</button><button style="height:30px" class="right-button" onclick="run(6)">STRANGER DANGER - RUN!</button>',
             '<button style="height:30px" class="left-button" onclick="run(7)">Next</button>',
             '<button style="height:30px" class="left-button" onclick="run(8)">Next</button>',
             '<button style="height:30px" class="left-button" onclick="run(9)">Throw bottle onto street?</button><button style="height:30px" class="align-items-center" onclick="run(10)">Throw bottle into bin?</button><button style="height:30px" class="right-button" onClick="run(11)">Keep bottle?</button>',
             '<button style="height:30px" class="left-button" onclick="run(12)">Next</button>', //die
             '<button style="height:30px" class="left-button" onclick="run(13)">Next</button>', //live
             '<button style="height:30px" class="left-button" onclick="run(15)"><b>Next</b></button>',//live
             '<button style="height:30px" class="right-button" onClick="run(14)"><b>Next</b></button>',//die
             '<button style="height:30px" class="align-items-center" onclick="run(10)">Throw bottle into bin?</button><button style="height:30px" class="right-button" onClick="run(11)">Keep bottle?</button>',
             '<h2>Bad Ending :(</h2><button style="height:50px" class="left-button" onClick="run(0)"><b>Play Again</b></button>',
             '<h2>Good Ending :)</h2>'
]
console.log('running');
let item=false;

function run(number){
    runLogic(number);
}

function writeOptions(position){
    let button = document.getElementById("button-area");
    button.innerHTML=options[position];
}

function renderVideo(position){
    let canvas = document.getElementById("video-container");
    canvas.innerHTML='<iframe width="960" height="450" src="https://www.youtube.com/embed'+ video_files[position]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    return;
}

function runLogic(answer){
    switch(answer) {
        case 0:
            renderVideo(0);
            writeOptions(0);
        break;
        case 1:
            renderVideo(1);
            writeOptions(1);
        break;
        case 2:
            renderVideo(2);
            writeOptions(2);
        break;
        case 3:
            renderVideo(4);
            writeOptions(3);
        break;
        case 4:
            renderVideo(3);
            writeOptions(2);
        break;
        case 5:
            renderVideo(5);
            writeOptions(4);
            break;
        case 6:
            renderVideo(6);
            writeOptions(4);
        break;
        case 7:
            renderVideo(7);
            writeOptions(5);
        break;
        case 8:
            renderVideo(8);
            writeOptions(6);
        break;
        case 9:
            renderVideo(9);
            writeOptions(11);
        break;
        case 10:
            renderVideo(10);
            writeOptions(7);
        break;
        case 11:
            renderVideo(11);
            writeOptions(8);
            item=true;
        break;
        case 12:
                renderVideo(12);
                writeOptions(10);
        break;
        case 13:
            renderVideo(13);
            writeOptions(9);

        break;
        case 14:
            renderVideo(14);
            writeOptions(12);
            break;
        default:
            renderVideo(15);
            writeOptions(13);
           break;

    }
}
