angular.module('MyApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/london", {
            template: ` `,
            controller : "testCtrl"
        })
        .when("/", {
            template: ` `,
            controller : "homeCtrl"
        });
    })
    .controller('topCtrl', ($scope) => {
        $scope.name = 'test';
    })
    .controller('centerCtrl', ($scope) => {
        $scope.name = 'cursor'
    })
    .controller('testCtrl', function($scope) {
        console.log('hello');
    })
    .controller('homeCtrl', function($scope) {
        console.log('home page')
    })