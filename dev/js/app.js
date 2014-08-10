var anatomy = {};

anatomy.details = [
		{ selector: '.value', hint: 'Value', position: 'bottom'},
		{ selector: '.equal', hint: 'Has the value of', position: 'right'},
		{ selector: '.data-string', hint: 'String', position: 'right'},
		{ selector: '.data-integer', hint: 'Integer', position: 'right'},
		{ selector: '.data-boolean', hint: 'Boolean', position: 'right'},
		{ selector: '.data-array', hint: 'Array', position: 'top'},
		{ selector: '.data-object', hint: 'Object', position: 'top'},
		{ selector: '.object-name', hint: 'Property Name', position: 'bottom'},
		{ selector: '.object-value', hint: 'Property Value', position: 'bottom'},
		{ selector: '.declare', hint: 'Declare the construct', position: 'right'},
		{ selector: '.name', hint: 'Name the construct', position: 'right'},
		{ selector: '.parameters', hint: 'Create options for parameters', position: 'right'},
		{ selector: '.ref', hint: 'Call the function', position: 'right'},
		{ selector: '.callVar', hint: 'Call Variable', position: 'right'},
		{ selector: '.arg', hint: 'Pass arguments into the parameters', position: 'right'},
		{ selector: '.block', hint: 'Block Statement', position: 'top'},
		{ selector: '.output', hint: 'Output', position: 'right'},
		{ selector: '.compOperator', hint: 'Computational Operator', position: 'right'},
		{ selector: '.comparisonOperator', hint: 'Comparison Operator', position: 'right'}
];

anatomy.init = function(data) {
	anatomy.putStuff(anatomy.details);
}

anatomy.putStuff = function(items) {
	$.each(items, function(i, piece){
		anatomy.addHint(piece.selector, piece.hint, piece.position);
	});
}

anatomy.addHint = function(span, hint, location) {
	$(span).addClass('hint--' + location + ' hint--bounce');
	$(span).attr('data-hint', hint);
}

$(function() {
	anatomy.init();
});