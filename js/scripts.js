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

// let max_width = 0

// $('.artists__link').each(function() {

// 	let this_width = $(this).width()

// 	if (this_width > max_width) {
// 		max_width = this_width
// 	}
// })

// if ($(window).width() <= 768) {

// 	$('.artists__list').css("max-width", max_width + 20);
// }

// $(window).on('resize', function() {

// 	if ($(window).width() <= 768) {

// 		$('.artists__list').css("max-width", max_width + 20);
// 	} else {

// 		$('.artists__list').css("max-width", "none");
// 	}
// })

$('.tab-toggle__btn').on('click', function () {
	
	$('.tab-toggle__btn').removeClass('active');
	$(this).addClass('active');

	$('.tab-page').removeClass('active');
	$('.tab-page' + '.' + $(this).data("tab")).addClass('active');
})



// let tab_class
// let tab_data

// $('.works__info span:first-child').on('click', function () {

// 	$('.artists-page .tab-toggle__btn').each(function() {

// 		if($(this).hasClass('active')) {
// 			tab_class = $(this).attr('class')
// 			tab_data = $(this).data('tab')
// 		}
// 	})

// 	console.log(tab_class, tab_data);
// 	sessionStorage.setItem('class', tab_class);
// })


// $('.current-item').on('click', function () {
	
// 	console.log(sessionStorage.getItem('class'));
// })