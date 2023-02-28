netlifyIdentity.on('init', () => {
    initUser = netlifyIdentity.currentUser();
    console.log(initUser);
});

netlifyIdentity.on('login', () => {
    if (initUser == null) {
        $window.location.replace('landing');
    }
    netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    $window.location.replace('/');
});

// let app = angular.module("myApp", [ngRoute]);
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when("/", {
//             templateUrl: "index.html"
//         })
//         .when("/a", {
//             templateUrl: "index.html"
//         })
//         .when("/b", {
//             templateUrl: "landing.html"
//         })
//         .when("/c", {
//             templateUrl: "addpage.html"
//         });
// }); 