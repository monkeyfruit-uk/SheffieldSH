Ext.define('SheffieldSH.view.Providers', {
	// This is a stacked view, showing the services list first, then the services detail, then the provider data
	extend: 'Ext.navigation.View',
	xtype : 'providersCard',
	requires: ['SheffieldSH.view.ProvidersList','SheffieldSH.view.ProviderDetail'],
	
	config: {
		title: 'Providers',
		// For the tab icon
		iconCls: 'search',
		items: [{
			xtype: 'providerslist'
		}]
	}
});