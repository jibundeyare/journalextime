<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Journal Extime</title>
<meta name="description" content="">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0">

<link rel="stylesheet" href="css/normalize.min.css">
<link rel="stylesheet" href="css/coming-soon.css">

<script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>
<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<div id="ie_container"></div>

<div id="container">
	<canvas id="pcanvas"></canvas>
</div>

<script src="js/vendor/jquery-1.9.1.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/coming-soon.js"></script>
<script src="js/vendor/processing-1.4.1.min.js"></script>

<script type="text/processing" data-processing-target="pcanvas">

/* @pjs preload="./img/background-640x480.png"; */
/* @pjs preload="./img/journal-extime-320x240-154x14.png"; */
/* @pjs preload="./img/journal-extime-640x480-308x27.png"; */
/* @pjs preload="./img/journal-extime-768x576-369x33.png"; */
/* @pjs preload="./img/journal-extime-800x600-385x34.png"; */
/* @pjs preload="./img/journal-extime-1024x768-490x44.png"; */
/* @pjs preload="./img/journal-extime-1280x960-614x54.png"; */
/* @pjs preload="./img/journal-extime-1400x1050-672x60.png"; */
/* @pjs preload="./img/journal-extime-1600x1200-768x70.png"; */
/* @pjs preload="./img/journal-extime-1920x1440-921x83.png"; */

int iMinAlpha = 5;
int iMaxAlpha = 100;
int iMinDuration = 2;
int iMaxDuration = 5;
int iAlphaIndex = -1;
int iPreviousAlpha = iMinAlpha;
int aAlpha[];
PImage oBg;
PImage oTitle;
boolean bMouseOver = false;

int iFPS = 30;

String sBgImage = "./img/background-640x480.png";

int iTitleImageX = 0;
int iTitleImageY = 0;
int iTitleImageSize = 0;
int[] iTitleImageWidth = new int[9];
int[] iTitleImageHeight = new int[9];
String[] sTitleImage = new String[9];
float fTitleImageX = 1 / 40;
float fTitleImageY = 2 / 7;
float fTitleImageYLandscape = 2 / 7;
float fTitleImageYPortrait = 2 / 5;

interface JavaScript
{
	void setCursor(String sCursor);
}

JavaScript js;

void bindJavascript(JavaScript oJavaScript)
{
	js = oJavaScript;
}

void setup()
{
	int iWidth = $(window).width();
	int iHeight = $(window).height();

	size(iWidth, iHeight);

	frameRate(iFPS);
	smooth();

	initAlpha(iFPS * 6, 0, iMaxAlpha);
	iAlphaIndex = 0;
	iPreviousAlpha = aAlpha[aAlpha.length - 1];

	// 320x240
	int iIndex = 0;
	iTitleImageWidth[iIndex] = 154;
	iTitleImageHeight[iIndex] = 14;
	sTitleImage[iIndex] = "./img/journal-extime-320x240-154x14.png";

	// 640x480
	iIndex++;
	iTitleImageWidth[iIndex] = 308;
	iTitleImageHeight[iIndex] = 27;
	sTitleImage[iIndex] = "./img/journal-extime-640x480-308x27.png";

	// 768x576
	iIndex++;
	iTitleImageWidth[iIndex] = 369;
	iTitleImageHeight[iIndex] = 33;
	sTitleImage[iIndex] = "./img/journal-extime-768x576-369x33.png";

	// 800x600
	iIndex++;
	iTitleImageWidth[iIndex] = 385;
	iTitleImageHeight[iIndex] = 34;
	sTitleImage[iIndex] = "./img/journal-extime-800x600-385x34.png";

	// 1024x768
	iIndex++;
	iTitleImageWidth[iIndex] = 490;
	iTitleImageHeight[iIndex] = 44;
	sTitleImage[iIndex] = "./img/journal-extime-1024x768-490x44.png";

	// 1280x960
	iIndex++;
	iTitleImageWidth[iIndex] = 614;
	iTitleImageHeight[iIndex] = 54;
	sTitleImage[iIndex] = "./img/journal-extime-1280x960-614x54.png";

	// 1400x1050
	iIndex++;
	iTitleImageWidth[iIndex] = 672;
	iTitleImageHeight[iIndex] = 60;
	sTitleImage[iIndex] = "./img/journal-extime-1400x1050-672x60.png";

	// 1600x1200
	iIndex++;
	iTitleImageWidth[iIndex] = 768;
	iTitleImageHeight[iIndex] = 70;
	sTitleImage[iIndex] = "./img/journal-extime-1600x1200-768x70.png";

	// 1920x1440
	iIndex++;
	iTitleImageWidth[iIndex] = 921;
	iTitleImageHeight[iIndex] = 83;
	sTitleImage[iIndex] = "./img/journal-extime-1920x1440-921x83.png";

	if (float(width) / float(height) > 640.0 / 480.0)
	{
		fTitleImageY = fTitleImageYLandscape;
	}
	else
	{
		fTitleImageY = fTitleImageYPortrait;
	}

	setSize(iWidth, iHeight);

	oBg = loadImage(sBgImage);
	oTitle = loadImage(sTitleImage[iTitleImageSize]);

	background(255, 0);

	if (float(width) / float(height) > 640.0 / 480.0)
	{
		oBg.resize(width, 0);
	}
	else
	{
		oBg.resize(0, height);
	}

	noTint();
	imageMode(CENTER);
	image(oBg, width / 2, height / 2);

	// debug
	// tint(0, 255);

	tint(255, 255);
	imageMode(CORNER);
	image(oTitle, iTitleImageX, iTitleImageY);
}

void draw()
{
	int iAlpha = getAlpha();

	background(255, 0);

	// debug
	// println("iAlpha: " + iAlpha);

	if (float(width) / float(height) > 640.0 / 480.0)
	{
		oBg.resize(width, 0);
	}
	else
	{
		oBg.resize(0, height);
	}

	noTint();
	imageMode(CENTER);
	image(oBg, width / 2, height / 2);

	// debug
	// tint(0, 255);

	tint(255, iAlpha);
	imageMode(CORNER);
	image(oTitle, iTitleImageX, iTitleImageY);
}

void setSize(int iWidth, int iHeight)
{
	// debug
	// println("iWidth: " + iWidth);
	// println("iHeight: " + iHeight);

	size(iWidth, iHeight);

	if (width > 1920)
	{
		iTitleImageSize = 8;
	}
	else if (width >= 1600)
	{
		iTitleImageSize = 7;
	}
	else if (width >= 1400)
	{
		iTitleImageSize = 6;
	}
	else if (width >= 1280)
	{
		iTitleImageSize = 5;
	}
	else if (width >= 1024)
	{
		iTitleImageSize = 4;
	}
	else if (width >= 800)
	{
		iTitleImageSize = 3;
	}
	else if (width >= 768)
	{
		iTitleImageSize = 2;
	}
	else if (width >= 640)
	{
		iTitleImageSize = 1;
	}
	else if (width > 0) // 320
	{
		iTitleImageSize = 0;
	}

	oTitle = loadImage(sTitleImage[iTitleImageSize]);

	if (float(width) / float(height) > 640.0 / 480.0)
	{
		fTitleImageY = fTitleImageYLandscape;
	}
	else
	{
		fTitleImageY = fTitleImageYPortrait;
	}

	iTitleImageX = round(iWidth * fTitleImageX);
	iTitleImageY = round(iHeight * fTitleImageY);
}

void mouseMoved()
{
	if (mouseX >= iTitleImageX && mouseX <= iTitleImageX + iTitleImageWidth[iTitleImageSize] && mouseY >= iTitleImageY && mouseY <= iTitleImageY + iTitleImageHeight[iTitleImageSize])
	{
		// debug
		// println("bMouseOver = true");

		if (js != null && bMouseOver != true)
		{
			js.setCursor("pointer");
		}

		if (bMouseOver == false)
		{
			initAlpha(iFPS * 1, aAlpha[iAlphaIndex], 255);
			iAlphaIndex = 0;
			iPreviousAlpha = 255;
		}

		bMouseOver = true;
	}
	else
	{
		// debug
		// println("bMouseOver = false");

		if (js != null && bMouseOver != false)
		{
			js.setCursor("default");
		}

		bMouseOver = false;
	}
}

int getAlpha()
{
	// debug
	// println("iAlphaIndex: " + iAlphaIndex);

	if (bMouseOver == true && iAlphaIndex >= aAlpha.length)
	{
		iAlphaIndex = aAlpha.length - 1;
	}
	else if (bMouseOver == false && (iAlphaIndex < 0 || iAlphaIndex >= aAlpha.length))
	{
		int iDuration = round(random(iFPS * iMinDuration, iFPS * iMaxDuration));
		int iNextAlpha = round(random(iMinAlpha, iMaxAlpha));

		initAlpha(iDuration, iPreviousAlpha, iNextAlpha);
		iAlphaIndex = 0;
		iPreviousAlpha = aAlpha[aAlpha.length - 1];
	}

	int iAlpha = aAlpha[iAlphaIndex];
	iAlphaIndex++;

	return iAlpha;
}

void initAlpha(int iDuration, int iAlpha1, int iAlpha2)
{
	// debug
	// println("iAlpha1: " + iAlpha1);
	// println("iAlpha2: " + iAlpha2);

	aAlpha = new int[iDuration];

	for (int iIndex = 0; iIndex < aAlpha.length; iIndex++)
	{
		aAlpha[iIndex] = round(lerp(iAlpha1, iAlpha2, float(iIndex) / float(aAlpha.length)));
	}
}

</script>

<script type="text/javascript" >
var bIsIe = false;
var iIeVersion = 0;
</script>

<!--[if lt IE 7]>
<script type="text/javascript" >
bIsIe = true;
iIeVersion = 6;
</script>
<![endif]-->

<!--[if IE 7]>
<script type="text/javascript" >
bIsIe = true;
iIeVersion = 7;
</script>
<![endif]-->

<!--[if IE 8]>
<script type="text/javascript" >
bIsIe = true;
iIeVersion = 8;
</script>
<![endif]-->

<script type="text/javascript">
var bIsBound = false;
var pjs = null;

function bindJavascript()
{
	pjs = Processing.getInstanceById('pcanvas');

	if (pjs != null && pjs.bindJavascript)
	{
		pjs.bindJavascript(this);
		bIsBound = true;

		bindJavascriptEvents();
	}

	if (!bIsBound) setTimeout(bindJavascript, 250);
}

function bindJavascriptEvents()
{
	$(window).resize(function() {
		pjs.setSize(window.innerWidth, window.innerHeight);
	});
}

function setCursor(sCursor)
{
	// debug
	// console.log(sCursor);

	$('body').css('cursor', sCursor);
}

$(document).ready(function()
{
	if (bIsIe && iIeVersion <= 8)
	{
		$('#ie_container').prepend('<img src="./img/ie8-background-1024x768.png" />');
		alert('Vous utilisez un navigateur dépassé (Internet Explorer 8 ou antérieur). Prière de le mettre à jour pour bénéficier de la meilleure expérience web possible.');
	}
	else
	{
		bindJavascript();
	}
});

</script>

<?php
include('ga.php');
?>

</body>
</html>

