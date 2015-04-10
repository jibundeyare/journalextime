var pointerEventToXY = function(event) {

	//@debug
	// console.log(window.devicePixelRatio);

	var out = {x: 0, y: 0};

	if(event.type == 'touchstart' || event.type == 'touchmove' || event.type == 'touchend' || event.type == 'touchcancel') {
		var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
		if (window.devicePixelRatio) {
			out.x = touch.pageX * window.devicePixelRatio;
			out.y = touch.pageY * window.devicePixelRatio;
		} else {
			out.x = touch.pageX;
			out.y = touch.pageY;
		}
	} else if (event.type == 'mousedown' || event.type == 'mouseup' || event.type == 'mousemove' || event.type == 'mouseover'|| event.type=='mouseout' || event.type=='mouseenter' || event.type=='mouseleave') {
		out.x = event.pageX;
		out.y = event.pageY;
	}

	return out;
};

var getCovers = function(videos) {
	var key;
	var images = [];

	for (key in videos) {
		if (videos[key].id != 'intro') {
			images.push(videos[key].cover);
		}
	}

	return images;
};

var preloadImage = function(imageSrc) {
	(new Image()).src = imageSrc;
};

var preloadImages = function(images) {
	var key;

	for (key in images) {
		preloadImage(images[key]);
	}
};

var getHeightFromWidth = function(originalWidth, originalHeight, newWidth) {
    return newWidth / originalWidth * originalHeight;
};

var getWidthFromHeight = function(originalWidth, originalHeight, newHeight) {
    return newHeight / originalHeight * originalWidth;
};

var getCenterOffset = function(parentWidth, childWidth) {
    return (parentWidth / 2) - (childWidth / 2);
};

/**
 * resize an element to fit browser window using the height
 */
var fitElementToWindowUsingHeight = function(selector) {

    var element = $(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.height($(window).height());

    var width = getWidthFromHeight(originalWidth, originalHeight, $(window).height());

    element.width(width);
};

/**
 * resize an element to fit browser window using the width
 */
var fitElementToWindowUsingWidth = function(selector) {

    var element = $(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.width($(window).width());

    var height = getHeightFromWidth(originalWidth, originalHeight, $(window).width());

    element.height(height);
};

/**
 * resize an element to fit the given height
 */
var fitElementToGivenHeight = function(selector, height) {

    var element = $(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.height(height);

    var width = getWidthFromHeight(originalWidth, originalHeight, height);

    element.width(width);
};

/**
 * resize an element to fit the given width
 */
var fitElementToGivenWidth = function(selector, width) {

    var element = $(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.width(width);

    var height = getHeightFromWidth(originalWidth, originalHeight, width);

    element.height(height);
};

/**
 * resize an element to fit full screen using the width
 */
var fitElementToScreen = function(selector) {

    var element = $(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.width(window.screen.availWidth);

    var height = getHeightFromWidth(originalWidth, originalHeight, window.screen.availWidth);

    element.height(height);
};

/**
 * resize an element to fit full page using the width
 */
var fitElementToPageUsingWidth = function(selector) {

    var element = jQuery(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.width(jQuery(document).width());

    var height = getHeightFromWidth(originalWidth, originalHeight, jQuery(document).width());

    element.height(height);
};

/**
 * resize an element to fit full page using the height
 */
var fitElementToPageUsingHeight = function(selector) {

    var element = jQuery(selector);

    var originalWidth = element.width();
    var originalHeight = element.height();

    element.height(jQuery(document).height());

    var width = getWidthFromHeight(originalWidth, originalHeight, jQuery(document).height());

    element.width(width);
};

/**
 * verticaly center an element in the browser window
 */
var verticalyCenterElement = function(selector, position) {

    var element = $(selector);

    var verticalOffset = getCenterOffset($(window).height(), element.height());

    element.css('position', position);
    element.css('top', verticalOffset + 'px');
};

/**
 * horizontally center an element in the browser window
 */
var horizontallyCenterElement = function(selector, position) {

    var element = $(selector);

    var horizontalOffset = getCenterOffset($(window).width(), element.width());

    element.css('position', position);
    element.css('left', horizontalOffset + 'px');
};

/**
 * center an element in the browser window
 */
var centerElement = function(selector) {

    var element = $(selector);

    var horizontalOffset = getCenterOffset($(window).width(), element.width());
    var verticalOffset = getCenterOffset($(window).height(), element.height());

    element.css('position', 'absolute');
    element.css('left', horizontalOffset + 'px');
    element.css('top', verticalOffset + 'px');
};

var fitAndCenterElements = function(selector) {
    fitElementToScreen(selector);
	centerElement(selector);
};

var maximizeSlider = function(selector, force) {
	if (($('.' + selector + '-container').hasClass('minimized') && !$('.' + selector + '-container').hasClass('clicked') || force)) {
		$('.' + selector + '-container').addClass('clicked');
		$('.' + selector + '-container').animate({left: '+=100%'}, 400, function() {
			$('.' + selector + '-container').removeClass('minimized');
			$('.' + selector + '-container').removeClass('clicked');
		});
	}
};

var minimizeSlider = function(selector, force) {
	if ((!$('.' + selector + '-container').hasClass('minimized') && !$('.' + selector + '-container').hasClass('clicked')) || force) {
		$('.' + selector + '-container').addClass('clicked');
		$('.' + selector + '-container').animate({left: '-=100%'}, 400, function() {
			$('.' + selector + '-container').addClass('minimized');
			$('.' + selector + '-container').removeClass('clicked');
		});
	}
};

var maximizeBanner = function(selector, force) {
	if ($('.' + selector + '-container').hasClass('minimized') || force) {
		$('.' + selector + '-container').removeClass('minimized');
		$('.' + selector + '-container').fadeIn(function() {
		});
	}
};

var minimizeBanner = function(selector, force) {
	if (!$('.' + selector + '-container').hasClass('minimized') || force) {
		$('.' + selector + '-container').stop().fadeOut(function() {
			$('.' + selector + '-container').addClass('minimized');
		});
	}
};

var onMouseenterFooter = function() {
	$('.footer-container').mouseenter(function(event) {
		//@debug
		// console.log('onMouseenterFooter');

		event.stopPropagation();
		event.stopImmediatePropagation();
	});
};

var onMouseleaveFooter = function() {
	$('.footer-container').mouseleave(function(event) {
		//@debug
		// console.log('onMouseleaveFooter');

		event.stopPropagation();
		event.stopImmediatePropagation();

		minimizeBanner('footer');
	});
};

var onMousemove = function() {
	$(window).mousemove(function(event) {

		//@debug
		// console.log('window: ' + event.pageX + ', ' + event.pageY);
		// console.log('client: ' + event.clientX + ', ' + event.clientY);

		if ($(window).height() - event.pageY <= 54) {
			if ($('.footer-container').hasClass('minimized')) {
				maximizeBanner('footer');
			}
		}

	});
};

var onClickHomeButton = function() {
	$(".home-button").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		//@todo remove when site is not in beta status anymore
		maximizeBanner('header');

		currentVideoId = 'intro';
		playVideo(currentVideoId, videos);
	});
};

var onClickFilmButton = function() {
	$(".film-button").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		//@todo remove when site is not in beta status anymore
		minimizeBanner('header');

		currentVideoId = getNextVideoId('intro', videos);
		playVideo(currentVideoId, videos);
	});
};

var onClickChaptersButton = function() {

	$(".chapters-button").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		//@todo remove when site is not in beta status anymore
		minimizeBanner('header');

		minimizeBanner('manual');

		if ($('.chapters-container').hasClass('minimized')) {
			maximizeSlider('chapters');
			minimizeSlider('about');
			minimizeSlider('credits');
			clearInterval(autoScrollerInterval);
		}
		else {
			minimizeSlider('chapters');
		}
	});
};

var onClickCreditsButton = function() {

	$(".credits-button").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		//@todo remove when site is not in beta status anymore
		minimizeBanner('header');

		minimizeBanner('manual');

		if ($('.credits-container').hasClass('minimized')) {
			minimizeSlider('chapters');
			minimizeSlider('about');
			maximizeSlider('credits');
			autoScrollerInterval = autoScroller('.credits', 2, parseInt($('.footer-container').height()));
		}
		else {
			minimizeSlider('credits');
			clearInterval(autoScrollerInterval);
		}
	});
};

var onClickAboutButton = function() {

	$(".about-button").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		//@todo remove when site is not in beta status anymore
		minimizeBanner('header');

		minimizeBanner('manual');

		if ($('.about-container').hasClass('minimized')) {
			minimizeSlider('chapters');
			minimizeSlider('credits');
			maximizeSlider('about');
		}
		else {
			minimizeSlider('about');
		}
	});
};

var onClickPlayButton = function() {
	$('.icon.play').click(function(event) {
		$('.video-interface').hide();
		popcorn.play();
	});
};

var onClickCloseButton = function() {

	var oRegExp = new RegExp('-container') ;

	$('.close-button').click(function() {
		var classes = $(this).parent().attr('class').split(' ');
		var key;
		var selectors;

		for (key in classes) {
			selectors = classes[key].split(oRegExp);

			if (selectors.length > 1) {
				minimizeSlider(selectors[0]);
			}
		}
	});
};

var onEventChapter = function() {

	$(".cover").on('mouseenter', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		$(this).addClass('highlighted');

		$('.cover').each(function() {
			if (!$(this).hasClass('highlighted') || $(this).attr('data-enabled') != 'true') {
				$(this).stop().animate({opacity: 0.1}, 1000);
			}
		});
	});

	$(".cover").on('mouseleave', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		$(this).removeClass('highlighted');

		$('.cover').each(function() {
			$(this).stop().animate({opacity: 1.0}, 1000);
		});
	});

	$(".cover").click(function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		if ($(this).attr('data-enabled') == 'true') {
			currentVideoId = $(this).attr('data-id');

			//@debug
			// console.log(currentVideoId);

			playVideo(currentVideoId, videos);
		}
	});
};

/**
 * resize coords to fit full screen using the width
 */
var fitMapCoordsToScreen = function(originalWidth, originalHeight, coords) {

	var currentWidth = window.screen.availWidth;
	var currentHeight = window.screen.availHeight;

	var newCoords = [];
	var index;

	for (index = 0; index < coords.length; index += 2) {
		var originalX = parseFloat(coords[index]);
		var originalY = parseFloat(coords[index + 1]);

		var x = originalX / originalWidth * currentWidth;
		var y = getHeightFromWidth(originalX, originalY, x);

		newCoords.push(x);
		newCoords.push(y);
	}

	return newCoords;
};

/**
 * center coords in the browser window
 */
var centerMapCoords = function(selector, coords) {

    var element = $(selector);

    var horizontalOffset = getCenterOffset($(window).width(), element.width());
    var verticalOffset = getCenterOffset($(window).height(), element.height());

	var newCoords = [];
	var index;

	for (index = 0; index < coords.length; index += 2) {
		var x = parseFloat(coords[index]);
		var y = parseFloat(coords[index + 1]);

		x += horizontalOffset;
		y += verticalOffset;

		newCoords.push(x);
		newCoords.push(y);
	}

	return newCoords;
};

var roundMapCoords = function(coords) {

	var newCoords = [];
	var index;
	var x;
	var y;

	for (index = 0; index < coords.length; index += 2) {
		x = parseFloat(coords[index]);
		y = parseFloat(coords[index + 1]);

		x = Math.round(x);
		y = Math.round(y);

		newCoords.push(x);
		newCoords.push(y);
	}

	return newCoords;
};

var moveMapCoords = function(coords, offsetX, offsetY) {

	var newCoords = [];
	var index;
	var x;
	var y;

	for (index = 0; index < coords.length; index += 2) {
		x = parseFloat(coords[index]);
		y = parseFloat(coords[index + 1]);

		x += offsetX;
		y += offsetY;

		newCoords.push(x);
		newCoords.push(y);
	}

	return newCoords;
};

var fitMapAreaElementsToScreen = function(mapAreaElements) {
	$(mapAreaElements).each(function() {
		var coords = $(this).attr('data-original-coords').split(',');
		coords = fitMapCoordsToScreen($(this).attr('data-original-width'), $(this).attr('data-original-height'), coords);
		coords = roundMapCoords(coords);
		$(this).attr('coords', coords.join(','));
	});
};

var clearMapAreas = function() {
	$('#videomap').empty();
	$('.video-interactivity').hide();
};

var addMapAreas = function(mapAreaElements) {
	$('#videomap').append(mapAreaElements);
};

var removeMapAreaById = function(id) {
	$('#videomap').children('#' + id).each(function(index, value) {
		//@debug
		// console.log('remove: ' + $(this).attr('id'));

		$(this).remove();
	});
};

var clearAllAudioSources = function() {
	//@debug
	// console.log('clear audio sources');

	$('#audio').remove();
	$('.audio-container').append('<audio id="audio" preload="auto"></audio>');
};

var loadAudio = function(file) {
	//@debug
	// console.log('load audio');

	var key;
	var audioPlayer = $('#audio');

	audioPlayer.append($('<source src="' + escapeHtml(file) + '.mp3" type="audio/mpeg" />'));
	audioPlayer.append($('<source src="' + escapeHtml(file) + '.oga" type="audio/ogg" />'));

	audioPlayer.append($('<div>Votre navigateur n\'arrive pas à lire le fichier audio.</div>'));
};

var playAudio = function() {
	var audioPlayer = $('#audio');

	if ($('#audio').length >= 1) {
		audioPlayer.get(0).play();
	}
};

var initPopcorn = function(loop) {

	if (popcorn) {
		popcorn.destroy();
	}

	popcorn = Popcorn('#video');
	popcorn.controls(false);
	popcorn.loop(loop);
	popcorn.load();
	popcorn.autoplay(true);

	popcorn.on('timeupdate', function() {
		//@debug
		// console.log(this.currentTime());

		popcornTimecode = this.currentTime();
	});
};

var addCues = function(video) {

	var videoDuration = Math.floor(popcorn.duration());

	Popcorn.forEach(video.cues, function(cue) {
		popcorn.cue(cue.timecode, function() {
			//@debug
			// console.log('cue callback: ' + cue.timecode + ' => ' + cue.id);

			cue.callback();
		});
	});

	Popcorn.forEach(video.mapareas, function(mapareas) {
		popcorn.cue(mapareas.start, function() {
			//@debug
			// console.log('map area start: ' + mapareas.start + ' => ' + mapareas.id + '-' + mapareas.start + '-' + mapareas.end);

			var mapAreaElements = generateElementAndEvents(mapAreaTemplate, [mapareas]);
			fitMapAreaElementsToScreen(mapAreaElements);
			addMapAreas(mapAreaElements);

			$('.video-interactivity').show();
		});
	});

	Popcorn.forEach(video.mapareas, function(mapareas) {
		if (mapareas.end != -1) {
			popcorn.cue(mapareas.end, function() {
				//@debug
				// console.log('map area end: ' + mapareas.end + ' => ' + mapareas.id + '-' + mapareas.start + '-' + mapareas.end);

				removeMapAreaById(mapareas.id + '-' + mapareas.start + '-' + mapareas.end);

				if ($('#videomap').children().length == 0) {
					$('.video-interactivity').hide();
				}
			});
		}
	});
};

var loadVideo = function(videoPlayerContainerSelector, videoPlayerSelector, mp4, ogv, webm) {
	// stop loading previous video if any
	if (popcorn) {
		popcorn.pause();
		$(videoPlayerSelector + ' source').attr('src', '');
		popcorn.load();
	}

	// load mp4, ogg and webm
	// var newVideoPlayer = $('<video id="video" preload="auto" autoplay="true" autobuffer="true"><source src="' + escapeHtml(mp4) + '" type="video/mp4"></source><source src="' + escapeHtml(ogv) + '" type="video/ogg"></source><source src="' + escapeHtml(webm) + '" type="video/webm"></source><div>Votre navigateur n\'arrive pas à lire la vidéo.</div></video>');

	// load mp4 only
	var newVideoPlayer = $('<video id="video" preload="auto" autoplay="true" autobuffer="true"><source src="' + escapeHtml(mp4) + '" type="video/mp4"></source><div>Votre navigateur n\'arrive pas à lire la vidéo.</div></video>');

	//@hack check that mp4 loading has failed
	newVideoPlayer.children('source').each(function(index, value) {
		$(this).on('error', function(event) {
			//@debug
			// console.log('error: ' + $(this).attr('type'));

			if ($(this).attr('type').search('mp4') != -1) {
				mp4Failed = true;
			}
		});
	});

	$(videoPlayerSelector).remove();
	$(videoPlayerContainerSelector).prepend(newVideoPlayer);
};

var playVideo = function(id, videos) {

	//@debug
	// console.log('video: ' + id);

	var video = getVideoById(id, videos);

	if (video) {
		loadVideo('.video-container', '#video', video.mp4, video.ogv, video.webm);
		initPopcorn(video.loop);

		// clear all map areas
		popcorn.cue(0, function() {
			//@debug
			// console.log('clear map areas');

			clearMapAreas();
		});

		popcorn.on('durationchange', function() {
			if (currentVideoId != 'intro') {
				// play next video on end
				popcorn.cue(Math.floor(popcorn.duration()), function() {
					currentVideoId = getNextVideoId(currentVideoId, videos);

					//@debug
					// console.log(currentVideoId);

					if (currentVideoId) {
						playVideo(currentVideoId, videos);
					}
					else {
						currentVideoId = 'intro';
						playVideo(currentVideoId, videos);
					}
				});
			}
		});

		addCues(video);

		fitAndCenterElements('.video-fg');
		fitAndCenterElements('#video');

		fitElementToGivenWidth('.cover', Math.floor($(window).width() / numberOfchapters));
		verticalyCenterElement('.cover', 'relative');

		var pixelGap = $(window).width() % numberOfchapters;

		if (pixelGap > 0) {
			$('.cover' + numberOfchapters).width($('.cover' + numberOfchapters).width() + pixelGap);
		}

		$('.video-loading-text').text('');
		$('.video-loading-text').hide();
		$('.video-loading').hide();

		// video title is not needed anymore
		// fitElementToScreen('.video-title');
		// verticalyCenterElement('.video-title .text');

		fitElementToScreen('.video-interface');
		centerElement('.icon.play');
		centerElement('.icon.pause');

		horizontallyCenterElement('.intro-fg', 'absolute');
		$('.intro-fg').css('left', (parseInt($('.intro-fg').css('left')) + introTitleOffset) + 'px');

		verticalyCenterElement('.close-button', 'absolute');

		$('.video-interface').hide();
		minimizeSlider('chapters');
		minimizeSlider('about');
		minimizeSlider('credits');
		clearInterval(autoScrollerInterval);
		minimizeBanner('footer');
		minimizeBanner('manual');

		var videoStarted;

		popcorn.on('loadstart', function() {
			//@debug
			// console.log('loadstart');

			videoStarted = false;

			if (id != 'intro') {
				$('.video-loading-text').text('');
				$('.video-loading-text').stop().fadeIn(4 * 1000);
				$('.video-loading').stop().fadeIn(4 * 1000);
			}
		});

		var ratio;
		var relativeRatio;

		popcorn.on('progress', function() {
			//@debug
			// console.log('progress');

			//@debug
			// console.log('popcorn.duration(): ' + popcorn.duration());
			// console.log('popcorn.media.buffered.length: ' + popcorn.media.buffered.length);

			if (!videoStarted && popcorn.media.buffered.length == 1) {
				//@debug
				// console.log('popcorn.media.buffered.start(0): ' + popcorn.media.buffered.start(0));
				// console.log('popcorn.media.buffered.end(0): ' + popcorn.media.buffered.end(0));
				// console.log('buffered: ' + (popcorn.media.buffered.end(0) - popcorn.media.buffered.start(0)));

				if (popcorn.duration()) {

					ratio = (popcorn.media.buffered.end(0) - popcorn.media.buffered.start(0)) / popcorn.duration();

					//@debug
					// console.log('ratio: ' + ratio);
					// console.log( 'startWhen: ' + startWhen);

					if (ratio <= startWhen) {
						if (id != 'intro') {
							relativeRatio = Math.round((ratio / startWhen) * 100);

							//@debug
							// console.log( 'relative ratio: ' + relativeRatio);

							$('.video-loading-text').text(relativeRatio);
						}
					}

					if (ratio > startWhen) {
						if (id != 'intro') {
							$('.video-loading-text').text('');
							$('.video-loading-text').fadeOut();
							$('.video-loading').fadeOut();

							// video title is not needed anymore
							// $('.video-title .text').text('');
							// $('.video-title').fadeOut(4 * 1000);
						}

						popcorn.play();
						videoStarted = true;
					}
				}
			}
		});

		popcorn.on('loadedmetadata', function() {
			//@debug
			// console.log('loadedmetadata');
			// console.log(mp4Failed);

			// video title is not needed anymore
			// //@hack check that mp4 loading has failed
			// if (id != 'intro') {
			// 	$('.video-title .text').text(video.title);
			// 	verticalyCenterElement('.video-title .text');
			// 	$('.video-title').stop().fadeIn(4 * 1000);
			// }
			// else {
			// 	$('.video-title .text').text('');
			// 	$('.video-title').hide();
			// }

			popcorn.pause();
		});

		popcorn.on('loadeddata', function() {
			//@debug
			// console.log('loadeddata');
		});

		popcorn.on('canplay', function() {
			//@debug
			// console.log('canplay');
		});

		popcorn.on('canplaythrough', function() {
			//@debug
			// console.log('canplaythrough');

			//@hack sometimes 'progress' event is never fired and without this hack the video is never started
			if (!videoStarted) {

				if (id != 'intro') {
					$('.video-loading-text').text('');
					$('.video-loading-text').fadeOut();
					$('.video-loading').fadeOut();

					// video title is not needed anymore
					// $('.video-title .text').text('');
					// $('.video-title').fadeOut(4 * 1000);
				}

				popcorn.play();
				videoStarted = true;
			}
		});
	}
};

var getNextVideoId = function(id, videos) {
	var key;
	var isNext = false;
	for (key in videos) {
		if (isNext && videos[key].enabled == 'true') {
			return videos[key].id;
		}

		if (videos[key].id == id) {
			isNext = true;
		}
	}

	return null;
};

var getVideoById = function(id, videos) {
	var key;
	for (key in videos) {
		if (videos[key].id == id) {
			return videos[key];
		}
	}

	return null;
};

var onKeypress = function() {
	$(window).keypress(function(event) {
		//@debug
		// console.log('event.which: ' + event.which);
		// console.log('event.keyCode: ' + event.keyCode);

		// SPACE
		if (event.which == 32) {
			if (popcorn.paused()) {
				$('.video-interface').hide();
				popcorn.play();

				//@debug
				// console.log('play');
			}
			else {
				popcorn.pause();
				$('.video-interface').show();

				//@debug
				// console.log('pause');
			}
		}

		//@dev keyboard shortcuts
		/*
		// f
		if (event.which == 102) {
			fitMapAreaElementsToScreen($('#videomap').children());

			fitAndCenterElements('.video-fg');
			fitAndCenterElements('#video');

			fitElementToGivenWidth('.cover', Math.floor($(window).width() / numberOfchapters));
			verticalyCenterElement('.cover', 'relative');

			var pixelGap = $(window).width() % numberOfchapters;

			if (pixelGap > 0) {
				$('.cover' + numberOfchapters).width($('.cover' + numberOfchapters).width() + pixelGap);
			}

			// video title is not needed anymore
			// fitElementToScreen('.video-title');
			// verticalyCenterElement('.video-title .text');

			fitElementToScreen('.video-interface');
			centerElement('.icon.play');
			centerElement('.icon.pause');

			horizontallyCenterElement('.intro-fg', 'absolute');
			$('.intro-fg').css('left', (parseInt($('.intro-fg').css('left')) + introTitleOffset) + 'px');

			verticalyCenterElement('.close-button', 'absolute');
		}

		// BACKSPACE
		if (event.which == 8) {
			pointList = '';
		}

		// ENTER
		if (event.which == 13) {
			window.prompt("coords", pointList);
		}

		// F1
		if (event.keyCode == 112) {
			var popcornAlreadyPaused = false;

			if (popcorn.paused()) {
				popcornAlreadyPaused = true;
			}

			if (!popcornAlreadyPaused) {
				popcorn.pause();
			}

			var newTimecode = window.prompt("timecode", popcornTimecode);

			if (Math.floor(popcornTimecode) != Math.floor(newTimecode)) {
				popcorn.currentTime(newTimecode);
			}

			if (!popcornAlreadyPaused) {
				popcorn.play();
			}
		}

		// F2 key
		if (event.keyCode == 113) {
			if (footerEnabled) {
				console.log('disable footer');
				$(window).off('mousemove');
				footerEnabled = false;
			}
			else {
				console.log('enable footer');
				onMousemove();
				footerEnabled = true;
			}
		}
		*/
	});
};

$(document).ready(function () {

	// preload images
	preloadImages(images);

	// chapters
	var chapters = [];
	var key;

	for (key in videos) {
		if (videos[key].id != 'intro') {
			chapters.push(videos[key]);
		}
	}

	var chapterElements = generateElement(chapterTemplate, chapters);
	$(chapterElements).each(function(index, value) {
		$('.chapters').append($(this));
	});

	// init interface
	onMousemove();
	onMouseenterFooter();
	onMouseleaveFooter();
	onClickHomeButton();
	onClickFilmButton();
	onClickChaptersButton();
	onClickAboutButton();
	onClickCreditsButton();
	onClickPlayButton();
	onClickCloseButton();
	onEventChapter();

	currentVideoId = 'intro';
	playVideo(currentVideoId, videos);

	//@dev
	/*
	// get polygon coordinates in 1920 x 1080
	$(".video-fg").click(function(event){
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		var thisOffset = $(this).offset(); 

		var relX = event.pageX - thisOffset.left;
		var relY = event.pageY - thisOffset.top;

		var x = Math.round(relX / 1600 * 1920);
		var y = Math.round(relY / 900 * 1080);

		if (pointList != '') {
			pointList += ',';
		}

		pointList += x + ',' + y;

		//@debug
		// console.log(pointList);
	});
	*/

	onKeypress();
});

$(window).resize(function () {
	fitMapAreaElementsToScreen($('#videomap').children());

	fitAndCenterElements('.video-fg');
	fitAndCenterElements('#video');

	fitElementToGivenWidth('.cover', Math.floor($(window).width() / numberOfchapters));
	verticalyCenterElement('.cover', 'relative');

	var pixelGap = $(window).width() % numberOfchapters;

	if (pixelGap > 0) {
		$('.cover' + numberOfchapters).width($('.cover' + numberOfchapters).width() + pixelGap);
	}

	// video title is not needed anymore
    // fitElementToScreen('.video-title');
	// verticalyCenterElement('.video-title .text');

    fitElementToScreen('.video-interface');
	centerElement('.icon.play');
	centerElement('.icon.pause');

	horizontallyCenterElement('.intro-fg', 'absolute');
	$('.intro-fg').css('left', (parseInt($('.intro-fg').css('left')) + introTitleOffset) + 'px');

	verticalyCenterElement('.close-button', 'absolute');
});

