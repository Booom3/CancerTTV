// Thank you BTTV for this piece of code
// Thank you once again, NightDev you save my ass

setTimeout(() => {
	document.dispatchEvent(new CustomEvent('cancerttv-start'));
}, 3000);
if (window.Ember) {
		
	// var renderingCounter = 0;

	// var waitForLoad = function(callback, count) {
	// 	count = count || 0;
	// 	if (count > 5) {
	// 		callback(false);
	// 	}
	// 	setTimeout(function() {
	// 		if (renderingCounter === 0) {
	// 			callback(true);
	// 		} else {
	// 			waitForLoad(callback, ++count);
	// 		}
	// 	}, 1000);
	// };

	// App.__container__.lookup('controller:application').addObserver('currentRouteName', function(data) {
	// 	switch (data.currentRouteName) {
	// 		case 'loading':
	// 			return;

	// 		case 'channel.index.index':
	// 			waitForLoad(function(ready) {
	// 				if (ready) {
	// 					console.log("CTTV chat loaded");
	// 					document.dispatchEvent(new CustomEvent('cancerttv-start'));
	// 				}
	// 			});
	// 			break;
	// 	}
	// });

	// Ember.subscribe('render', {
	// 	before: function() {
	// 		renderingCounter++;
	// 	},
	// 	after: function() {
	// 		renderingCounter--;
	// 	}
	// });
}