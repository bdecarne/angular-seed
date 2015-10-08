(function () {
    'use strict';

    // module definition
    angular.module('app.states')
      .controller('HomeController', HomeController);

    /**
     * @ngInject
     */
    function HomeController($scope, appConfig) {
        $scope.name = 'Wookie';
        $scope.appConfig = appConfig;
    }

})();
