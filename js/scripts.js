$('a[href="#"]').click(function(e){
	e.preventDefault();
	return false;
});
$(".show-createSite, .cancel-createSite").click(function(){
	$(".createSite").toggle();
	$(".show-createSite").toggle();
});
function createSite(){
	$(".main").append("<div class='section sitecreation'><header class='tools'><i class='fa fa-window-close-o'></i> " + $("input[name='siteName']").val() + "</header></div>");
	$(".sitecreation").load("templates/siteCreation.html");
}
$("body").on("click", "header.tools .fa-window-close-o", function(){
	$(this).closest(".section").remove();
});