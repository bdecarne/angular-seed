/***
 * include vendors
 */
//= include ../../node_modules/angular-animate/angular-animate.js
//= include ../../node_modules/angular-ui-router/release/angular-ui-router.js

/***
 * include components
 */
//= include ./components/components.js
//= include ./states/states.js

(function () {
    'use strict';

    // declare empty app.templates module
    angular.module('app.templates', []);

    // module definition
    angular.module('app', [
        // angular modules
        'ngAnimate',
        // 3rd Party modules
        'ui.router',
        // app modules
        'app.config',
        'app.templates',
        //'app.i18n',
        'app.components',
        'app.states'
    ])
      .config(config)
      .run(run);

    /**
     * @ngInject
     */
    function config($locationProvider, $urlRouterProvider) {
        // location
        $locationProvider/*.html5Mode(true)*/.hashPrefix('!');   // incompatible avec npm proxy
        // ui-router
        $urlRouterProvider.otherwise("/");
    }

    /**
     * @ngInject
     */
    function run($rootScope) {

    }

})();
