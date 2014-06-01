Ext.define('SheffieldSH.model.Provider', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: ['ID','slug','title','addressOne','addressTwo','town','postcode','telephone','website','openingTimes','description','services','servicesClass','youthClinic','youthClinicHover','walkInService','appointmentService','theLat','theLng','distance','distanceInFeet','servicesList','titleAppend']
	},
	
	// Update the title when we go to a service detail page, referenced from SheffieldSH.controller.Services showDetail
	providerTitle : function() {
		var d = this.data,
		names = [
			'Service',
			'-',
			d.title
		];
		//return names.join(" ");
		return d.title;
	}
	
});