Ext.define('SheffieldSH.controller.Services', {
	extend: 'Ext.app.Controller',
	
	launch: function () {
	},
	
	init: function () {
		this.markersArray = new Array();
		this.googleMapComp = '';
		this.boxArray = new Array();
		this.position = '';
		this.sID = 0;
		this.currentLocation = 'Current Location';
	},
	
	config: {
		control: {
			'serviceslist': {
				disclose: function() { /*console.log('SheffieldSH.controller.Services disclosing');*/ },
				itemtap: 'showDetail'
			},
			'providerslist': {
				itemtap: 'showOnMap'
			}                
		},
		refs: {
			// The reference for getNavview is the xtype of the Ext.navigation.View of SheffieldSH.view.Services
			navview: 'servicesCard',
			serviceDetail: 'servicedetail'
		}
	},
	
	showDetail: function(list, record, index, e, eOpts) {
		this.getNavview().setMasked(true);
		this.getNavview().push({			
			xtype: 'servicedetail',
			// Set the title of the detail card from the model of SheffieldSH.model.Service
			title: e.serviceTitle(),
			data: e.data,
			serviceID: e.serviceID(),
			params: 'params'
		});
		sID = e.data.ID;
	},	
	
	showOnMap: function(list, index, target, record, e, eOpts) {
		
		//console.log('Show On Map Running');		
		
		if (this.boxArray) {
			for (i in this.boxArray) {
				this.boxArray[i].setMap(null);
			}
		}
		
		var infoBubble = new google.maps.InfoWindow();
		var marker = new google.maps.Marker({
			title:		record.data.title,
			map: 		this.googleMapComp,
			position: 	new google.maps.LatLng(record.data.theLat,record.data.theLng),
			icon: 		'resources/images/blue-dot.png'
		});
		//infoBubble.setContent(this.markersArray[record.data.ID].html);
		//infoBubble.open(this.googleMapComp,marker);
		//this.boxArray.push(infoBubble);
		recording = record;
		//console.log(recording);
		addInfoBox(this.markersArray[record.data.ID].html, record.data.theLat, record.data.theLng, this.googleMapComp, this.boxArray);
		
		/* */
		
		var wait = 500;
		
		function reposition(infoWindow) {
			/*Ext.select('#infoBubble').each(function(el) {
				//return -10 - el.outerHeight();
			});*/
			return -90;
		}
		
		function clearInfoBoxes(boxArray) {	
			// Clear the infoboxes
			if (boxArray) {
				for (i in boxArray) {
					boxArray[i].setMap(null);
				}
			}
		}
		
		function addInfoBox(description,x,y,map,boxArray) {
						
			if (boxArray) {
				for (i in boxArray) {
					boxArray[i].setMap(null);
				}
			}
			
			var boxText = document.createElement("div");
        	boxText.style.cssText = "border:0;color:#FFF;margin:0;background:transparent;padding:5px";
        	boxText.innerHTML = description;
                
			var myOptions = {
				 content: boxText
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, 0)
				,zIndex: 10000
				,boxStyle: { 
				  background: '#000'
				  ,margin:0
				  ,padding: '5px'
				  ,opacity:0.75
				  ,width: '300px'
				 }
				,closeBoxMargin: "10px 10px 0px 0px"
				,closeBoxURL: "resources/images/close.gif"
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: true,
				position: new google.maps.LatLng(x,y)
			};
			
			// Lets add the window...		
			var infoWindow = new InfoBox(myOptions);
			//console.log(infoWindow);
			//console.log(map);
			infoWindow.open(map);
			
			// Store it in the array...
			boxArray.push(infoWindow);
			
			// The initial wait is 500, this ensures the window has been written to the map and therefore a height can be collected...
			setTimeout(function() { 
			
				// Get the height and set it as a pixelOffset value to move the box up
				height = reposition(infoWindow);
				infoWindow.pixelOffset_.height = height;
				//console.info(infoWindow.pixelOffset_.height);
				
				// Get rid of the old incorrectly positioned infobox
				clearInfoBoxes(boxArray);
				
				// Re-add it in the right position and set the wait to 0
				setTimeout(function() {
					infoWindow.open(map);
					google.maps.event.addDomListener(boxText,'click',function(){ 
						//console.log(recording);
						//this.parent.showDetail(recording.list,recording.record,recording.index,recording.e,recording.eOpts);
					});
					wait = 0;
				},0);
				
			},wait);
			
		}
		
	},
	
	manageList: function(extMapComponent, googleMapComp, eOpts) {
		// Spin through the list and hide the parents of providers that don't have this service
		this.position = new google.maps.LatLng(extMapComponent._geo._latitude,extMapComponent._geo._longitude);
		
		var serviceID = this.getServiceDetail().serviceID;
		var serviceID = sID;
		var divs = Ext.DomQuery.select('.providerList');
		this.googleMapComp = googleMapComp;
		
		Ext.select('.providerList').each(function(el) {
			var parentel = el.parent();
			var ancestor = parentel.parent();
			ancestor.removeCls('mia');
			if( el.hasCls(serviceID) == false ) ancestor.addCls('mia');
		});
		
		var marker = new google.maps.Marker({
			title: 'Your Location',
			position: this.position,
			map: googleMapComp,
			animation: google.maps.Animation.DROP,
		});
		
		
		// Get the users current closet postcode
		
						
		var providersStore = Ext.getStore('Providers');
		var providerArray = providersStore.data.items;
		var infowindow = null;
		var infoBubble = new google.maps.InfoWindow();
		var clinicsArray = new Array();
		var clinicsAddArray = new Array();
		var distanceArray = new Array();
		var travel = tID = itm = '';
		var counter = new Array();
		var encounter = new Array();
		var boxArray = this.boxArray;
		
		/* */
		
		var wait = 500;
		
		function reposition(infoWindow) {
			/*Ext.select('#infoBubble').each(function(el) {
				//return -10 - el.outerHeight();
			});*/
			return -90;
		}
		
		function clearInfoBoxes() {	
			// Clear the infoboxes
			if (boxArray) {
				for (i in boxArray) {
					boxArray[i].setMap(null);
				}
			}
		}
		
		function addInfoBox(description,x,y,map, data) {
			
			if (boxArray) {
				for (i in boxArray) {
					boxArray[i].setMap(null);
				}
			}
			
			var boxText = document.createElement("div");
        	boxText.style.cssText = "border:0;color:#FFF;margin:0;background:transparent;padding:5px";
        	boxText.innerHTML = description;
                
			var myOptions = {
				 content: boxText
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, 0)
				,zIndex: 10000
				,boxStyle: { 
				  background: "#000"
				  ,margin:0
				  ,padding: '5px'
				  ,opacity:0.75
				  ,width: "300px"
				 }				
				,closeBoxMargin: "10px 10px 0px 0px"
				,closeBoxURL: "resources/images/close.gif"
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: true,
				position: new google.maps.LatLng(x,y)
			};
			
			// Lets add the window...		
			var infoWindow = new InfoBox(myOptions);
			//console.log(infoWindow);
			//console.log(map);
			infoWindow.open(map);
			
			// Store it in the array...
			boxArray.push(infoWindow);
			
			// The initial wait is 500, this ensures the window has been written to the map and therefore a height can be collected...
			setTimeout(function() { 
			
				// Get the height and set it as a pixelOffset value to move the box up
				height = reposition(infoWindow);
				infoWindow.pixelOffset_.height = height;
				//console.info(infoWindow.pixelOffset_.height);
				
				// Get rid of the old incorrectly positioned infobox
				clearInfoBoxes();
				
				// Re-add it in the right position and set the wait to 0
				setTimeout(function() {
					infoWindow.open(map);
					google.maps.event.addDomListener(boxText,'click',function() { 
						//console.log(data);
						//this.parent.showDetail(recording.list,recording.record,recording.index,recording.e,recording.eOpts);
					});
					wait = 0;
				},0);
				
			},wait);		
			
		}
		
		for(var i = 0;i < providerArray.length;i++) {						
			ID 			= providerArray[i].data.ID;
			lat 		= providerArray[i].data.theLat;
			lng 		= providerArray[i].data.theLng;
			title		= providerArray[i].data.title;
			addressOne	= providerArray[i].data.addressOne;
			addressTwo	= providerArray[i].data.addressTwo;
			town		= providerArray[i].data.town;
			yCH 		= providerArray[i].data.youthClinicHover;
			postcode	= providerArray[i].data.postcode;
			titleAppend	= providerArray[i].data.titleAppend;
			clinicsAddArray.push(postcode);
			clinicsArray[postcode] = ID;
			encounter[i] = new Array();
			encounter[i][postcode] = ID;
			encounter[i]['used'] = 0;
			encounter[i]['order'] = i;
			phone 		= providerArray[i].data.telephone;
			services 	= providerArray[i].data.services;
			latLng 		= new google.maps.LatLng(lat,lng);		
			
			// Does this have the service?
			if( services.indexOf(serviceID) != -1 ) {
			
				var marker = new google.maps.Marker({
					title:		title,
					map: 		googleMapComp,
					position: 	latLng,
					animation: 	google.maps.Animation.DROP,
					icon: 		'resources/images/blue-dot.png'
				});
				
				/*marker.html = '<p>' + title + '<br>';
				marker.html += addressOne + '<br>';
				marker.html += addressTwo + '<br>';
				marker.html += town + '<br>';
				marker.html += postcode + '<br>';
				marker.html += phone + '</p>';*/
				marker.html = title + titleAppend + '<br>';
				marker.html += addressOne + ' ';
				//marker.html += postcode + ' (' + yCH + ')';
				marker.html += postcode;
				marker.ID = ID;
				marker.x = lat;
				marker.y = lng;
				this.markersArray[ID] = marker;
				marker.data = providerArray[i].data;
				
				google.maps.event.addListener(marker, 'click', function() {
					//infoBubble.setContent(this.html);
					//infoBubble.open(googleMapComp, this);
					//boxArray.push(infoBubble);
					addInfoBox(this.html, this.x, this.y, googleMapComp, this.data);
				});
			}
		}
		
		/*var service = new google.maps.DistanceMatrixService();
		service.getDistanceMatrix({
			origins: [this.position],
			destinations: clinicsAddArray,
			travelMode: google.maps.TravelMode.WALKING,
			avoidHighways: false,
			avoidTolls: false,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		}, callback);		
		
		function callback(response, status) {
			if (status == google.maps.DistanceMatrixStatus.OK) {
				var origins = response.originAddresses;
				var destinations = response.destinationAddresses;
				
				for (var i = 0; i < origins.length; i++) {
					var results = response.rows[i].elements;
					for (var j = 0; j < results.length; j++) {
						var element = results[j];
						var to = destinations[j];
						var distance = element.distance.text;
						var measure = distance.substring(0,distance.length - 3)
						var dIF = element.distance.value;
						var duration = element.duration.text;
						var from = origins[i];
						var ID = 0;
						var order = 0;
						
						for(var k = 0;k < encounter.length;k++) {
							// Match and not used?
							if( encounter[k][clinicsAddArray[j]] && encounter[k]['used'] == 0) {
								encounter[k]['used'] = 1;
								ID = encounter[k][clinicsAddArray[j]];
								order = encounter[k]['order'];
								break;
							}
						}
						distanceArray.push({order:order,postcode:clinicsAddArray[j],travel:distance,distanceInFeet:dIF,ID:ID});
					}
				}
			}
		}*/
		
		function roundNumber(num, dec) {
			var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
			return result;
		}
					
	},
	
	goToExternalMaps : function (providerPostcode) {
		//console.log("Calc from " + this.currentLocation + " or " + currentLocation + " to " + providerPostcode);
		window.open('http://maps.apple.com/?saddr=' + currentLocation + '&daddr='+ providerPostcode, '_blank');

	}/*,
	
	getCurrentLocation : function () {
		return currentLocation;
	}*/
});