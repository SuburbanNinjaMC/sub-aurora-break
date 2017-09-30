javascript:
(function() {
  alert("break initialized");
  function subBreak() {
    var y = prompt("Set the timer for the break (in minutes)");
      var a = y * 60 * 1000;
      if (y == 0) {
        var a = 10 * 60 * 1000;
      }
      setTimeout(function(){ 
        for (var i = 0; i < 5; i++) {
			     alert("Break is over. Get back to work :)"); 
        }
      }, a);
  }
  document.onKeyPress = function(e) {
    if (e.keyCode == 74) {
      subBreak();
    }
  }
}());
