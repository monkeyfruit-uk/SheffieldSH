Ext.define('SheffieldSH.controller.Main', {
	extend: 'Ext.app.Controller',
	
	launch: function () {
	},
	init: function () {
	},
	
	config: {
		control: {
			buttonSearch: {
                tap: 'functionSearch'
            },
			buttonFavourites: {
                tap: 'functionFavourites'
            }
		},
		refs: {
			buttonSearch: 'button[action=touchedSearch]',
			buttonFavourites: 'button[action=touchedFavourites]',
			tabview: 'tabview'
		}
	},
	
	functionSearch: function() {
		//console.log('functionSearch');
	},
	functionFavourites: function() {
		//console.log('functionFavourites');
	},	
	switchToTab: function(tabId) {
		this.getTabview().setActiveItem(tabId);
	}
});