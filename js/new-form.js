// // JavaScript Document
	

// $(window).on('load', function() {
	
//     "use strict";

                    
//     /*----------------------------------------------------*/
//     /*	Preloader
//     /*----------------------------------------------------*/
    
//     var preloader = $('#loading'),
//         loader = preloader.find('#loading-center-absolute');
//         loader.fadeOut();
//         preloader.delay(400).fadeOut('slow');
            
// });


// $(window).on('scroll', function() {
    
//     "use strict";

                            
//     /*----------------------------------------------------*/
//     /*	Navigtion Menu Scroll
//     /*----------------------------------------------------*/	
    
//     var b = $(window).scrollTop();
    
//     if( b > 80 ){		
//         $(".wsmainfull").addClass("scroll");
//     } else {
//         $(".wsmainfull").removeClass("scroll");
//     }				

// });


// $(document).ready(function() {
        
//     "use strict";


//     new WOW().init();




//     $('#sendForm1').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(0);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm2').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(1);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm3').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(2);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm4').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(3);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
// $('#sendForm5').on('submit',  function (e) {
//     e.preventDefault();
//     let form = $(this);
//     let responseCaptcha = grecaptcha.getResponse(4);
//     console.log(grecaptcha.getResponse(1))
//     if (responseCaptcha.length !== 0) {
//         $.ajax({
//             type: "POST",
//             url: "/send.php",
//             data: form.serialize()
//         }).done(function (e) {
//             if (e == 'Заявка отправлена, переадресовка..') {
//                 console.log('success');
//                 form.trigger('reset');
//                 ym(88802759, 'reachGoal', 'FORM_SEND')
//                 setTimeout(function () {
//                     window.location.href = "/spasibo.html";
//                 }, 1000);


//             }
//             else {
//                 console.log('error');

//             }




//         });
//     } else {
//         alert('Вы не прошли каптчу')
//     }
// })
//     $('#sendForm6').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(5);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm7').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(6);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm8').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(7);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm9').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(8);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm10').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(9);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })
//     $('#sendForm11').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(10);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm12').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(11);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm13').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(12);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm14').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(13);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm15').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(14);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm16').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(15);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm17').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(16);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })

//     $('#sendForm18').on('submit',  function (e) {
//         if ($(this).attr('method') != 'get') {
//             e.preventDefault();
//         let form = $(this);
//         let responseCaptcha = grecaptcha.getResponse(17);
//         console.log(responseCaptcha)
//         if (responseCaptcha.length !== 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "/send.php",
//                 data: form.serialize()
//             }).done(function (e) {
//                 if (e == 'Заявка отправлена, переадресовка..') {
//                     console.log('success');
//                     form.trigger('reset');
//                     ym(88802759, 'reachGoal', 'FORM_SEND')
//                     setTimeout(function () {
//                         window.location.href = "/spasibo.html";
//                     }, 1000);


//                 }
//                 else {
//                     console.log('error');

//                 }




//             });
//         } else {
//             alert('Вы не прошли каптчу')
//         }

//         }
// })





//     // $(document).on('submit', '.form-1', function (e) {
    
//     // });


//     /*----------------------------------------------------*/
//     /*	ScrollUp
//     /*----------------------------------------------------*/
    
//     $.scrollUp = function (options) {

//         // Defaults
//         var defaults = {
//             scrollName: 'scrollUp', // Element ID
//             topDistance: 600, // Distance from top before showing element (px)
//             topSpeed: 800, // Speed back to top (ms)
//             animation: 'fade', // Fade, slide, none
//             animationInSpeed: 200, // Animation in speed (ms)
//             animationOutSpeed: 200, // Animation out speed (ms)
//             scrollText: '', // Text for element
//             scrollImg: false, // Set true to use image
//             activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//         };

//         var o = $.extend({}, defaults, options),
//             scrollId = '#' + o.scrollName;

//         // Create element
//         $('<a/>', {
//             id: o.scrollName,
//             href: '#top',
//             title: o.scrollText
//         }).appendTo('body');
        
//         // If not using an image display text
//         if (!o.scrollImg) {
//             $(scrollId).text(o.scrollText);
//         }

//         // Minium CSS to make the magic happen
//         $(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});

//         // Active point overlay
//         if (o.activeOverlay) {
//             $("body").append("<div id='"+ o.scrollName +"-active'></div>");
//             $(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
//         }

//         // Scroll function
//         $(window).on('scroll', function(){	
//             switch (o.animation) {
//                 case "fade":
//                     $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
//                     break;
//                 case "slide":
//                     $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
//                     break;
//                 default:
//                     $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
//             }
//         });

//     };
    
//     $.scrollUp();


//     /*----------------------------------------------------*/
//     /*	Tabs
//     /*----------------------------------------------------*/

//     $('ul.tabs-1 li').on('click', function(){
//         var tab_id = $(this).attr('data-tab');

//         $('ul.tabs-1 li').removeClass('current');
//         $('.tab-content').removeClass('current');

//         $(this).addClass('current');
//         $("#"+tab_id).addClass('current');
//     });


//     /*----------------------------------------------------*/
//     /*	Accordion
//     /*----------------------------------------------------*/

//     $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
            
//     $(".accordion > .accordion-item").on('click', function() {
//         $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
//         $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
//     });


//     /*----------------------------------------------------*/
//     /*	Single Image Lightbox
//     /*----------------------------------------------------*/
            
//     $('.image-link').magnificPopup({
//       type: 'image'
//     });	




// });
