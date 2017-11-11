var intervalLoadChannel;
function intervalLoadChannelFunction() {
	if ($('.chat-list__lines').length > 0) {
		console.log('CTTV enabled');
		window.dispatchEvent(new CustomEvent('cancerttv-start'));
		clearInterval(intervalLoadChannel);
		lastUrl = window.location.pathname;
		startLeaveChannel();
		return;
	}
}
function startLoadChannel() {
	intervalLoadChannel = setInterval(intervalLoadChannelFunction, 300);
}

var lastUrl = window.location.pathname;
var intervalLeaveChannel;
function intervalLeaveChannelFunction () {
	if (lastUrl !== window.location.pathname) {
		lastUrl = window.location.pathname;
		console.log('CTTV disabled');
		window.dispatchEvent(new CustomEvent('cancerttv-end'));
		clearInterval(intervalLeaveChannel);
		startLoadChannel();
	}
}
function startLeaveChannel() {
	intervalLeaveChannel = setInterval(intervalLeaveChannelFunction, 3000);
}

startLoadChannel();