$('a[href="#"]').click(function(e) {
    e.preventDefault();
    return false;
});

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value; }

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) { c_start = c_value.indexOf(c_name + "="); }
    if (c_start == -1) { c_value = null; } else { c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) { c_end = c_value.length; }
        c_value = unescape(c_value.substring(c_start, c_end)); }
    return c_value; }

function delCookie(name) { document.cookie = name + '=; expires=' + time() + (10 * 365 * 24 * 60 * 60) + ';'; }
if (localStorage.getItem("bs-account") == "account") {
    $(".ac-account").attr("checked", "checked");
    $(".ac-account").prop("checked", true);
}
$(".show-createSite, .cancel-createSite").click(function() {
    $(".createSite").toggle();
    $(".site-buttons").toggle();
    if ($(".show-createSite:visible")) {
        $("input[name='siteName'").focus();
    } else {

    }
    this.blur();
});

function guidGenerator() {
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function isHTML(str) {
    var a = document.createElement('div');
    a.innerHTML = str;
    for (var c = a.childNodes, i = c.length; i--;) {
        if (c[i].nodeType == 1) return true;
    }
    return false;
}
var suggestionArray = [];

function createSuggestions(e) {
    suggestionArray = [];
    $(".sitecreation").each(function() {
        if (e == $(this).find(".loadedSiteName").val()) {

        } else {
            suggestionArray.push($(this).find(".loadedSiteName").val());
        }
    });
}

function createSite() {
    $(".massedit").show();
    $('html,body').animate({
            scrollTop: $(".sites-section").offset().top
        },
        'slow');
    if ($(".show-createSite:visible")) {
        $(".site-buttons").toggle();
        $(".createSite").toggle();
    } else {

    }
    if ($(".massedit").hasClass("iamcur")) {
        $(".massedit").click();
    }
    var uniqueid = guidGenerator();
    var theSiteName;
    if (!$("input[name='siteName']").val()) {
        theSiteName = "New site";
    } else {
        theSiteName = $("input[name='siteName']").val();
    }
    var theTheme = $("select[name='siteTheme']").val();
    $(".saveSiteButton").click();
    $(".main .sitesCont").prepend("<div class='section sitecreation' style='display:none;'><header class='tools'><input type='checkbox' class='mark' name='mark-" + uniqueid + "' /><i class='fa fa-window-close-o before toolsi'></i> <span>Discard site? <a href='#' class='yesClose'>Yes</a></span><em>" + theSiteName + "</em><bp-pagename></bp-pagename><bp-activeicons></bp-activeicons></header><div class='" + uniqueid + "'></div></div>");
    $("div[class='" + uniqueid + "']").load("templates/siteCreation.php", { name: theSiteName, theme: theTheme }, function() {
        $("input[name='siteName']").val("");
        $("." + uniqueid).parent().slideDown(150);
        $("." + uniqueid + " .loadedSiteName").focus();
        if (!$('.sitesCont').html().replace(/\s+/g, '').length) {
            $(".massedit").hide();
        } else {
            $(".massedit").show();
        }
    });
}
$("body").on("click", ".previewThemes", function(e) {
    e.preventDefault();
    $(".thPu").remove();
    var whichTheme = $(this).closest("td").find("select").val();
    $(".themePopUp").prepend("<div class='thPu'><div></div></div>");
    $(".thPu div").load("templates/themes.php", { themeName: whichTheme }, function() {
        $(".thPu").fadeIn(150);
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
    return false;
});
$("body").on("click", ".thPu", function(e) {
    if (e.target == this) {
        $(this).fadeOut();
    }
});
$("body").on("change", "select", function(e) {
    $(this).attr("value", $(this).val());
    $(this).find("option").removeAttr("selected");
    $(this).find("option[value='" + $(this).val() + "']").attr("selected", "selected");
});
$("body").on("click", "header.tools .toolsi", function() {
    $(this).next("span").animate({ width: 'toggle' }, 100);
    if ($(this).hasClass("fa-window-close-o")) {
        $(this).removeClass("fa-window-close-o");
        $(this).addClass("fa-angle-left");
    } else {
        $(this).addClass("fa-window-close-o");
        $(this).removeClass("fa-angle-left");
    }
});
$("body").on("click", ".yesClose", function(e) {
    e.preventDefault();
    $(this).closest(".section").remove();
    if (!$('.sitesCont').html().replace(/\s+/g, '').length) {
        $(".massedit").hide();
    }
    return false;
});
$(".ac-account, .ac-guest").click(function() {
    if ($(".ac-guest").prop("checked") === true) {
        $(".section.account").hide();
        $(".plusbutton").show();
        $(".sites-section, .sitesCont").show();
    } else {
        $(".sites-section, .sitesCont").hide();
        $(".section.account").show();
        $(".plusbutton").hide();
    }
});
$('input[name="siteName"]').keypress(function(event) {
    if (event.keyCode == 13) {
        $(".go-createsite").click();
    }
});
/*$("body").on("keypress", '.sitecreation input[text="text"]', function(event) {
    	console.log("abc");
    if (event.keyCode == 13) {
    	console.log("abc");
    $(this).next().focus();
    }
});*/
$(function() {
    var $sidebar = $('.leftmenucont');
    $window = $(window);
    offset = $sidebar.offset();
    topPadding = 0;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.css({
                'top': '0',
                'position': 'fixed'
            });
        } else {
            $sidebar.css({
                'top': '',
                'position': ''
            });
        }
    });            
});
$(document).ready(function() {
    $("label").disableSelection();
    if (location.hash === "#settings") {
        if (localStorage.getItem("isPinned") != "yes"){ 
            $(".main").addClass("pinned");
            $(".left-menu").addClass("pinned");
            $(".pintab").click();
        }
        $(".togglesettings").click();
    }
    if (!getCookie('firsttime')) {
        //Runs the code because the cookie doesn't exist and it's the user's first time
        $(".account").after("<div class='firsttime'>Looks like this is your first time using Boilersite, click About to get more information")
            //Set's the cookie to true so there is a value and the code shouldn't run again.
        setCookie('firsttime', true);
    }

    if (localStorage.getItem("bs-saveProgress") === "true" || localStorage.getItem("bs-saveProgress") === null) {
        $("input[name='saveProg']").attr("checked", "checked");
        $("input[name='saveProg']").prop("checked", true);
    } else {
        $("input[name='saveProg']").removeAttr("checked");
        $("input[name='saveProg']").prop("checked", false);
    }
    if (localStorage.getItem("isPinned") == "yes"){   
        $(".main").addClass("pinned");
        $(".left-menu").addClass("pinned");
        $(".pintab").click();
    }
    if (localStorage.getItem("bs-account") == "account") {
        $(".ac-account").attr("checked", "checked");
        $(".ac-account").prop("checked", true);
        $(".ac-account").click();
    }
    console.log("----------");
    console.log("%c If you are a guest, please be vary of messing with inspect element and console", 'font-size:18px;display:inline-block;padding: 10px 20px;background:#073B4C;color:#f9f9f9;');
    console.log("%c Your progress is saved directly with .html(), so any changes you make will be saved", 'font-size:18px;display:inline-block;margin-top:10px;padding: 5px 20px;background:#073B4C;color:#f9f9f9;');
    console.log("----------");
    var isEditing = false;
    if ($(".ac-guest").prop("checked") === true) {
        $(".section.account").hide();
    } else {
        $(".section.account").show();
    }

    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("bs-saveProgress") === "true" || localStorage.getItem("bs-saveProgress") === null) {

            // create a reference to the old `.html()` function
            var htmlOriginal = $.fn.html;

            // redefine the `.html()` function to accept a callback
            $.fn.html = function(html, callback) {
                // run the old `.html()` function with the first parameter
                var ret = htmlOriginal.apply(this, arguments);
                // run the callback (if it is defined)
                if (typeof callback == "function") {
                    callback();
                }
                // make sure chaining is not broken
                return ret;
            }
            $(".sitesCont").html(localStorage.getItem("wb-progress"), function() {
                if (!$('.sitesCont').text().replace(/\s+/g, '').length) {
                    $(".massedit").hide();
                } else {
                    $(".massedit").show();
                }
                $(".siteCreation").each(function() {
                    /*
                    	  				$(this).find(".loadedSiteName").val($(this).find("em").text());/*
                    	  				console.log($(this).find(".loadedSiteName").val($(this).find("em").text()));*/

                });

            });
        } else {
            if ($('.sitesCont').html().replace(/\s+/g, '').length == 0) {
                $(".massedit").hide();
            }
        }
    } else {
        var isEditing = false;
    }
    if ($(".ac-guest").prop("checked") === true) {

    }
    if (localStorage.getItem("wb-progress").indexOf("isEditing")) {
        $(".siteCreation").removeClass("isEditing");
        isEditing = false;
    }
    $(".massedit").click(function() {
        if (isEditing == true) {
            $(this).html('<i class="fa fa-pencil-square-o before navLinkIcon"></i> Start editing');
            $(this).removeClass("iamcur");
            $(this).find("i").css("color", "#f9f9f9");
        } else {
            $(this).html('<i class="fa fa-pencil-square-o before navLinkIcon"></i> Stop editing');
            $(this).addClass("iamcur");
            $(this).find("i").css("color", "#2ecc71");
        }
        massEdit();
        this.blur();
    });

    function massEdit() {
        if (isEditing == false) {
            isEditing = true;
            // Turn on editing
            //$(".site")
            $(".mark").prop("checked", false);
            $(".mark").removeAttr("checked");
            $(".siteCreation").addClass("isEditing");
            $(".sitesCont").sortable({ placeholder: "ui-state-highlight", helper: 'clone', items: '.siteCreation' });
            $(".sitesCont").sortable("enable");
        } else {
            // Turn off editing
            $(".siteCreation").removeClass("isEditing");
            $(".sitesCont").sortable("disable");
            $(".action").hide();
            isEditing = false;
        }
    }
    /*
    	$(".doDelete").click(function(){

    	});*/
    $('.action').on("change", function() {
        if ($(this).val() == "delete") {
            $('.mark:checkbox:checked').each(function() {
                $(this).closest(".siteCreation").remove();
                $(".action").hide();
                if (!$('.sitesCont').html().replace(/\s+/g, '').length) {
                    $(".massedit").hide();
                }
            });
            $(this).val("action");
            $(".massedit").click();
        } else if ($(this).val() == "selectall") {
            $(".mark").attr("checked", "checked");
            $(".mark").prop("checked", true);
            $(this).val("action");
        } else if ($(this).val() == "selectnone") {
            $(".mark").removeAttr("checked");
            $(".mark").prop("checked", false);
            $(this).val("action");
        } else if ($(this).val() == "copy") {
            console.log("abc");
            $('.mark:checkbox:checked').each(function() {
                console.log($(this).closest(".siteCreation"));
                $(this).closest(".siteCreation").clone().prependTo(".sitesCont");
            });
            $(this).val("action");
        } else {
            $(this).val("action");
        }
    });
    $("body").on("click", ".mark", function() {
        if ($(".mark", ".sitesCont").is(":checked")) {
            $(".action").show();
        } else {
            $(".action").hide();
        }
        if ($('.sitesCont').find('input:checked').length < 1) {} else {}
    });
});

function doSave(e) {
    if (e == "button") {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem("bs-saveProgress") === "true" || localStorage.getItem("bs-saveProgress") === null) {
                if ($(".ac-guest").prop("checked") === true) {
                    $.when(doSave()).done(function() {
                        $(".plusbutton").html('<i class="fa fa-floppy-o before"></i> Saved');
                        window.setTimeout(function() {
                            $(".plusbutton").html('<i class="fa fa-floppy-o before"></i> Save');
                        }, 1500);
                    });
                }
            } else {
                $(".togglesettings, .saveSitesTd").css("box-shadow", "0px 0px 5px 2px var(--red-dark)");
                $(".togglesettings, .saveSitesTd").css("background", "var(--red)");
                $('.togglesettings, .saveSitesTd')
                    .delay(3000)
                    .queue(function(next) {
                        $(this).css("box-shadow", "none");
                        $(this).css("background", "#222");
                        next();
                    });
            }
        }
    } else {
        if (typeof(Storage) !== "undefined") {
            if ($(".ac-guest").prop("checked") === true) {
                localStorage.setItem("wb-progress", $(".sitesCont").html());
            }
        }
    }
}
$(".sitesCont").on("click", ".saveSiteButton", function(e) {
    e.preventDefault();
    $(this).closest(".fifty-cont").hide();
    $(this).closest(".siteCreation").addClass("closed");
    return false;
});
$(".sitesCont").on("click", ".openSiteButton", function(e) {
    e.preventDefault();
    $(this).prev(".fifty-cont").show();
    $(this).closest(".siteCreation").removeClass("closed");
    return false;
});
$(window).on("unload", function(e) {
    doSave();
});
$(".sitesCont").on("click", ".downloadSiteButton", function(e) {
    $(this).closest("form").submit();
});
$(".sitesCont").on("click", ".downloadSiteButtonLarge", function(e) {
    $(this).closest(".openSiteButton").click();
    $(this).closest(".siteCreation").find("form").submit();
});
$('body').on("keyup", "input[type='text']", function(event) {
    $(this).attr("value", $(this).val());
});
$('body').on("focusout", "textarea[name='meta-textarea']", function() {
    if (!$(this).val()) {
        $(this).after("<textarea name='meta-textarea'>" + $(this).val() + "</textarea>");
    } else {
        $(this).after("<textarea name='meta-textarea' class='keepV'>" + $(this).val() + "</textarea>");
    }
    $(this).remove();
});
$('body').on("change paste keyup", ".loadedSiteName", function() {
    if (!$(this).val()) {
        $(this).closest(".sitecreation").find("em").text("-");
    } else {
        $(this).closest(".sitecreation").find("em").text($(this).val());
    }
    $(this).attr("value", $(this).val());
});
$('body').on("focus", ".loadedSiteName", function() {
    var sameVal = $(this).val();
    var dis = $(this);
    $.when(createSuggestions(sameVal)).done(function() {
        dis.autocomplete({
            source: suggestionArray
        });
    });
});
$('body').on("keyup", ".loadedPageName", function() {
    if (!$(this).val()) {
        $(this).closest(".sitecreation").find("bp-pagename").text("");
    } else {
        $(this).closest(".sitecreation").find("bp-pagename").text(" - " + $(this).val());
    }
    $(this).attr("value", $(this).val());
});
$('body').on("click", ".addInclude", function(e) {
    e.preventDefault();
    var uniid = $(this).closest("form").parent().attr("class");
    if ($("." + uniid + " .cScriptType-0").length == 0) {
        $(this).closest("tr").before('<tr><td><select name="customScriptType-0" class="cScriptType-0"><option value="script">Script</option><option value="css">Stylesheet</option></select></td><td class="plusminustd"><input type="text" name="customScriptLink-0" placeholder="location/of/file.ext" class="customScriptLink-0" /><a href="#" class="removeTd"><i class="fa fa-minus-square" aria-hidden="true"></i></a></td></tr>');
    } else {
        var lastID = parseInt($(this).closest(".sitecreation").find("*[class^='cScriptType-']:last").attr("class").substring(12));
        console.log("Last ID: " + lastID);
        var newID = lastID + 1;
        console.log("New ID: " + newID);
        $(this).closest("tr").before('<tr><td><select name="customScriptType-' + newID + '" class="cScriptType-' + newID + '"><option value="script">Script</option><option value="css">Stylesheet</option></select></td><td class="plusminustd"><input type="text" placeholder="location/of/file.ext" name="customScriptLink-' + newID + '" class="customScriptLink-' + newID + '" /><a href="#" class="removeTd"><i class="fa fa-minus-square" aria-hidden="true"></i></a></td></tr>');
    }
    return false;
});
$("body").on("click", 'input:radio[name="accountradio"].ac-guest', function() {
    // console.log("slide....up!!");
    $("input:radio[name='accountradio']").prop("checked", false);
    $("input:radio[name='accountradio']").removeAttr("checked");
    $(this).attr("checked", "checked");
    $(this).prop("checked", true);
    localStorage.setItem("bs-account", "guest");
});
$("body").on("click", 'input:radio[name="accountradio"].ac-account', function() {
    // console.log("slide....up!!");
    $("input:radio[name='accountradio']").prop("checked", false);
    $("input:radio[name='accountradio']").removeAttr("checked");
    $(this).attr("checked", "checked");
    $(this).prop("checked", true);
    localStorage.setItem("bs-account", "account");
});
$("body").on("click", 'input:radio[name="titleformat"]', function() {
    // console.log("slide....up!!");
    $("input:radio[name='titleformat']").prop("checked", false);
    $("input:radio[name='titleformat']").removeAttr("checked");
    $(".customtr").hide();
    $(this).attr("checked", "checked");
    $(this).prop("checked", true);
});
$("body").on("change", 'select[name^="customScriptType"]', function() {
    // console.log("slide....up!!");
    console.log("abc");
    $('select[name="' + $(this).attr("name") + '"] option[value!="' + $(this).val() + '"]').prop("selected", false);
    $('select[name="' + $(this).attr("name") + '"] option[value!="' + $(this).val() + '"]').removeAttr("selected");
    $('select[name="' + $(this).attr("name") + '"] option[value="' + $(this).val() + '"]').attr("selected", "selected");
    $('select[name="' + $(this).attr("name") + '"] option[value="' + $(this).val() + '"]').prop("selected", true);
    $(this).attr("value", $(this).val());
});
$("body").on("click", 'input:checkbox', function() {
    if ($(this).prop("checked") === true) {
        $(this).attr("checked", "checked");
        $(this).prop("checked", true);
    } else {
        $(this).removeAttr("checked");
        $(this).prop("checked", false);

    }
});

$("body").on("click", 'input:checkbox#saveProg', function() {
    if ($(this).prop("checked") === true) {
        localStorage.setItem("bs-saveProgress", true);
        $(this).attr("checked", "checked");
    } else {
        localStorage.setItem("bs-saveProgress", false);
        $(this).removeAttr("checked");
        $(this).prop("checked", false);

    }
});
$("body").on("click", 'input:radio[value="custom"][name="titleformat"]', function() {
    if ($(this).prop("checked") === true) {
        $(".customtr").show();
        $(this).attr("checked", "checked");
        $(this).prop("checked", true);
    } else {
        $(".customtr").hide();
        $(this).removeAttr("checked");
        $(this).prop("checked", false);
    }
});
$("body").on("click", '.firsttime', function() {
    $(this).fadeOut();
});
$("body").on("click", ".newPage", function(e) {
    e.preventDefault();
    $(this).closest(".siteCreation").clone().addClass("tempClonedClass").appendTo(".sitesCont");
    $(this).closest(".siteCreation").find(".saveSiteButton").click();
    $(".tempClonedClass .loadedPageName").val($(".tempClonedClass .loadedPageName").val() + "-clone");
    $(".tempClonedClass .loadedPageName").focus();
    $(".tempClonedClass .loadedPageName").keyup();

    $(".tempClonedClass > div").removeClass().addClass(guidGenerator());
    $(".tempClonedClass").removeClass("tempClonedClass");
    $("<div style='position:fixed;top:10px;left:50%;margin-left:-70px;border:1px solid var(--green-dark);padding:10px 20px;background:var(--green);color:#f9f9f9;font-size:24px;' class='satus'>Site cloned</div>").appendTo("#container").delay(1500).queue(function(next) {
        $(".satus").fadeOut(200).remove();
    });
    return false;
});
$("body").on("click", '.removeTd', function(e) {
    e.preventDefault();
    $(this).closest("tr").remove();
    return false;
});
$(function() {
    var counter = 0;
    var isDragging = false;
    $("body").on("mousedown", ".tools", function() {
        $(window).mousemove(function() {
            isDragging = true;
            $(window).unbind("mousemove");
        });
    });
    $("body").on("mouseup", ".tools", function() {
        var wasDragging = isDragging;
        isDragging = false;
        $(window).unbind("mousemove");
        if (!wasDragging) {
            if ($(".massedit").hasClass("iamcur")) {
                $(this).find(".mark").click();
            } else {
                $(this).closest(".sitecreation").find("form").find(".saveSiteButton").click();
            }
        }
    });
});
var currentValuess = "";
$("body").on("focusout", "input[type='text']", function() {
    if (!$(this).val()) {

    } else if (currentValuess == $(this).val()) {
        $(this).addClass("keepV");
    } else {
        $(this).addClass("doanimation").delay(250).queue(function(next) {
            $(this).removeClass("doanimation").addClass("keepV").dequeue();;
        });
    }
});
$("body").on("focusout", "input[type='text']", function() {
    if (!$(this).val()) {
        //
    } else if (isHTML($(this).val())) {
        $(this).addClass("doanimation").delay(250).queue(function(next) {
            $(this).removeClass("doanimation").addClass("errorInput").dequeue();;
        });
    } else if ($(this).val().indexOf('\'') >= 0 && $(this).val().indexOf('"') >= 0) {
        $(this).addClass("doanimation").delay(250).queue(function(next) {
            $(this).removeClass("doanimation").addClass("errorInput").dequeue();;
        });
    } else if (currentValuess == $(this).val()) {
        $(this).addClass("keepV");
    } else {
        $(this).addClass("doanimation").delay(250).queue(function(next) {
            $(this).removeClass("doanimation").addClass("keepV").dequeue();;
        });
    }
});
$("body").on("focusout", "input[name^='customScriptLink']", function() {
    var cslNum = $(this).attr("name").substring(17);
    console.log($(this).val().substr(-3));
    if ($(this).val().substr(-2) == "js") {
        $(this).closest("tr").find("select[name^='customScriptType']").val("script");
        $(this).closest("tr").find("select[name^='customScriptType']").find("option[value='script']").attr("selected", "selected");
        $(this).closest("tr").find("select[name^='customScriptType']").find("option[value='css']").removeAttr("selected");
    } else if ($(this).val().substr(-3) == "css") {
        $(this).closest("tr").find("select[name^='customScriptType']").val("css");
        $(this).closest("tr").find("select[name^='customScriptType']").find("option[value='css']").attr("selected", "selected");
        $(this).closest("tr").find("select[name^='customScriptType']").find("option[value='script']").removeAttr("selected");
    }

});
var timeoutId;/*
$("body").on("mouseenter", ".main", function(){
    if ($(".togglesettings i").hasClass("fa-times-circle")){
        timeoutId = window.setTimeout(function() {
            $(".togglesettings").click();
       }, 700);
    }
});*/
$(".main").hover(function(){
    if ($(".togglesettings i").hasClass("fa-times-circle") && !$(".main").hasClass("pinned")){
        $(".togglesettings").click();
    }
}, function(){

});
function makeMouseOutFn(elem){
    var list = traverseChildren(elem);
    return function onMouseOut(event) {
        var e = event.toElement || event.relatedTarget;
        if (!!~list.indexOf(e)) {
            return;
        }
        clearTimeout(timeoutId);
    };
}
var parent = document.getElementById("main");
parent.addEventListener('mouseout',makeMouseOutFn(parent),true);
function traverseChildren(elem){
    var children = [];
    var q = [];
    q.push(elem);
    while (q.length > 0) {
      var elem = q.pop();
      children.push(elem);
      pushAll(elem.children);
    }
    function pushAll(elemArray){
      for(var i=0; i < elemArray.length; i++) {
        q.push(elemArray[i]);
      }
    }
    return children;
}

$("body").on("focus", "input[type='text'], textarea", function() {
    $(this).removeClass("doanimation").removeClass("secondanimation").removeClass("keepV").removeClass("errorInput");
    currentValuess = $(this).val();
});
$("body").on("click", "td label, td input[type='checkbox'], td input[type='radio']", function() {
    /*if ($(this).closest("td").find("input").prop("checked") == true){
    	$(this).closest("td").find("input").prop("checked", false);
    	$(this).closest("td").find("input").removeAttr("checked");
    }else{
    	$(this).closest("td").find("input").prop("checked", true);
    	$(this).closest("td").find("input").attr("checked", "checked");
    }*/
    $(this).closest("td").addClass("fancyTrAni").delay(250).queue(function(next) {
        $(this).closest("td").removeClass("fancyTrAni").dequeue();
    });

});
$("body").on("change focusout", "#boilerColour", function() {
    $(this).closest(".siteCreation").find(".tools").css("background-color", $(this).val());
    $(this).attr("value", $(this).val());
});
$("body").on("change focusout", "#boilerText", function() {
    $(this).closest(".siteCreation").find(".toolsi.fa-window-close-o").css("color", $(this).val());
    $(this).closest(".siteCreation").find(".openSiteButton").css("color", $(this).val());
    $(this).closest(".siteCreation").find(".downloadSiteButtonLarge").css("color", $(this).val());
    $(this).closest(".siteCreation").find(".tools").css("color", $(this).val());
    $(this).attr("value", $(this).val());
});
$('.importSave').click(function() {
    if ($(this).text() == "Close") {
        $(".importSaveTr").hide();
        $(this).text("Import save");
    } else {
        $(".importSaveTr").show();
        $(this).text("Close");
    }
});
$('.exportSave').click(function() {
    if ($(this).text() == "Close") {
        $(".exportSaveTr").hide();
        $(this).text("Export save");
    } else {
        $(".exportSaveTr").find("textarea").val(localStorage.getItem("wb-progress"));
        $(".exportSaveTr").show();
        $(this).text("Close");
    }
});
$(".importSaveNow").click(function(e) {
    e.preventDefault();
    var stringOfHtml = $(this).closest("tr").find("textarea").val();
    var wrappedString = '<div>' + stringOfHtml + '</div>';
    var noScript = wrappedString.replace("<script>", "..");
    var noScript = noScript.replace("</script>", "..");
    var Newhtml = $(noScript);
    $(".sitesCont").html(Newhtml, function() {
        if (!$('.sitesCont').text().replace(/\s+/g, '').length) {
            $(".massedit").hide();
        } else {
            $(".massedit").show();
        }
        $(".siteCreation").each(function() {
            /*
            	  				$(this).find(".loadedSiteName").val($(this).find("em").text());/*
            	  				console.log($(this).find(".loadedSiteName").val($(this).find("em").text()));*/
        });
    });
    return false;
});
$(".exportSaveTr textarea").focus(function() {
    var $this = $(this);
    $this.select();

    // Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind("mouseup");
        return false;
    });
});
$("body").on("click", ".pintab", function(e){
  e.preventDefault();
  if ($(".pintabinput").prop("checked")){
    $(".pintabinput").prop("checked", false);
    $(".pintabinput").removeAttr("checked");
    $(".pintab i").removeClass("cckd");
    $(".main").removeClass("pinned");
    $(".left-menu").removeClass("pinned");
    localStorage.setItem("isPinned", "no");
  }else{
    $(".pintabinput").prop("checked", true);
    $(".pintabinput").attr("checked", "checked");
    $(".pintab i").addClass("cckd");
    localStorage.setItem("isPinned", "yes");
    $(".main").addClass("pinned");
    $(".left-menu").addClass("pinned");
  }
  return false;
});
$(".togglesettings").click(function() {
    if ($(this).hasClass("closed")) {
        $(".settings").toggle();
        $(this).removeClass("closed");
        $(this).html('<i class="fa fa-times-circle before fa-spin-hover"></i> Close');

    } else {
        $(".settings").toggle();
        $(this).html('<i class="fa fa-cog before fa-spin-hover dospin"></i> Settings');
        $(this).addClass("closed");
    }
});
