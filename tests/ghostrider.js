//const Buffer = require('safe-buffer').Buffer
const multiHashing = require('../build/Release/multihashing')
const assert = require('assert')

var tests = [
	new Buffer('The Times 22/Jan/2018 Raptoreum is name of the game for new generation of firms'),
	new Buffer('87a48bc22468acdd72ee540aab7c086a5bbcddc12b51c6ac925717a74c269453', 'hex'),
];

/*
var height = 1806260;
for (var i = 0; i < 10; ++i, ++height)
{
	for (var variant = 0; variant <= 4; ++variant)
	{
		var hash = multiHashing['cryptonight'](tests[i * 6], variant, height);
		assert.deepEqual(hash, tests[i * 6 + variant + 1]);
	}
}
*/
for (var i = 0; i < 10; ++i) {
    var hash = multiHashing['ghostrider'](tests[i]).toString('hex');
    console.log(hash);
    //assert.deepEqual(hash, tests[i]);
}