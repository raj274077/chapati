(function () {
    'use strict'

    angular.module("chapatiApp", ["home","header","about","footer","register","ui.router"])
     
        .config(["$stateProvider","$locationProvider","$urlRouterProvider",function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
                $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise("home"); 
           
            var basePath = "app/templates/";
            var homeObj = {
                templateUrl: basePath + "home.html",
              url: "/home"
                
            };
            var aboutObj = {
                templateUrl: basePath + "about.html",
           
                url: "/about"
            };

                var registerObj = {
                templateUrl: basePath + "register.html",
           
                url: "/register"
            };
                
            $stateProvider.state("home", homeObj);
            $stateProvider.state("about", aboutObj);
             $stateProvider.state("register", registerObj);
                
     }])
})();
