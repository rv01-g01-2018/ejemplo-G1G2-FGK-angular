                         //nombre     //directivas a usar
var app = angular.module("appGrupo1", ['ngSanitize']);



               //nombre             //funcion
app.directive('render', function(){
    return{
         restrict:'AE',
         template :'<select ng-model="turno"> <option value="AM">AM</option> <option value="PM">PM</option></select>', 
    };
               //nombre             //funcion
}).controller("primerControlador", function($scope){
    //declaraciones  
    $scope.nombre        = "";
    $scope.edad          = "";
    $scope.ultimoAnhoEst = "";
    $scope.encargado     = "";
    $scope.turno         = "";
    $scope.add           = function(){
         $scope.plantilla = true;
    }


});

