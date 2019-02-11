//Do nothing
// get the buttons by id
//let speedup = document.getElementById('speedup').value;
//let speeddown = document.getElementById('speeddown').value;
//let rewind = document.getElementById('rewind').value;
let apply = document.getElementById('apply');
// alert("you aint got the juice like that");
if(localStorage.getItem("speedup") != null)
{
  document.getElementById('speedup').value = localStorage.getItem("speedup");
}
else
{
  document.getElementById('speedup').value = 0.1;
}

if(localStorage.getItem("speeddown") != null)
{
  document.getElementById('speeddown').value = localStorage.getItem("speeddown");
}
else
{
  document.getElementById('speeddown').value = 0.2;
}

if(localStorage.getItem("rewind") != null)
{
  document.getElementById('rewind').value = localStorage.getItem("rewind");
}
else
{
  document.getElementById('rewind').value = 15;
}

if(localStorage.getItem("forward") != null)
{
  document.getElementById('forward').value = localStorage.getItem("forward");
}
else
{
  document.getElementById('forward').value = 15;
}


// apply.addEventListener('onclick', function(){
//   alert("I was clicked");
//   localStorage.setItem("speedup", document.getElementById('speedup').value);
//   localStorage.setItem("speeddown", document.getElementById('speeddown').value);
//   localStorage.setItem("rewind", document.getElementById('rewind').value);
//   localStorage.setItem("forward", document.getElementById('forward').value);
// });
let speedup = document.getElementById('speedup').value;
let speeddown = document.getElementById('speeddown').value;
let rewind = document.getElementById('rewind').value;
let forward = document.getElementById('forward').value;
browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {su: speedup, sd: speeddown, fw: forward, rw: rewind}, function(response) {
    //alert(response.farewell);
  });
});


apply.onclick = () => {
  speedup = document.getElementById('speedup').value;
  speeddown = document.getElementById('speeddown').value;
  rewind = document.getElementById('rewind').value;
  forward = document.getElementById('forward').value;
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {su: speedup, sd: speeddown, fw: forward, rw: rewind}, function(response) {
        //alert(response.farewell);
    });
});

  localStorage.setItem("speedup", document.getElementById('speedup').value);
  localStorage.setItem("speeddown", document.getElementById('speeddown').value);
  localStorage.setItem("rewind", document.getElementById('rewind').value);
  localStorage.setItem("forward", document.getElementById('forward').value);

  // browser.tabs.insertCSS({code: "body { background: aliceblue !important; }"});
};