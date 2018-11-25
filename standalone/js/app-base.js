/* ================================================= BASE FUNCTIONS ================================================= */

// Global variables
var JSmainUrl = '$global-url';
var JSisHome = JSexist($('*[data-js-home]'));
var JSisMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|BB10|PlayBook|MeeGo/i.test(navigator.userAgent);
var JShashTagExceptions = ['#carousel'];
var JShashTagAlignment = ['medium','top'];
var JShashTagAnimate = true;
var JSisNav = function(name, version)
			  {
					// Check plugin
					if($.fn.browser !== 'undefined')
					{
						var checkData = {
					 					'ie' 			: { 'name' : 'Microsoft Internet Explorer', 'internal' : $.browser.msie },
					 					'edge' 			: { 'name' : 'Microsoft Edge', 'internal' : '' },
					 					'chrome' 		: { 'name' : 'Chrome', 'internal' : $.browser.webkit },
					 					'firefox' 		: { 'name' : 'Firefox', 'internal' : $.browser.mozilla },
					 					'safari' 		: { 'name' : 'Safari', 'internal' : $.browser.webkit },
					 					'opera' 		: { 'name' : 'Opera', 'internal' : $.browser.opera },
										};
					
						var checkBrowser = $.browser.name === checkData[name].name;
						var checkVersion = version === undefined ? true : ($.browser.version == version);
						var checkInternal = checkData[name].internal === undefined ? true : (checkData[name].internal === true);
						var checkFinal = checkBrowser && checkVersion && checkInternal ? true : false;
					
						return checkFinal;
					}
			  };

// IE8 Undefined console fix
if (!window.console) console = {log: function() {}};

// IE10 viewport hack for Surface/desktop Windows 8 bug
(function(){
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }

})();

// Check attr function
$.fn.JShasAttr = function(name)
{  
	// Console Log
	JSconsole('[JS Function] Has Attr');
	
	return this.attr(name) !== undefined;
};

// Check outer height with padding/margin
$.fn.JSouterHeight = function()
{
	// Console Log
	JSconsole('[JS Function] Outer Height');
	
	if(!this[0]){ // Check value
		return null;
	}
	else{
		return this[0].getBoundingClientRect().height;
	}
};

// Check outer width with padding/margin
$.fn.JSouterWidth = function()
{
	// Console Log
	JSconsole('[JS Function] Outer Width');
	
	if(!this[0]){ // Check value
		return null;
	}
	else{
		return this[0].getBoundingClientRect().width;
	}
};

// Remove whitespaces between elements
$.fn.JShtmlClean = function()
{
	// Console Log
	JSconsole('[JS Function] HTML Clean');
	
    this.contents().filter(function() {
        if (this.nodeType !== 3) {
            $(this).JShtmlClean();
            return false;
        }
        else {
            this.textContent = $.trim(this.textContent);
            return !/\S/.test(this.nodeValue);
        }
    }).remove();
    return this;
};

// Form validate
$.fn.JSvalidateForm = function(options)
{	
	// Console Log
	JSconsole('[JS Function] Validate Form');
	
	var settings = $.extend({
		noValidate		: '',
		hasConfirm		: false,
		customValidate	: null,
		resetSubmit		: true,
		errorStyling	: true,
		modalSize		: 'medium',
		modalAlign		: 'top',
		modalAnimate	: true,
	}, options);
	
	$(this).submit(function(event){ 
		
		var size = settings.modalSize;
		var align = settings.modalAlign;
		var animate = settings.modalAnimate;
		
		if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
			size = 'medium';
		}

		if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
			align = 'top';
		}

		if(!animate && animate != false){ //Check value
			animate = true;
		}
		
		var formError = false;
		var formConfirmTitle = JSlang('$validate-confirm-title');
		var formConfirmText = JSlang('$validate-confirm-text');
		var formErrorTitle = JSlang('$validate-title');
		var formErrorText = {
							 'text'		: JSlang('$validate-normal'), 
							 'number'	: JSlang('$validate-number'), 
							 'tel'		: JSlang('$validate-tel'), 
							 'pass'		: JSlang('$validate-pass'), 
							 'email'	: JSlang('$validate-email'),
							 'search'	: JSlang('$validate-search'),
							 'checkbox'	: JSlang('$validate-checkbox'),
							 'radio'	: JSlang('$validate-radio'),
							 'textarea'	: JSlang('$validate-textarea'),
							 'select'	: JSlang('$validate-select'),
							 'file'		: JSlang('$validate-file'),
							};
		
		var formInputValidation = function(element){
			switch(element.attr('type')){
				case 'text':
					if (!JSvalidateEmpty(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.text;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				case 'number':
					if (!JSvalidateEmpty(element.val()) || !JSvalidateNumber(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.number;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				case 'tel':
					if (!JSvalidateEmpty(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.tel;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				case 'email':
					if (!JSvalidateEmpty(element.val()) || !JSvalidateEmail(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.email;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				case 'password':
					if (!JSvalidateEmpty(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.pass;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				case 'search':
					if (!JSvalidateEmpty(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.search;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				case 'file':
					if (!JSvalidateEmpty(element.val())) { 
						if(settings.errorStyling){ element.addClass('is-invalid').removeClass('is-valid'); }
						formError = formErrorText.file;
					}
					else{
						if(settings.errorStyling){ element.removeClass('is-invalid').addClass('is-valid'); }
					}
					break;
				default: break;
			}
		};

		// Select inputs
		$(this).find('select').not(settings.noValidate).each(function(){
			if (!JSvalidateEmpty($(this).find('option:selected').attr('value'))) { 
				if(settings.errorStyling){ $(this).addClass('is-invalid').removeClass('is-valid'); }
				formError = formErrorText.select;
			}
			else{
				if(settings.errorStyling){ $(this).removeClass('is-invalid').addClass('is-valid'); }
			}
		});
		
		// Textarea inputs
		$(this).find('textarea').not(settings.noValidate).each(function(){
			if (!JSvalidateEmpty($.trim($(this).val()))) { 
				if(settings.errorStyling){ $(this).addClass('is-invalid').removeClass('is-valid'); }
				formError = formErrorText.textarea;
			}
			else{
				if(settings.errorStyling){ $(this).removeClass('is-invalid').addClass('is-valid'); }
			}
		});
		
		// Checkbox & radio group inputs
		$(this).find('[data-group="checkbox"], [data-group="radio"]').not(settings.noValidate).each(function(){
			var type = $(this).data('group');
			var item = $(this).find('input[type="'+type+'"]');
			var check = false;
		
			for (var i = item.length -1; i >= 0; i--){
				if(item.eq(i).is(":checked")){
					check = true;
				}
			}
			if(!check){
				if(settings.errorStyling){ item.addClass('is-invalid').removeClass('is-valid'); }
				formError = formErrorText[type];
			}
			else{
				if(settings.errorStyling){ item.removeClass('is-invalid').addClass('is-valid'); }
			}
		});
		
		// Checkbox & radio input addons
		$(this).find('[data-group="checkbox-addon"], [data-group="radio-addon"]').not(settings.noValidate).each(function(){
			var type = $(this).data('group').replace(/-addon/g,'');
			var item = $(this).find('input[type="'+type+'"]');
			var check = false;
		
			for (var i = item.length -1; i >= 0; i--){
				if(item.eq(i).is(":checked")){
					check = true;
				}
			}
			if(!check){
				if(settings.errorStyling){ item.addClass('is-invalid').removeClass('is-valid'); }
				formError = formErrorText[type];
			}
			else{
				$(this).find('input[type="'+type+'"]:checked').parents('.input-group').find('input').each(function(){
					formInputValidation($(this));
				});
			}
		});
		
		// Input validation
		$(this).find('.form-group').not('[data-group="checkbox-addon"], [data-group="radio-addon"]').find('input').not(settings.noValidate).each(function(){
			formInputValidation($(this));
		});
		
		// Custom validation
		if(settings.customValidate !== null){
			var CVFunction = settings.customValidate[0];
			var CVInput = settings.customValidate[1];
			var CVMessage = settings.customValidate[2];
			
			$(CVInput).each(function(){
				if (!window[CVFunction]($(this).val())) { 
					if(settings.errorStyling){ $(this).addClass('is-invalid').removeClass('is-valid'); }
					formError = CVMessage;
				}
				else{
					if(settings.errorStyling){ $(this).removeClass('is-invalid').addClass('is-valid'); }
				}
			});
		}
		
		// Send error
		if(formError !== false)
		{
			// Check plugin
			if(typeof bootbox !== 'undefined')
			{
				// Bootbox alert
				bootbox.alert({
					title: formErrorTitle,
					message: formError,
					size: size,
					backdrop: true,
					className: (animate == 'alternative' ? 'nofade '+align : align),
					animate: (animate == 'alternative' ? true : animate),
				});
			}
			event.preventDefault();
		}
		
		// Check Confirm mode
		if(settings.hasConfirm && formError === false)
		{
			var formElement = $(this);
			event.preventDefault();
			
			// Check plugin
			if(typeof bootbox !== 'undefined')
			{
				// Bootbox alert
				bootbox.confirm({
					title: formConfirmTitle,
					message: formConfirmText,
					size: size,
					backdrop: true,
					className: (animate == 'alternative' ? 'nofade '+align : align),
					animate: (animate == 'alternative' ? true : animate),
					callback: function(result){
						if(result){
							formElement.unbind("submit").submit();
							if(settings.resetSubmit){
								formElement.trigger('reset');
								if(settings.errorStyling){ formElement.find('.is-invalid').removeClass('is-invalid'); }
								if(settings.errorStyling){ formElement.find('.is-valid').removeClass('is-valid'); }
								formElement.find('input[type="checkbox"]').prop('checked', false).parent().removeClass('active');
								formElement.find('input[type="radio"]').prop('checked', false).parent().removeClass('active');
								formElement.find('.form-group input[type="file"]').each(function(){
									var placeholder = $(this).JShasAttr('placeholder') ? $(this).attr('placeholder') : '';
									$(this).parent().find('.custom-file-label').html(placeholder);
								});
							}
							formElement.JSvalidateForm({
								noValidate: settings.noValidate,
								hasConfirm: settings.hasConfirm,
							});
						}
					}
				});
			}
		}
	});
};

// Form validate email
function JSvalidateEmail(field)
{
	// Console Log
	JSconsole('[JS Function] Validate Email');
	
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
	if (!emailReg.test(field)){
        return false;
    }else{
        return true;
    }
}

// Form validate numbers
function JSvalidateNumber(field)
{
	// Console Log
	JSconsole('[JS Function] Validate Number');
	
    var numberReg = /^-?\d+(\.\d+)?$/;
    
	if (!numberReg.test(field)){
        return false;
    }else{
        return true;
    }
}

// Form validate empty
function JSvalidateEmpty(field)
{
	// Console Log
	JSconsole('[JS Function] Validate Empty');
	
    if(!field || /^\s*$/.test(field)){
    	return false;
    }
    else{
        return true;
    }
}

// Convert string to boolean
function JStoBoolean(value)
{
	// Console Log
	JSconsole('[JS Function] Convert To Boolean');
	
    var strValue = String(value).toLowerCase();
    strValue = ((!isNaN(strValue) && strValue !== '0') &&
        strValue !== undefined &&
        strValue !== null &&
        strValue != '') ? '1' : strValue;
    return strValue === 'true' || strValue === '1' ? true : false;
}

// Get max width between elements
function JSgetMaxWidth(elems, getRect)
{
	// Console Log
	JSconsole('[JS Function] Get Max Width');
	
    return Math.max.apply(null, elems.map(function()
    {
		if(getRect === true){
			return $(this).JSouterWidth();
		}
		else{
			return $(this).outerWidth();
		}
    }).get());
}

// Get max height between elements
function JSgetMaxHeight(elems, getRect)
{
	// Console Log
	JSconsole('[JS Function] Get Max Height');
	
    return Math.max.apply(null, elems.map(function()
    {
		if(getRect === true){
			return $(this).JSouterHeight();
		}
		else{
			return $(this).outerHeight();
		}
    }).get());
}

// Responsive Code
function JSresponsiveCode()
{
	var bodyWidth = document.body.clientWidth; //$(window).width();
	var bodyHeight = $(window).height();
	var bodyOrientation = {'landscape'	: bodyWidth > bodyHeight ? true : false,
					  	   'portrait'	: bodyWidth < bodyHeight ? true : false}; 
	var bodyScreen = {'xs'	: parseFloat('$screen-xs'), //480,
					  'sm'	: parseFloat('$screen-sm'), //768,
					  'md'	: parseFloat('$screen-md'), //992,
					  'lg'	: parseFloat('$screen-lg'), //1200,
					  'xl'	: parseFloat('$screen-xl')}; //1920,

	if(bodyWidth)
	{
		// Send data to event
		$(document).trigger("JSresponsiveCode", [bodyWidth, bodyHeight, bodyOrientation, bodyScreen]);
	}
	else
	{
		window.setTimeout(JSresponsiveCode, 30);
	}
}

$(window).bind("load", JSresponsiveCode);
$(window).bind("resize", JSresponsiveCode);
$(window).bind("orientationchange", JSresponsiveCode);

// LightGallery destroy function
function JSdestroyLightGallery()
{
	// Console Log
	JSconsole('[JS Function] Destroy Light Gallery');
	
	// Check plugin
	if(typeof $.fn.lightGallery !== 'undefined')
	{
		$('.JSlightGallery').each(function(){ 
			$(this).off('onBeforeOpen.lg onBeforeSlide.lg onAfterOpen.lg onAfterSlide.lg onCloseAfter.lg').data('lightGallery').destroy(true);
		}); 
	}
}
// Lightgallery load function
function JSloadLightGallery()
{	
	// Console Log
	JSconsole('[JS Function] Load Light Gallery');
	
	// Check plugin
	if(typeof $.fn.lightGallery !== 'undefined')
	{
		$('.JSlightGallery').each(function(){ 
			var galSelector = $(this).data('lg-item') === 'auto' ? 'a' : $(this).data('lg-item');
			var galHideDelay = $(this).data('lg-hide-delay') ? $(this).data('lg-hide-delay') : 3000;
			var galThumbnail = $(this).data('lg-thumb');
			var galDownload = $(this).data('lg-download');
			var galAutoplay = $(this).data('lg-autoplay');
			var galLoop = $(this).data('lg-loop');
			var galShare = $(this).data('lg-share');
			var galGalleryMode = $(this).data('lg-gallery');
			var galPageTotal = parseInt($(this).data('lg-page-total'));
			var galPageCurrent = parseInt($(this).data('lg-page-current'));
			var galLoadThumb = JSmainUrl+'/resources/lightgallery/img/loading.gif';
			var galID = $('.JSlightGallery').index(this);
			
			// Set
			if($(this).data('lg-title') !== 'auto')
			{
				$(this).find(galSelector).not('.lg-thumb-prev, .lg-thumb-next').attr('title', $(this).data('lg-title'));
			}
			
			// Set
			if(galGalleryMode === true)
			{
				$(this).addClass('JSlightGalleryMode');
			}
			
			// Events
			if($(this).hasClass('JSlightGalleryMode') && galPageTotal > 1)
			{
				var total;
				var totalSlide;
				var current;
				var currentSlide;
				
				if(!JSexist($('.lg-thumb-prev')) && !JSexist($('.lg-thumb-next')))
				{
					$('.JSlightGalleryMode').prepend('<div class="lg-thumb-prev" href="'+galLoadThumb+'" title="'+JSlang('$lgtitle-prev-text')+'"><img src="#"></div>');
					$('.JSlightGalleryMode').append('<div class="lg-thumb-next" href="'+galLoadThumb+'" title="'+JSlang('$lgtitle-next-text')+'"><img src="#"></div>');
				}

				$(this).on('onBeforeOpen.lg',function(){
					$('#lg-counter').addClass('invisible');
				});

				$(this).on('onBeforeSlide.lg',function(){
					$('#lg-counter').addClass('invisible');
				});

				$(this).on('onAfterOpen.lg',function(){
					var galThumbPrevHTML = '<div><i class="fas fa-angle-left"></i><strong>'+JSlang('$lgtitle-prev-button')+'</strong></div>';
					var galThumbNextHTML = '<div><i class="fas fa-angle-right"></i><strong>'+JSlang('$lgtitle-next-button')+'</strong></div>';
					
					$('.lg-outer .lg-thumb .lg-thumb-item:first-child').addClass('JSlightGalleryNoBorder').append(galThumbPrevHTML);
					$('.lg-outer .lg-thumb .lg-thumb-item:last-child').addClass('JSlightGalleryNoBorder').append(galThumbNextHTML);

					$('#lg-counter').prepend('<span id="lg-counter-current-new">1</span>');
					$('#lg-counter').append('<span id="lg-counter-all-new">1</span>');

					$('#lg-counter-all').addClass('d-none');
					$('#lg-counter-current').addClass('d-none');

					total = parseInt($('#lg-counter-all').html()); 
					totalSlide = total <= 2 ? 1 : (total - 2);
					current = parseInt($('#lg-counter-current').html()); 
					currentSlide = current <= 2 ? 1 : (current == total ? totalSlide : (current - 1));

					$('#lg-counter-all-new').html(totalSlide);
					$('#lg-counter-current-new').html(currentSlide);
					$('#lg-counter').removeClass('invisible');
					
					// Prev & Next Pages
					if(galPageCurrent == 1)
					{
						$('.JSlightGalleryNoBorder:first-child').addClass('invisible');
						$('.JSlightGalleryNoBorder:last-child').removeClass('invisible');
					}
					else if(galPageCurrent == galPageTotal)
					{
						$('.JSlightGalleryNoBorder:first-child').removeClass('invisible');
						$('.JSlightGalleryNoBorder:last-child').addClass('invisible');
					}
					else
					{
						$('.JSlightGalleryNoBorder:first-child').removeClass('invisible');
						$('.JSlightGalleryNoBorder:last-child').removeClass('invisible');
					}

					// Prev & Next Controls
					if(currentSlide == 1)
					{
						$('.lg-actions .lg-prev').addClass('invisible');
						$('.lg-actions .lg-next').removeClass('invisible');
					}
					else if(currentSlide > 1 && currentSlide < totalSlide)
					{
						$('.lg-actions .lg-prev').removeClass('invisible');
						$('.lg-actions .lg-next').removeClass('invisible');
					}
					else if(currentSlide >= totalSlide)
					{
						$('.lg-actions .lg-prev').removeClass('invisible');
						$('.lg-actions .lg-next').addClass('invisible');
					}
					else
					{
						$('.lg-actions .lg-prev').removeClass('invisible');
						$('.lg-actions .lg-next').removeClass('invisible');
					}
				});

				$(this).on('onAfterSlide.lg',function(){
					current = parseInt($('#lg-counter-current').html()); 
					currentSlide = current <= 2 ? 1 : (current == total ? totalSlide : (current - 1));

					$('#lg-counter-current-new').html(currentSlide);
					$('#lg-counter').removeClass('invisible');
					
					// Prev & Next Controls
					if(currentSlide == 1)
					{
						$('.lg-actions .lg-prev').addClass('invisible');
						$('.lg-actions .lg-next').removeClass('invisible');

						if(current == 1) // Close
						{
							if(galPageCurrent == 1)
							{
								$('.lg-outer .lg-sub-html').html(JSlang('$lgtitle-gallery-close'));
							}
							else // Redirect
							{
								$('.JSlightGallery').addClass('lightGalleryAuto');
								$('.JSlightGallery').addClass('lightGalleryAutoPrev');
							}
							setTimeout(function(){ $('.lg-toolbar .lg-close').trigger('click'); }, 1500);
						}
					}
					else if(currentSlide > 1 && currentSlide < totalSlide)
					{
						$('.lg-actions .lg-prev').removeClass('invisible');
						$('.lg-actions .lg-next').removeClass('invisible');
					}
					else if(currentSlide >= totalSlide)
					{
						$('.lg-actions .lg-prev').removeClass('invisible');
						$('.lg-actions .lg-next').addClass('invisible');

						if(current == total) // Close
						{
							if(galPageCurrent == galPageTotal)
							{
								$('.lg-outer .lg-sub-html').html(JSlang('$lgtitle-gallery-close'));
							}
							else // Redirect
							{
								$('.JSlightGallery').addClass('lightGalleryAuto');
								$('.JSlightGallery').addClass('lightGalleryAutoNext');
							}
							setTimeout(function(){ $('.lg-toolbar .lg-close').trigger('click'); }, 1500);
						}
					}
					else
					{
						$('.lg-actions .lg-prev').removeClass('invisible');
						$('.lg-actions .lg-next').removeClass('invisible');
					}
				});

				$(this).on('onCloseAfter.lg',function(){
					if($(this).hasClass('lightGalleryAuto'))
					{
						if($(this).hasClass('lightGalleryAutoNext')) // Stuff to do on close
						{
							$(document).trigger('onNextPageChange.lg'); // Send data to event
						}
						else if($(this).hasClass('lightGalleryAutoPrev')) // Stuff to do on close
						{
							$(document).trigger('onPrevPageChange.lg'); // Send data to event
						}
						$(this).removeClass('lightGalleryAuto');
						$(this).removeClass('lightGalleryAutoPrev');
						$(this).removeClass('lightGalleryAutoNext');
					}
				});
			}
			
			// Launch
			$(this).lightGallery({
				selector: galSelector+', .lg-thumb-prev, .lg-thumb-next', 
				thumbnail: galThumbnail,
				download: galDownload,
				autoplayControls: galAutoplay,
				hash: galGalleryMode === true ? false : true,
				loop: galLoop,
				share: galShare,
				galleryId: galID,
				hideBarsDelay: galHideDelay,
			});
		});
	}
}

// ImgLiquid auto-fill background function
function JSimgFill(container)
{	
	// Console Log
	JSconsole('[JS Function] Img Fill');
	
	var bgData = new Array();
	var bgVertical;
	var bgHorizontal;
	var bgFill;
	var bgFillSize;
	
	bgData = $(container).data('img-fill').split(' ');
	
	// Check hotizontal align
	if(!bgData[0]){ // Check value
		bgData[0] = 'center';
	}
	
	// Check vertical align
	if(!bgData[1]){ // Check value
		bgData[1] = 'center';
	}
	
	// Check fill
	if(!bgData[2]){ // Check value
		bgData[2] = 'true';
	}
	
	// Set variables
	bgHorizontal = bgData[0];
	bgVertical = bgData[1];
	bgFill = bgData[2].indexOf('%') >= 0 || bgData[2].indexOf('px') >= 0 || bgData[2] === 'contain' ? false : true;
	bgFillSize = bgData[2].indexOf('%') >= 0 || bgData[2].indexOf('px') >= 0 ? parseFloat(bgData[2].replace(/\x25|px/g, '')) : false;
	
	// Check plugin
	if($.fn.imgLiquid !== 'undefined')
	{
		// Set changes
		$(container).imgLiquid({ 
			horizontalAlign: bgHorizontal,
			verticalAlign: bgVertical, 
			fill: bgFill,
		});
	}
	
	// Set alternative fill
	if(bgFillSize)
	{
		$(container).css('background-size', (bgFillSize == 100 ? 'cover' : bgData[2]));
	}
}

// Get element height changes
function JSelementHeightChange(elm, callback)
{
	// Console Log
	JSconsole('[JS Function] Element Height Change');
	
	var lastHeight = $(elm).height(), newHeight;
	(function run(){
		newHeight = $(elm).height();
		if(lastHeight !== newHeight){
			callback();
		}
		
		lastHeight = newHeight;

		if(elm.JSelementHeightChangeTimer){
		  clearTimeout(elm.JSelementHeightChangeTimer);
		}

		elm.JSelementHeightChangeTimer = setTimeout(run, 200);
	})();
	
	// Usage
	/*if(JSexist($(".container")))
	{
		JSelementHeightChange(".container", function(){
			console.log('Container height has changed');
			JSresponsiveCode();
		});
	}*/
}

// Text cut function one line
function JStextCut(container)
{	
	// Console Log
	JSconsole('[JS Function] Text Cut One Line');
	
	$(container).each(function(){
		$(this).addClass('JStextCutElem');
		$(this).html('<div><div>'+$(this).html()+'</div></div>');
	});
}

// Text cut function multi line
function JStextCutMulti(container)
{
	// Console Log
	JSconsole('[JS Function] Text Cut Multi Line');
	
    var wordArray = container.html().split(' ');
	while(container.prop('scrollHeight') > container.height())
	{
		wordArray.pop();
		container.html(wordArray.join(' ') + '...');
	}
}

// Text auto size function
function JStextSize(container)
{
	// Console Log
	JSconsole('[JS Function] Text Size');
	
	$(container).css('font-size','');
	$(container).each(function (i,box){
		var width = $(box).width(),
			html = '<span style="white-space:nowrap"></span>',
			line = $(box).wrapInner(html).children()[0],
			n = $(container).css('font-size').replace(/px|em/g,'');

		$(box).css('font-size',n);

		while($(line).width() > width){
			$(box).css('font-size', --n);
		}

		$(box).text($(line).text());
	});
}

// Show alert modal box using BootBox plugin
function JSmodalAlert(title, text, size, align, animate)
{
	// Console Log
	JSconsole('[JS Function] Modal Alert');
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	// Check plugin
	if(typeof bootbox !== 'undefined')
	{
		// Bootbox alert
		bootbox.alert({
			title: title,
			message: text,
			size: size,
			backdrop: true,
			className: (animate == 'alternative' ? 'nofade '+align : align),
			animate: (animate == 'alternative' ? true : animate),
		});
	}
}

// Show alert modal box using BootBox plugin (Content)
function JSmodalContent(title, element, size, align, animate)
{
	// Console Log
	JSconsole('[JS Function] Modal Content');
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	// Check plugin
	if(typeof bootbox !== 'undefined')
	{
		// Bootbox alert
		bootbox.alert({
			title: title,
			message: $(element).html(),
			size: size,
			backdrop: true,
			className: (animate == 'alternative' ? 'nofade '+align : align),
			animate: (animate == 'alternative' ? true : animate),
		});
	}
}

// Show alert modal box using BootBox plugin (Ajax)
function JSmodalAjax(title, url, loading, size, align, animate)
{
	// Console Log
	JSconsole('[JS Function] Modal Ajax');
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	if(!loading){ // Check value
		loading = false;
	}
	
	$.ajax({
		url: url,
		type: 'GET', 
		dataType: 'html',
		beforeSend: function(){
			// Loading
			JSconsole('[JS Function] Modal Ajax Loading ...');
			// Show loading colored icon
			if(loading){
				$("body").append("<div class='JSloading "+loading+"'></div>");
			}
		},
		success: function(data){  
			// Loaded
			JSconsole("[JS Function] Modal Ajax Loaded!");
			// Check plugin
			if(typeof bootbox !== 'undefined')
			{
				// Bootbox alert
				bootbox.alert({
					title: title,
					message: data,
					size: size,
					backdrop: true,
					className: (animate == 'alternative' ? 'nofade '+align : align),
					animate: (animate == 'alternative' ? true : animate),
				});
			}
			// Remove loading icon
			if(loading){
				$(".JSloading").remove();
			}
		},
		error: function(xhr, status, error){
			// Error Text
			var text = "";
			// Check
			if(!(xhr.responseText === undefined || xhr.responseText === null || xhr.responseText == '')){
				text = "\n---------------\n"+xhr.responseText;
			}
			// Error log
			JSconsole("[JS Function] Modal Ajax Error! ("+xhr.status+")"+text);
			// Remove loading icon
			if(loading){
				$(".JSloading").remove();
			}
		}
	});
}

// YouTube get ID from URL
function JSyouTubeParser(url)
{
	// Console Log
	JSconsole('[JS Function] YouTube URL Parser');
	
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
	
	// http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
	// http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o
	// http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
	// http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
	// http://www.youtube.com/embed/0zM3nApSvMg?rel=0
	// http://www.youtube.com/watch?v=0zM3nApSvMg
	// http://youtu.be/0zM3nApSvMg
}
// Vimemo get ID from URL
function JSvimeoParser(url)
{
	// Console Log
	JSconsole('[JS Function] Vimeo URL Parser');
	
    var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    var match = url.match(regExp);
    return match[5];
	
	// http://vimeo.com/*
	// http://vimeo.com/channels/*/*
	// http://vimeo.com/groups/*/videos/*
}

// Facebook get ID from URL
function JSfacebookParser(url)
{
	// Console Log
	JSconsole('[JS Function] Facebook URL Parser');
	
    var regExp = /videos\/(\d+)+|v=(\d+)|video_id=(\d+)|vb.\d+\/(\d+)/;
    var match = url.match(regExp);
    return match[1] !== undefined ? match[1] : 
		   match[2] !== undefined ? match[2] : 
		   match[3] !== undefined ? match[3] : undefined;
	
	// https://www.facebook.com/revistapegn/videos/10153713928657635/
	// https://www.facebook.com/video.php?v=100000000000000
	// https://www.facebook.com/username/videos/vb.100000724987616/709948045706022/?type=2&theater
}

// Video launch modal box function
function JSvideoLaunch(title, url, share, autoplay, size, align, animate)
{	
	// Console Log
	JSconsole('[JS Function] Video Launch');
	
	if(!title){ // Check value
		title = false;
	}
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	if(!share){ // Check value
		share = false;
	}
	
	if(!autoplay){ // Check value
		autoplay = false;
	}
	
	var ID;
	var embedUrl;
	var embedShare;
	var embedShareTitle = JSlang('$videolaunch-title');
	var embedShareText = JSlang('$videolaunch-text');
	var embedAutoPlay = '';
	
	if(url.indexOf('youtube') >= 0)
	{
		ID = JSyouTubeParser(url);
		if(autoplay){
			embedAutoPlay = '&autoplay=1';
		}
		embedUrl = 'https://www.youtube.com/embed/'+ID+'?rel=0'+embedAutoPlay;
		embedShare = 'https://youtu.be/'+ID;
	}
	else if(url.indexOf('vimeo') >= 0)
	{
		ID = JSvimeoParser(url);
		if(autoplay){
			embedAutoPlay = '?autoplay=1';
		}
		embedUrl = 'https://player.vimeo.com/video/'+ID+''+embedAutoPlay;
		embedShare = 'https://vimeo.com/'+ID;
	}
	else if(url.indexOf('facebook') >= 0)
	{
		//ID = JSfacebookParser(url);
		ID = encodeURIComponent(url);
		if(autoplay){
			embedAutoPlay = '&autoplay=1';
		}
		//embedUrl = 'https://www.facebook.com/video/embed?video_id='+ID+'&show_text=0'+embedAutoPlay;
		embedUrl = 'https://www.facebook.com/plugins/video.php?href='+ID+'&show_text=0&mute=0&'+embedAutoPlay;
		embedShare = url;
	}
	
	var content = '<div class="JSvideoLaunchIframe embed-responsive embed-responsive embed-responsive-16by9">'+
			  		'	<iframe class="embed-responsive-item" src="'+embedUrl+'" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>'+
			  		'</div>';
	
	if(share)
	{
		content = content+'<a class="JSvideoLaunchURL" data-clipboard-action="copy" data-clipboard-target=".JSvideoLaunchCopy">'+
							'	<div class="JSvideoLaunchButton">'+embedShareTitle+' <i class="fas fa-angle-right"></i><strong></div>'+
							'	<div class="JSvideoLaunchText">'+embedShare+'</div>'+
							'	<div class="JSvideoLaunchCopy">'+embedShare+'</div>'+
							'</a>';
	}
	
	// Check plugin
	if(typeof bootbox !== 'undefined')
	{
		bootbox.alert({
			title: title,
			message: content,
			size: size,
			backdrop: true,
			className: (animate == 'alternative' ? 'nofade '+align : align),
			animate: (animate == 'alternative' ? true : animate),
		}).on("shown.bs.modal", function(){
			// Modify facebook src
			if (url.indexOf('facebook') >= 0)
			{
				var JSvideoLaunchElem = $('.JSvideoLaunchIframe iframe');
				var JSvideoLaunchData = {'url' 		: JSvideoLaunchElem.attr('src'),
										 'width'	: parseInt(JSvideoLaunchElem.width()), 
										 'height'	: parseInt(JSvideoLaunchElem.height())};
				
				JSvideoLaunchElem.attr('src', JSvideoLaunchData['url']+'&width='+JSvideoLaunchData['width']+'&height='+JSvideoLaunchData['height']);
			}
		})
	}

	// Tooltip load
	$('.JSvideoLaunchText').tooltip({
		title: embedShareText,
		placement: 'bottom',
		trigger: 'manual',
	});

	// Check plugin
	if(typeof ClipboardJS !== 'undefined')
	{
		// Clipboard
		var clipboard = new ClipboardJS('.JSvideoLaunchURL');

		clipboard.on('success', function(){
			$('.JSvideoLaunchText').tooltip('show');
		});

		clipboard.on('error', function(){
			$('.JSvideoLaunchURL').attr('target','blank');
			$('.JSvideoLaunchURL').attr('href',embedShare);
		});
	}
	else
	{
		$('.JSvideoLaunchURL').attr('target','blank');
		$('.JSvideoLaunchURL').attr('href',embedShare);
	}
}

// Capitalize first function
function JScapitalizeFirst(string)
{
	// Console Log
	JSconsole('[JS Function] Capitalize First');
	
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Convert to slug function
function JStoSlug(string)
{
	// Console Log
	JSconsole('[JS Function] Convert To Slug');
	
	return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
}

// Auto scroll function
function JSautoScroll(element, animated, distance)
{
	// Console Log
	JSconsole('[JS Function] Auto Scroll');
	
	var target = $(element);
	
	if(!animated){ // Check value
		animated = $(element).data('scroll-animated') < 500 ? 500 : $(element).data('scroll-animated');
	}
	else{
		animated = animated < 500 ? 500 : animated;
	}
	
	if(!distance){ // Check value
		distance = $(element).data('scroll-distance') ? $(element).data('scroll-distance') : 0;
	}

    if(animated){
        $('html, body').animate({scrollTop: (target.offset().top - distance)}, animated);
    }
    else{
        $('html, body').scrollTop(target.offset().top - distance);
    }
}

// Disable right click menu
function JSdisabledClick(element, title, message, size, align, animate)
{
	// Console Log
	JSconsole('[JS Function] Check Disabled Click');
	
	if(!title){ // Check value
		title = false;
	}
	
	if(!message){ // Check value
		message = false;
	}
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	$(document).on('contextmenu', element, function(e){
		if(title && message)
		{
			// Check plugin
			if(typeof bootbox !== 'undefined')
			{
				// Bootbox alert
				bootbox.alert({
					title: title,
					message: message,
					size: size,
					backdrop: true,
					className: (animate == 'alternative' ? 'nofade '+align : align),
					animate: (animate == 'alternative' ? true : animate),
				});
			}
		}
		e.preventDefault();
	});
}

// Get URL parameter from URL (PHP $_GET like)
function JSgetUrlParameter(sParam)
{
	// Console Log
	JSconsole('[JS Function] Get URL Parameter');
	
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
						sParameterName,
						i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}
// Get URL parameter from Script SRC (PHP $_GET like)
function JSgetSrcParameter(sParam)
{
	// Console Log
	JSconsole('[JS Function] Get Source Parameter');
	
	var scripts = document.getElementsByTagName('script');
	var index = scripts.length - 1;
	var myScript = scripts[index];
	var queryString = myScript.src.replace(/^[^\?]+\??/,'');

	var sPageURL = queryString,
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}

// Convert strings to links function
function JSlinkify(inputText)
{
	// Console Log
	JSconsole('[JS Function] Linkify');
	
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    // URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    // URLs starting with "www." (without // before it, or itd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    // Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

// Remove HTML tags function
function JSstripTags(container, items)
{
	// Console Log
	JSconsole('[JS Function] Strip Tags');
	
	container.find("*").not(items).each(function() {
		$(this).remove();
	});
}

// Check hasthag disabled links function
function JShashTag(string)
{	
	// Console Log
	JSconsole('[JS Function] Check Hash Tag');
	
	var textUrl = string;
	var exceptions = JShashTagExceptions;
	var size = JShashTagAlignment[0];
	var align = JShashTagAlignment[1];
	var animate = JShashTagAnimate;
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	// Exception 1
	for (var i = exceptions.length - 1; i >= 0; --i){
		if (textUrl.indexOf(exceptions[i]) != -1){
			return true;
		}
	}

	// Exception 2
	if(textUrl == '#' || !textUrl.split('#')[1]){
		return false;
	}
	else{
		if(textUrl.indexOf(window.location.host) <= 0){
			// Show alert
			var section = textUrl.split('#')[1].replace(/-/g,' ');
			// Check plugin
			if(typeof bootbox !== 'undefined')
			{
				// Bootbox alert
				bootbox.alert({
					title: section,
					message: JSlang('$disabled-text'),
					size: size,
					backdrop: true,
					className: (animate == 'alternative' ? 'nofade '+align : align),
					animate: (animate == 'alternative' ? true : animate),
				});
			}
			return false;
		}
		else{
			return true;
		}
	}
}

// Window pop-up function
function JSwindowPopup(element, errortitle, errormsg)
{	
	// Console Log
	JSconsole('[JS Function] Window Pop-Up');
	
	var size = $(element).data('win-modal-size');
	var align = $(element).data('win-modal-align');
	var animate = $(element).data('win-modal-animate');
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
    var leftPosition;
	var topPosition;
	var getUrl = $(element).data('win-url');
	var getSize = $(element).data('win-size').split('x');
	var getAlign = $(element).data('win-align').split(',');
	var getScroll = $(element).data('win-scroll');
	
	if(!errortitle){ // Check value
		errortitle = JSlang('$winpopup-title');
	}
	
	if(!errormsg){ // Check value
		errormsg = JSlang('$winpopup-text');
	}
	
	// Horizontal Align
	if(getAlign[0] === 'right'){
		leftPosition = window.screen.width;
	}
	else if(getAlign[0] === 'left'){
		leftPosition = 0;
	}
	else{
		leftPosition = (window.screen.width / 2) - ((getSize[0] / 2) + 10); // Allow for borders.
	}

	// Vertical Align
	if(getAlign[1] === 'top'){
		topPosition = 0;
	}
	else if(getAlign[1] === 'bottom'){
		topPosition = window.screen.height;
	}
	else{
		topPosition = (window.screen.height / 2) - ((getSize[1] / 2) + 50); // Allow for title and status bars.
	}
	
    // Open the window.
	var newWin = window.open(getUrl,"WindowPopupJS","status=no,"+
									"width="+getSize[0]+","+
									"height="+getSize[1]+","+
									"resizable=yes,"+
									"left="+leftPosition+","+
									"top="+topPosition+","+
									"screenX="+leftPosition+","+
									"screenY="+topPosition+","+
									"toolbar=no,"+
									"menubar=no,"+
									"scrollbars="+getScroll+","+
									"location=no,"+
									"directories=no");
	
	if(!newWin || newWin.closed || typeof newWin.closed == 'undefined') 
	{
		// Check plugin
		if(typeof bootbox !== 'undefined')
		{
			// Bootbox alert
			bootbox.alert({
				title: errortitle,
				message: errormsg,
				size: size,
				backdrop: true,
				className: (animate == 'alternative' ? 'nofade '+align : align),
				animate: (animate == 'alternative' ? true : animate),
			});
		}
	}
}

// Map launch function
function JSmapLaunch(element)
{	
	// Console Log
	JSconsole('[JS Function] Map Launch');
	
	var size = $(element).data('map-modal-size');
	var align = $(element).data('map-modal-align');
	var animate = $(element).data('map-modal-animate');
	
	if(!size || !size.match(/\b(small|medium|large|extra-large)\b/)){ // Check value
		size = 'medium';
	}
	
	if(!align || !align.match(/\b(top|bottom|left|center|right)\b/)){ // Check value
		align = 'top';
	}
	
	if(!animate && animate != false){ // Check value
		animate = true;
	}
	
	var mapContent;
	var mapTitle = JSlang('$maplaunch-title');
	var mapText = JSlang('$maplaunch-text');
	var mapIcon1 = JSmainUrl+'/img/base/maplaunch/google-maps.png';
	var mapIcon2 = JSmainUrl+'/img/base/maplaunch/waze.png';
	var mapCoords1 = $(element).data('map-coords-1').split(',');
	var mapCoords2 = $(element).data('map-coords-2').split(',');
	var mapIframe = $(element).data('map-iframe');
	var mapAddress = $(element).data('map-address');
	var mapAddressUrl = encodeURI(mapAddress).replace(/%20/g,'+');
	var mapLaunchUrl1 = JSisMobile ? 'https://maps.google.com/maps?q='+mapCoords1[0]+','+mapCoords1[1]+','+mapCoords1[2]+'z' : 
										   'https://www.google.com/maps/search/'+mapAddressUrl+'/@'+mapCoords1[0]+','+mapCoords1[1]+','+mapCoords1[2]+'z';
	var mapLaunchUrl2 = JSisMobile ? 'waze://?ll='+mapCoords2[0]+','+mapCoords2[1]+'&navigate=yes' : 
										   'https://www.waze.com/livemap?zoom='+mapCoords2[2]+'&lat='+mapCoords2[0]+'&lon='+mapCoords2[1];
	
	if(mapIframe === undefined || mapIframe === null || mapIframe == ''){  // Check value
		mapIframe = false;
	}
	
	mapContentStyle1 = '<div class="JSmapLaunchInfo">'+
						'	<span class="badge badge-primary mb-2">'+mapText+'</span>'+
						'	<div class="JSmapLaunchIcons">'+
						'		<a href="'+mapLaunchUrl1+'" target="_blank">'+
						'			<img src="'+mapIcon1+'">'+
						'		</a>'+
						'		<a class="JSmapLaunchAlert" href="'+mapLaunchUrl2+'" target="_blank">'+
						'			<img src="'+mapIcon2+'">'+
						'		</a>'+
						'	</div>'+
						'	<div class="card card-header p-2 mb-0 mt-2">'+mapAddress+'</div>'+
						'</div>';
	
	mapContentStyle2 = '<div class="JSmapLaunchInfo">'+
						'	<div class="card card-header p-2 mb-3">'+mapAddress+'</div>'+
						'	<div class="JSmapLaunchIframe embed-responsive embed-responsive-16by9">'+
						'		<iframe class="embed-responsive-item" src="https://maps.google.com/maps?q='+mapAddressUrl+'&z='+mapCoords1[2]+'&output=embed" frameborder="0" allowfullscreen></iframe>'+
						'	</div>'+
						'	<span class="badge badge-primary mb-2">'+mapText+'</span>'+
						'	<div class="JSmapLaunchIcons small">'+
						'		<a href="'+mapLaunchUrl1+'" target="_blank">'+
						'			<img src="'+mapIcon1+'">'+
						'		</a>'+
						'		<a class="JSmapLaunchAlert" href="'+mapLaunchUrl2+'" target="_blank">'+
						'			<img src="'+mapIcon2+'">'+
						'		</a>'+
						'	</div>'+
						'</div>';
	
	// Check plugin
	if(typeof bootbox !== 'undefined')
	{
		// Bootbox alert
		bootbox.alert({
			title: mapTitle,
			message: mapIframe == false ? mapContentStyle1 : mapContentStyle2,
			size: size,
			backdrop: true,
			className: (animate == 'alternative' ? 'nofade '+align : align),
			animate: (animate == 'alternative' ? true : animate),
		});
	}
}

// Paginator group
function JSpaginator(container)
{
	// Console Log
	JSconsole('[JS Function] Paginator');
	
	$(container).each(function(){ 
		var limit = $(container).data('paginator-limit') ? $(container).data('paginator-limit') : 10;
		var limitMobile = $(container).data('paginator-limit-mobile') ? $(container).data('paginator-limit-mobile') : 5;
		var exceptions = $(container).data('paginator-exceptions') ? $(container).data('paginator-exceptions') : '';

		var items = $(this).find("a").not(exceptions);
		var amount = ((JSisMobile) ? limitMobile : limit);
		
		for(var i = 0; i < items.length; i+=amount)
		{
			if(items.slice(i, i+amount).hasClass("JSpageActive"))
			{
				items.slice(i, i+amount).wrapAll("<div class='JSpageGroup JSpageActive'></div>");
			}
			else
			{
				items.slice(i, i+amount).wrapAll("<div class='JSpageGroup'></div>");
			}
		}

		$(this).find(".JSpageItems .JSpageGroup.JSpageActive").prev().addClass("JSpageGroupPrev");
		$(this).find(".JSpageItems .JSpageGroup.JSpageActive").next().addClass("JSpageGroupNext");
	});
}

// Paint & clean table
function JSpaintTable(container)
{
	// Console Log
	JSconsole('[JS Function] Paint Table');
	
	var paintCleanTable = container.data('paint-clean-table');
	var paintCleanCell = container.data('paint-clean-cell');
	var paintGroup = container.data('paint-group');
	var paintGroupType = container.data('paint-group-type');
	var paintHeader = container.data('paint-header');
	var paintHeaderAlt = container.data('paint-header-alt');
	var paintEmpty = container.data('paint-empty');

	var getEmpty = paintEmpty ? paintEmpty : 'none';
	var getType = paintGroupType == 'even' ? 'tr:nth-child(even)' : 'tr:nth-child(odd)';
	var getHeader = paintHeader ? paintHeaderAlt ? ':first-child, :nth-child(2)' : ':first-child' : '';
	
	container.find('table').each(function(){
		// Clean table
		$(this).attr('width','0');
		$(this).attr('border','0');
		$(this).attr('cellpadding','0');
		$(this).attr('cellspacing','0');
		if(paintCleanTable){ $(this).removeAttr('style'); }

		// Clean cells
		$(this).find('tr, td, th').css('width','');
		$(this).find('tr, td, th').css('height','');
		$(this).find('tr, td, th').removeAttr('width');
		$(this).find('tr, td, th').removeAttr('height');
		if(paintCleanCell){ $(this).find('tr, td, th').removeAttr('style'); }
		
		// Fill empty cells
		if(paintEmpty)
		{
			$(this).find('tr').not(getHeader).find('td').each(function(){
				var cell = $(this).hasClass('JStextCutElem') ? $(this).find('div > div') : $(this);

				if(cell.is(":empty") && getEmpty == 'none')
				{
					cell.html("&nbsp;");
				}
				else if(cell.html() == '&nbsp;' && getEmpty != 'none')
				{ 
					cell.html(getEmpty).addClass('empty'); 
				}
				else if(cell.is(':empty') && getEmpty != 'none')
				{  
					cell.html(getEmpty).addClass('empty');
				}
			});
		}

		// Paint groups
		if(paintGroup)
		{
			if(paintGroup == '1')
			{
				$(this).find(getType).not(getHeader).addClass('group');
			}
			else
			{
				var divs = $(this).find('tr').not(getHeader);
				var num = 0;
				var limit = paintGroup;
				var check;

				for(var i = 0; i < divs.length; i+=limit)
				{
					check = paintGroupType == 'even' ? (num % 2 != 0) : (num % 2 == 0);
					if(check)
					{
						divs.slice(i, i+limit).addClass('group');
					}
					num++;
				}
			}
		}
	});
}

// Custom href function
function JShref(element)
{
	element.each(function(){
		var url = $(this).attr('href');
		
		if($(this).attr('target'))
		{
			window.open(url, $(this).attr('target'));
		}
		else
		{
			window.location = url;
		}
	});
}

// Custom Masonry function
function JSmasonry(element)
{
	// Console Log
	JSconsole('[JS Function] Masonry');
	
	// Check plugin
	if(typeof imagesLoaded !== 'undefined')
	{
		element.imagesLoaded(function(){

			var target = element.data('masonry-target');
			var origin = element.data('masonry-origin-left') ? element.data('masonry-origin-left') : true;
			var order = element.data('masonry-horizontal-order') ? element.data('masonry-horizontal-order') : false;

			// Check plugin
			if(typeof Masonry !== 'undefined')
			{
				if(typeof element.masonry() !== 'undefined')
				{
					element.masonry('reloadItems');
				}
				element.find(target).removeClass('d-none');
				element.masonry({ 
					itemSelector: target, 
					columnWidth: target,
					originLeft: origin,
					horizontalOrder: order
				});
			}
		});
	}
}

// Main Initialization
function JSmainInit()
{
	// Console Log
	JSconsole('[JS Function] Main Init');
	
	// Tooltip load
	$('*[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
	
	// Popover load
	$('*[data-toggle="popover"]').popover();
	
	// Load LightGallery
	if(JSexist($('.JSlightGallery')))
	{
		JSloadLightGallery();
	}
	
	// Check plugin
	if($.fn.swipe !== 'undefined')
	{
		// Touch swipe Bootstrap carousel
		$('*[data-ride="carousel"]').swipe({
			swipe:function(event, direction, distance, duration, fingerCount, fingerData){
					if(direction === 'right'){
						$(this).carousel('prev');  
					}
					else if(direction === 'left'){
						$(this).carousel('next');  
					}
				},
			allowPageScroll:'vertical',
		});
	}
	
	// Check plugin
	if($.fn.dataTable !== 'undefined' || $.fn.DataTable !== 'undefined')
	{
		// Applu Data Tables
		$('.JSdataTables').each(function(){
			$(this).dataTable().fnDestroy();
			$(this).DataTable({
					initComplete: function(settings,json){
						$(".dataTables_wrapper").removeClass("container-fluid");
					},
				}
			);
		});
	}
	
	// Check plugin
	if($.fn.timepicker !== 'undefined')
	{
		// Show on focus
		$(document).on('focusin', '.timepicker input', function(e){
			$(this).timepicker('showWidget');
		});
	}
	
	// Apply Image Fill
	$('.JSimgFill').each(function(){
		JSimgFill($(this));
	});
	
	// Apply Paginator
	$('.JSpaginator').each(function(){
		JSpaginator($(this));
	});
	
	// Apply Paint Table
	$('.JSpaintTable').each(function(){
		JSpaintTable($(this));
	});
	
	// Apply Auto Scroll
	$('.JSautoScroll').each(function(){
		JSautoScroll($(this));
	});
	
	// Apply Masonry
	$('.JSmasonry').each(function(){
		JSmasonry($(this));
	});
	
	// Apply Text Cut
	$('.JStextCut').each(function(){
		var target = $(this).data('text-cut') ? $(this).data('text-cut') : $(this);
		JStextCut(target);
	});
	
	// Check plugin
	if($.fn.rotate !== 'undefined')
	{
		// Apply Rotation
		$(".JSrotate").each(function(){
			$(this).rotate({
				angle: $(this).data('rotate-angle')
			});
			$(this).css('visibility','visible');
		});
	}
}
/* ================================================= BASE FUNCTIONS ================================================= */

$(document).ready(function(){

/* ================================================= BASE DOCUMENT READY ================================================= */
	
	// Console Log
	JSconsole('[JS State] Document Ready');
	
	// Disable button auto-focus
	$(document).on('shown.bs.modal', function(){
		$('.modal .modal-footer .btn:focus').blur();
		$('.modal').scrollTop(0);
	});
	
	// Window Popup click
	$(document).on('click', '.JSwindowPopup', function(){
		JSwindowPopup($(this));
	});
	
	// Map Launch click
	$(document).on('click', '.JSmapLaunch', function(){
		JSmapLaunch($(this));
	});
	
	// Href Click
	$(document).on('click', '.JShref', function(){
		JShref($(this));
	});
	
	// Check map launch alert
	$(document).on('click', '.JSmapLaunchAlert', function(e){
		if (JSisMobile && !confirm(JSlang('$maplaunch-alert'))){
		  e.preventDefault();
		}
    });
	
	// Modal on disabled links
	if(JSexist($('*[data-js-hashtag]')))
	{
		$(document).on("click", "a[href*=\\#]", function(e){
			var source =  $(this).attr("href");
			if(!(JShashTag(source))){
				e.preventDefault();
			}
		});
	}
	
	// Custom file input change
	$(document).on('change', '.form-group .custom-file input[type="file"]', function(){
		var placeholder = $(this).JShasAttr('placeholder') ? $(this).attr('placeholder') : '';
		var filename = $(this)[0].files.length ? $(this)[0].files[0].name : placeholder;
		$(this).parent().find('.custom-file-label').html(filename);
	});
	
	// Check form reset
	$(document).on('click', 'form *[type="reset"]', function(e){
		$(this).parents('form').find('.is-invalid').removeClass('is-invalid');
		$(this).parents('form').find('.is-valid').removeClass('is-valid');
		$(this).parents('form').find('.form-group input[type="checkbox"]').prop('checked', false).parent().removeClass('active');
		$(this).parents('form').find('.form-group input[type="radio"]').prop('checked', false).parent().removeClass('active');
		$(this).parents('form').find('.form-group input[type="file"]').each(function(){
			var placeholder = $(this).JShasAttr('placeholder') ? $(this).attr('placeholder') : '';
			$(this).parent().find('.custom-file-text > span').html(placeholder);
		});
    });
	
	// Load responsive code
	JSresponsiveCode();
	
	// Launch main functions
	JSmainInit();
	
/* ================================================= BASE DOCUMENT READY ================================================= */

});

$(window).bind('load', function(){

/* ================================================= BASE WINDOWS LOAD ================================================= */
	
	// Console Log
	JSconsole('[JS State] Window Load');
	
/* ================================================= BASE WINDOWS LOAD ================================================= */

});

$(document).on("JSresponsiveCode", function(event, bodyWidth, bodyHeight, bodyOrientation, bodyScreen){

/* ================================================= BASE RESPONSIVE CODE ================================================= */
	
	// Console Log
	JSconsole('[JS State] Responsive Code');
	
	// Apply Text Size
	$('.JStextSize').each(function(){
		JStextSize($(this));
	});
	
	// Apply Text Cut Multiline
	$('.JStextCutMulti').each(function(){
		JStextCutMulti($(this));
	});
	
/* ================================================= BASE RESPONSIVE CODE ================================================= */

});

$(document).ajaxStart(function(){

/* ================================================= BASE AJAX START ================================================= */
	
	// Console Log
	JSconsole('[JS State] Ajax Start');
	
	// Destroy LightGallery
	if(JSexist($('.JSlightGallery')))
	{
		JSdestroyLightGallery();
	}
	
/* ================================================= BASE AJAX START ================================================= */

});

$(document).ajaxComplete(function(){

/* ================================================= BASE AJAX COMPLETE ================================================= */
	
	// Console Log
	JSconsole('[JS State] Ajax Complete');
	
	// Launch main functions
	JSmainInit();
	
/* ================================================= BASE AJAX COMPLETE ================================================= */

});
