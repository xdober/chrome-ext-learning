function updateDOM(){
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  m = checkTime(m)
  chrome.browserAction.setBadgeText({text: h+":"+m})
}
function checkTime(i) {
  if(i<10) {
    i="0"+i
  }
  return i
}
setInterval(function(){
    updateDOM();
},2000);
