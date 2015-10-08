(function () {
    'use strict';

    // module definition
    angular.module('app.states')
      .config(config);

    // requires
    //= include ./home.controller.js

    /**
     * @ngInject
     */
    function config($stateProvider) {
        $stateProvider
          .state('home', {
              url: "/",
              parent: "app",
              templateUrl: "states/home/home.html",
              controller: "HomeController"
          });
    }

})();
