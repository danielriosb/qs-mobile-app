define([], function () {

    var controllers = {};
    var currentMenu;
    var color;

    controllers.homeController = function ($document) {

        color = 'transparent';

        $document[0].body.style.background = 'url("./partials/images/bg.png") no-repeat';

        currentMenu = 'home';
        getActiveMenu();
        setFooterColor();
    }

    controllers.welcomeController = function ($document) {

        color = '#1c355E';

        $document[0].body.style.background = '#1c355E';

        currentMenu = 'welcome';
        getActiveMenu();
        setFooterColor();

    }

    controllers.sessionsController = function ($scope, $http, $location, $rootScope, dataService, $document) {

        color = '#006580';

        $document[0].body.style.background = '#006580';

        currentMenu = 'sessions';
        getActiveMenu();
        setFooterColor();

        app.getObject('QV01', 'FQZNDdB');
        app.getObject('QV02', 'DpCfnhw');
        app.getObject('QV03', 'xdESXp');
        app.getObject('QV04', 'YFPkE');

        $scope.logOut = function () {

            $http.post('/logout')
                .success(function () {
                    $rootScope.currentUser = null;
                    $location.url("/home");
                });
        }
    }

    controllers.sessionsController.$inject = ['$http', '$location', '$rootScope', '$scope', 'dataService', '$document'];

    controllers.infoController = function ($document) {

        color = '#244B5A';

        $document[0].body.style.background = '#244B5A';

        currentMenu = 'info';
        getActiveMenu();
        setFooterColor();

    }

    var getActiveMenu = function () {

        var doc = angular.element('header')
        var menuElement = angular.element(doc).find('#' + currentMenu);
        var menuElementActive = angular.element(doc).find('.active');

        if (!menuElement.hasClass('active')) {
            menuElement.addClass('active')
            menuElementActive.removeClass('active');
        }

    };

    var setFooterColor= function(){

        var footerBG = angular.element(document).find('.footer-bg');
        footerBG[0].style.background = color;

    };

    return controllers;

});