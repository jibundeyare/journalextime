var popcorn = null;
var popcornTimecode = 0;
var currentVideoId = 'intro';
var pointList = '';
var creditsScroll = false;
var autoScrollerInterval = null;
var chapterTemplate = '<img class="cover cover{{number}}" data-id="{{id}}" data-enabled="{{enabled}}" src="{{cover}}" alt="{{title}}" title="" />';
var mapAreaTemplate = '<area class="map-item" id="{{id}}-{{start}}-{{end}}" name="{{name}}" shape="{{shape}}" data-original-width="{{original_width}}" data-original-height="{{original_height}}" data-original-coords="{{original_coords}}" coords="" target="{{target}}" href="{{href}}" alt="{{alt}}"></area>';
var numberOfchapters = 8;
var footerEnabled = true;
var introTitleOffset = 30;
var startWhen = 0.03;

//@hack check that mp4 loading has failed
var mp4Failed = false;

var images = [
	'img/covers/a-travers-la-ville.png',
	'img/covers/cap-sur-l-islande.png',
	'img/covers/comores.png',
	'img/covers/images-de-guerre-guerre-d-images.png',
	'img/covers/london-calling.png',
	'img/covers/mon-amour-carnaval.png',
	'img/covers/tresor.png',
	'img/covers/traversee.png'
];

