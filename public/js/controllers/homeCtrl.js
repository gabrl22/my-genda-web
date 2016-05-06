myApp.controller('homeCtrl',  ['$scope', '$http','tareas', function($scope, $http, tareas) {
    console.log("Angular");
   
   var refresh = function(){
       $scope.listID="";
       $http.get('myGenda').success(function(response){
           
           $scope.tareasAgenda = response;
           console.log(response);
           $scope.numeroDeTareas = $scope.tareasAgenda.length;
           if (response[0].importante===true) {
               $scope.listID = "list-group-item-red";
           }
       });
       
   
       $scope.tarea = {titulo:"",
                       descripcion:"",
                       importante:false};
   };
   
   refresh();
   
   $scope.agregar = function () {
       if ($scope.tarea)
        $http.post("/myGenda", $scope.tarea).success(
            function (response) {
                console.log(response);
                refresh();
             
            }
        )
   }   
    $scope.verTareas = function(){
        $http.get("/tareas").success(function(response){
            
        })
    }
    
    $scope.removeItem = function(index){
        var confirmar = confirm("¿Quieres eliminar esta tarea?");
        if (confirmar==true){
            console.log(index);
            $http.delete('/myGenda/' + index).success(function(response){
			refresh();
		});
        }
        else{
            console.log("no se va a borrar");
        }
        
    }
}])