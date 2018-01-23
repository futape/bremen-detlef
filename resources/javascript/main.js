(function($, maps) {
	var bremen = {
			lat: 53.076399,
			lng: 8.794941
		},
		zoom = 12,
		map = new maps.Map($('#map').get(0), {
			center: bremen,
			zoom: zoom
		});
})(jQuery, google.maps);
