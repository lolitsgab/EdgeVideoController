

let speed = 1;

window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler

slower = 65; // a key
faster = 83; // s key
back = 90; // z key
skip = 88; // x key
let speedup = .2;
let speeddown = .2;
let rewind = 10;
let forward = 10;

function doKeyPress(e){

    if (e.keyCode == slower){ 
      //console.log(parseFloat(localStorage.getItem("speeddown")));
      if(speed - speeddown > 0){
        speed = speed - speeddown;
        document.querySelector('video').playbackRate = speed;
      }
      console.log(speed);
    }else if (e.keyCode == faster){ 
      speed = speed + speedup;
      console.log(speed);
      document.querySelector('video').playbackRate = speed;
    }else if (e.keyCode == back){ 
      document.querySelector('video').currentTime -= rewind;
    }else if (e.keyCode == skip){ 
      document.querySelector('video').currentTime += forward;
    }
}

browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.su);
        speedup = parseFloat(request.su);
        speeddown = parseFloat(request.sd);
        forward = parseInteger(request.fw);
        rewind = parseInteger(request.rw);

        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
});