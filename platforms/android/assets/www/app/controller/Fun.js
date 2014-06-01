Ext.define('SheffieldSH.controller.Fun', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			tabview: 'tabview'
		}
	},
	
	init: function () {
		this.numberOfQuestions = 12;
		this.questionsAnsweredSoFar = 0;
		this.questionsAnsweredCorrectly = 0;
		this.clickedArray = new Array();
		
		this.answerArray = new Array();
		this.answerArray[1] = { 
			answer: 0,
			question: 'Using two condoms is safer than one',
			text: '<h4>The friction caused between the layers of each condom increases the risk of them splitting or tearing.</h4>'
		};
		this.answerArray[2] = {
			answer: 0,
			question: 'You would always get symptoms if you had a sexually transmitted infection (STI)',
			text: '<h4>Some people do not have any symptoms if they have an STI. Chlamydia is the most common STI and it very rarely has symptoms. So most people who have it don\'t even know they’ve got it. You can only be sure by getting tested <a class="services">Find a service</a></h4>'
		};
		this.answerArray[3] = { 
			answer: 0,
			question: 'The contraceptive pill is 100% effective',
			text: '<h4>Although the pill is a very effective contraceptive if taken correctly, about 1 in 100 women who are taking this form of contraception will get pregnant. It is important to take the pills as instructed. Missing pills or taking them at the same time as other medicines may make them less effective. <a class="services">Find a service</a></h4>'
		};
		this.answerArray[4] = {
			answer: 1,
			question: 'You can\'t get HIV from kissing, hugging or sharing drinks',
			text: '<h4>There is no way that HIV can be passed from person to person through everyday contact. The main ways that people are infected with HIV are by having unprotected sex (i.e. sex without using a condom) or by sharing needles for injecting drugs such as heroin or steroids.</h4>'
		};
		this.answerArray[5] = {
			answer: 0,
			question: 'You can\'t get pregnant if a man withdraws his penis from the vagina before he ejaculates (cums)',
			text: '<h4>It\'s very possible that pre-ejaculate (pre-cum) can contain traces of sperm and this pre-ejaculatory fluid can leak out of the penis even before a man ejaculates. So even if he pulls out there\'s still a risk of pregnancy and sexually transmitted infections.</h4>'
		};
		this.answerArray[6] = {
			answer: 1,
			question: 'There is no cure for HIV',
			text: '<h4>Although scientists continue to try and find a cure or a vaccine that will prevent HIV infection, there is no cure for this virus. There are, however, medications that can help many people infected with HIV live with the disease, stay as healthy as possible, and prolong their lives.</h4>'
		};
		this.answerArray[7] = {
			answer: 0,
			question: 'The contraceptive pill can protect you against some sexually transmitted infections (STIs)',
			text: '<h4>The contraceptive pill only protects against unplanned pregnancy and offers no protection at all against any sexually transmitted infection. Using a condom every time you have sex will help protect you against both STIs and pregnancy. <a class="services">Find a service</a></h4>'
		};
		this.answerArray[8] = {
			answer: 1,
			question: 'You can catch a sexually transmitted infection (STI) from oral sex',
			text: '<h4>Oral sex (the stimulation of the genitals using the mouth and tongue) is one of the ways that sexually transmitted infections (STIs) are most frequently passed on. STIs that are commonly caught through oral sex include chlamydia, gonorrhoea, genital herpes and syphilis.</h4>'
		};
		this.answerArray[9] = {
			answer: 0,
			question: 'If washed carefully, a condom can be used safely over and over again',
			text: '<h4>Condoms are not designed to be used more than once. They only contain enough lubricant for one use and the latex they\'re made out of wears out quickly. Always use a new condom each time you have sex.</h4>' 
		};
		this.answerArray[10] = {
			answer: 0,
			question: 'You can tell that someone has HIV by the way they look',
			text: '<h4>There is no way that you can tell that someone has HIV simply by the way they look. Not everyone with HIV looks sick, and many people have it but don\'t know they’re infected. You would only know that someone had HIV if they told you.</h4>'
		};
		this.answerArray[11] = {
			answer: 1,
			question: 'Emergency contraception needs to be taken within 5 days of having unprotected sex or after a condom has failed during sex',
			text: '<h4>Emergency contraception can be very effective if the emergency contraceptive pill is taken or if you have an IUD (sometimes called the coil) fitted within 5 days of having sex. Though the sooner you seek help and take emergency contraception the more effective it is likely to be. <a class="services">Find a service</a></h4>'
		};
		this.answerArray[12] = {
			answer: 1,
			question: 'Anyone can get a free sexual health check-up including testing and treatment for sexually transmitted infections (STIs)',
			text: '<h4 class="cramped">Anyone can get a free, confidential check-up at a sexual health clinic. You can go to whichever place is most comfortable and convenient for you and you do not need a referral from your GP or other health professional.<br><br>If you are in Sheffield, use our <a class="service-finder">service finder</a>.</h4>'
		};
	},
	
	answered: function(question,answer,parental) {
		
		parental.show();
		
		// Double click?
		if( this.clickedArray.indexOf(question) == -1) {		
		
			this.clickedArray.push(question);
			this.answerArray[question].question = parental.getInitialConfig();
			
			parental.removeAll(false,false);
			
			var aArray = this.answerArray;
					
			if( answer == aArray[question].answer ) { var setClass = 'correct';this.questionsAnsweredCorrectly++; }
			else var setClass = 'wrong';
			
			this.questionsAnsweredSoFar++;
			
			if( this.questionsAnsweredSoFar > this.numberOfQuestions ) this.questionsAnsweredSoFar = this.numberOfQuestions;
			if( this.questionsAnsweredCorrectly > this.numberOfQuestions ) this.questionsAnsweredCorrectly = this.numberOfQuestions;
			
			var theHtml = ['<div class="answerReveal ' + setClass + '">',
			aArray[question].text,
			'<h5><a class="next">NEXT</a></h5></div>'
			].join("");
				
			parental.setHtml(theHtml);
			parental.show();
			
			//var sB = Ext.get('scoreBoard');
			//var crest = Ext.get('crest');
			var rPI = Ext.getCmp('resultsPanelId');			
			
			if( this.questionsAnsweredSoFar == this.numberOfQuestions ) {		
				
				if( this.questionsAnsweredCorrectly >= 8 ) {
					var cls = 'wellDone';
				} else {
					var cls = 'niceTry';
				}
				
				rPI.setHtml(['<div id="crest" class="' + cls + '">&nbsp;</div>',
				'<p id="soFar" class="backInBlack">You\'ve scored</p>',
				'<div id="scoreBoard" class="scoreBoard">' + this.questionsAnsweredCorrectly + '/' + this.questionsAnsweredSoFar + '</div>',
				'<p id="go" class="sButton"><a class="services">Find a service</a></p>',
				'<p id="reset" class="sButton"><a class="reset">Try Again</a></p>'].join(''));
			}
		}
	},
	
	runReset: function() {
		
		// Get the carousel		
		var carousel = Ext.getCmp('carousel');
		
		// Get rid of all the panels
		carousel.removeAll();
		
		// Reset the values		
		this.questionsAnsweredSoFar = 0;
		this.questionsAnsweredCorrectly = 0;
		this.clickedArray.length = 0;
		
		// In 0.5 seconds start all again		
		setTimeout(function() {
			carousel.setItems(carousel.initialConfig.items);
        	carousel.setActiveItem(0);
		},500);
		
		//carousel.removeAll(true,true);
		//console.log(carousel);
		//console.log(carousel.getInitialConfig());
		//carousel.doLayout();
		
		/*for(var i = 1;i <= this.answerArray.length;i++) {
			var panel = Ext.getCmp(i);
			panel.config = panel.getInitialConfig();			
		}*/
	}
	
});