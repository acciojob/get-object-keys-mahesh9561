//your JS code here. If required.
// Create a object
let student = {
	name:"Mahesh"
}
Object.prototype.getKeys = function() {
	return Object.keys(this);
}

const tryObj = student.getKeys();
console.log(tryObj);
