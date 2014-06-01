Ext.define('SheffieldSH.view.Info', {
	extend: 'Ext.Panel',
	xtype : 'infoCard',
	
	controllers: ['Main'],
	
	config: {
		title: 'Info',
		iconCls: 'info',
		cls: 'clsInfoCard',
		html: ['<h2>Info</h2>',
		'<p>This app has been developed by The Centre for HIV & Sexual Health, Sheffield Teaching Hospitals NHS Foundation Trust <a href="http://www.sexualhealthsheffield.nhs.uk/" target="_blank" title="www.sexualhealthsheffield.nhs.uk">www.sexualhealthsheffield.nhs.uk</a></p>',
		'<p>The app is designed to promote sexual health awareness and wellbeing in Sheffield. It includes GPS location technology to search for sexual health services in the Sheffield area.</p>',
		'<p>The app has been designed and built by <a href="http://www.divacreative.com/" target="_blank" title="diva creative ltd">diva creative ltd</a>.</p>',
		'<p>The Sheffield SH logo is property of the Sheffield Teaching Hospitals NHS Foundation Trust.</p>',
		'<p>The app contains links to websites operated by third parties. The above parties do not have control over the content of these websites, offer no guarantee as to the accuracy of the information that appears, and do not actively endorse any listed products or services. The links are provided for your convenience only.</p>',
		'<p>Sheffield SH v1.5</p>',
		'<p>To report an issue with this app, please contact <a href="mailto:sheffield.chiv@nhs.net">sheffield.chiv@nhs.net</a>'].join(""),	
		scrollable: true,
		styleHtmlContent: true,
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Info'
			}
		]
	}
});