Ext.define('SheffieldSH.reader.Providers', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.providers',
    requires: 'SheffieldSH.store.Services',

    getResponseData: function(response) {
    	var me = this;
        var json = Ext.decode(response.responseText);
        var result = [];
		var servicesStore = new SheffieldSH.store.Services();

        if(json && json.posts && json.posts.length){
        	for(var i in json.posts){
        		
        		var post = json.posts[i];
        		var customFields = post['custom_fields'] || {};

        		var location = me.processLocation(me.valueFor(customFields, 'location'));
        		var servicesIds = me.processServices(me.valueFor(customFields, 'services'));
        		var servicesList = me.processServicesList(servicesIds, servicesStore);
        	
				var data = { 
					ID: me.valueFor(post, 'id'),
					slug: me.valueFor(post, 'slug'),
					title: me.valueFor(post, 'title'),
					addressOne: me.valueFor(customFields, 'address_1'),
					addressTwo: me.valueFor(customFields, 'address_2'),
					town: me.valueFor(customFields, 'town'),
					postcode: me.valueFor(customFields, 'postcode'),
					telephone: me.valueFor(customFields, 'telephone'),
					website: me.valueFor(customFields, 'website'),
	               	openingTimes: me.valueFor(customFields, 'opening_times'),
					description: me.valueFor(customFields, 'description'),
					services: servicesIds,
					servicesClass: servicesIds.join(' '),
					youthClinic: me.valueFor(customFields, 'youth_clinic'),
					youthClinicHover: me.valueFor(customFields, 'youth_clinic_hover'),
					walkInService: (+ me.valueFor(customFields, 'walk_in_service')) == 1 ? 'Yes' : 'No',
					appointmentService: (+ me.valueFor(customFields, 'appointment_service')) == 1 ? 'Yes' : 'No',
					theLat:	location.lat,
					theLng:	location.lng,
					distance: me.valueFor(customFields, 'distance') || 0,
					distanceInFeet: me.valueFor(customFields, 'distance_in_feet') || 0,
					servicesList: servicesList,
					titleAppend: ''
				};
				result.push(data);
        	}
        }

        return result;
    },

    valueFor: function(data, field){
    	var value = (data[field] === undefined ? '' : data[field]);
    	if(value instanceof Array){
    		return value[0];
    	}
    	return value;
    },

   	processServicesList: function(services, store){
   		var html = [];
   		if(services && services.length){
   			if(store && store.find){
   				for(var i in services){
   					var service = store.find('ID', + services[i]);
   					if(~service){
   						html.push('<li class="li-' + store.getAt(service).get('slug') + '">' + 
   							store.getAt(service).get('title') + '</li>');

   					}
   				}
   			}
   		}
   		return html.join('');
   	},

    processServices: function(services){
    	var result = [];
    	var matches = services.match(/".*?"/g);
    	for(var i in matches){
    		result.push(+ matches[i].replace(/"/g, ''));
    	}
    	return result;
    },

    processLocation: function(location){
    	var result = { lat: 0, lng: 0, address: '' };
    	var matches = location.match(/".*?"/g);
    	matches = matches.join('').replace(/""/g, ',').replace(/"/g, '');
    	matches = matches.split(',');
    	var identifier = '';
    	for(var i in matches){
    		if(i%2){
    			result[identifier] = matches[i];
    		} else {
    			identifier = matches[i];
    		}
    	}
    	return result;
    }
});