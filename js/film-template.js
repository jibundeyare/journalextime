var generateHtml = function(templateSource, data) {
	var index;
	var key;
	var html = '';

	for (index in data) {
		var template = templateSource;

		for (key in data[index]) {

			if (data[index].hasOwnProperty(key)) {
				var regex = new RegExp('{{' + key +'}}', 'g');
				template = template.replace(regex, escapeHtml(data[index][key]));
			}
		}

		html += template;
	}

	return html;
};

var generateElement = function(templateSource, data) {
	var number = 0;
	var index;
	var key;
	var elements = new Array();

	for (index in data) {
		var template = templateSource;

		for (key in data[index]) {

			if (data[index].hasOwnProperty(key)) {
				var regex = new RegExp('{{' + key +'}}', 'g');
				template = template.replace(regex, escapeHtml(data[index][key]));
			}
		}

		var regex = new RegExp('{{number}}', 'g');
		number++;
		template = template.replace(regex, escapeHtml(number));

		var element = $(template);

		elements.push(element);
	}

	return elements;
};

var bindEvent = function(elements, eventType, callback) {
	$(elements).each(function(index, value) {
		$(this).on(eventType, callback);
	});
};

var generateElementAndEvents = function(templateSource, data) {
	var index;
	var key;
	var elements = new Array();

	for (index in data) {
		var template = templateSource;

		for (key in data[index]) {

			if (data[index].hasOwnProperty(key)) {
				var regex = new RegExp('{{' + key +'}}', 'g');
				template = template.replace(regex, escapeHtml(data[index][key]));
			}
		}

		var element = $(template);

		if (data[index]["click"]) {
			var callback = data[index]["click"];
			element.click(function(event) {
				callback(event, $(this));
			});
		}

		elements.push(element);
	}

	return elements;
};

// https://github.com/janl/mustache.js/blob/master/mustache.js
var entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': '&quot;',
	"'": '&#39;',
	"/": '&#x2F;'
};

// https://github.com/janl/mustache.js/blob/master/mustache.js
function escapeHtml(string) {
	return String(string).replace(/[&<>"'\/]/g, function (s) {
		return entityMap[s];
	});
}

