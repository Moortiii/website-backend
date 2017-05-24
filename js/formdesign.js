$(document).ready(function() {
  removeClasses(); // Strip the button of all classes

  $(".btn").addClass("flat"); // Add a default class

  function removeClasses() { // Makes it easy to remove all classes
    $(".btn").removeClass("flat");
    $(".btn").removeClass("rounded");
    $(".btn").removeClass("btn3d");
  }

  $("#theme-select").change(function() {
    var select = document.getElementById("theme-select");
    var option = select.options[select.selectedIndex].text;

    if(option == "Rounded") {
      removeClasses();
      $(".btn").addClass("rounded");
    } else if(option == "Flat") {
      removeClasses();
      $(".btn").addClass("flat");
    } else if(option == "3D") {
      removeClasses();
      $(".btn").addClass("btn3d");
    }
  })
})
