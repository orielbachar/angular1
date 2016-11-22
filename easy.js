app.controller('easy', function($scope){
  $scope.newarray = [];

  $scope.toArray = function(){
    $scope.newarray.push($scope.some);
  }

  $scope.toRemove = function(item){
    $scope.newarray.splice(item, 1)
  }

});
