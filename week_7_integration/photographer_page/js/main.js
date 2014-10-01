//on click, remove css class hidden

/*	var galleryImage= $('.gallery-image');
	var lightbox = $('.lightbox');

galleryImage onclick = function(){
	lightbox.removeClass('hidden');
});*/

//$(document).ready(function(){  This bit is only necessary if you put the JS tag in your head tag
	var background = $('.lightbox-background');
	var lightbox = $('lightbox');
	var images = $('.gallery-image');
	var lightboxExit = $('.lightbox-exit');
	var lightboxImage = $('.lightbox-image');
	var lightboxCaption = $('.lightbox-caption');

	function showLightBox(){

		var imageContainer = $(this);
		var image = imageContainer.find('img');
		var caption = imageContainer.find('.gallery-image-caption');

		background.removeClass('hidden');
		lightbox.removeClass('hidden');

		lightboxImage.attr("src", image.attr('src'));
		lightboxCaption.html(caption.html());

		lightbox.css('margin-left', -1 * lightbox.width() / 2);
		lightbox.css('margin-left', -1 * lightbox.height() / 2);
	}



	function hideLightbox(){
		background.addClass('hidden');
		lightbox.addClass('hidden');
	}

	images.on('mousedown' , showLightBox);
	lightboxExit.on('click', hideLightbox);
	background.on('click', hideLightbox);

//});