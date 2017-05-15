$('a[href="#"]').click(function(e){
	e.preventDefault();
	return false;
});

if (localStorage.getItem("bs-account") == "account"){
		$(".ac-account").attr("checked", "checked");
		$(".ac-account").prop("checked", true);
	}
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
	$(".massedit").show();
	$('html,body').animate({
        scrollTop: $(".sites-section").offset().top},
        'slow');
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
	var theTheme = $("select[name='siteTheme']").val();
	$(".saveSiteButton").click();
	$(".main .sitesCont").prepend("<div class='section sitecreation' style='display:none;'><header class='tools'><input type='checkbox' class='mark' name='mark-" + uniqueid + "' /><i class='fa fa-window-close-o before toolsi'></i> <span>Discard site? <a href='#' class='yesClose'>Yes</a></span><em>" + theSiteName + "</em></header><div class='" + uniqueid + "'></div></div>");
	$("div[class='" + uniqueid + "']").load("templates/siteCreation.php",  { name: theSiteName, theme:  theTheme}, function() {
		$("input[name='siteName']").val("");
		$("." + uniqueid).parent().slideDown(150);
		$("." + uniqueid + " .loadedSiteName").focus();
		if (!$('.sitesCont').html().replace(/\s+/g, '').length){
				$(".massedit").hide();
				console.log("abc");
			}else{
				$(".massedit").show();
				console.log("bca");
			}
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
$("body").on("click", ".yesClose", function(e){
	e.preventDefault();
	$(this).closest(".section").remove();
	if (!$('.sitesCont').html().replace(/\s+/g, '').length){
		$(".massedit").hide();
	}
	return false;
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

	
	if (localStorage.getItem("bs-saveProgress") === "true" || localStorage.getItem("bs-saveProgress")  === null){
		$("input[name='saveProg']").attr("checked", "checked");
		$("input[name='saveProg']").prop("checked", true);
	}else{
		$("input[name='saveProg']").removeAttr("checked");
		$("input[name='saveProg']").prop("checked", false);
	}
	if (localStorage.getItem("bs-account") == "account"){
		$(".ac-account").attr("checked", "checked");
		$(".ac-account").prop("checked", true);
		$(".ac-account").click();
	}
	console.log("%c If you are a guest, please be vary of messing with inspect element and console", 'font-size:18px;display:inline-block;padding: 10px 20px;background:#073B4C;color:#f9f9f9;');
	console.log("%c Your progress is saved directly with .html(), so any changes you make will be saved", 'font-size:18px;display:inline-block;margin-top:10px;padding: 5px 20px;background:#073B4C;color:#f9f9f9;');
	console.log("----------");
	var isEditing = false;
	if ($(".ac-guest").prop("checked") === true){
		$(".section.account").hide();
	}else{
		$(".section.account").show();
	}

  	if (typeof(Storage) !== "undefined") {
  		if (localStorage.getItem("bs-saveProgress") === "true" || localStorage.getItem("bs-saveProgress")  === null){
	  		
  			// create a reference to the old `.html()` function
			var htmlOriginal = $.fn.html;

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
	  		$(".sitesCont").html(localStorage.getItem("wb-progress"), function(){
	  			if (!$('.sitesCont').text().replace(/\s+/g, '').length){
					$(".massedit").hide();
				}else{
					$(".massedit").show();
				}
	  			$(".siteCreation").each(function(){/*
	  				$(this).find(".loadedSiteName").val($(this).find("em").text());/*
	  				console.log($(this).find(".loadedSiteName").val($(this).find("em").text()));*/

	  			});

	  		});
  		}else{
  			if ($('.sitesCont').html().replace(/\s+/g, '').length == 0){
				$(".massedit").hide();
			}
  		}
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
			//$(".site")
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
	  			if (!$('.sitesCont').html().replace(/\s+/g, '').length){
					$(".massedit").hide();
				}
			});
			$(this).val("action");
			$(".massedit").click();
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
			if (localStorage.getItem("bs-saveProgress") === "true" || localStorage.getItem("bs-saveProgress")  === null){
		  		if ($(".ac-guest").prop("checked") === true){
					$.when(doSave()).done(function(){
			  			$(".plusbutton").html('<i class="fa fa-floppy-o before"></i> Saved');
			  			window.setTimeout(function () {
			  				$(".plusbutton").html('<i class="fa fa-floppy-o before"></i> Save');
			  			}, 1500);
			  		});
				}
			}else{
				$(".togglesettings").css("box-shadow", "0px 0px 5px 2px var(--red-dark)");
				$('.togglesettings')
			      .delay(2000)
			      .queue( function(next){ 
			        $(this).css("box-shadow", "none"); 
			        next(); 
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
$(".sitesCont").on("click", ".saveSiteButton", function(e){
	e.preventDefault();
	$(this).closest(".fifty-cont").hide();
	$(this).closest(".siteCreation").addClass("closed");
	return false;
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
$(".sitesCont").on("click", ".downloadSiteButton", function(e){
	$(this).closest("form").submit();
});
$(".sitesCont").on("click", ".downloadSiteButtonLarge", function(e){
	$(this).closest(".openSiteButton").click();
	$(this).closest(".siteCreation").find("form").submit();
});
$('body').on("keyup", "input[type='text']", function() {
    $(this).attr("value", $(this).val());
});
$('body').on("keyup", ".loadedSiteName", function() {
    $(this).closest(".sitecreation").find("em").text($(this).val());
    $(this).attr("value", $(this).val());
});
$('body').on("click", ".addInclude", function(e){
	e.preventDefault();
	var uniid = $(this).closest("form").parent().attr("class");
	if ($("." + uniid + " .cScriptType-0").length == 0){
		$(this).closest("tr").before('<tr><td><select name="customScriptType-0" class="cScriptType-0"><option value="script">Script</option><option value="css">Stylesheet</option></select></td><td><input type="text" name="customScriptLink-0" placeholder="location/of/file.ext" class="customScriptLink-0" /></td></tr>');
	}else{
	var lastID = parseInt($(this).closest(".sitecreation").find("*[class^='cScriptType-']:last").attr("class").substring(12));
	console.log("Last ID: " + lastID);
	var newID = lastID + 1;
	console.log("New ID: " + newID);
		$(this).closest("tr").before('<tr><td><select name="customScriptType-' + newID + '" class="cScriptType-' + newID + '"><option value="script">Script</option><option value="css">Stylesheet</option></select></td><td><input type="text" placeholder="location/of/file.ext" name="customScriptLink-' + newID + '" class="customScriptLink-' + newID + '" /></td></tr>');
	}
	return false;
});
$("body").on("click", 'input:radio[name="accountradio"].ac-guest', function(){
		// console.log("slide....up!!");
		$("input:radio[name='accountradio']").prop("checked", false);
		$("input:radio[name='accountradio']").removeAttr("checked");
		$(this).attr("checked", "checked");
		$(this).prop("checked", true);
		localStorage.setItem("bs-account", "guest");
});
$("body").on("click", 'input:radio[name="accountradio"].ac-account', function(){
		// console.log("slide....up!!");
		$("input:radio[name='accountradio']").prop("checked", false);
		$("input:radio[name='accountradio']").removeAttr("checked");
		$(this).attr("checked", "checked");
		$(this).prop("checked", true);
		localStorage.setItem("bs-account", "account");
});
$("body").on("click", 'input:radio[name="titleformat"]', function(){
		// console.log("slide....up!!");
		$("input:radio[name='titleformat']").prop("checked", false);
		$("input:radio[name='titleformat']").removeAttr("checked");
		$(".customtr").hide();
		$(this).attr("checked", "checked");
		$(this).prop("checked", true);
});
$("body").on("change", 'select[name^="customScriptType"]', function(){
		// console.log("slide....up!!");
		console.log("abc");
		$('select[name="' + $(this).attr("name") + '"] option[value!="' + $(this).val() + '"]').prop("selected", false);
		$('select[name="' + $(this).attr("name") + '"] option[value!="' + $(this).val() + '"]').removeAttr("selected");
		$('select[name="' + $(this).attr("name") + '"] option[value="' + $(this).val() + '"]').attr("selected", "selected");
		$('select[name="' + $(this).attr("name") + '"] option[value="' + $(this).val() + '"]').prop("selected", true);
		$(this).attr("value", $(this).val());
});
$("body").on("click", 'input:checkbox', function(){
		if ($(this).prop("checked") === true){
			$(this).attr("checked", "checked");
			$(this).prop("checked", true);
		}else{
			$(this).removeAttr("checked");
			$(this).prop("checked", false);
	  
		}
});
$("body").on("click", 'input:checkbox', function(){
		if ($(this).prop("checked") === true){
			localStorage.setItem("bs-saveProgress", true);
			$(this).attr("checked", "checked");
		}else{
			localStorage.setItem("bs-saveProgress", false);
			$(this).removeAttr("checked");
			$(this).prop("checked", false);
	  
		}
});
$("body").on("click", 'input:radio[value="custom"][name="titleformat"]', function(){
		if ($(this).prop("checked") === true){
			$(".customtr").show();
			$(this).attr("checked", "checked");
			$(this).prop("checked", true);
		}else{
			$(".customtr").hide();
			$(this).removeAttr("checked");
			$(this).prop("checked", false);
		}
});
$(function() {
  var counter = 0;
  var isDragging = false;
  $("body").on("mousedown", ".tools", function(){
  	$(window).mousemove(function() {
          isDragging = true;
          $(window).unbind("mousemove");
      });
  });
  $("body").on("mouseup", ".tools", function(){
      var wasDragging = isDragging;
      isDragging = false;
      $(window).unbind("mousemove");
      if (!wasDragging) {
      	if ($(".massedit").text() == "Stop editing"){
          $(this).find(".mark").click();
	      }else{
	      	$(this).closest(".sitecreation").find("form").find(".saveSiteButton").click();
	      	console.log("a");
	      }
      }
  });
});
$(".togglesettings").click(function(){
	if ($(this).hasClass("closed")){
		$(".settings").toggle();
		$(this).removeClass("closed");
		$(this).html('<i class="fa fa-times-circle before fa-spin-hover"></i> Close');

	}else{
		$(".settings").toggle();
		$(this).html('<i class="fa fa-cog before fa-spin-hover"></i> Settings');
		$(this).addClass("closed");
	}
});