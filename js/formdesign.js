$(document).ready(function() {
  /*removeClasses(); // Strip the button of all classes

  $(".btn").addClass("flat"); // Add a default class
*/
/*
    // var select = document.getElementById("theme-select");
    // var option = select.options[select.selectedIndex].text;
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
  function removeClasses() { 
    $(".btn").removeClass("flat");
    $(".btn").removeClass("rounded");
    $(".btn").removeClass("btn3d");
  }

  $("body").on("change", "#theme-select", function() {
    var theButtons = $(this).closest("fieldset").find(".btn");
    switch ($(this).val()){
      case "Rounded":
        removeClasses();
        theButtons.addClass("rounded");
      break;
      case "Flat":
        removeClasses();
        theButtons.addClass("flat");
      break;
      case "3D":
        removeClasses();
        theButtons.addClass("btn3d");
      break;
    }
  });
});
