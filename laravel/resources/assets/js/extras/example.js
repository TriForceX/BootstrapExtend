/* ================================================= EXAMPLE FUNCTIONS ================================================= */

//Example form validate custom function
function JSvalidateCustom(field)
{
	if(field === 'Custom'){
		return true;
	}
	else{
		return false;
	}
}

//Example Google Translate Widget styling function
function JSgoogleTranslateStyles()
{
	var style;
	var css = '<style type="text/css" id="JSgoogleTranslateStyles">'+
				'.goog-te-combo,'+
				'.goog-te-banner *,'+
				'.goog-te-ftab *,'+
				'.goog-te-menu *,'+
				'.goog-te-menu2 *,'+
				'.goog-te-balloon *{'+
				'	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;'+
				'	font-size: 12px !important;'+
				'}'+
				'.goog-te-menu-value span, '+
				'.goog-te-menu2-item span, '+
				'.goog-te-menu2-item-selected span{'+
				'	text-transform : capitalize !important;'+
				'}'+
				'</style>';
	
	//Menu iframe
	if((style = $('.goog-te-menu-frame').contents().find('body')).length){
		if($('.goog-te-menu-frame').contents().find('#JSgoogleTranslateStyles').length < 1){
			$('.goog-te-menu-frame').contents().find('body').prepend(css);
		}
	}
	else{
		setTimeout(JSgoogleTranslateStyles, 1000);
	}
}

/* ================================================= EXAMPLE FUNCTIONS ================================================= */

$(document).ready(function(){

/* ================================================= EXAMPLE DOCUMENT READY ================================================= */
	
	//Set language on the fly
	if(JSgetUrlParameter('lang-test')){
		JSmainLang = JSgetUrlParameter('lang-test');
	}
	
	//Example add language string
	JSlanguage['@test-title'] = { 'en' : 'Hello world!', 'es' : 'Hola mundo!' };
	
	//Example use language string
	console.log(JSlang('@test-title'));
	
	//Example lightGallery prev page
	$(document).on('onPrevPageChange.lg', function(event){
		window.location.href = $('.JSpagePrev').attr('href');
	});

	//Example lightGallery next page
	$(document).on('onNextPageChange.lg', function(event){
		window.location.href = $('.JSpageNext').attr('href'); 
	});
	
	//Example scroll to gallery page
	if (JSgetUrlParameter('page')){
		JSautoScroll(".JSlightGalleryExample",true,70);
	}
	
	//Example form validation
	$('.JSformExample').JSvalidateForm({
		noValidate: '#example-input-lastname',
		hasConfirm: true,
		customValidate: ['JSvalidateCustom', '#example-input-custom', 'Please fill the Custom Field.'],
		resetSubmit: true,
		errorStyling: true,
		modalSize: 'medium',
		modalAlign: 'top',
		modalAnimate: true,
	});
	
	//Example prevent title translation by Google
	$('title').addClass('notranslate');
	
	//Example test URL
	console.log('URL: '+JSmainUrl);
	
	//Example aditional exceptions for disabled links
	JScheckDisabledExceptions.push('#example');
	
	//Example aditional exceptions custom size & alignment
	JScheckDisabledAlignment = ['small','center'];
	
	//Example aditional exceptions custom size & alignment
	JScheckDisabledAnimate = true;
	
/* ================================================= EXAMPLE DOCUMENT READY ================================================= */

});

$(window).bind("load", function() {

/* ================================================= EXAMPLE WINDOWS LOAD ================================================= */
	
	//Example test progress bar on load
	$(".JSloadProgressTest .progress-bar").css("width", "100%");
	$(".JSloadProgressTest .progress-bar").attr("aria-valuenow","100");
	
	//Example Google Translate Widget styling
	JSgoogleTranslateStyles();
	
/* ================================================= EXAMPLE WINDOWS LOAD ================================================= */

});

$(document).on("JSresponsiveCode", function(event, bodyWidth, bodyHeight, bodyOrientation, bodyScreen){

/* ================================================= EXAMPLE RESPONSIVE CODE ================================================= */
	
	//Example size detection
	$("body").attr("window-size",bodyWidth+"x"+bodyHeight);
	
	//Example lower than tablet
	if (bodyWidth < bodyScreen.sm)
	{
		console.log('Tablet size and lower!');
	}
	
	//Example orientation
	if(bodyOrientation){ 
		$("body").attr("window-orientation","landscape");
	}
	else{ 
		$("body").attr("window-orientation","portrait");
	}
	
/* ================================================= EXAMPLE RESPONSIVE CODE ================================================= */

});

$(document).ajaxStart(function(){

/* ================================================= EXAMPLE AJAX START ================================================= */
	
	//Example console message
	console.log('Ajax Start...');
	
/* ================================================= EXAMPLE AJAX START ================================================= */

});

$(document).ajaxComplete(function() {

/* ================================================= EXAMPLE AJAX COMPLETE ================================================= */
	
	//Example console message
	console.log('Ajax Complete!');
	
/* ================================================= EXAMPLE AJAX COMPLETE ================================================= */

});
