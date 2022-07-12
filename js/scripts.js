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

if($('.swiper').length) {

	new Swiper('.main-slider', {

		loop: true,
		simulateTouch: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}

		// pagination: {
		// 	el: '.slider-nav__pagination',
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return'<span class="' + className + '">' + (index + 1) + '</span>';
		// 	}
		// },

		// navigation: {
		// nextEl: '.slider-nav__next-btn',
		// prevEl: '.slider-nav__prev-btn',
		// },
	});

	new Swiper('.shop-slider', {

		loop: true,
	});

	new Swiper('.work-slider', {

		loop: true,
		navigation: {
			nextEl: '.work-slider__next-btn',
			prevEl: '.work-slider__prev-btn',
		},
		thumbs: {
			
			swiper: {
				el: '.work-thumbnail',
				// slidesPerView: 3,
				// centeredSlides: true,
			}
		},
	});
}

$('.shop-item__btn, .shop__btn').on('click', function () {
	
	$('.contact-form').addClass('active');
	$('.popap-owerlay').addClass('active');
	$('body').addClass('lock');
})

$('.contact-form__close').on('click', function () {
	
	$('.contact-form').removeClass('active');
	$('.popap-owerlay').removeClass('active');
	$('body').removeClass('lock');
})


$(document).mouseup(function (e) {

	let popup = $('.contact-form');
	if (popup.hasClass('active')) {
			
		if (!$('a').is(e.target)&&!popup.is(e.target)&&popup.has(e.target).length === 0) {
				
			$('.contact-form__close').trigger('click');
		}
	}
});



function videoProportion() {

	$('.box-video__video').each(function() {

		let if_width = $(this).attr('width')
		let if_height = $(this).attr('height')
		let cont_width = $('.box-video__left').css('width').split('px')[0]
		let proportion = cont_width * if_height / if_width
	
	
		$(this).parent('.box-video__left').css('height', proportion)
	})
}
videoProportion()

$(window).resize(function() {

	videoProportion()
})

$('.shop-item__btn').on('click', function () {
	
	$('.item-name').val($(this).parent('.shop-item').find('.shop-item__title').text().trim());
})

$('.shop__btn').on('click', function () {
	
	$('.item-name').val($('.works__title').text().trim());
})

if($('._lg').length) {
	$('._lg').lightGallery({});
}

if($('.tab-toggle').length) {
	let tabName = sessionStorage.getItem('tab-name');

	if(tabName !== null) {
		console.log(tabName);

		$('.tab-toggle__btn').removeClass('active');
		// $('.tab-toggle__btn[data-tab="'+ tabName +'"]').addClass('active');
		$('.tab-toggle__btn[data-tab="'+ tabName +'"]').trigger('click');
	}
	
	$('.tab-toggle__btn').on('click', function () {
		
		// sessionStorage.removeItem('tab-name')
		sessionStorage.setItem('tab-name', $(this).attr('data-tab'))
		// let getTabName = 
		// console.log(getTabName);
	})



}