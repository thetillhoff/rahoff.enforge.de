window.onload = function() {

  /* DIMMER */
  document.getElementById("overlay-loader").classList.add("hidden");

  /* BUTTONS */
  var buttonsByTag = document.getElementsByTagName("button");
  var buttonsByClass = document.getElementsByClassName("button");
  var buttons = [ ...buttonsByTag, ...buttonsByClass];
  for (var i = 0; i < buttons.length; i++) {
    console.log("found a button!");
  }
  
}

/* toggle navigation menu and page contents */
function togglePageNavigation() {
  if (document.getElementById("pageNavigation").classList.contains("hidden")) {
    document.getElementById("page").classList.add("hidden");
    document.getElementById("pageNavigation").classList.remove("hidden");
  } else {
    document.getElementById("pageNavigation").classList.add("hidden");
    document.getElementById("page").classList.remove("hidden");
  }
}