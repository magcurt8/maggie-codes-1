helperPrintFunction = function (printValue) {
	console.log("Here be the thing", printValue)
}

String.prototype.endsWith = function(search, position) {
	// this is foo
	// search is oo
	search = search.toString()

	// 3 - 2 == 1
	// start at index 1, until end
	const difference = (this.length - search.length)
	const originalValue = this.substring(difference)

	/*if (search.length == this.length) {
		if (search.match(this)) {
			return true
		}
	} else */if (search.match(originalValue)) {
		return true
	}
	return false
}

