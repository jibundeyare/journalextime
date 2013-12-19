// http://www.yeesiang.com/jquery.autoScroller/	jQuery Auto Scroller - a jQuery News Scroller

//@hack
var autoScroller = function(selector, speed, bottomMargin)
{
    var scrollSpeed = (speed == null) ? 5 : parseInt(speed);

    // // double make sure the autoScroller-container has the correct css position and overflow property
    // $(selector).parent().css({position:'relative',overflow:'hidden'});

    // // set content div style
    // $(selector).css({'position': 'absolute', 'top': 0});

	// get content div height
	// contentDivHeight = $(selector).height();

	// call periodical
	// $(selector).everyTime(100, function(i){
	// if (parseInt($(this).css('top')) > (contentDivHeight * (-1) + 8))
	// 	{
	// 		// move scroller upwards
	// 		offset = parseInt($(this).css('top')) - scrollSpeed + "px";
	// 		$(this).css({'top': offset});
	// 	}
	// 	// reset to original position
	// 	else
	// 	{
	// 		// reset to original position
	// 		offset = parseInt($(this).parent().height()) + 8 + "px";
	// 		$(this).css({'top': offset});
	// 	}
	// }, 100);

	offset = parseInt($(selector).parent().height()) - bottomMargin + 8 + "px";
	$(selector).css({'position': 'absolute', 'top': offset});

	// call periodical
	var autoScrollInterval = setInterval(function(){
		//@debug
		// console.log('top: ' + parseInt($(selector).css('top')));
		// console.log('height: ' + $(selector).height());

		if (parseInt($(selector).css('top')) > ($(selector).height() * (-2) + 8))
		{
			// move scroller upwards
			offset = parseInt($(selector).css('top')) - scrollSpeed + "px";
			$(selector).css({'top': offset});
		}
		else
		{
			// reset to original position
			offset = parseInt($(selector).parent().height()) + 8 + "px";
			$(selector).css({'top': offset});
		}
	}, 100);

    // on mouse over event, pause the scroller
    // $(selector).mouseover(function ()
    // {
    //     speed = scrollSpeed;
    //     scrollSpeed = 0;
    // });

    // on mouse out event, start the scroller
    // $(selector).mouseout(function ()
    // {
    //     scrollSpeed = speed;
    // });

	return autoScrollInterval;
}

