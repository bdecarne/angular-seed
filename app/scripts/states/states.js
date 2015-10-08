
(function() {
  'use strict';
  // module definition
  angular.module('app.states', [])
    .config(config);

  //= include ./home/home.js

  /**
   * @ngInject
   */
  function config($stateProvider) {
    $stateProvider.state('app', {
      url: '',
      abstract: true,
      template: "<div ui-view></div>"
    });
  }

})();
