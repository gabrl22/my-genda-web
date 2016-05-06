myApp.controller('descriptionController', function($scope, $http, $routeParams, $window) {
    var refresh = function() {


        $http.get('/myGenda').success(function(response) {
            $scope.detalle = response[$routeParams.id];
            console.log(response);
        });
    }
    refresh();
    $scope.removeItem = function(index) {
        var confirmar = confirm("¿Quieres eliminar esta tarea?");
        if (confirmar == true) {
            console.log(index);
            $http.delete('/myGenda/' + index).success(function(response) {
                
                $window.location.href = '/';
            });
        }
        else {
            console.log("no se va a borrar");
        }

    }
})