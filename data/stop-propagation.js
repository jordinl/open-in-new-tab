var links = document.getElementsByTagName("a");
var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    if((isMac && e.metaKey) || (!isMac && e.ctrlKey)) {
      e.stopPropagation();
    }
  });
}
