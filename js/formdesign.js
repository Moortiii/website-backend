$(document).ready(function() {
    function removeClasses() {
        $(".btn").removeClass("flat");
        $(".btn").removeClass("rounded");
        $(".btn").removeClass("btn3d");
    }
    $("body").on("change", "#theme-select", function() {
        var theButtons = $(this).closest("fieldset").find(".btn");
        switch ($(this).val()) {
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
