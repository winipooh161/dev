$(document).ready(function() {

	// Функция открытия модального окна

	$(".modal-link").on("click", function() {

		$('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"]').addClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием на кнопку

	$(".modal__close").on("click", function() {

		$(".modal-overlay").removeClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием вне окна

	$(document).on("click", function(e) {

		if(!$(e.target).closest(".modal").length && !$(e.target).closest(".modal-link").length && $(e.target).closest(".modal-overlay").length) {

			$(".modal-overlay").removeClass("modal-overlay_visible");

		}

	});
