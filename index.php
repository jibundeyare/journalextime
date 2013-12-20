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
<link rel="stylesheet" href="font/arvo.css">
<link rel="stylesheet" href="font/titillium.css">
<link rel="stylesheet" href="css/film.css">

<script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>
<!--[if lt IE 9]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<div class="container">
	<div class="audio-container">
		<audio id="audio" preload="auto"></audio>
	</div>
    <div class="video-container">
        <video id="video" preload="auto"></video>
		<img class="video-loading" src="img/ajax-loader.gif" alt="" title="" />
		<div class="video-loading-text"></div>
		<img class="video-interactivity" src="img/dot-red.png" alt="" title="" />
		<img class="intro-fg" src="img/journal-extime-1920x1440-921x83.png" alt="" title="" />
		<img class="video-fg" src="img/transparent_pixel.gif" usemap="#videomap" alt="" title="" />
		<img class="video-cover" src="img/transparent_pixel.gif" alt="" title="" />
		<div class="video-title">
			<div class="text"></div>
		</div>
		<div class="video-interface">
			<div class="video-interface-bg"></div>
			<img class="icon play" src="img/icon-play.png" alt="play" title="" />
		</div>
		<map id="videomap" name="videomap"></map>
    </div>
	<div class="chapters-container minimized">
		<div class="chapters-bg"></div>
		<div class="chapters"></div>
		<img class="close-button" src="img/icon-arrow-left.png" alt="fermer" />
	</div>
	<div class="about-container minimized">
		<div class="about-bg"></div>
		<div class="about">
			<div class="centered-container">
				<?php include('about.php'); ?>
			</div>
		</div>
		<img class="close-button" src="img/icon-arrow-left.png" alt="fermer" />
	</div>
	<div class="credits-container minimized">
		<div class="credits-bg"></div>
		<div class="credits">
			<div class="centered-container">
				<?php include('credits.php'); ?>
			</div>
		</div>
		<img class="close-button" src="img/icon-arrow-left.png" alt="fermer" />
	</div>
	<div class="header-container">
		<div class="centered-container">
			<div class="col12">
				<!--
				<span class="italic">Mac OS X</span>
				<span class="italic">Windows</span>
				<span class="italic">Linux</span>
				<span class="italic">Safari</span>
				<span class="italic">IE</span>
				<span class="italic">Chrome</span>
				<span class="italic">Firefox</span>
				-->
				Ce site est encore en version bêta. Les séquences vidéos ne sont actuellement pas visibles avec <span class="italic">Internet Explorer</span>.<br />
				La version <span class="italic">IE</span> arrive très prochainement.
			</div>
		</div>
	</div>
	<div class="manual-container minimized">
		<div class="centered-container">
			<div class="col12">
				Quand le point rouge apparaît, le film devient interactif. À vous de découvrir où cliquer...
			</div>
		</div>
	</div>
	<div class="footer-container minimized">
		<div class="centered-container">
			<div class="col4">
				<h1><a href="/" class="home-button"><img src="img/journal-extime-30px.png" alt="JOURNAL EXTIME" /></a></h1>
			</div>
			<div class="col8">
				<ul>
					<li><a href="#" class="film-button">film</a></li>
					<li><a href="#" class="chapters-button">chapitres</a></li>
					<li><a target="_blank" href="/documents/" class="documents-button">documents</a></li>
					<li><a href="#" class="about-button">à propos</a></li>
					<li><a href="#" class="credits-button">crédit</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="js/vendor/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/vendor/jquery.cookie.js"></script>
<script type="text/javascript" src="js/plugins.js"></script>
<script type="text/javascript" src="js/vendor/popcorn-complete.min.js"></script>
<script type="text/javascript" src="js/vendor/jquery.maphilight.js"></script>

<script type="text/javascript" src="js/autoScroller.js"></script>
<script type="text/javascript" src="js/film-var.js"></script>
<script type="text/javascript" src="js/film-data.js"></script>
<script type="text/javascript" src="js/film-template.js"></script>
<script type="text/javascript" src="js/film.js"></script>

<?php
if ($_SERVER['HTTP_HOST'] != 'www.journalextime.dev')
{
	include('ga.php');
}
?>

</body>
</html>

