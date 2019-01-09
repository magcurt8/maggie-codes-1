String.prototype.endsWith = function(search, position) {
	search = search.toString()

	const resultLength = (this.length - search.length)
	const result = this.substring(resultLength)

	const positionResult = this.substring(position - search.length, position - 1)

	if (resultLength == 0) {
		if (search.match(this)) {
			return true
		}
	} else if (position != undefined) {
		if (search.match(positionResult)) {
			return true
		} 
	} else if (search.match(result)) {
		return true
	}
	return false
}

