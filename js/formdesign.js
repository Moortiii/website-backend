$(document).ready(function() {
    function removeClasses(e) {
        e.closest("fieldset").find(".btn").removeClass("flat");
        e.closest("fieldset").find(".btn").removeClass("rounded");
        e.closest("fieldset").find(".btn").removeClass("btn3d");
        e.closest("td").find(".oneInclude").hide();
    }
    $("body").on("change", "#theme-select", function() {
        var theButtons = $(this).closest("fieldset").find(".btn");
        switch ($(this).val()) {
            case "Rounded":
                removeClasses($(this));
                theButtons.addClass("rounded");
                $("input[name='rounded-check']").closest(".oneInclude").show();
                break;
            case "Flat":
                removeClasses($(this));
                theButtons.addClass("flat");
                $("input[name='flat-check']").closest(".oneInclude").show();
                break;
            case "3D":
                removeClasses($(this));
                theButtons.addClass("btn3d");
                $("input[name='btn3d-check']").closest(".oneInclude").show();
                break;
        }
    });
    $("body").on("click", ".haveAnimations", function() {
        var theButtons = $(this).closest("td").find(".btn");
        if ($(this).prop("checked") === true) {
            $(this).attr("checked", "checked");
            $(this).prop("checked", true);
            theButtons.addClass("useAnimations");
        } else {
            $(this).removeAttr("checked");
            $(this).prop("checked", false);
            theButtons.removeClass("useAnimations");
        }
    });
    $("body").on("click", ".btn", function(e) {
        e.preventDefault();
        return false;
    });
  
});
