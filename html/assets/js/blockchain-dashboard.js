function callMonitoringApi() {
    $.getJSON('http://104.197.136.12:3000/api/org.acme.vehicle.auction.SensorData', function(data) {
        $.each(data, function(index, value) {
            // <div class="chart-entry-view">
            //      <div class="chart-entry-label"></div>
            //      <div class="chart-entry-value"></div>
            // </div>
            d = document.createElement('div');

            label = document.createElement('div');
            $(label)
                .addClass('chart-entry-label')
                .html("Temperatura")
                .appendTo($(d));

            value = document.createElement('div');
            $(value)
                .addClass('chart-entry-value')
                .html(value.temperatureStatus)
                .appendTo($(d));

            $(d)
                .addClass("chart-entry-view")
                .appendTo($("#realtime-network-stats"));

            //$("#realtime-network-stats").html("index: -> " + index + ", Temperatura -> " + value.temperatureStatus + ", Luminosidade -> " + value.luminosityStatus + ", Umidade -> " + value.humidityStatus);
        });
    });
}

setInterval(callMonitoringApi, 5000);
