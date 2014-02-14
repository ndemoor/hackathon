
function Controller($scope, $window, $http) {
  'use strict';
  
  var upc = $location.search().code;
  
  //$scope.product = $http.get('/1/products/upc/' + );
  
  
  $scope.openScanner = function () {
    $window.location.href = '/scan.html';
  };
  
}