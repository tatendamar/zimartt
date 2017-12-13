$(document).ready(function(){
  	"use strict";
	$(".menu > ul > li:has(>ul)").addClass('menu-dropdown-icon');
	$(".menu > ul > li > ul:not(:has(ul))").addClass('normal-sub');
	$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
	$(".menu > ul > li").hover(function(e){
		if ($(window).width() > 961) {
           $(this).children("ul").stop(true, false).fadeToggle(150);
           e.preventDefault();
		}
	});
	$(".menu > ul > li").click(function(){
		if($(window).width() <= 959){
			$(this).children("ul").fadeToggle(150);
		}
	});
	$(".menu-mobile").click(function(e){
		$(".menu > ul").toggleClass('show-on-mobile');
		e.preventDefault();
	});

   $('#btn').hide();
    $('#para').hide();
     $('#show').click(function(){
       $('#para').show();
       $('#show').hide();
          $('#btn').show();
    });

    $('#btn').click(function(){
      $('#para').hide();
      $('#show').show();
         $('#btn').hide();
    });
  
});

var modal = document.getElementById("window-popup");

var modalBtn = document.getElementById("button-popup");

var closeBtn = document.getElementById("button-popup-close");


modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOut);


function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}

function clickOut(e){
    if(e.target === modal){
	modal.style.display = 'none';
  }
}
