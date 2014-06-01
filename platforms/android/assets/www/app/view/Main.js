Ext.define("SheffieldSH.view.Main", {
    extend: 'Ext.tab.Panel',
	
	name: 'SheffieldSH',
	xtype: 'tabview',
	
	// Get the individual classes
	requires: [
		'SheffieldSH.view.Home',
		'SheffieldSH.view.Services',
		'SheffieldSH.view.Providers',
		'SheffieldSH.view.Fun',
		'SheffieldSH.view.Links',
		'SheffieldSH.view.Info'],
	
    config: {
		
		// Add the tab bar at the top
		tabBar: {
			docked: 'bottom',
			layout: {
				pack: 'center'
			}
		},
		
		// Some default text	
		defaults: {
			//html: 'Text',
			styleHtmlContent: false
		},
		
		// Add each of the views using their xtype class alias
        items: [
            { xtype: 'homeCard' },
            { xtype: 'servicesCard' },
            { xtype: 'funCard' },
            { xtype: 'linksCard' },
            { xtype: 'infoCard' }			
        ]
    }
});
