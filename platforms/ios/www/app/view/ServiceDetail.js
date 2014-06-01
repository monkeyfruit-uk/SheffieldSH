Ext.define('SheffieldSH.view.ServiceDetail', {
	extend: 'Ext.Panel',
	xtype: 'servicedetail',
	requires: ['Ext.Map'],
		
	config: {
		title: 'Service Details',
		iconCls : 'info',
        layout: 'fit',
		styleHtmlContent: false,
		scrollable: false,
		
		listeners: {
			show: function(list, opts) {
				// We need to recall the sort on the list here so it orders it by the distance in feet
				//Ext.getStore('Providers').setGroupDir('ASC').sort();
			},
			painted: function() {
				// We need to recall the sort on the list here so it orders it by the distance in feet
				//Ext.getStore('Providers').setGroupDir('ASC').sort();
				setTimeout(function() {
					var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Services' );
					controllerRef.getNavview().setMasked(false);
				},500);
			}		
		},	
		
		// Add a google map
		items: [
			{
				layout: 'vbox',
				items: [
					{
						xtype: 'map',
						flex: 1,
						useCurrentLocation: true,
						mapOptions: {
							zoom: 12,
							minZoom: 4,
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							navigationControl: false,
							streetViewControl: false,
							mapTypeControl: false,
							navigationControlOptions: {
								style: google.maps.NavigationControlStyle.DEFAULT
							},
							zoomControl: true
						},
									
						listeners: {
							// maprender( this, map, eOpts )
							// this : Ext.Map
							// map : google.maps.Map - The rendered google.map.Map instance
							// eOpts : Object - The options object passed to Ext.util.Observable.addListener.
							maprender: function(extMapComponent, googleMapComp, eOpts) {
								
								var postcodeArray = new Array();
								var buildArray = new Array();
								var pass = 0;
								var storeRef = Ext.getStore( 'Providers' );
								var position = new google.maps.LatLng(extMapComponent._geo._latitude,extMapComponent._geo._longitude);
								var latlng;
								onSuccess(position);
								
								// Get users nearest postcode
								reverseGeocode(extMapComponent._geo._latitude,extMapComponent._geo._longitude);
		
								function reverseGeocode(latitude,longitude) {
									
									var geocoder = new google.maps.Geocoder(), latlng = new google.maps.LatLng(latitude, longitude);
									var postCodes = new Array();
									geocoder.geocode({'latLng': latlng}, function(results, status) {
										if (status == google.maps.GeocoderStatus.OK) {			
											if (results.length) {
												
												for(var i = 0;i < results.length;i++) {
													var address =  results[i].address_components;
													
													for(var j = 0;j < address.length;j++) {
														//console.log(address[j]);
														if( isValidPostcode(address[j].short_name) ) {
															this.currentLocation = address[j].short_name;
															postCodes.push(address[j].short_name);
														}
													}
												}
												
												if( postCodes.length ) {
													//console.log(postCodes);
													//console.log('Setting uCL to ' + postCodes[0]);
													SheffieldSH.app.uCL = postCodes[0];
												}
												
											} else {
												alert("No results found");
											}
										} else {
											alert("Geocoder failed due to: " + status);
										}
									});
								
								}
								
								function isValidPostcode(p) { 
									var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i; 
									return postcodeRegEx.test(p); 
								}
								
								function onSuccess(position) {
									//console.log('SUCCESS');
									//var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
									latlng = position;
									for(var i = 0;i < storeRef.data.items.length;i++) {
										postcodeArray.push(storeRef.data.items[i].data.postcode);
									}
									
									//loopToBuild(0);
									
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
								
								function loopToBuild(pass) {
									
									buildArray.length = 0;
									
									if(pass == 0) {
										for(var i = 0;i < 25;i++) {
											buildArray.push(postcodeArray[i]);
										}
									} else {
										for(var i = 25;i < 28;i++) {
											buildArray.push(postcodeArray[i]);
										}
									}
									
									var service = new google.maps.DistanceMatrixService();
									service.getDistanceMatrix({
										origins: [latlng],
										destinations: buildArray,
										travelMode: google.maps.TravelMode.WALKING,
										avoidHighways: false,
										avoidTolls: false,
										unitSystem: google.maps.UnitSystem.IMPERIAL
									}, calledback);									
																																					
								}
								
								function calledback(response, status) {
									
									if (status == google.maps.DistanceMatrixStatus.OK) {
										
										if( pass == 0) {
											for(var i = 0;i < 25;i++) {
												storeRef.data.items[i].data.distanceInFeet = response.rows[0].elements[i].distance.value;
												storeRef.data.items[i].data.distance = response.rows[0].elements[i].distance.text;
											}
											pass = 1;
											loopToBuild(pass);
										} else {
											for(var i = 0;i < 3;i++) {
												j = i + 25;
												storeRef.data.items[j].data.distanceInFeet = response.rows[0].elements[i].distance.value;
												storeRef.data.items[j].data.distance = response.rows[0].elements[i].distance.text;
											}
											goForth();
										}
										
									} else {
										// GPS failed
										goForth();
									}
									
								}
								
								function callback(response, status) {
									//console.log('CALLBACK');
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
									//console.log('ERROR');
									goForth();
								}
								
								function goForth() {
									//console.log('SORTING');
									Ext.getStore('Providers').setGroupDir('ASC').sort();
											
									var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Services' )
									controllerRef.manageList(extMapComponent, googleMapComp, eOpts);
								}
							}							
						}
					},
					{				
						xtype: 'providerslist',
						flex: 1,
						itemId: 'pList'
					}
				]
			}
		]
	}
});