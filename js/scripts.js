$('a[href="#"]').click(function(e){
	e.preventDefault();
	return false;
});
$(".show-createSite, .cancel-createSite").click(function(){
	$(".createSite").toggle();
	$(".show-createSite").toggle();
	if ($(".show-createSite:visible")){
		$("input[name='siteName'").focus();
	}
});
function createSite(){
	$(".main").append("<div class='section sitecreation'><header class='tools'><i class='fa fa-window-close-o'></i> " + $("input[name='siteName']").val() + "</header></div>");
	$(".sitecreation").load("templates/siteCreation.html");
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
$(document).ready(function(){
	if ($(".ac-guest").prop("checked") === true){
		$(".section.account").hide();
	}else{
		$(".section.account").show();
	}
});