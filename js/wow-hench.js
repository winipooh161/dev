
      $(document).ready(function() {
			
         "use strict";
   
   
         new WOW().init();
   
         
   
         $(window).on('scroll', function() {
		
            "use strict";
      
                              
            /*----------------------------------------------------*/
            /*	Navigtion Menu Scroll
            /*----------------------------------------------------*/	
            
            var b = $(window).scrollTop();
            
            if( b > 80 ){		
               $(".wsmainfull").addClass("scroll");
            } else {
               $(".wsmainfull").removeClass("scroll");
            }				
      
         });
         /*----------------------------------------------------*/
         /*	ScrollUp
         /*----------------------------------------------------*/
         
         $.scrollUp = function (options) {
   
            // Defaults
            var defaults = {
               scrollName: 'scrollUp', // Element ID
               topDistance: 600, // Distance from top before showing element (px)
               topSpeed: 800, // Speed back to top (ms)
               animation: 'fade', // Fade, slide, none
               animationInSpeed: 200, // Animation in speed (ms)
               animationOutSpeed: 200, // Animation out speed (ms)
               scrollText: '', // Text for element
               scrollImg: false, // Set true to use image
               activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            };
   
            var o = $.extend({}, defaults, options),
               scrollId = '#' + o.scrollName;
   
            // Create element
            $('<a/>', {
               id: o.scrollName,
               href: '#top',
               title: o.scrollText
            }).appendTo('body');
            
            // If not using an image display text
            if (!o.scrollImg) {
               $(scrollId).text(o.scrollText);
            }
   
            // Minium CSS to make the magic happen
            $(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});
   
            // Active point overlay
            if (o.activeOverlay) {
               $("body").append("<div id='"+ o.scrollName +"-active'></div>");
               $(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
            }
   
            // Scroll function
            $(window).on('scroll', function(){	
               switch (o.animation) {
                  case "fade":
                     $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
                     break;
                  case "slide":
                     $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
                     break;
                  default:
                     $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
               }
            });
   
         };
         
         $.scrollUp();
   
   
         /*----------------------------------------------------*/
         /*	Tabs
         /*----------------------------------------------------*/
   
         $('ul.tabs-1 li').on('click', function(){
            var tab_id = $(this).attr('data-tab');
   
            $('ul.tabs-1 li').removeClass('current');
            $('.tab-content').removeClass('current');
   
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
         });
   
   
         /*----------------------------------------------------*/
         /*	Accordion
         /*----------------------------------------------------*/
   
        
       
   
   
   
      });