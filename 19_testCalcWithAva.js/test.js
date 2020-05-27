const test = require('ava');
const allFunctions = require('./index.js');

test('configure ava successfully', t => {
	t.pass();
});

test('test the function: sum', t => {
	const sum = allFunctions.sum;
	t.is(sum(1,2), 3);
	t.is(sum(-1,-2), -3);
	t.is(sum(0,0), 0);
	t.throws(() => {
		sum("Hello", "World");
	});
	t.throws(() => {
		sum(5);
	});
});

test('test the function: calculate', t => {
	const calculate = allFunctions.calculate;

	t.is(calculate(1,2,"+"), 3);
	t.is(calculate(-1,-2,"+"), -3);

	t.is(calculate(null,null,"ZZZ"), "Invalid");

	t.is(calculate(1,2,"-"), -1);
	t.is(calculate(-1,-2,"-"), 1);
	
	t.is(calculate(1,2,"*"), 2);
	const error1 = t.throws(() => {
		calculate(2,"Hello","*");
	});
	t.is(error1.message,"Invalid Parameters");


	const error2 = t.throws(() => {
		calculate("hello",2,"*");
	});
	t.is(error2.message,"Invalid Parameters");


	t.is(calculate(2,1,"/"), 2);
	t.is(calculate(2,-1,"/"), -2);
	t.is(calculate(0,0,"/"), NaN);
	t.is(calculate(3,0,"/"), Infinity);

});