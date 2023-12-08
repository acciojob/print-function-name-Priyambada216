//your JS code here. If required.
function functionName() {
	const name = Function.prototype.toString.call(this).match(/\s*function\s+([^\s(]+)/)[1];
  alert(name);
}
functionName();

