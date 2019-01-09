/*
TEST CASE:
expect("foobar".endsWith("oo", 3)).to.equal(true)
*/ 
/*
expect("foobarbar".endsWith("bar", 6)).to.equal(true)
6 - 3 = 3 (index start)

*/

String.prototype.endsWith = function(search, position) {
	// this is foo
	// search is oo
	// position is 3 
	search = search.toString()

	// 3 - 2 == 1
	// start at index 1, until end
	const difference = (this.length - search.length)
	const differenceWithPosition(this.length - position)
	const originalValue = this.substring(difference)
	const positionOriginalValue = this.substring(position - search.length, position - 1)

	if (difference == 0) {
		if (search.match(this)) {
			return true
		}
	} else if (position != undefined) {
		if (search.match(positionOriginalValue)) {
			return true
		} 
	} else if (search.match(originalValue)) {
		return true
	}
	return false
}

