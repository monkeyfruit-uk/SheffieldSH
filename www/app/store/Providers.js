Ext.define('SheffieldSH.store.Providers', {
	extend: 'Ext.data.Store',
	xtype: 'storesproviders',
	requires: ['SheffieldSH.reader.Providers'],
	
	config: {
		model: 'SheffieldSH.model.Provider',
		sorters: 'name',
		grouper: {
			groupFn: function (item) {
				return item.get('distanceInFeet');
			} // groupFn
		}, // grouper
		groupDir: 'ASC',
		autoLoad: true,
		proxy: {
	        type: 'ajax',
	        url : 'http://www.sexualhealthsheffield.nhs.uk/api/get_posts/?post_type=appservices',
	        reader: {
	            type: 'providers'
	        }
	    },
	    autoLoad: true	
	}
});