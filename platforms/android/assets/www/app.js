Ext.application({
	// Name of the app and the namespace
    name: 'SheffieldSH',

    views: ['Main','Services','Providers'],	
	controllers: ['Main','Services','Providers','Fun'],
	stores: ['Services','Providers'],
	models: ['Service','Provider'],
	requires: ['Ext.Map'],
	
	uCL: 'S11 9BB',

    icon: {
        '57': 'resources/icons/icon-57x57.png',
        '72': 'resources/icons/icon-72x72.png',
        '114': 'resources/icons/icon-114x114.png',
        '144': 'resources/icons/icon-144x144.png'
    },

    isIconPrecomposed: true,

    startupImage: {
	    '320x300': 'resources/startup/splash_320x300.jpg',
        '320x480': 'resources/startup/splash_480x320.jpg',
        '480x800': 'resources/startup/splash_800x480.jpg',
        '640x960': 'resources/startup/splash_960x640.jpg',
        '1024x768': 'resources/startup/splash_1024x768.jpg',
        '720x1280': 'resources/startup/splash_1280x720.jpg'
    },

    launch: function() {		
		
		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();
		
		// Initialize the main view
		Ext.Viewport.add(Ext.create('SheffieldSH.view.Main'));  
		
		//setTimeout(goForth,1000);
		
		/*
		var postcodeArray = new Array();
		var storeRef = Ext.getStore( 'Providers' );	

		// PhoneGap is ready
		function onDeviceReady() {		
			console.log('NAVIGATOR GEOLOCATION');
			//navigator.geolocation.getCurrentPosition(success, onError);
			Ext.device.Geolocation.getCurrentPosition({
            	scope: this,
            	success: function(position) {
                	onSuccess(position);
            	},
            	failure: function() {
                	console.log('Sencha: Cannot get location');
                }
        	});
		}
		
		function onSuccess(position) {
			console.log('SUCCESS');
			var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			for(var i = 0;i < storeRef.data.items.length;i++) {
				postcodeArray.push(storeRef.data.items[i].data.postcode);
			}
			var service = new google.maps.DistanceMatrixService();
			service.getDistanceMatrix({
				origins: [latlng],
				destinations: postcodeArray,
				travelMode: google.maps.TravelMode.WALKING,
				avoidHighways: false,
				avoidTolls: false,
				unitSystem: google.maps.UnitSystem.IMPERIAL
			}, callback);
		}
		
		function callback(response, status) {
			console.log('CALLBACK');
			if (status == google.maps.DistanceMatrixStatus.OK) {
				for(var i = 0;i < response.rows[0].elements.length;i++) {
					storeRef.data.items[i].data.distanceInFeet = response.rows[0].elements[i].distance.value;
					storeRef.data.items[i].data.distance = response.rows[0].elements[i].distance.text;
				}
				goForth();
			} else {
				// GPS failed
				goForth();
			}
		}
		
		function error(msg) {
			// GPS failed
			goForth();
		}
		*/
		
		function goForth() {
			console.log('GO FORTH v4');
		}
    }
});
