$('a[href="#"]').click(function(e){
	e.preventDefault();
	return false;
});
$(".show-createSite, .cancel-createSite").click(function(){
	$(".createSite").toggle();
	$(".show-createSite").toggle();
});
function createSite(){
	$(".main").append("<div class='section siteCreation'></div>").load("templates/siteCreation.html");
}