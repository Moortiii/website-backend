$(document).ready(function() {
  removeClasses(); // Strip the button of all classes

  $(".btn").addClass("flat"); // Add a default class

  function removeClasses() { // Makes it easy to remove all classes
    $(".btn").removeClass("flat");
    $(".btn").removeClass("rounded");
    $(".btn").removeClass("btn3d");
  }

  $("body").on("change", "#theme-select", function() {
    var select = document.getElementById("theme-select");
    // var option = select.options[select.selectedIndex].text;
    switch ($(this).val()){
      case "Rounded":
        $(".btn").removeClass("flat").removeClass("btn3d").addClass("rounded");
      break;
      case "Flat":
        $(".btn").removeClass("rounded").removeClass("btn3d").addClass("flat");
      break;
      case "3D":
        $(".btn").removeClass("rounded").removeClass("flat").addClass("btn3d");
      break;
    }/*
    if(option == "Rounded") {
      removeClasses();
      $(".btn").addClass("rounded");
    } else if(option == "Flat") {
      removeClasses();
      $(".btn").addClass("flat");
    } else if(option == "3D") {
      removeClasses();
      $(".btn").addClass("btn3d");
    }*/
  });
});
