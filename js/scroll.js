function scrollToTarget(target) {
  var element = document.getElementById(target);
  element.scrollIntoView({behavior: "smooth", block: "start"});
}
