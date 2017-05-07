$('a[href="#"]').click(function(e){
	e.preventDefault();
	return false;
});
$(".show-createSite, .cancel-createSite").click(function(){
	$(".createSite").toggle();
	$(".show-createSite").toggle();
	if ($(".show-createSite:visible")){
		$("input[name='siteName'").focus();
	}else{

	}
});
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
function createSite(){
	if ($(".show-createSite:visible")){
		$(".show-createSite").toggle();
		$(".createSite").toggle();
	}else{

	}
	var uniqueid = guidGenerator();
	var theSiteName = $("input[name='siteName']").val();
	if (!$("input[name='siteName']").val() || $("input[name='siteName']").val() == ""){
		thesiteName = "New site";
	}
	var theTheme = $("select[name='siteTheme']").val();
	$(".main .sitesCont").prepend("<div class='section sitecreation' style='display:none;'><header class='tools'><i class='fa fa-window-close-o before'></i> <span>Discard site? <a href='#' class='yesClose'>Yes</a></span>" + theSiteName + "</header><div class='" + uniqueid + "'></div></div>");
	$("div[class='" + uniqueid + "']").load("templates/siteCreation.php",  { name: theSiteName, theme:  theTheme}, function() {
		$("input[name='siteName']").val("");
		$("." + uniqueid).parent().slideDown(150);
		$("." + uniqueid + " .loadedSiteName").focus();
	});
}
$("body").on("click", "header.tools .fa-window-close-o", function(){
	$(this).next("span").animate({width:'toggle'},100);
});
$("body").on("click", ".yesClose", function(){
	$(this).closest(".section").remove();
});
$(".ac-account, .ac-guest").click(function(){
	if ($(".ac-guest").prop("checked") === true){
		$(".section.account").hide();
		$(".plusbutton").show();
		$(".sites-section, .sitesCont").show();
	}else{
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
$(document).ready(function(){
	if ($(".ac-guest").prop("checked") === true){
		$(".section.account").hide();
	}else{
		$(".section.account").show();
	}
  	if (typeof(Storage) !== "undefined") {
  		$(".sitesCont").html(localStorage.getItem("wb-progress"));
  	}
  	if ($(".ac-guest").prop("checked") === true){

  	}
});
function doSave(e){
	if (e == "button"){
		if (typeof(Storage) !== "undefined") {
	  		if ($(".ac-guest").prop("checked") === true){
				$.when(doSave()).done(function(){
		  			$(".plusbutton").html('<i class="fa fa-floppy-o before"></i> Saved');
		  			window.setTimeout(function () {
		  				$(".plusbutton").html('<i class="fa fa-floppy-o before"></i> Save');
		  			}, 1500);
		  		});
			}
		}
	}else{
		if (typeof(Storage) !== "undefined") {
	  		if ($(".ac-guest").prop("checked") === true){
				localStorage.setItem("wb-progress", $(".sitesCont").html());
			}
	  	}
  	}
}
$(window).on("unload", function(e) {
  doSave();
});