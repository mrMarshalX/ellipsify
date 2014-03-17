(function () {
	Element.prototype.ellipsify = function (lines, maxHeight, lineHeigth) {
		var tagName = this.tagName.toLowerCase(),
			date;
		if (tagName === 'div' || tagName === 'section') {
			date = new Date().getTime();
			createEllipsis(date, maxHeight, lines, lineHeigth);
			this.classList.add('css-multiline-ellipsis-element-' + date);
		}
	};

	function createEllipsis(timestamp, maxHeight, lines, lineHeight) {
		var cssAnimation = document.createElement('style'),
			rule,
			lines = lines || '3', 
			lineHeight = lineHeight || 1;

		cssAnimation.type = 'text/css';
		cssAnimation.id = 'css-multiline-ellipsis-' + timestamp;

		rule = document.createTextNode(
			'.css-multiline-ellipsis-element-' + timestamp + ' {' + 
				'display: -webkit-box;' +
				'-webkit-line-clamp: ' + lines + ';' +
				'-webkit-box-orient: vertical;' +
				'line-height: ' + lineHeight + ';' +
				'overflow: hidden;' +
				'text-overflow: ellipsis;' +
			'}'
		);
		cssAnimation.appendChild(rule);
		document.getElementsByTagName('head')[0].appendChild(cssAnimation);
	}
})();