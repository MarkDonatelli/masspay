$(document).ready(function() {
	$('.nav-button').click(function() {
		$('.nav-button').toggleClass('change');
	});

	$(window).scroll(function() {
		let position = $(this).scrollTop();
		if (position >= 200) {
			$('.navbar').addClass('navbar-dark');
			$('.nav-link').addClass('link-scroll');
			$('.search svg').addClass('search-scroll svg');
		} else {
			$('.navbar').removeClass('navbar-dark');
			$('.nav-link').removeClass('link-scroll');
			$('.search svg').removeClass('search-svg');
		}
	});



	

	/*=====Smooth Scroll========*/

	$('a[href*="#"]:not([data-toggle="pill"])').on('click', function(e) {
		e.preventDefault();

		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top - 75
			},
			500,
			'linear'
		);
	});

	/*=====Smooth Scroll========*/

	/* collapse lines color change **/
	$(document).ready(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 200) {
				$('.line1,.line2,.line3').css('background-color', '#020100');
				$('.search svg').css('fill', '#020100');
				$('.meet-us').css('display', 'block');
				$('.btn-cust').css('background-color', '#307167');
			} else {
				$('.line1,.line2,.line3').css('background-color', 'white');
				$('.search svg').css('fill', 'white');
				$('.meet-us').css('display', 'none');
				$('.btn-cust').css('background-color', 'transparent');
			}
		});
	});
	/* End collapse lines color change */

	// Countdown

	var Countdown = (function() {
		// Variables
		var $countdown = $('[data-countdown]'); // Methods

		function init($this) {
			var finalDate = $this.data('countdown');
			$this.countdown(finalDate, function(event) {
				if (typeof $this.data('countdown-template') != 'undefined') {
					$this.html(event.strftime($this.data('countdown-template')));
				} else {
					$this.html(event.strftime('%D days %H:%M:%S'));
				}
			});
		} // Events

		if ($countdown.length) {
			$countdown.each(function() {
				init($(this));
			});
		}
	})(); // Isotope

	/*=======Scroll Reveal ===========*/

	ScrollReveal().reveal('.mobile-view', {
		duration: 2000,
		delay: 100,
		origin: 'left',
		distance: '200px'
	});

	ScrollReveal().reveal('.slide-right', {
		duration: 2000,
		delay: 200,
		origin: 'right',
		distance: '200px'
	});

	ScrollReveal().reveal('.slide-left', {
		duration: 2000,
		delay: 200,
		origin: 'left',
		distance: '200px'
	});

	ScrollReveal().reveal('.slide-up', {
		duration: 2000,
		delay: 200,
		origin: 'bottom',
		distance: '300px'
	});

	ScrollReveal().reveal('.slide-up-pre', {
		duration: 1800,
		delay: 500,
		origin: 'bottom',
		distance: '200px'
	});

	/*=======Scroll Reveal End ===========*/

	$(function() {
		// Cache the Window object
		var $window = $(window);

		// Parallax Backgrounds

		$('section[data-type="background"]').each(function() {
			var $bgobj = $(this); // assigning the object

			$(window).scroll(function() {
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!
				var yPos = -($window.scrollTop() / $bgobj.data('speed'));

				// Put together our final background position
				var coords = '50% ' + yPos + 'px';

				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			}); // end window scroll
		});
	});
});

/* MODAL VIDEO VOLUME ON PLAY*/
$('video').prop('volume', 0.5);

/* dropdown menus slideup and slidedown */

jQuery('.dropdown').on('show.bs.dropdown', function(e) {
	jQuery(this).find('.dropdown-menu').stop(true, true).slideDown(200);
});

jQuery('.dropdown').on('hide.bs.dropdown', function(e) {
	// e.preventDefault();
	var self = $(this);
	jQuery(this).find('.dropdown-menu').stop(true, true).slideUp(200, function() {
		self.removeClass('open');
	});
});

/*end dropdown menus slideup and slidedown */

$('.launch-modal').on('click', function(e) {
	e.preventDefault();
	$('#' + $(this).data('modal-id')).modal();
});

$().ready(function() {
	$('[rel="tooltip"]').tooltip();
});

var touchSensitivity = 5;
$('.carousel').on('touchstart', function(event) {
	var xClick = event.originalEvent.touches[0].pageX;
	$(this).one('touchmove', function(event) {
		var xMove = event.originalEvent.touches[0].pageX;
		if (Math.floor(xClick - xMove) > touchSensitivity) {
			$(this).carousel('next');
		} else if (Math.floor(xClick - xMove) < -touchSensitivity) {
			$(this).carousel('prev');
		}
	});
	$('.carousel').on('touchend', function() {
		$(this).off('touchmove');
	});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById('myBtn').style.display = 'block';
	} else {
		document.getElementById('myBtn').style.display = 'none';
	}
}

$('#myBtn').click(function() {
	// When arrow is clicked
	$('body,html').animate(
		{
			scrollTop: 0 // Scroll to top of body
		},
		500
	);
});

$(document).ready(function() {
	$('.owl-carousel').owlCarousel();




/*=====People Modals =======*/

$(".js-video-button").modalVideo({
      
});


});

$('.gallery-list-item').click(function() {
	let value = $(this).attr('data-filter');
	if (value === 'all') {
		$('.filter').show(300);
	} else {
		$('.filter').not('.' + value).hide(300);
		$('.filter').filter('.' + value).show(300);
	}
});

$('.gallery-list-item').click(function() {
	$(this).addClass('active-item').siblings().removeClass('active-item');
});

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
});
