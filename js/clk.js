var i =0
function updateDOM() {
	i = i+1
	var elem = document.body
	var clk = document.createElement("div")
	var pclk = document.createElement("div")

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
	pclk.appendChild(clk)
	if(i == 1){
		elem.appendChild(pclk)
		elem.lastChild.id = "pscreenclock"
		document.getElementById("pscreenclock").lastChild.id="screenclock"
	}
	document.getElementById("screenclock").innerHTML = timee
}

window.onload = addrog
function drag(elementId) {
        var element = document.getElementById(elementId);
        var position = {
            offsetX: 0, //点击处偏移元素的X
            offsetY: 0, //偏移Y值
            state: 0 //是否正处于拖拽状态，1表示正在拖拽，0表示释放
        };
        //获得兼容的event对象
        function getEvent(ev) {
            return ev || event;
        }
        //元素被鼠标拖住
        element.addEventListener('mousedown', function (ev) {
            //获得偏移的位置以及更改状态
            var e = getEvent(ev);
            position.offsetX = e.offsetX;
            position.offsetY = e.offsetY;
            position.state = 1;
        }, false);
        //元素移动过程中
        document.addEventListener('mousemove', function (ev) {
            var e = getEvent(ev);
            if (position.state) {
                position.endX = e.clientX;
                position.endY = e.clientY;
                //设置绝对位置在文档中，鼠标当前位置-开始拖拽时的偏移位置
                element.style.top = position.endY - position.offsetY + 'px';
                element.style.left = position.endX - position.offsetX + 'px';
            }
        }, false);
        //释放拖拽状态
        element.addEventListener('mouseup', function (ev) {
            position.state = 0;
        }, false);
    }
function addrog(){
    updateDOM()
    setInterval(function() {
        updateDOM();
    }, 500);
	document.getElementById("pscreenclock").style.width = document.body.clientWidth+"px"
	document.getElementById("pscreenclock").style.zIndex = 10000
	var oCon = document.getElementById("screenclock");

	var disX = 0;
	var disY = 0;

	oCon.onmousedown = function (ev) {
		var oEvent = ev || event;
		disX = oEvent.clientX - oCon.offsetLeft;
		disY = oEvent.clientY - oCon.offsetTop;

		document.onmousemove = function (ev) {
			var oEvent = ev || event;
			var l = oEvent.clientX - disX;
			var t = oEvent.clientY - disY;

			if (l<0) {
				l = 0;
			} else if (l>document.documentElement.clientWidth - oCon.offsetWidth) {
				l = document.documentElement.clientWidth - oCon.offsetWidth;
			}
			if (t<0) {
				t = 0;
			}else if (t>document.documentElement.clientHeight - oCon.offsetHeight) {
				t = document.documentElement.clientHeight - oCon.offsetHeight;
			}

			oCon.style.left = l +'px';
			oCon.style.top = t +'px';
			oCon.style.zIndex=10000
		};

		document.onmouseup = function () {
			document.onmousemove = null;
			document.onmouseup = null;
		}

		return false;
	}
}
