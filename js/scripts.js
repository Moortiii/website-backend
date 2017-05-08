$('a[href="#"]').click(function(e){
	e.preventDefault();
	return false;
});
$(".show-createSite, .cancel-createSite").click(function(){
	$(".createSite").toggle();
	$(".site-buttons").toggle();
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
		$(".site-buttons").toggle();
		$(".createSite").toggle();
	}else{

	}
	if ($(".massedit").text() == "Stop editing"){
		$(".massedit").click();
	}
	var uniqueid = guidGenerator();
	var theSiteName = $("input[name='siteName']").val();
	if (!$("input[name='siteName']").val() || $("input[name='siteName']").val() == ""){
		thesiteName = "New site";
	}
	var theTheme = $("select[name='siteTheme']").val();
	$(".saveSiteButton").click();
	$(".main .sitesCont").prepend("<div class='section sitecreation' style='display:none;'><header class='tools'><input type='checkbox' class='mark' name='mark-" + uniqueid + "' /><i class='fa fa-window-close-o before toolsi'></i> <span>Discard site? <a href='#' class='yesClose'>Yes</a></span><em>" + theSiteName + "</em></header><div class='" + uniqueid + "'></div></div>");
	$("div[class='" + uniqueid + "']").load("templates/siteCreation.php",  { name: theSiteName, theme:  theTheme}, function() {
		$("input[name='siteName']").val("");
		$("." + uniqueid).parent().slideDown(150);
		$("." + uniqueid + " .loadedSiteName").focus();
	});
}
$("body").on("click", "header.tools .toolsi", function(){
	$(this).next("span").animate({width:'toggle'},100);
	if ($(this).hasClass("fa-window-close-o")){
		$(this).removeClass("fa-window-close-o");
		$(this).addClass("fa-angle-left");
	}else{
		$(this).addClass("fa-window-close-o");
		$(this).removeClass("fa-angle-left");
	}
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
	console.log("%c If you are a guest, please be vary of messing with inspect element and console", 'font-size:18px;display:inline-block;padding: 10px 20px;background:#073B4C;color:#f9f9f9;');
	console.log("%c Your progress is saved directly with .html(), so any changes you make will be saved", 'font-size:18px;display:inline-block;margin-top:10px;padding: 5px 20px;background:#073B4C;color:#f9f9f9;');
	var isEditing = false;
	if ($(".ac-guest").prop("checked") === true){
		$(".section.account").hide();
	}else{
		$(".section.account").show();
	}
	var htmlOriginal = $.fn.html;
	String.prototype.escapeHTML = function () {                                        
	  return(                                                                 
	    this.replace(/>/g,'&gt;').
	         replace(/</g,'&lt;').
	         replace(/"/g,'&quot;')
	  );
	};
	var codeEl = $("pre");
	if (codeEl) {
	  codeEl.innerHTML = codeEl.innerHTML.escapeHTML();
	}

// redefine the `.html()` function to accept a callback
$.fn.html = function(html,callback){
  // run the old `.html()` function with the first parameter
  var ret = htmlOriginal.apply(this, arguments);
  // run the callback (if it is defined)
  if(typeof callback == "function"){
    callback();
  }
  // make sure chaining is not broken
  return ret;
}
  	if (typeof(Storage) !== "undefined") {
  		$(".sitesCont").html(localStorage.getItem("wb-progress"), function(){
  			$(".siteCreation").each(function(){
  				$(this).find(".loadedSiteName").val($(this).find("em").text())
  				console.log($(this).find(".loadedSiteName").val($(this).find("em").text()));
  			});
  		});
  	}else{
  		var isEditing = false;
  	}
  	if ($(".ac-guest").prop("checked") === true){

  	}
  	if (localStorage.getItem("wb-progress").indexOf("isEditing")){
		$(".siteCreation").removeClass("isEditing");
		isEditing = false;
	}
  	$(".massedit").click(function(){
		if (isEditing == true){
			$(this).text("Mass-edit");
		}else{
			$(this).text("Stop editing");
		}
		massEdit();
	});
	function massEdit() {
		if (isEditing == false){
			isEditing = true;
			// Turn on editing
			$(".site")
			$(".siteCreation").addClass("isEditing");
			$(".sitesCont").sortable({placeholder: "ui-state-highlight",helper:'clone', items: '.siteCreation'});
			$(".sitesCont").sortable("enable");
		}else{
			// Turn off editing
			$(".siteCreation").removeClass("isEditing");
			$(".sitesCont").sortable("disable");
			$(".action").hide();
			isEditing = false;
		}
	}/*
	$(".doDelete").click(function(){
		
	});*/
	$('.action').on("change", function(){ 
	    if ($(this).val() == "delete"){
	    	$('.mark:checkbox:checked').each(function(){
				$(this).closest(".siteCreation").remove();	
				$(".action").hide();
			});
			$(this).val("action");
	    }
	});
	$("body").on("click", ".mark", function(){
		if ($(".mark", ".sitesCont").is(":checked"))
		{
			$(".action").show();
		}
		else
		{
			$(".action").hide();
		}
		if($('.sitesCont').find('input:checked').length < 1){
		}else{
		}
	});
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
$(".sitesCont").on("click", ".saveSiteButton", function(){
	$(this).closest(".fifty-cont").hide();
	$(this).closest(".siteCreation").addClass("closed");
});
$(".sitesCont").on("click", ".openSiteButton", function(e){
	e.preventDefault();
	$(this).prev(".fifty-cont").show();
	$(this).closest(".siteCreation").removeClass("closed");
	return false;
});
$(window).on("unload", function(e) {
  doSave();
});
$('body').on("keyup", ".loadedSiteName", function() {
    jQuery(this).parent().parent().parent().parent().parent().parent().parent().parent().children("header").children("em").text($(this).val());
});
