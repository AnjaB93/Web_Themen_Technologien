var myContainer = document.querySelectorAll("a .container-box");
for (var i = 0; i < myContainer.length; i++) {
  console.log(myContainer[i] + "hallo");
  myContainer[i].style.opacity = 0.5;
}
