jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}


	$(document).ready(function(){
		$(".l1-block").hide();
		$(".l2-block").hide();
		$(".l3-block").hide();

		var prev=".default";

		$(".p3-l1").click(function(){
			if(prev!=".p3-l1"){
				$(prev).hide();
				$(".l1-block").fadeIn("slow");
				prev=".l1-block";
			}
		});
		$(".p3-l2").click(function(){
			if(prev!=".p3-l2"){
				$(prev).hide();
				$(".l2-block").fadeIn("slow");
				prev=".l2-block";
			}
		});
		$(".p3-l3").click(function(){
			if(prev!=".p3-l3"){
				$(prev).hide();
				$(".l3-block").fadeIn("slow");
				prev=".l3-block";
			}
		});

});

	$(function () {

			resize_tab();
	});

	$(window).resize(function () {
			resize_tab();
	}).resize();

	/*function resize_tab() {

			var viewportWidth = $(window).innerWidth();
			var viewportHeight = $(window).innerHeight();

			var width = $('#section2').width();
			var height = $('#section2').height();


			if ((viewportWidth / viewportHeight) > (width / height)) {

					$('#section2').css({
							'width': '100%',
							'height': 'auto',
							'margin-left': 0 - width / 2,
							'margin-top': 0 - height / 2
					});


			} else {
					$('#section2').css({
							'width': 'auto',
							'height': '100%',
							'margin-left': 0 - width / 2,
							'margin-top': 0 - height / 2
					});
			}
	}*/



});
