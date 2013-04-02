if (OWF.Util.isRunningInOWF()) {
	// -----------------------------------
	// Initialize
	// -----------------------------------
	OWF.ready(function() {
		$('#retrieveQuakes').submit(function() {
			// OWF.getOpenedWidgets(function(widgets) {
			// 	var widget;

			// 	for (var i = 0; i < widgets.length; i++) {
			// 		if (widgets[i].universalName === 'org.owfgoss.owf.examples.earthquake.data') {
			// 			widget = widgets[i];
			// 			break;
			// 		}
			// 	}

			// 	if (widget) {
			// 		OWF.RPC.getWidgetProxy(widget.id, function(proxy) {
			// 			proxy.onReady(function() {
			// 				console.log(proxy);
			// 				var quakes = proxy.getData();
			// 				console.log(quakes);
			// 			});
			// 		});
			// 	}
			// });

			OWF.Intents.startActivity(
                {
                    action: 'plotQuakes',
                    dataType: 'application/vnd.owf.sample.quakes'
                },
                ControlPanel.getFilteredQuakes(),
                function(dest) { }
            );

			return false;
		});

		OWF.notifyWidgetReady();

		console.log("Earthquake Control Panel ready.");
	});
}