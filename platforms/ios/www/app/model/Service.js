Ext.define('SheffieldSH.model.Service', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: ['ID','slug','title']
	},
	
	// Update the title when we go to a service detail page, referenced from SheffieldSH.controller.Services showDetail
	serviceTitle : function() {
		var d = this.data,
		names = [
			'Service',
			'-',
			d.title
		];
		//return names.join(" ");
		return d.title;
	},
	serviceID : function() {
		var d = this.data;
		return d.ID;
	}
	
});