var app = angular.module('main', [
    'ui.router',
    'smart-table',
    'toaster',
    'ngAnimate',
    'ui.bootstrap',
    'angularModalService',
    'ngMaterial']);



app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/app");

    $stateProvider
        .state('updating', {
            url: "/updating",
            templateUrl: "html/updating.html"
        })

        .state('app', {
            url: "/app",
            templateUrl: "html/app.html"

        })



});


