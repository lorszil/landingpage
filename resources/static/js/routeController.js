'use strict';

businesspage.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'navbarCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);
