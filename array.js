Array.prototype.find = function(fn) {
	var result
	this.forEach(function(element){
		if (fn(element)) {
			result = element
		}
	})
	return result
}

Array.prototype.findIndex = function(fn) {
}

Array.prototype.includes = function(search) {
	var result = false
	this.forEach(function(element) {
		if (element == search) {
			result = true
		}
	})
	return result
}
