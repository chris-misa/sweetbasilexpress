var $imageGallery = $("#slide_show"),
    $images = $("#slide_show a"),
    $previousImg, $nextImg, i = 0, slideInterval = 400, imageInterval = 3500;

function nextImage() {
	i++;
	if(i === $images.length) i = 0;

	$nextImg = $($images[i]);
	$nextImg.css({ opacity: 0.0 });
	$nextImg.show();
	$nextImg.animate({ opacity: 1.0 }, slideInterval);

	$previousImg.animate({ opacity: 0.0 }, slideInterval, function() {
		$previousImg.hide();
		$previousImg = $nextImg;
	});

	setTimeout(nextImage, imageInterval);
}

$previousImg = $($images[0]);
$previousImg.show();

setTimeout(nextImage, imageInterval);
