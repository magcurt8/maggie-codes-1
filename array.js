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
	var result

	this.forEach(function(element, index){
		if (fn(element)) {
			result = index
		}
	})

	if (result == undefined) {
		result = -1
	}
	return result
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
