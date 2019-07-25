var { sample } = require("lodash")

/**
 * Returns a single item from an array. If an invalid index is specified, a random item gets called instead.
 * @param {Object[]} options An array of options of which one will be returned.
 * @param {Number} choice The index of the array to return from.
 * @return {Object} The object returned from the specified options.
 */
function random (options, choice) {
	let option = options[choice - 1]
	return option?option:sample(options)
}

/**
 * Like random, but attaches the selected choice as the message content.
 * @param {Object[]} options An array of options of which one will be returned.
 * @param {Number} choice The index of the array to return from.
 * @param {string} name The name.
 * @return {Object} The object returned from the specified options.
 */
function random2 (options, choice = undefined, name = "Choice") {
	var option = random(options, choice)
	option = random(options, choice)
	var index = options.indexOf(option)
	if(options.length > 1){
		let header = `${name} ${index + 1}/${options.length}`
		if (!option.content) {
			option.content = header
		} else {
			option.content = `${header}\n:${option.content}`
		}
	}
	return option
}

module.exports = random2
