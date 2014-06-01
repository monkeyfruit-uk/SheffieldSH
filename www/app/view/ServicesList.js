Ext.define('SheffieldSH.view.ServicesList', {
	extend: 'Ext.List',
	// Alias for the class
	xtype : 'serviceslist',
	
	config: {
		// Tab bar title
		title: 'Services List',
		itemTpl: '<div class="servicesList" id="{slug}">{title}</div>',
		store: 'Services',
		grouped: false,
		indexBar: false,
		html: '',
		// If we want to have a disclosure icon
		onItemDisclosure: false,
		selectedCls : 'x-list-selecta',
		pressedCls : 'x-list-pressure',
		itemCls: 'x-service-list-item',
		
		listeners: {
			painted: function() {		
				// Apply some styles to the parent of the li
				Ext.select('.servicesList').each(function(el) {
					var tClass = el.id;
					var parentel = el.parent();
					var ancestor = parentel.parent();
					ancestor.addCls(tClass);
				});
			}
		}
	}
});