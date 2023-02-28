let app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'landing.html'
        })
        .when('/a', {
            templateUrl: 'landing.html'
        })
        .when('/b', {
            templateUrl: 'addpage.html'
        });;
});

app.controller('mainCtrl', function ($scope) {
    
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
    });
});
