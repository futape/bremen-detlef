(function($, maps) {
	var bremen = {
			lat: 53.076399,
			lng: 8.794941
		},
		zoom = 12,
		map = new maps.Map($('#map').get(0), {
			center: bremen,
			zoom: zoom
		}),
		info = new maps.InfoWindow(),
		globalDummyMarker = new maps.Marker({
			position: new maps.LatLng(90 * 2, 180 * 2, true),
			map: map,
			clickable: false,
			cursor: 'auto'
		});

	map.data.setStyle(function(feature) {
		return {
			title: feature.getProperty('title')
		}
	});

	map.data.addListener('click', function(e) {
		var position = null;
		e.feature.getGeometry().forEachLatLng(function(latLng) {
			if (position === null) {
				position = latLng;
			}
		});
		var dummyMarker = new maps.MVCObject();
		dummyMarker.set('position', position);
		dummyMarker.set('anchorPoint', globalDummyMarker.get('anchorPoint'));

		var content = $('<div></div>');
		$('<div></div>').css('font-weight', 'bold').text(e.feature.getProperty('title')).appendTo(content);
		if (typeof e.feature.getProperty('image') != 'undefined') {
			$('<img />').prop({
				src: e.feature.getProperty('image'),
				alt: e.feature.getProperty('title')
			}).css({
				'max-width': '100%',
				'margin-top': '.5em'
			}).appendTo(content);
		}
		info.setContent(content.get(0));

		info.open(map, dummyMarker);
	});

	map.data.loadGeoJson('/resources/data/locations.json');
})(jQuery, google.maps);
