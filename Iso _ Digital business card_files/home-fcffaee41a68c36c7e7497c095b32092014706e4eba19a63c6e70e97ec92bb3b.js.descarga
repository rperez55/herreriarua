//

//

jQuery(document).on('ready page:load', function () {

	jQuery('.nav a').on('click', trigger_menu_click);

	function trigger_menu_click(){
        if(jQuery('.navbar-toggle').css('display') !='none'){
            jQuery('.navbar-toggle').trigger( "click" );
        } else {
        	// console.log('hidden menu')
        	// perform some events
        }
    }

    var owlOpt1 = {
    	rewindNav : true,
	    loop: true,
	    autoplay: true,
	    autoplayTimeout:2000,
	    center: true,
	    animateIn: true,
	    animateOut: true,
	    autoplayHoverPause: true,
	    // "fade", "backSlide", goDown and scaleUp
	    fallbackEasing: 'fade',
	    dots: true,
	    dotsContainer: '#carousel-custom-dots .contain_feature',
	    items: 1,
	    startPosition: 0,
	};
    var owlOpt = {
    	items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		dotsContainer: '.thumbs',
	};

	var owl = jQuery(".owl-carousel-wrapper");

    owl.owlCarousel(owlOpt);

    owl.on('changed.owl.carousel', function(event) {
    	var target = event.relatedTarget.relative(event.property.value, true);
    	target += 1;
    	jQuery('#carousel-custom-dots .example-item').each(function() {
    		jQuery(this).removeClass('active');
    		if(jQuery(this).attr('data-id') == target) {
    			jQuery(this).addClass('active');
    		}
    	})
	});

	jQuery('.example-item').click(function () {
		var target = jQuery(this).attr('data-id');
		jQuery('.thumbs .thumb').each(function() {
			if(jQuery(this).attr('data-id') === target) {
				jQuery(this).addClass('active');
			owl.trigger('to.owl.carousel', [jQuery(this).index(), 300]);
			}
		});
		console.log('stop.owl.autoplay');
		owl.trigger('stop.owl.autoplay');
	});

	var swiper = new Swiper('.swiper-container', {
	    // Optional parameters
	    slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 15,
        // Responsive breakpoints
		  breakpoints: {
		    // when window width is <= 320px
		    320: {
		      slidesPerView: 1,
		      spaceBetween: 5
		    },
		    480: {
		      slidesPerView: 2,
		      spaceBetween: 20
		    },
		    // when window width is <= 640px
		    640: {
		      slidesPerView: 3,
		      spaceBetween: 25
		    }
		 },

	    // Navigation arrows
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',


	    pagination: '.swiper-pagination',
	});



	// custom GA events
	if (siteURL != 'http://localhost:3000') {
		jQuery('.video-lity').click(function(){
			console.log('Video Opened');
			ga('send', 'event',  'video', 'click', 'homepage');
			ajaxURL = siteURL+'/home/play-video/';
			console.log(ajaxURL);

			jQuery.ajax(ajaxURL)
			  .done(function(response) {
			    console.log( "Play-video. Response from API: ");
			    console.log(response);
			  })
			  .fail(function() {
			    console.log( "Play-video ajax error");
			});

	    });
	 
		jQuery('body').on('lity:close',function(){
			console.log('closed');
			ga('send', 'event',  'video', 'closed', 'homepage');
		});
	}
});
