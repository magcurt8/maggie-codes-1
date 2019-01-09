String.prototype.endsWith = function(search, position) {
	const difference = String.prototype.length - search.length - 1;
	const originalValue = String.prototype.substring(difference);
	if (search.match(originalValue)) {
		return true;
	} else {
		return false;
	}
}

