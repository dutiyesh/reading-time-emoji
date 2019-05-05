'use strict';

const defaultOptions = {
	base: 5,
	short: '☕',
	long: '🍱'
};

module.exports = (minutes, options) => {
	let emojis = '';
	const newOptions = {...defaultOptions, ...options};
	const emojiCount = Math.round(minutes / newOptions.base) || 1;

	if (emojiCount > newOptions.base) {
		emojis = new Array(Math.round(emojiCount / 2)).fill(newOptions.long); // ENHANCEMENT: Limit maximum emojis count to `base` value if required
	} else {
		emojis = new Array(emojiCount).fill(newOptions.short);
	}

	return `${emojis.join('')} ${minutes} min read`;
};
