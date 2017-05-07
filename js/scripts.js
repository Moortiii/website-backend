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
	$(".main .sitesCont").prepend("<div class='section sitecreation'><header class='tools'><i class='fa fa-window-close-o'></i> " + theSiteName + "</header><div class='" + uniqueid + "'></div></div>");
	$("div[class='" + uniqueid + "']").load("templates/siteCreation.php",  { name: theSiteName, theme:  theTheme}, function() {
		$("input[name='siteName']").val("");
		$("." + uniqueid + " .loadedSiteName").focus();
	});
}
$("body").on("click", "header.tools .fa-window-close-o", function(){
	$(this).closest(".section").remove();
});
$(".ac-account, .ac-guest").click(function(){
	if ($(".ac-guest").prop("checked") === true){
		$(".section.account").hide();
	}else{
		$(".section.account").show();
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
});