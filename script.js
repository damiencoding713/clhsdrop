let lastTime = '';

function showTime() {
	const currentTime = new Date().toUTCString();
	if (currentTime !== lastTime) {
		lastTime = currentTime;
		document.getElementById('currentTime').innerHTML = currentTime;
	}
}

showTime();
setInterval(showTime, 1000);
