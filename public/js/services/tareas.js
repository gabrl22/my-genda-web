myApp.factory('tareas', ['$http', function ($http) {
    return $http.get('/myGenda').success(function(response) {
        return response;
    }).error(function(response) {
        return response;
    })
    
}]);