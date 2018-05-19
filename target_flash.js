var flashInterval = 200, locString = window.location.toString(), p;

function flashFX(e) {
	setTimeout(function() {
		var $window = $(window);
		$window.scrollTop(($window.scrollTop() - $window.height() / 3));
	}, 10);
	$(e).animate({ opacity: 0.0 }, flashInterval)
	    .animate({ opacity: 1.0 }, flashInterval)
	    .animate({ opacity: 0.0 }, flashInterval)
	    .animate({ opacity: 1.0 }, flashInterval)
	    .animate({ opacity: 0.0 }, flashInterval)
	    .animate({ opacity: 1.0 }, flashInterval);
}

if((p = locString.indexOf("#")) > 0) {
	flashFX(locString.slice(p, locString.length));
}