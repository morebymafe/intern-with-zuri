//code for side nav menu
function openNav() {
    document.getElementById("nav-bar").style.width = "390px";
  };
function closeNav() {
    document.getElementById("nav-bar").style.width = '0';
  };

  function scrollUp() {
  window.scrollTo({
    top: 0, 
    left: 0,
    behavior: "smooth",
  })
}

//Code for change from dark mode to light mode
function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}