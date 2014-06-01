Ext.define('SheffieldSH.store.Services', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'SheffieldSH.model.Service',
		sorters: 'title',
		grouper: function(record) {
			return record.get('title')[0];
		},
		data: [
			{ ID: 1, slug: "hiv-testing", title: "HIV Testing" },
			{ ID: 2, slug: "hiv-treatment-and-care", title: "HIV Treatment and Care" },
			{ ID: 3, slug: "hiv-counselling", title: "HIV Counselling" },
			{ ID: 4, slug: "post-exposure-prophylaxis", title: "Post-Exposure Prophylaxis" },
			{ ID: 5, slug: "sti-testing", title: "STI Testing" },
			{ ID: 6, slug: "sti-treatment", title: "STI Treatment" },
			{ ID: 7, slug: "free-condoms", title: "Free Condoms" },
			{ ID: 8, slug: "hiv-support", title: "HIV Support" },
			{ ID: 9, slug: "contraception", title: "Contraception" },
			{ ID: 10, slug: "emergency-contraception", title: "Emergency Contraception" },
			{ ID: 11, slug: "sexual-health-information-advice", title: "Sexual Health Info & Advice" }
		]				
	}
});