#!/usr/bin/env node

// get the class
var debug	= require('../src/queueablegettersetter.js');

var foo		= {
	bar	: 'hello'
};

console.log('before new getter: foo.bar ===', foo.bar)

foo.__defineQGetter__('bar', function(value){
	return value + ', world.';
});

foo.__defineQGetter__('bar', function(value){
	return value + ' I love you.';
});

console.log('after new getter: foo.bar ===', foo.bar)

