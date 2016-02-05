
angular.module('theHand').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/configuration', {
                templateUrl: 'app/features/configuration/configurationView.html',
                controller: 'ConfigurationController'
            }).
            when('/playlist', {
                templateUrl: 'app/features/playlist/playlistView.html',
                controller: 'PlaylistController'
            }).otherwise({
                redirectTo: '/configuration'
            });

    }]);