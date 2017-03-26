function callMonitoringApi() {
    // $.getJSON('http://104.197.136.12:3000/api/org.acme.vehicle.auction.SensorData', function(data) {
    //     $.each(data, function(index, value) {
    //         // <div class="chart-entry-view">
    //         //      <div class="chart-entry-label"></div>
    //         //      <div class="chart-entry-value"></div>
    //         // </div>
    //         // temperature = generateRandomMetric();
    //         // humidity = generateRandomMetric();
    //         // luminosity = generateRandomMetric();
    //         console.log(value.temperatureStatus);
    //         console.log(value.luminosityStatus);
    //         console.log(value.humidityStatus);
    //         updateMetric('temperature', value.temperature);
    //         updateMetric('humidity', value.temperatureStatus);
    //         updateMetric('luminosity', value.temperatureStatus);
    //
    //         //$("#realtime-network-stats").html("index: -> " + index + ", Temperatura -> " + value.temperatureStatus + ", Luminosidade -> " + value.luminosityStatus + ", Umidade -> " + value.humidityStatus);
    //     });
    // });


    temperature = generateRandomMetric();
    humidity = generateRandomMetric();
    luminosity = generateRandomMetric();
    updateMetric('temperature', temperature);
    updateMetric('humidity', humidity);
    updateMetric('luminosity', luminosity);
}

function generateRandomMetric() {
    max = 100;
    min = 0;
    value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value % 2 == 0 ? "Adequada" : "Inadequada";
}

function addMetric(name, cssClass, initialValue) {
    divElement = document.createElement('div');

    label = document.createElement('div');
    $(label)
        .addClass('chart-entry-label')
        .addClass(cssClass + 'Label')
        .html(name)
        .appendTo($(divElement));

    value = document.createElement('div');
    $(value)
        .addClass('chart-entry-value')
        .addClass(cssClass + 'Value')
        .html(initialValue)
        .appendTo($(divElement));

    $(divElement)
        .addClass("chart-entry-view")
        .appendTo($("#realtime-network-stats"));
}

function updateMetric(cssClass, value) {
    $('.' + cssClass + 'Value').html(value);
}

$(document).ready(function() {
    addMetric("Temperatura", 'temperature', "Sem medição");
    addMetric("Umidade", 'humidity', "Sem medição");
    addMetric("Luminosidade", 'luminosity', "Sem medição");

    callMonitoringApi();
});

setInterval(callMonitoringApi, 5000);
