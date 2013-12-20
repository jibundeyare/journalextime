var videos = [
	{
		id: "intro",
		title: "Intro",
		cover: "img/cover/intro.png",
		mp4: "http://your-cdn.com/video/intro.mp4",
		ogv: "http://your-cdn.com/video/intro.ogv",
		webm: "http://your-cdn.com/video/intro.webm",
		loop: true,
		enabled: 'true',
		cues: [
			{
				id: 'fade-in-journal-extime',
				timecode: 2,
				callback: function() {
					$('.intro-fg').fadeIn(12 * 1000);
				}
			},
			{
				id: 'fade-out-journal-extime',
				timecode: 40,
				callback: function() {
					$('.intro-fg').fadeOut(9 * 1000);
				}
			},
			{
				id: 'display-manual',
				timecode: 9,
				callback: function() {
					if ($.cookie('manual_displayed') != 'true') {
						$.cookie('manual_displayed', 'true');
						maximizeBanner('manual');
					}
				}
			},
			{
				id: 'hide-manual',
				timecode: 41,
				callback: function() {
					minimizeBanner('manual');
				}
			}
		],
		mapareas: [
			{
				start: 9,
				end: 41,
				title: "Molly",
				id: "intro-molly",
				name: "intro-molly",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "982,748,991,715,990,688,1015,692,1030,716,1028,743,1027,796,1009,803,991,803,985,754",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					//@todo remove when site is not in beta status anymore
					minimizeBanner('header');

					minimizeBanner('manual');

					currentVideoId = getNextVideoId('intro', videos);
					playVideo(currentVideoId, videos);
				}
			}
		]
	},
	{
		id: "tresor",
		title: "Trésor",
		cover: "img/covers/tresor.png",
		mp4: "http://your-cdn.com/video/Tr%C3%AAsor-MPEG-4%20-%20Diffusion%20web.mp4",
		ogv: "http://your-cdn.com/video/Tr%C3%AAsor-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/Tr%C3%AAsor-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			},
			{
				id: 'load-audio',
				timecode: 0,
				callback: function() {
					clearAllAudioSources();
					loadAudio('http://your-cdn.com/audio/tresor');
				}
			}
		],
		mapareas: [
			{
				start: 104,
				end: 105,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "270,117,133,433,175,506,379,524,382,622,614,731,712,609,782,484,803,357,872,275,856,173,736,142,580,197,410,87",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 105,
				end: 106,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "48,113,32,286,158,247,108,465,248,587,642,523,758,296,970,245,941,52,330,44",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 106,
				end: 107,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "611,353,631,434,796,356,708,657,642,712,920,796,1258,623,1351,687,1535,497,1703,236,1303,13,967,8,700,133,612,339",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 107,
				end: 108,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "143,125,191,639,413,771,508,758,480,1006,985,711,1159,674,1232,503,1243,207,1022,141,870,16,257,7,144,101",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 108,
				end: 109,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "535,11,373,619,491,838,1122,849,1622,137,1699,13",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 109,
				end: 110,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "676,37,154,742,1508,968,1816,787,1508,458,1412,689",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 110,
				end: 111,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "302,645,262,933,433,955,624,1075,1044,1078,954,927,745,999,786,837,1066,851,1319,892,1199,724,1478,652,1603,745,1626,619,1722,603,1812,875,1878,862,1826,529,1642,315,1492,599,1280,590,1160,481,990,553,797,563,706,478",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 111,
				end: 112,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "902,20,373,758,894,731,844,1012,1248,1077,1422,843,1902,657,1903,105",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 112,
				end: 113,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "398,620,354,965,754,1017,1351,683,1339,363,1661,551,1696,139,1344,23,911,267,485,573",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 113,
				end: 114,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "534,691,464,1059,817,1076,1319,807,1542,817,1553,430,1618,325,1804,464,1805,111,1588,21,932,59,823,73,707,526",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 114,
				end: 115,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "554,500,474,956,1427,721,1211,122,1342,55,1643,424,1870,20,758,10,566,152,724,271,764,437",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 115,
				end: 116,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "386,317,506,491,388,920,469,962,1292,703,1367,631,1308,475,1412,416,1510,532,1667,381,1415,8,790,9,742,87,858,103,847,203,767,233,582,208",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 116,
				end: 117,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "529,359,604,9,1360,10,1688,440,1579,601,1536,489,1426,503,1444,709,758,983,727,909,989,826,955,728,641,785,785,581,1027,481,989,343,828,274,710,277,568,351",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 117,
				end: 118,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "554,265,458,730,630,1069,1150,1075,1363,943,1327,764,1427,740,1469,823,1531,706,1174,254,790,291",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 118,
				end: 119,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "498,580,608,1071,1321,1067,1316,958,1441,937,1457,1031,1598,933,1268,527,1147,580,1055,435,746,527",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 119,
				end: 120,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "420,569,397,423,493,341,641,350,977,217,1111,223,1368,446,1286,586,1283,797,973,1069,714,1072,535,863,908,830,937,734,991,658,878,556,745,506",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 121,
				end: 122,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "581,119,438,482,1296,734,1404,310",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			/*
			{
				start: 122,
				end: 123,
				title: "Trésor",
				id: "tresor",
				name: "tresor",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "902,113,848,499,1656,707",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			}
			*/
		]
	},
	{
		id: "images-de-guerre-guerre-d-images",
		title: "Images de guerre, guerre d'images",
		cover: "img/covers/images-de-guerre-guerre-d-images.png",
		mp4: "http://your-cdn.com/video/guerre%20d'images-MPEG-4%20-%20Diffusion%20web.mp4",
		ogv: "http://your-cdn.com/video/S%C3%A9q%20guerre-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/S%C3%A9q%20guerre-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			}
		],
		mapareas: [
			{
				start: 211,
				end: 212,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "653,357,674,796,1301,727,1255,304",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 212,
				end: 213,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "667,429,659,862,1259,853,1246,439",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 213,
				end: 214,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "200,500,192,891,793,887,768,503",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 214,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "223,549,184,883,768,871,769,529",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 218,
				end: 219,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "865,454,814,899,1250,947,1284,490",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 219,
				end: 220,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "928,463,898,922,1328,947,1346,493",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 220,
				end: 221,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1183,338,1112,781,1554,859,1626,399",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 221,
				end: 222,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1714,94,1567,429,1919,535,1919,159",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 222,
				end: 223,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1561,141,1606,495,1919,511,1919,142",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 223,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1549,166,1590,514,1919,518,1919,129",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 226,
				end: 227,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1549,166,1590,514,1919,518,1919,129",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 227,
				end: 228,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "820,548,895,965,1488,856,1410,447",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 228,
				end: 229,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "866,575,888,987,1482,940,1433,542",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 229,
				end: 230,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "685,547,642,917,1240,928,1232,547",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 230,
				end: 231,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "436,543,396,881,953,871,966,517",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 231,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "446,535,392,871,960,883,979,543",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 234,
				end: 235,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "446,535,392,871,960,883,979,543",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 235,
				end: 236,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "954,413,956,898,1290,908,1295,421",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 236,
				end: 237,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1019,377,1006,872,1348,883,1366,394",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 237,
				end: 238,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1241,92,1188,581,1535,621,1591,122",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 238,
				end: 239,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1166,7,1166,202,1465,173,1445,7",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 239,
				end: 240,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1165,7,1169,253,1451,251,1435,7",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 240,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1164,8,1175,254,1460,255,1439,5",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 243,
				end: 244,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1049,421,1036,944,1423,956,1444,448",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 244,
				end: 245,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1032,471,1019,967,1391,985,1415,485",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 245,
				end: 246,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1010,473,1028,964,1384,963,1375,477",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 246,
				end: 247,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1012,448,1019,940,1376,945,1386,459",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 247,
				end: 248,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1039,417,1026,915,1394,934,1424,440",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 248,
				end: 249,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "808,343,755,820,1147,881,1205,385",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 249,
				end: 250,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "808,343,755,820,1147,881,1205,385",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 250,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "12,211,298,202,253,567,2,566",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 253,
				end: 254,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "793,796,814,406,1426,423,1394,854",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 254,
				end: 255,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "793,796,814,406,1426,423,1394,854",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 255,
				end: 256,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "818,471,818,874,1404,869,1392,460",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 256,
				end: 257,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "818,471,818,874,1404,869,1392,460",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 257,
				end: 258,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "818,471,818,874,1404,869,1392,460",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 258,
				end: 259,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "818,471,818,874,1404,869,1392,460",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 259,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "818,471,818,874,1404,869,1392,460",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 261,
				end: 262,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "895,365,914,961,1352,939,1318,341",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 262,
				end: 263,
				title: "Opération Dynamo",
				id: "operation-dynamo",
				name: "operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "889,370,919,955,1349,944,1321,346",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=2', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			}
		]
	},
	{
		id: "london-calling",
		title: "London calling",
		cover: "img/covers/london-calling.png",
		mp4: "http://your-cdn.com/video/london%20calling-MPEG-4%20-%20Diffusion%20web.mp4",
		ogv: "http://your-cdn.com/video/DJ%20bunker%20final-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/DJ%20bunker%20final-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			}
		],
		mapareas: [
			{
				start: 369,
				end: 376,
				title: "Opération Dynamo 1940",
				id: "video-youtube-operation-dynamo",
				name: "video-youtube-operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "500,1073,626,410,797,279,847,133,976,64,1091,83,1168,184,1178,398,1339,477,1384,781,1380,965,1344,1078",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=8#british-dunkirk-evacuation-footage-operation-dynamo-1940', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 376,
				end: 383,
				title: "Opération Dynamo 1940",
				id: "video-youtube-operation-dynamo",
				name: "video-youtube-operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "439,1078,433,986,524,496,684,346,707,245,744,206,808,166,922,190,974,266,1030,295,1025,379,1170,440,1214,701,1297,661,1392,731,1346,1078",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=8#british-dunkirk-evacuation-footage-operation-dynamo-1940', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			},
			{
				start: 383,
				end: 412,
				title: "Opération Dynamo 1940",
				id: "video-youtube-operation-dynamo",
				name: "video-youtube-operation-dynamo",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "490,1077,546,470,718,311,738,207,899,127,1063,190,1088,290,1073,382,1229,445,1320,653,1393,705,1405,896,1344,1078",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					popcorn.pause();
					$('.video-interface').show();
					window.open('/documents/?cat=8#british-dunkirk-evacuation-footage-operation-dynamo-1940', '_blank', 'height=500,width=1100,scrollbars=1');
				}
			}
		]
	},
	{
		id: "mon-amour-carnaval",
		title: "Mon amour... Carnaval",
		cover: "img/covers/mon-amour-carnaval.png",
		mp4: "http://your-cdn.com/video/Carna%202.mp4",
		ogv: "http://your-cdn.com/video/S%C3%A9q%20carna-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/S%C3%A9q%20carna-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			},
			{
				id: 'load-audio-1',
				timecode: 0,
				callback: function() {
					clearAllAudioSources();
					loadAudio('http://your-cdn.com/audio/mon-amour-carnaval-molly-bloom-chante');
				}
			},
			{
				id: 'load-audio-2',
				timecode: 325,
				callback: function() {
					clearAllAudioSources();
					loadAudio('http://your-cdn.com/audio/mon-amour-carnaval-mon-amour');
				}
			}
		],
		mapareas: [
			{
				start: 254,
				end: 257,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "254,1006,254,926,491,785,514,655,589,569,654,581,685,333,784,206,949,147,1117,259,1194,521,1123,627,1118,675,1028,808,998,868,922,883,984,1012",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 260,
				end: 261,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1314,648,220,1011,318,907,538,793,554,668,614,585,708,577,749,317,838,209,1002,155,1163,245,1240,393,1272,541,1190,652,1178,710,1064,902,970,901,1004,1010",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 277,
				end: 278,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "992,388,1004,353,979,284,979,235,1007,145,1080,89,1126,107,1159,152,1171,203,1261,218,1361,271,1428,479,1381,710,1352,803,1301,808,1262,910,1255,1012,1152,1013,1186,741,1157,736,1133,916,1148,1012,1106,1009,1123,940,1122,836,1110,772,1064,670,1025,584,1019,560,1055,469",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 278,
				end: 279,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "658,788,971,410,980,380,954,310,943,281,962,245,991,162,1058,122,1117,170,1146,233,1236,246,1334,295,1405,481,1355,731,1319,821,1280,824,1246,909,1242,1013,1133,1006,1169,751,1132,745,1105,943,1115,1010,1090,1003,1087,909,1042,686,990,590,1024,476",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 279,
				end: 280,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "954,464,920,385,953,259,1034,193,1100,249,1116,314,1205,326,1300,368,1386,555,1340,778,1297,883,1255,883,1255,883,1230,959,1225,1009,1117,1011,1162,788,1117,781,1086,1013,1044,1004,1037,893,1040,803,948,620,984,521",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 280,
				end: 281,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "938,489,892,412,912,302,947,254,1010,220,1067,249,1097,332,1186,338,1288,383,1388,571,1332,797,1297,871,1238,899,1223,946,1217,1013,1120,1007,1105,962,1164,771,1129,766,1064,927,1081,1010,1015,1010,1028,962,1016,803,910,604",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 281,
				end: 282,
				title: "Molly Bloom chante",
				id: "molly-bloom-chante",
				name: "molly-bloom-chante",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "960,502,905,411,907,347,947,262,1010,221,1060,249,1103,326,1216,334,1310,374,1423,562,1294,902,1271,901,1253,1007,1142,1006,1202,763,1165,757,1104,913,1121,1006,1022,1006,1024,796,936,605,961,512",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 330,
				end: 331,
				title: "Dans les rues de la ville il y a mon amour",
				id: "mon-amour",
				name: "mon-amour",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1196,1009,1192,829,1289,734,1270,457,1270,309,1350,187,1513,95,1649,41,1782,110,1872,355,1912,481,1913,764,1913,1006",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 331,
				end: 335,
				title: "Dans les rues de la ville il y a mon amour",
				id: "mon-amour",
				name: "mon-amour",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1208,815,1307,725,1306,652,1253,621,1248,361,1337,191,1556,85,1672,57,1811,147,1912,367,1919,623,1916,1010",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			},
			{
				start: 335,
				end: 339,
				title: "Dans les rues de la ville il y a mon amour",
				id: "mon-amour",
				name: "mon-amour",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "1182,1012,1204,703,1229,641,1313,613,1316,525,1268,487,1321,411,1286,316,1283,223,1348,118,1558,10,1796,10,1918,146,1918,1012",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			}
		]
	},
	{
		id: "cap-vers-l-islande",
		title: "Cap sur l'Islande",
		cover: "img/covers/cap-vers-l-islande.png",
		mp4: "http://your-cdn.com/video/Cap%20vers%20l'islande-MPEG-4%20-%20Diffusion%20web.mp4",
		ogv: "http://your-cdn.com/video/S%C3%A9q%20p%C3%AAcheur-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/S%C3%A9q%20p%C3%AAcheur-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			},
			{
				id: 'load-audio',
				timecode: 0,
				callback: function() {
					clearAllAudioSources();
					loadAudio('http://your-cdn.com/audio/cap-vers-l-islande');
				}
			}
		],
		mapareas: [
			{
				start: 4,
				end: 9,
				title: "Je cherche mon pêcheur d'Islande, l'histoire de Moby Dick",
				id: "pecheur-d-islande",
				name: "pecheur-d-islande",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "148,1067,194,801,571,383,534,31,1175,16,1487,521,1361,640,1559,754,1637,1070",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			}
		]
	},
	{
		id: "comores",
		title: "Comores",
		cover: "img/covers/comores.png",
		mp4: "http://your-cdn.com/video/comore%202.mp4",
		ogv: "http://your-cdn.com/video/comore%202.ogv",
		webm: "http://your-cdn.com/video/comore%202.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			}
		],
		mapareas: []
	},
	{
		id: "traversee",
		title: "Traversée",
		cover: "img/covers/traversee.png",
		mp4: "http://your-cdn.com/video/Travers%C3%A9e.mp4",
		ogv: "http://your-cdn.com/video/S%C3%A9q%20container-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/S%C3%A9q%20container-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			},
			{
				id: 'load-audio',
				timecode: 0,
				callback: function() {
					clearAllAudioSources();
					loadAudio('http://your-cdn.com/audio/london-calling');
				}
			}
		],
		mapareas: [
			{
				start: 187,
				end: 199,
				title: "London calling",
				id: "london-calling",
				name: "london-calling",
				shape: "poly",
				original_width: 1920,
				original_height: 1080,
				original_coords: "194,1078,274,656,403,593,402,367,467,236,571,201,667,226,742,391,738,597,857,653,901,1078",
				target: "",
				href: "",
				alt: "",
				click: function(event, element) {
					//@debug
					// console.log(element.attr('id'));

					event.preventDefault()
					event.stopPropagation();
					event.stopImmediatePropagation();

					playAudio();
				}
			}
		]
	},
	{
		id: "a-travers-la-ville",
		title: "À travers la ville",
		cover: "img/covers/a-travers-la-ville.png",
		mp4: "http://your-cdn.com/video/A%20travers%20la%20ville%202.mp4",
		ogv: "http://your-cdn.com/video/A%20travers%20la%20ville%202-MPEG-4%20-%20Diffusion%20web.ogv",
		webm: "http://your-cdn.com/video/A%20travers%20la%20ville%202-MPEG-4%20-%20Diffusion%20web.webm",
		loop: false,
		enabled: 'true',
		cues: [
			{
				id: 'hide-journal-extime',
				timecode: 0,
				callback: function() {
					$('.intro-fg').hide();
				}
			}
		],
		mapareas: []
	},
];

