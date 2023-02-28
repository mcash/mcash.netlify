let app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/a', {
            templateUrl: 'index.html'
        })
        .when('/b', {
            templateUrl: 'landing.html'
        })
        .when('/c', {
            templateUrl: 'addpage.html'
        });
});

app.controller('mainCtrl', function ($scope, $http) {
    
    let initUser = netlifyIdentity.currentUser();

    netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();
        console.log(initUser);
    });

    netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!b');
        }
        netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/');
    })
});
