Ext.define('SheffieldSH.view.ProviderDetail', {
	extend: 'Ext.Panel',
	xtype: 'providerdetail',
	
	initialize: function ( init, eOpts ) {
	},	
	
	hide: function ( that, eOpts ) {
	},
	
	config: {
		title: 'Provider Detail',
		iconCls : 'info',
        layout: 'fit',
		styleHtmlContent: true,
		scrollable: true,
		tpl: ['<h3>{title}{titleAppend}</h3>',
		'<p>{addressOne} {addressTwo} {town} {postcode}<br>',
		'<strong>T</strong> {telephone}<br>',
		'<strong>W</strong> <a href="{website}" id="{website}" target="_blank">{website}</a></p>',
		'<p><a class="halfWidthButton callNow" href="tel:{telephone}" id="{telephone}">Call Now</a>',
		//'<a class="halfWidthButton visitWebsite" href="https://maps.google.com/maps?saddr=Current+Location&daddr={postcode}" id="getDirections" target="_blank">Get Directions</a></p>',
		'<a class="halfWidthButton visitWebsite" href="" id="{postcode}" name="{postcode}" target="_system">Get Directions</a></p>',
		'<p class="orangeBlock">SERVICES AVAILABLE</p>',
		'<ul class="sLOK clearLeft">{servicesList}</ul>',
		'<p class="orangeBlock">OPENING TIMES</p>',
		'<p class="clearLeft">{openingTimes}</p>',
		'<p class="orangeBlock">DESCRIPTION</p>',
		'<p class="clearLeft">{description}</p>',
		'<p class="orangeBlock">INFO</p>',
		//'<p class="clearLeft"><strong>Youth Clinic:</strong> {youthClinic}<br><strong>Walk In Service:</strong> {walkInService}<br><strong>Appointment Service:</strong> {appointmentService}</p>'].join(''),
		'<p class="clearLeft"><strong>Walk In Service:</strong> {walkInService}<br><strong>Appointment Service:</strong> {appointmentService}</p>'].join(''),
		listeners : {
			show: function() {
				var saddr = SheffieldSH.app.uCL;
				var daddr = null;
								
				// Get the id of the Get Directions button
				Ext.select('.visitWebsite').each(function(el) {
					//console.log(el);
					daddr = el.id;					
				});
				
				// Create the url
				var url = 'http://maps.apple.com/?saddr=' + saddr + '&daddr=' + daddr;
				
				//alert(url);
				
				// Set the URL for it				
				Ext.select(".visitWebsite").set({href: url});
				
			},
			tap: {
				/*fn: function( event, el ) {
					// Get the users location from the services controller
					var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Services' );
					controllerRef.goToExternalMaps(event.target.name);
				},
				element: 'element',
				delegate: 'a',
				id: 'getDirections'*/
			 },
			painted: function() {
				setTimeout(function() {
					var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Services' );
					controllerRef.getNavview().setMasked(false);

					// Ensure all links open with in-app.
					var atags = document.getElementsByTagName('a');
					for(var i = 0; i < atags.length; i++){
						if(atags[i].target && (atags[i].target == '_blank' || atags[i].target == '_system')){
							(function(link, target){
								link.onclick=function(){
									window.open(this.href, target);
									return false;	
								}
							})(atags[i], atags[i].target);
						}
					}
				},500);
			}
		}
	}
});