Ext.define('SheffieldSH.store.Providers', {
	extend: 'Ext.data.Store',
	xtype: 'storesproviders',
	
	config: {
		model: 'SheffieldSH.model.Provider',
		sorters: 'name',
		grouper: {
			groupFn: function (item) {
				return item.get('distanceInFeet');
			} // groupFn
		}, // grouper
		groupDir: 'ASC',
		data: [
			{ 
				ID: 				1,
				slug: 				"sexual-health-sheffield-hallamshire-site",
				title: 				"Sexual Health Sheffield Hallamshire Site (Formerly Department of Genito-Urinary Medicine)",
				addressOne: 		"Royal Hallamshire Hospital",
				addressTwo: 		"Glossop Road",
				town: 				"Sheffield",
				postcode: 			"S10 2JF",
				telephone: 			"0114 305 4000",
				website: 			"http://www.sexualhealthsheffield.nhs.uk",
               openingTimes: 		"Mon, Tues, Wed, Fri: 9am-12 and Thur: 10am-12<br />Mon, Tues, Thur, Fri: 1pm-3.30pm<br />Tues, Thur: 4.30pm-6.30pm",
				description: 		"Information, advice, screening and treatment for STIs and contraception services",
				services: 			[1,2,3,4,5,6,7,8,9,10,11],
				servicesClass: 		'1 2 3 4 5 6 7 8 9 10 11',
				youthClinic: 		'No',
				youthClinicHover:	'All ages',
				walkInService: 		'No',
				appointmentService: 'Yes',
				theLat:				53.378472,
				theLng:				-1.493465,
				distance:			'0',
				distanceInFeet:		1,
				servicesList:		['<li class="li-hiv-testing">HIV Testing</li>',
				'<li class="li-hiv-treatment-and-care">HIV Treatment and Care</li>',
				'<li class="li-hiv-counselling">HIV Counselling</li>',
				'<li class="li-post-exposure-prophylaxis">Post Exposure Prophylaxis</li>',
				'<li class="li-sti-testing">STI Testing</li>',
				'<li class="li-sti-treatment">STI Treatment</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-emergency-contraception">Emergency Contraception</li>',
				'<li class="li-contraception">Contraception</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				2,
				slug: 				"department-of-infection-tropical-medicine",
				title: 				"Department of Infection & Tropical Medicine",
				addressOne: 		"Royal Hallamshire Hospital",
				addressTwo: 		"Glossop Road",
				town: 				"Sheffield",
				postcode: 			"S10 2JF",
				telephone: 			"0114 271 3560",
				website: 			"",
               openingTimes: 		"Clinic By Appointment: Tue – 8.30am-1pm / Thur – 1.30pm-5.30pm<br />General Telephone Enquiries: Mon-Fri – 9am-4.30pm",
				description: 		"Treatment, care and support for people living with HIV - by appointment only",
				services: 			[1,2,3,4,7,8,11],
				servicesClass: 		'1 2 3 4 7 8 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'No',
				appointmentService: 'Yes',
				theLat:				53.378473,
				theLng:				-1.493465,
				distance:			'0',
				distanceInFeet:		2,
				servicesList:		['<li class="li-hiv-testing">HIV Testing</li>',
				'<li class="li-hiv-treatment-and-care">HIV Treatment and Care</li>',
				'<li class="li-hiv-counselling">HIV Counselling</li>',
				'<li class="li-post-exposure-prophylaxis">Post Exposure Prophylaxis</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				3,
				slug: 				"sheffield-contraception-sexual-health",
				title: 				"Sexual Health Sheffield Central Site",
				addressOne: 		"Sexual Health Sheffield Central Site",
				addressTwo: 		"Mulberry Street",
				town: 				"Sheffield",
				postcode: 			"S1 2PJ",
				telephone: 			"0114 305 4000",
				website: 			"http://www.sexualhealthsheffield.nhs.uk",
				openingTimes: 		"Mon-Fri: 8.30am-12 /1.30pm-3.00pm (4pm Fri)<br/>Saturday Emergency Clinic: 10.00am-1.30pm",
				description: 		"Information, advice, screening and treatment of STIs and contraception services",
				services: 			[1,5,6,7,9,10,11],
				servicesClass:		'1 5 6 7 9 10 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.381870,
				theLng:				-1.466590,
				distance:			'0',
				distanceInFeet:		3,
				servicesList:		['<li class="li-hiv-testing">HIV Testing</li>',
				'<li class="li-sti-testing">STI Testing</li>',
				'<li class="li-sti-treatment">STI Treatment</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-contraception">Contraception</li>',
				'<li class="li-emergency-contraception">Emergency Contraception</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				4,
				slug: 				"gu-medicine-hiv-clinical-psychology-services",
				title: 				"GU Medicine & HIV Clinical Psychology Services",
				addressOne: 		"Royal Hallamshire Hospital",
				addressTwo: 		"Glossop Road",
				town: 				"Sheffield",
				postcode: 			"S10 2JF",
				telephone: 			"0114 271 3524",
				website: 			"",
				openingTimes: 		"Mon-Fri - Office Hours",
				description: 		"Clinical psychology service for people living with or affected by HIV - by appointment only",
				services: 			[3,8,11],
				servicesClass: 		'3 8 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'No',
				appointmentService: 'Yes',
				theLat:				53.378474,
				theLng:				-1.493465,
				distance:			'0',
				distanceInFeet:		4,
				servicesList:		['<li class="li-hiv-counselling">HIV Counselling</li>',
				'<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				5,
				slug: 				"the-forge-centre",
				title: 				"The Forge Centre",
				addressOne: 		"Floor 1, Howden House",
				addressTwo: 		"Union Street, Sheffield",
				town: 				"Sheffield",
				postcode: 			"S1 2SH",
				telephone: 			"0114 273 4984",
				website: 			"https://www.sheffield.gov.uk/caresupport/adult/support-available/health-well-being/hiv/forgecentre.html",
				openingTimes: 		"Mon-Thur 8.45am-5.15pm; Fri 8.45am-4.45pm",
				description: 		"Social work support for people living or affected by HIV and Hep C. By appointment only",
				services: 			[3,8,11],
				servicesClass: 		'3 8 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'No',
				appointmentService: 'Yes',
				theLat:				53.363665,
				theLng:				-1.501365,
				distance:			'0',
				distanceInFeet:		5,
				servicesList:		['<li class="li-hiv-counselling">HIV Counselling</li>',
				'<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				6,
				slug: 				"shield",
				title: 				"SHIELD",
				addressOne: 		"The Orchard",
				addressTwo: 		"14-18 West Bar Green",
				town: 				"Sheffield",
				postcode: 			"S1 2DA",
				telephone: 			"0114 278 7916",
				website: 			"http://www.shield.org.uk/",
				openingTimes: 		"Go to website for details",
				description: 		"Voluntary sector support for people living with or affected by HIV. Appointments necessary for certain services e.g counselling and therapy",
				services: 			[3,7,8,11],
				servicesClass: 		'3 7 8 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.385288,
				theLng:				-1.471178,
				distance:			'0',
				distanceInFeet:		6,
				servicesList:		['<li class="li-hiv-counselling">HIV Counselling</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				7,
				slug: 				"shout",
				title: 				"SHOUT!",
				addressOne: 		"The Circle Building",
				addressTwo: 		"33 Rockingham Lane",
				town: 				"Sheffield",
				postcode: 			"S1 4FW",
				telephone: 			"0114 253 6767",
				website: 			"http://www.gaysheffield.co.uk/",
				openingTimes: 		"Thur - 6.30pm-8.30pm",
				description: 		"Sexual health drop-in service for gay and bisexual men, offering one-to-one support, sexual health information and advice, free condoms, and a safe social space.",
				services: 			[7,8,11],
				servicesClass: 		'7 8 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.380305,
				theLng:				-1.474562,
				distance:			'0',
				distanceInFeet:		7,
				servicesList:		['<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				8,
				slug: 				"yambo-sheena-amos-youth-trust",
				title: 				"Yambo / Sheena Amos Youth Trust",
				addressOne: 		"Scotia Works",
				addressTwo: 		"Leadmill Road",
				town: 				"Sheffield",
				postcode: 			"S1 4SE",
				telephone: 			"0114 241 2728",
				website: 			"http://www.sayouthtrust.org.uk/",
				openingTimes: 		"Contact for details",
				description: 		"Support group for young people under 19 who are affected by HIV - by appointment only",
				services: 			[8,11],
				servicesClass: 		'8 11',
				youthClinic: 		'No - All ages',
				youthClinicHover:	'All ages',
				walkInService: 		'No',
				appointmentService: 'Yes',
				theLat:				53.378472,
				theLng:				-1.493465,
				distance:			'0',
				distanceInFeet:		8,
				servicesList:		['<li class="li-hiv-support">HIV Support</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		' (Under 19s Only)'
			},
			{ 
				ID: 				9,
				slug: 				"sheffield-youth-clinics",
				title: 				"Sheffield Youth Clinics",
				addressOne: 		"Sexual Health Sheffield Central Site",
				addressTwo: 		"Mulberry Street",
				town: 				"Sheffield",
				postcode: 			"S1 2PJ",
				telephone: 			"0114 305 4000",
				website: 			"http://www.sexualhealthsheffield.nhs.uk ",
               openingTimes: 		"Mon-Thur 3.30pm-6.00pm Sat 10.15am-1pm",
				description: 		"Information, advice and provision of contraception and screening of STIs for young people under 19",
				services: 			[1,5,7,9,10,11],
				servicesClass:		'1 5 7 9 10 11',
				youthClinic: 		'Yes - Under 19s Only',
				youthClinicHover:	'Under 19s Only',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.381871,
				theLng:				-1.466590,
				distance:			'0',
				distanceInFeet:		9,
				servicesList:		['<li class="li-hiv-testing">HIV Testing</li>',
				'<li class="li-sti-testing">STI Testing</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-contraception">Contraception</li>',
				'<li class="li-emergency-contraception">Emergency Contraception</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		' (Under 19s Only)'
			},
			{ 
				ID: 				10,
				slug: 				"sheffield-youth-clinics-2",
				title: 				"Sheffield Youth Clinics",
				addressOne: 		"Firth Park Clinic",
				addressTwo: 		"North Quadrant, Firth Park",
				town: 				"Sheffield",
				postcode: 			"S5 6NU",
				telephone: 			"0114 305 1921",
				website: 			"http://www.sexualhealthsheffield.nhs.uk",
				openingTimes: 		"Thur 4pm-6pm",
				description: 		"Information, advice and provision of contraception and screening of STIs for young people under 19",
				services: 			[1,5,7,9,10,11],
				servicesClass: 		'1 5 7 9 10 11',
				youthClinic: 		'Yes - Under 19s Only',
				youthClinicHover:	'Under 19s Only',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.419404,
				theLng:				-1.448275,
				distance:			'0',
				distanceInFeet:		10,
				servicesList:		['<li class="li-hiv-testing">HIV Testing</li>',
				'<li class="li-sti-testing">STI Testing</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-contraception">Contraception</li>',
				'<li class="li-emergency-contraception">Emergency Contraception</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		' (Under 19s Only)'
            },
            {
               ID: 				11,
               slug: 				"firth-park-clinic",
               title: 				"Firth Park Clinic",
               addressOne: 		"Firth Park Clinic",
               addressTwo: 		"North Quadrant, Firth Park",
               town: 				"Sheffield",
               postcode: 			"S5 6NU",
               telephone: 			"0114 305 4000",
               website: 			"www.sexualhealthsheffield.nhs.uk ",
               openingTimes: 		"Mon 4pm-6.30pm Wed 9am-12.00",
               description: 		"Information, advice, screening of STIs and contraception services",
               services: 			[1,5,7,9,10,11],
               servicesClass: 		'1 5 7 9 10 11',
               youthClinic: 		'',
               youthClinicHover:	'',
               walkInService: 		'No',
               appointmentService: 'Yes',
               theLat:				53.419404,
               theLng:				-1.448275,
               distance:			'0',
               distanceInFeet:		10,
               servicesList:		['<li class="li-hiv-testing">HIV Testing</li>',
                                     '<li class="li-sti-testing">STI Testing</li>',
                                     '<li class="li-free-condoms">Free Condoms</li>',
                                     '<li class="li-contraception">Contraception</li>',
                                     '<li class="li-emergency-contraception">Emergency Contraception</li>',
                                     '<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
               titleAppend:		''
            },
			/*{ 
				ID: 				11,
				slug: 				"393-club",
				title: 				"393 Club",
				addressOne: 		"393 Langsett Road",
				addressTwo: 		"Hillsborough",
				town: 				"Sheffield",
				postcode: 			"S6 2LJ",
				telephone: 			"",
				website: 			"http://www.sheffieldopendoors.org.uk/locations.asp",
				openingTimes: 		"Mon-Thur 9am-3pm Drop-In Youth Club Mon and thur 7-9pm",
				description: 		"Information, advice and provision of contraception and screening of STIs for young people under 19",
				services: 			[5,7,9,11],
				servicesClass: 		'5 7 9 11',
				youthClinic: 		'Yes - Under 19s Only',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.400021,
				theLng:				-1.496232,
				distance:			'0',
				distanceInFeet:		11
			},
			{ 
				ID: 				12,
				slug: 				"com-unity",
				title: 				"Com.Unity",
				addressOne: 		"32 Westfield Centre",
				addressTwo: 		"",
				town: 				"Sheffield",
				postcode: 			"S20 8ND",
				telephone: 			"0114 201 7480",
				website: 			"http://www.sheffieldopendoors.org.uk/locations.asp",
				openingTimes: 		"Tue 3.30-6.00pm",
				description: 		"Information, advice and provision of contraception and screening of STIs for young people under 19",
				services: 			[5,7,9,11],
				servicesClass:		'5 7 9 11',
				youthClinic: 		'Yes - Under 19s Only',
				walkInService: 		'No',
				appointmentService: 'No',
				theLat:				53.330720,
				theLng:				-1.349731,
				distance:			'0',
				distanceInFeet:		12
			},
			{ 
				ID: 				11,
				slug: 				"fruitbowl",
				title: 				"Fruitbowl",
				addressOne: 		"Scotia Works",
				addressTwo: 		"Leadmill Road",
				town: 				"Sheffield",
				postcode: 			"S1 4SE",
				telephone: 			"07974 825318",
				website: 			"http://www.sheffieldfruitbowl.org.uk/",
				openingTimes: 		"Weekly meetings",
				description: 		"FREE C-Card condoms, pregnancy testing and chlamydia screening for LGBT young people",
				services: 			[5,7,11],
				servicesClass: 		'5 7 11',
				youthClinic: 		'Yes - Under 19s Only',
				youthClinicHover:	'Under 19s Only',
				walkInService: 		'No',
				appointmentService: 'Yes',
				theLat:				53.376325,
				theLng:				-1.464840,
				distance:			'0',
				distanceInFeet:		11,
				servicesList:		['<li class="li-sti-testing">STI Testing</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		''
			},
			{ 
				ID: 				11,
				slug: 				"double-6-youth-club",
				title: 				"Double 6 Youth Club",
				addressOne: 		"",
				addressTwo: 		"Scarsdale Road",
				town: 				"Sheffield",
				postcode: 			"S8 8TE",
				telephone: 			"07545 962015",
				website: 			"http://www.sheffieldopendoors.org.uk/locations.asp",
				openingTimes: 		"Tue 7-9pm, Wed 5.30-9pm, Thur 7-9pm",
				description: 		"Information, advice and provision of FREE C-Card condoms, pregnancy testing, and chlamydia screening for young people under 19",
				services: 			[5,7,9,11],
				servicesClass:		'5 7 9 11',
				youthClinic: 		'Yes - Under 19s Only',
				youthClinicHover:	'Under 19s Only',
				walkInService: 		'Yes',
				appointmentService: 'No',
				theLat:				53.346665,
				theLng:				-1.477724,
				distance:			'0',
				distanceInFeet:		11,
				servicesList:		['<li class="li-sti-testing">STI Testing</li>',
				'<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-contraception">Contraception</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		' (Under 19s Only)'
			}
			{ 
				ID: 				12,
				slug: 				"the-corner",
				title: 				"The Corner",
				addressOne: 		"",
				addressTwo: 		"91 Division Street",
				town: 				"Sheffield",
				postcode: 			"S1 4GE",
				telephone: 			"0114 275 2051",
				website: 			"http://www.cri.org.uk/corner_sheffield",
				openingTimes: 		"Mon-Fri 1pm-5pm Drop-In",
				description: 		"Young people's substance misuse service. Provides sexual health information and advice and FREE C-Card condoms",
				services: 			[7,11],
				servicesClass:		'7 11',
				youthClinic: 		'Yes - Under 19s Only',
				youthClinicHover:	'Under 19s Only',
				walkInService: 		'Yes',
				appointmentService: 'Yes',
				theLat:				53.379695,
				theLng:				-1.474750,
				distance:			'0',
				distanceInFeet:		12,
				servicesList:		['<li class="li-free-condoms">Free Condoms</li>',
				'<li class="li-sexual-health-information-advice">Sexual Health Information &amp; Advice</li>'].join(''),
				titleAppend:		' (Under 19s Only)'
			}*/
		]				
	}
});