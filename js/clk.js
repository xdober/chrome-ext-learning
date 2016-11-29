var i =0
function addclk() {
	i = i+1
	var elem = document.body
	var clk = document.createElement("div")
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()
	h = h>=10?h:"0"+h
	m = m>=10?m:"0"+m
	s = s>=10?s:"0"+s
	var timee = h+":"+m+":"+s
	var Node = document.createTextNode(timee)
	clk.appendChild(Node)
	if(i == 1){
		elem.appendChild(clk)
		elem.lastChild.id = "screenclock"
	}
	document.getElementById("screenclock").innerHTML = timee
	t = setTimeout(function(){addclk()},500)
}
window.onload = addclk