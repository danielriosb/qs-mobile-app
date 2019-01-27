/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: "--YOUR QLIK SENSE SERVER HOST--",
	prefix: "/",
	port: "443",
	isSecure: true
};
//to avoid errors in dev-hub: you can remove this when you have added an ap
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require( ["js/qlik", "js/core.js"], function ( qlik, app ) {

	window.qlik = qlik;

	angular.bootstrap(document, ["app", "qlik-angular"]);	    	
		
	qlik.setOnError( function ( error ) {
		$( "#errmsg" ).html( error.message ).parent().show();
	} );
} );

