link: https://www.w3schools.com/jsref/met_win_settimeout.asp 

// The setTimeout() method calls a function or evaluates an expression after
//  a specified number of milliseconds.
// Tip: 1000 ms = 1 second.
// Tip: The function is only executed once. If you need to repeat execution, 
// use the setInterval() method.
// Tip: Use the clearTimeout() method to prevent the function from running.

//Syntax****************
// setTimeout(function, milliseconds, param1, param2, ...)


//simple example of setTimeout function
//es5 style
// function lol() {
//     setTimeout(function(){  console.log('hello'); }, 3000);}
// lol()

//es6 style example'
// const fun=()=>{
//     console.log('start');
//     setTimeout(()=>{console.log('first');},5000);
//     setTimeout(()=>{console.log('second');},2000);
//     setTimeout(()=>{alert('end time');},7000);
// }
// fun()



// more complex button and asuchonus example*******************
// function timedText() {
//     var x = document.getElementById("txt");
//     setTimeout(function(){ x.value="2 seconds" }, 2000);
//     setTimeout(function(){ x.value="4 seconds" }, 4000);
//     setTimeout(function(){ x.value="6 seconds" }, 6000);
//   }
// <button onclick="timedText()">Display timed text</button>
// <input type="text" id="txt"></input>



//Click the button to open a new window and close the window 
//after three seconds (3000 milliseconds)
{/* <button onclick="openWin()">Open "myWindow"</button>

<script>
function openWin() {
  var myWindow = window.open("", "myWindow", "width=200, height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
  setTimeout(function(){ myWindow.close() }, 3000);
}
</script> */}




// const fn=()=>{console.log('mahmud');}
// setTimeout(fn,3000)