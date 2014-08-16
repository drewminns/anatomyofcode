var anatomy = {};

anatomy.details = [
		{ selector: '.string', hint: 'String', position: 'bottom'},
		{ selector: '.number', hint: 'Number', position: 'bottom'},
		{ selector: '.boolean', hint: 'Boolean', position: 'bottom'},
		{ selector: '.literal', hint: 'Boolean', position: 'bottom'},
		{ selector: '.keyword', hint: 'Keyword', position: 'bottom'},
		{ selector: '.argument', hint: 'Argument/Parameter', position: 'bottom'},
		{ selector: '.function', hint: 'Function', position: 'bottom'},
		{ selector: '.operator', hint: 'Computational Operator', position: 'bottom'},
		{ selector: '.logicalOperator', hint: 'Logical Operator', position: 'bottom'},
		{ selector: '.setValue', hint: 'Set a value of', position: 'bottom'},
		{ selector: '.variable', hint: 'Variable Name', position: 'bottom'},
		{ selector: '.compareOp', hint: 'Comparison Operator', position: 'bottom'},
		{ selector: '.variable', hint: 'Variable', position: 'bottom'},
];

anatomy.init = function() {
	anatomy.putStuff(anatomy.details);
};

anatomy.putStuff = function(items) {
	$.each(items, function(i, piece){
		anatomy.addHint(piece.selector, piece.hint, piece.position);
	});
};

anatomy.addHint = function(span, hint, location) {
	$(span).addClass('hint--' + location + ' hint--bounce');
	$(span).attr('data-hint', hint);
};


$(function() {
	setTimeout(function() {
	  anatomy.init();
	}, 1000);

});