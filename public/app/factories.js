angular.module("FlyApp")
.factory("PlanesAPI", ["$http", function($http){
  return {
    getPlanes: function(){
      return $http.get("/api/airplanes");
    },
    getPlane: function(id){
      return $http.get("/api/airplanes/" + id);
    },
    addPlane: function(plane){
      $http.post("/api/airplanes", plane)
      .then(function success(response){
        return response.data
      }, function error(err){
        console.log("error");
        console.log(err);
        return null;
      })
    },
    deletePlane: function(id){
      var route = '/api/airplanes/' + id
      $http.delete(route)
      .then(function success(res) {

        }, function error(err) {
          console.log(res);
        })

    },
    updatePlane: function(plane){
      return $http.put("api/airplanes/" + plane._id, plane)
      .then(function success(res){
        console.log("Successful update");
        console.log(response);
        return response.data
      }, function error(err){
        console.log("error", err);
        return null
      })
    }
  }
}]);
