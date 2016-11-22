app.controller('twoWayCtrl', function($scope){
  $scope.bound = "Voracious";

  $scope.showTwoWay = function(){
    alert($scope.bound);
  }
});
