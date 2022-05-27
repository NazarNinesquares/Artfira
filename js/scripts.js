$('.header__burger').on('click', function () {
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
	$('body').toggleClass('lock');
})

$('.menu__link').on('click', function () {
	if($('.menu').hasClass('active')) {
		$('.menu').removeClass('active');
		$('body').removeClass('lock');
		$('.header__burger').removeClass('active');
	}
})