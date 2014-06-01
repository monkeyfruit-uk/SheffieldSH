Ext.define('SheffieldSH.view.Services', {
	// This is a stacked view, showing the services list first, then the services detail, then the provider data
	extend: 'Ext.navigation.View',
	xtype : 'servicesCard',
	requires: ['SheffieldSH.view.ServicesList','SheffieldSH.view.ServiceDetail','SheffieldSH.view.ProviderDetail'],
	
	config: {
		title: 'Services',
		// For the tab icon
		iconCls: 'search',
		items: [{
			xtype: 'serviceslist'
		}]
	}
});