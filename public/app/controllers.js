angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, PlanesAPI){
  $scope.title = "Look at all my planes!";
  $scope.planes = [];

  PlanesAPI.getPlanes().then(function success(response){
    $scope.planes = response.data
  }, function error(err){
    console.log("Oh no", err);
  })
}])
.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", "$state", function($scope, $stateParams, PlanesAPI, $state){
  $scope.plane = {};

  $scope.delete = function(){
    PlanesAPI.deletePlane($stateParams.id);
    $state.go("home");
  };

  $scope.update = function(){
    PlanesAPI.updatePlane($scope.plane);
    $state.go("plane", {id: $stateParams.id});

  }

  PlanesAPI.getPlane($stateParams.id).then(function success(response){
    $scope.plane = response.data;
  }, function error(err){
    console.log("error", err);
  })

}])
.filter("fixgrammer", function(){
  return function(input){
    if(input == 1){
      return "1 engine"
    } else {
      return input + " engines";
    }
  }
})
.controller("CreateCtrl", ["$scope", "$http", "PlanesAPI", "$location", "$stateParams", function($scope, $http, PlanesAPI, $location, $stateParams){

  $scope.plane = {
    manufacturer: "",
    model: "",
    engines: "",
    image: ""
  }

  $scope.submit = function(){
    PlanesAPI.addPlane($scope.plane)
    $location.path("/");
  }
}])
