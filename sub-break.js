javascript:
(function() {
  alert("Break initialized. Press ` to get started.");
  console.log("CONSOLE: Sub Break Initialized");
  function subBreak() {
    var y = prompt("Set the timer for the break (in minutes)");
      var a = y * 60 * 1000;
      if (y == 0) {
        var a = 10 * 60 * 1000;
      }
      alert("Break Started. You have " + y + "minutes.");
      setTimeout(function(){ 
        for (var i = 0; i < 5; i++) {
			     alert("Break is over. Get back to work :)"); 
        }
      }, a);
  }
  document.onkeypress = function(e) {
    if (e.keyCode == 96) {
      subBreak();
    }
  }
}());
