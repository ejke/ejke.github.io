document.documentElement.className = document.documentElement.className.replace("no-js","js");

// load DOM first
document.addEventListener("DOMContentLoaded", function(event){
  console.log('dom is fully loaded');

// find menu element, make it variable
  var menu = document.getElementById("js_menu"),
      menuClasses = menu.classList,
      about = document.getElementById("js_about"),
      aboutClasses = about.classList;
// function: if has class, do this, other when does not
  function menuClick() {
    if (menuClasses.contains("x")) {
      menuClasses.remove("x");
      aboutClasses.add("display_no");
    } else {
      menuClasses.add("x");
      aboutClasses.remove("display_no");
    }
  }
// listen for clicks
  menu.addEventListener("click", menuClick);
});

