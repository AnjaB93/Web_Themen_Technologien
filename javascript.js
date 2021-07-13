//import sdk from "@stackblitz/sdk";
var myContainer = document.querySelectorAll("a[href='']");
for (var i = 0; i < myContainer.length; i++) {
  myContainer[i].style.opacity = 0.5;
  myContainer[i].style.pointerEvents = "none";
}
/*
sdk.embedProjectId("elementOrId", "angular-bv6kwg", {
  openFile: "src/app/heroes/heroes.component.html",
  hideNavigation: true,
});*/

/*
var myContainer = document.querySelectorAll("a[href$='#']");
for (var i = 0; i < myContainer.length; i++) {
  console.log(myContainer[i] + "hallo");
  myContainer[i].style.opacity = 0.5;
  
}*/

/*
var allElements = document.querySelectorAll("a");
for (var i = 0; i < allElements.length; i++) {
  var myContainer = allElements[i];
  if (myContainer.getAttribute("[href$='.html']")) {
    myContainer.style.opacity = 1;
  } else {
    myContainer.style.opacity = 0.5;
  }
}*/
