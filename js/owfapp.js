if (OWF.Util.isRunningInOWF()) {
    // -----------------------------------
    // Initialize
    // -----------------------------------
    OWF.ready(function() {
        $('#retrieveQuakes').submit(function() {
            OWF.getOpenedWidgets(function(widgets) {
                var widget;

                for (var i = 0; i < widgets.length; i++) {
                    if (widgets[i].universalName === 'org.owfgoss.owf.examples.earthquake.data') {
                        widget = widgets[i];
                        break;
                    }
                }

                if (widget) {
                    OWF.RPC.getWidgetProxy(widget.id, function(proxy) {
                        console.log("Got earthquake proxy");
                        console.log(proxy);

                        proxy.getData(function(result) {
                            ControlPanel.setQuakes(result);

                            // TODO: Merge new quake data into Control  Panel

                            OWF.Intents.startActivity(
                                {
                                    action: 'plotQuakes',
                                    dataType: 'application/vnd.owf.sample.quakes'
                                },
                                ControlPanel.getFilteredQuakes(),
                                function(dest) {}
                            );
                        });
                    });
                } else {
                    console.log("Earthquake data widget is not open!");
                }
            });

            return false;
        });

        OWF.notifyWidgetReady();

        console.log("Earthquake Control Panel ready.");
    });
}
