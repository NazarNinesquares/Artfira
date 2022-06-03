$('.header__burger').on('click', function () {
	$(this).toggleClass('active');
	$('.main-navigation').toggleClass('active');
	$('body').toggleClass('lock');
	$('.footer').toggleClass('active');
})

$('.page_item a').on('click', function () {
	if($('.main-navigation').hasClass('active')) {
		$('.main-navigation').removeClass('active');
		$('body').removeClass('lock');
		$('.header__burger').removeClass('active');
		$('.footer').removeClass('active');
	}
})

$(document).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 0 ) {
		$('.header').addClass("scroll");
		$('.header__logo-box').addClass("scroll");
	}
	else{
		$('.header').removeClass("scroll");
		$('.header__logo-box').removeClass("scroll");
	}
})

$('.tab-toggle__btn').on('click', function () {
	
	$('.tab-toggle__btn').removeClass('active');
	$(this).addClass('active');

	$('.tab-page').removeClass('active');
	$('.tab-page' + '.' + $(this).data("tab")).addClass('active');
})

lightbox.option({
	// 	'alwaysShowNavOnTouchDevices': false,
		'disableScrolling': true,
		'fadeDuration': 500,
	// 	'fitImagesInViewport': true,
		'imageFadeDuration': 500,
		// 'maxWidth': ,
		// 'maxHeight': ,
	// 	'positionFromTop': 50,
		'resizeDuration': 500,
		'showImageNumberLabel': true,
		// 'wrapAround': false,
})

const swiper = new Swiper('.main-slider', {

	loop: true,
	simulateTouch: true,

	pagination: {
		el: '.slider-nav__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return'<span class="' + className + '">' + (index + 1) + '</span>';
		}
	},

	navigation: {
	  nextEl: '.slider-nav__next-btn',
	  prevEl: '.slider-nav__prev-btn',
	},
});

