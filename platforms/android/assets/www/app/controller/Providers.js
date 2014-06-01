Ext.define('SheffieldSH.controller.Providers', {
	extend: 'Ext.app.Controller',
	
	launch: function () {
	},
	init: function () {
	},
	
	config: {
		control: {
			'providerslist': {
				disclose: 'proDetail',
				itemdoubletap: function(list, record, index, e, eOpts) {
					this.getNavview().setMasked(true);
					this.getNavview().push({
						xtype: 'providerdetail',
						// Set the title of the detail card from the model of SheffieldSH.model.Service
						title: e.providerTitle(),
						data: e.data
					});
				}
			}
		},
		refs: {
			// The reference for getNavview is the xtype of the Ext.navigation.View of SheffieldSH.view.Services
			navview: 'servicesCard'
		}
	},
	
	proDetail: function(list, record, target, index, e, eOpts) {	
		this.getNavview().setMasked(true);	
		this.getNavview().push({
			xtype: 'providerdetail',
			// Set the title of the detail card from the model of SheffieldSH.model.Service
			title: record.providerTitle(),
			data: record.data
		});
	}
	
});