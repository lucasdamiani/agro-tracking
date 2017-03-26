

function callMonitoringApi() {
    $.getJSON('http://104.197.136.12:3000/api/org.acme.vehicle.auction.Auctioneer', function(data) {
        $.each(data, function(index, value) {
            $(".divTableBody").append("<div id='id" + index + "'/>")
            $('#id' + index).html("index: -> " + index + ", email -> " + value.email + ", firstName -> " + value.firstName + ", lastName -> " + value.lastName);
        });
    });
}
