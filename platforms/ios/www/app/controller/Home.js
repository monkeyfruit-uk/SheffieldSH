Ext.define('SheffieldSH.controller.Home', {
	extend: 'Ext.app.Controller',
	
	launch: function () {
		//console.log('SheffieldSH.controller.Home Launch');
	},
	init: function () {
		//console.log('SheffieldSH.controller.Home Init');
	},
	Ext.define('SheffieldSH.view.Home', {
	extend: 'Ext.Panel',
	xtype : 'homeCard',
	title: 'Sheffield SH',
	
	config: {
		// Set up some defaults
		title: 'Home',
		iconCls: 'home',
		scrollable: false,
		layout: 'fit',
		
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Sheffield SH',
				/*items: [
					{
						iconCls: 'search',
						iconMask:true,
						align: 'left',
						action: 'touchedSearch',
						handler: function() {
							console.log('handler search');
						},
						ui: 'plain'
					},
					{
						iconCls: 'star',
						iconMask:true,
						align: 'right',
						action: 'touchedFavourites',
						handler: function() {
							console.log('handler favourites');
						},
						ui: 'plain'
					}
				]*/
			},
			{
				xtype: 'container',
				layout: 'hbox',
				items: [
					/*{
						layout: 'vbox',
						flex: 3,
						items: [
							{
								xtype: 'panel',
								html: '<h3>CHECK THE HIV-HOP</h3><h4>Watch the video, know the facts</h4>',
								id: 'homeBoxOne',
								cls: 'homeBox homeBoxGreen',
								flex: 1,
								listeners: {
									tap: {
										fn: function() {
											//var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Main' )
											//controllerRef.switchToTab(0);
											window.open('http://www.youtube.com/thehivhop');									
										},
										element: 'element'
									}
								}
							},*/
					{
						layout: 'vbox',
						flex: 3,
						items: [
							{
								xtype: 'panel',
								html: '<h3>10 WAYS</h3><h4>A condom can\'t protect you</h4>',
								id: 'homeBoxOne',
								cls: 'homeBox homeBoxGreen',
								flex: 1,
								listeners: {
									tap: {
										fn: function() {
											window.open('http://www.youtube.com/TenWaysUK');									
										},
										element: 'element'
									}
								}
							},
							{
								xtype: 'panel',
								html: '<h3>HOW MUCH DO YOU KNOW</h3><h4>Test your sexual health knowledge with our quiz</h4>',
								id: 'homeBoxTwo',
								cls: 'homeBox homeBoxDark',
								flex: 1,
								listeners: {
									tap: {
										fn: function() {
											var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Main' )
											controllerRef.switchToTab(2);											
										},
										element: 'element'
									}
								}
							},
							{
								xtype: 'panel',
								html: '<h3>FIND A SERVICE</h3><h4>Find your nearest sexual health service in Sheffield</h4>',
								id: 'homeBoxThree',
								cls: 'homeBox homeBoxRed',
								flex: 1,
								listeners: {
									tap: {
										fn: function() {
											var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Main' )
											controllerRef.switchToTab(1);											
										},
										element: 'element'
									}
								}
							}
						]					
					},
					{
						layout: 'vbox',
						flex: 2,
						items: [
							{
								xtype: 'panel',
								html: '<h3>HELPFUL LINKS</h3><h4>National sites for further information and support</h4>',
								id: 'homeBoxFour',
								cls: 'homeBox homeBoxLight',
								flex: 1,
								listeners: {
									tap: {
										fn: function() {
											var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Main' )
											controllerRef.switchToTab(3);											
										},
										element: 'element'
									}
								}
							},
							{
								xtype: 'panel',
								html: '<h3>UNDER 25?</h3><h4>Get a FREE Chlamydia testing kit sent to your home<br/>Text CLEAR WS, your name, address and postcode to 80010</h4>',
								id: 'homeBoxFive',
								cls: 'homeBox homeBoxBlue',
								flex: 1,
								tap: {
									fn: function() {
										window.open('sms:' + '80010' + '?body=' + 'CLEAR WS');									
									},
									element: 'element'
								}
							}
						]	
					}
				]
			}
		]
	}
});
	config: {
		control: {
			panel: {
                tap: 'function'
            }
		},
		refs: {
			panel: 'panel[action=action]'
		}
	}
});