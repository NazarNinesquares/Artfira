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

let max_width = 0

$('.artists__link').each(function() {

	let this_width = $(this).width()

	if (this_width > max_width) {
		max_width = this_width
	}
})

if ($(window).width() <= 768) {

	$('.artists__list').css("max-width", max_width + 20);
}

$(window).on('resize', function() {

	if ($(window).width() <= 768) {

		$('.artists__list').css("max-width", max_width + 20);
	} else {

		$('.artists__list').css("max-width", "none");
	}
})
