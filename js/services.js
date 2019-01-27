define([], function() { 
    
    var services = {};

    services.dataService = function() {
        this.app = qlik.openApp('8b4c4a13-79dc-4c4c-a986-b1354b69eafc', config);
		window.app = this.app;
	};

    return services;
});