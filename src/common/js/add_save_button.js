module.exports = function(map) {


    require("../../lib/js/easy-button.js");


    L.easyButton({
        id: 'easy-button', // an id for the generated button
        position: 'topright', // inherited from L.Control -- the corner it goes in
        type: 'animate', // set to animate when you're comfy with css
        leafletClasses: true, // use leaflet classes to style the button?
        states: [{ // specify different icons and responses for your button
            stateName: 'get-center',
            onClick: function(button, map) {
                map.spin(true);
                var jobsectors = $('#jobsectors').val();

                var downloadhref = encodeURIComponent(window.location.origin + window.location.pathname + "index.html?print=yes" + "&sector=" + jobsectors);

                var link = document.createElement('a');
                link.href = 'https://gis.dola.colorado.gov/phantom/screenshot?website=' + downloadhref + '&filename=jobsectormap&timer=10000&width=900';
                document.body.appendChild(link);
                link.click();
                setTimeout(function() {
                    map.spin(false);
                }, 15000); //overshoot 6 sec timer
            },
            title: 'Save PNG Image',
            icon: 'fa-floppy-o'
        }]
    }).addTo(map);


}