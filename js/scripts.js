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

if($('#lightbox').length) {

	lightbox.option({
		// 	'alwaysShowNavOnTouchDevices': false,
			'disableScrolling': true,
			'fadeDuration': 500,
		// 	'fitImagesInViewport': true,
			'imageFadeDuration': 500,
			// 'maxWidth': ,
			// 'maxHeight': ,
			'positionFromTop': 50,
			'resizeDuration': 500,
			'showImageNumberLabel': true,
			// 'wrapAround': false,
	})
}

if($('.swiper').length) {

	new Swiper('.main-slider', {

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
}


let pagination_page = '.shop-page'

$('.pagination__next-btn').on('click', function () {

	$(pagination_page + '.active').removeClass('active').next(pagination_page).addClass('active');
	$('.pagination__item.active').removeClass('active').next('.pagination__item').addClass('active');
	$('html').animate({scrollTop: $('body').offset().top }, 500);

	if ($('.pagination__item.last').hasClass('active')) {
		$('.pagination__next-btn').addClass('lock');
	}

	if ($('.pagination__prew-btn').hasClass('lock')) {
		$('.pagination__prew-btn').removeClass('lock');
	}
})

$('.pagination__prew-btn').on('click', function () {

	$(pagination_page + '.active').removeClass('active').prev(pagination_page).addClass('active');
	$('.pagination__item.active').removeClass('active').prev('.pagination__item').addClass('active');
	$('html').animate({scrollTop: $('body').offset().top }, 500);

	if ($('.pagination__item.first').hasClass('active')) {
		$('.pagination__prew-btn').addClass('lock');
	}

	if ($('.pagination__next-btn').hasClass('lock')) {
		$('.pagination__next-btn').removeClass('lock');
	}
})

for(let i = 1; i <= $(pagination_page).length; i++) {

	$('.pagination__item.page_'+i).on('click', function () {
	
		$('.pagination__item').removeClass('active');
		$(this).addClass('active');

		$(pagination_page).removeClass('active');
		$(pagination_page + '.page_' + i).addClass('active');
		$('html').animate({scrollTop: $('body').offset().top }, 500);
	})
}

$('.pagination__item').on('click', function () {

	if ($(this).hasClass('last')) {

		$('.pagination__next-btn').addClass('lock');
		$('.pagination__prew-btn').removeClass('lock');

	} else {

		$('.pagination__next-btn').removeClass('lock');
	}

	if ($(this).hasClass('first')) {

		$('.pagination__prew-btn').addClass('lock');
		$('.pagination__next-btn').removeClass('lock');

	} else {

		$('.pagination__prew-btn').removeClass('lock');
	}
})