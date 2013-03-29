if (OWF.Util.isRunningInOWF()) {
    // -----------------------------------
    // Initialize
    // -----------------------------------
    OWF.ready(function() {
        OWF.notifyWidgetReady();
        console.log("Earthquake Control Panel ready.");
    });
}