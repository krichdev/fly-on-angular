angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, PlanesAPI){
  $scope.title = "Look at all my planes!";
  $scope.planes = [];

  PlanesAPI.getPlanes().then(function success(response){
    console.log("We did it");
    console.log(response);
    $scope.planes = response.data
  }, function error(err){
    console.log("Oh no", err);
  })
}])
.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.plane = {};
  PlanesAPI.getPlane($stateParams.id).then(function success(response){
    console.log("Success",response);
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
