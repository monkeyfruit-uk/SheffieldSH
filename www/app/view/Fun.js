Ext.define('SheffieldSH.view.Fun', {
	extend: 'Ext.Panel',
	xtype: 'funCard',
	requires: ['Ext.Carousel'],
	
	initialize: function() {
		this.selectAnswer = 0;
		this.selectQuestion = 0;
	},
	
	config: {
		title: 'Quiz',
		iconCls: 'star',
		scrollable: false,
		layout: 'fit',
		cls: 'funCard',
		id: 'funCard',
		
		listeners: {	
			tap: {
				fn: function(e) {
					if( e.target.className == 'services' || e.target.className == 'service-finder' ) {
						var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Main' );
						controllerRef.switchToTab(1);
					} else if( e.target.className == 'next' ) {
						var carousel = Ext.getCmp('carousel');
						carousel.next();
					} else if( e.target.className == 'reset' ) {
						var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
						controllerRef.runReset();
					}
				},
				element: 'element',
				delegate: 'a'
			}
		},			
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Quiz'
			},
			{
				xtype: 'carousel',
				id: 'carousel',
				items: [
					{
						id: '1',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 1</h3>',
								"<h4>Using two condoms is safer than one?</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 1;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 1;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}									
								]
							}
						]							
					},
					{
						id: '2',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 2</h3>',
								"<h4>You would always get symptoms if you had a sexually transmitted infection (STI)</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 2;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 2;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},
					{
						id: '3',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 3</h3>',
								"<h4>The contraceptive pill is 100% effective</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 3;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 3;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},
					{
						id: '4',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 4</h3>',
								"<h4>You can't get HIV from kissing, hugging or sharing drinks</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 4;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 4;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '5',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 5</h3>',
								"<h4>You can't get pregnant if a man withdraws his penis from the vagina before he ejaculates (cums)</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 5;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 5;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '6',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 6</h3>',
								"<h4>There is no cure for HIV</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 6;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 6;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '7',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 7</h3>',
								"<h4>The contraceptive pill can protect you against some sexually transmitted infections (STIs)</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 7;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 7;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '8',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 8</h3>',
								"<h4>You can catch a sexually transmitted infection (STI) from oral sex</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 8;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 8;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '9',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 9</h3>',
								"<h4>If washed carefully, a condom can be used safely over and over again</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 9;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 9;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '10',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 10</h3>',
								"<h4>You can tell that someone has HIV by the way they look</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 10;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 10;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},	
					{
						id: '11',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 11</h3>',
								"<h4>Emergency contraception needs to be taken within 5 days of having unprotected sex or after a condom has failed during sex</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 11;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 11;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},
					{
						id: '12',
						xtype: 'panel',
						cls: 'questionPanel',
						hideAnimation: {type:'fadeOut',duration: 1000 },
						showAnimation: {type:'fadeIn',duration: 1000 },
						listeners: {
							hide : function(parental,eOpts) {
								var controllerRef = SheffieldSH.app.getController( 'SheffieldSH.controller.Fun' );
								controllerRef.answered(selectQuestion,selectAnswer,parental);
							},
							show : function(parental,eOpts) {
							},
							painted : function(parental,eOpts) {
							}
						},
						items: [
							{
								xtype: 'container',
								cls: 'questionTop',
								html: [
								'<h3>Question 12</h3>',
								"<h4>Anyone can get a free sexual health check-up including testing and treatment for sexually transmitted infections (STIs)</h4>"
								].join("")
							},
							{
								xtype: 'container',
								cls: 'questionMid',
								items: [
									{
										xtype: 'container',
										cls: 'questionButton true',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 1;
													selectQuestion = 12;																
													parental.hide();					
												},
												element: 'element'
											}
										}
									},
									{
										xtype: 'container',
										cls: 'questionButton false',
										listeners: {
											tap: {
												fn: function() {
													var parental = this.parent.parent;
													selectAnswer = 0;
													selectQuestion = 12;																
													parental.hide();										
												},
												element: 'element'
											}
										}
									}
									
								]
							}
						]							
					},
					{
						id: '13',
						xtype: 'panel',
						cls: 'resultsPanel',
						id: 'resultsPanelId',
						html: [
							'<p id="soFar" class="backInBlack">-----</p>',
							'<p id="soFar" class="backInBlack">Answer all the questions to see your score</p>'
						].join("")	
					},											
				]
			}
		]
	}
	
});