define([], function(){
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: './partials/home.html',
                controller: 'homeController'
            })
            .when('/welcome', {
                templateUrl: './partials/welcome.html',
                controller: 'welcomeController'
            })
            .when('/sessions', {     // we will want this protected so you have to be logged in to visit
                templateUrl: './partials/sessions.html',
                controller: 'sessionsController'
            })
            .when('/info', {
                templateUrl: './partials/info.html',
                controller: 'infoController'
            })
            .otherwise({
                templateUrl: './partials/home.html',
                controller: 'homeController'
            });

            $locationProvider.hashPrefix('');
    }

    config.$inject=["$routeProvider", "$locationProvider"];
    return config;
});