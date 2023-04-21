var ifile = "";
var ofile = "";
var startTime = "";
var endTime = "";
var audioonly = "";

var input_ifile = "";
var input_ofile = "";
var input_startTime = "";
var input_endTime = "";
var input_audioonly;


window.addEventListener('DOMContentLoaded', function(){
    input_ifile = document.getElementById("ifile");
    input_ofile = document.getElementById("ofile");
    input_startTime = document.getElementById("start");
    input_endTime = document.getElementById("end");
    input_audioonly = document.getElementById("audioonly");

    input_ifile.addEventListener("input",function(){generate(); });
    input_ofile.addEventListener("input",function(){generate(); });
    input_startTime.addEventListener("input",function(){generate(); });
    input_endTime.addEventListener("input",function(){generate(); });
    input_audioonly.addEventListener("change",function(){generate(); });

    console.log("あああ");
});

function generate(){
    console.log("いいい");

    ifile = input_ifile.value;
    ofile = input_ofile.value;
    startTime = input_startTime.value;
    endTime = input_endTime.value;
    audioonly = input_audioonly.checked;

    var [startHours, startMinutes, startSeconds] = startTime.split(':');
    var startSec = Number(startHours) * 60 * 60 + Number(startMinutes) * 60 + Number(startSeconds);

    var command = "";
    if (audioonly) {
        command = "ffmpeg -ss " + startSec + " -to " + endTime + " -i " + ifile + " -c copy " + ofile;
    } else {
        command = "ffmpeg -ss " + startSec + " -to " + endTime + " -i " + ifile + " " + ofile;
    }
    
    document.getElementById("generator").innerHTML = command;

}

