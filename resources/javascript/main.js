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

	map.data.setStyle(function(feature) {
		return {
			title: feature.getProperty('title')
		}
	});

	map.data.loadGeoJson('/resources/data/locations.json');
})(jQuery, google.maps);
