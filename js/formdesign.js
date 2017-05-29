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
  $("body").on("click", ".haveAnimations", function(){
    var theButtons = $(this).closest("td").find(".btn");
  if ($(this).prop("checked") === true){
      $(this).attr("checked", "checked");
      $(this).prop("checked", true);
      theButtons.addClass("useAnimations");
    }else{
      $(this).removeAttr("checked");
      $(this).prop("checked", false);
      theButtons.removeClass("useAnimations");
    }
  });
  $("body").on("click", ".btn", function(e){
    console.log($(this).attr("class"));
    e.preventDefault();
    return false;
    console.log($(this).attr("class"));
  });
});
