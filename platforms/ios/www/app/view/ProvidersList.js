Ext.define('SheffieldSH.view.ProvidersList', {
	extend: 'Ext.List',
	// Alias for the class
	xtype : 'providerslist',
	
	launch: function () {
		//console.log("SheffieldSH.view.ProvidersList launch");	
	},
	init: function () {
		//console.log("SheffieldSH.view.ProvidersList init");
	},
		
	config: {
		// Tab bar title
		title: 'Providers List',
		itemTpl: '<div class="providerList {servicesClass}" id="d{ID}"><div class="providerTitle"><h4>{title}{titleAppend}</h4><p>{addressTwo}, {postcode}</p></div><div class="providerDistance">{distance}</div></div>',
		store: 'Providers',
		grouped: false,
		indexBar: false,
		html: '',
		onItemDisclosure: true,
		id:	'providersList',
		itemCls: 'x-provider-list-item',
		pressedDelay: 1,
	
		listeners: {
			show: function(list, opts) {
			},
			initialize: function(list, opts) {
				list.refresh();
			}
		}
	}
});