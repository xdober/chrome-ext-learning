function startTime(){
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  m = checkTime(m)
	chrome.browserAction.setBadgeText({text: h+":"+m})
  t = setTimeout(function(){startTime()}, 2000)
}
function checkTime(i) {
  if(i<10) {
    i="0"+i
  }
  return i
}
startTime()
