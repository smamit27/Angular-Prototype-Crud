var portalApp = angular.module('portalApp',['ui.router']);

portalApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/portal');
    
    $stateProvider
        
        .state('portal', {
            url: '/portal',
            templateUrl:"js/components/portal/portal.template.html",
            controllerAs: '$ctrl'
        
            })
 

});
