let a = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ];

function treeSum (arr) {
	let s = 0;
	for (let i = 0; i < arr.length; i++) {
		let item = arr [i];
		if (typeof (item) === 'Number') {
			s+=item;
		} else { 
			s+=treeSum (item);
		}	}
	return s;
}

let sum = treeSum (a);
alert (sum);