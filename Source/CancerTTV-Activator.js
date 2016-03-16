// Thank you BTTV for this piece of code
// Thank you once again, NightDev you save my ass
var renderingCounter = 0;
Ember.subscribe('render', {
	before: function() {
		renderingCounter++;
	},
	after: function(name, ts, payload) {
		renderingCounter--;
		if (payload.template === "chat/chat") {
			waitForLoad(function(ready) {
				if (ready) {
					console.log("CTTV chat loaded");
					document.dispatchEvent(new CustomEvent('cancerttv-start'));
				}
			});
		}
	}
});
var waitForLoad = function(callback, count) {
	count = count || 0;
	if (count > 5) {
		callback(false);
	}
	setTimeout(function() {
		if (renderingCounter === 0) {
			callback(true);
		} else {
			waitForLoad(callback, ++count);
		}
	}, 1000);
};