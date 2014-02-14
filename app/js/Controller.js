
function Controller($scope, $window, $http, $location) {
  'use strict';
  
  var upc = $location.search().code;
  
  $http.get('/api/1/products/upc/' + upc)
    .then(function (xhr) {
      $scope.product = xhr.data.data[0];
      console.log($scope.product);
    });
  
  
  
  $scope.getExpiration = function () {
    if (!$scope.product) return;
    var exp = $scope.product.expiration || 0,
        days = exp / (24 * 60 * 60);
    
    return days + ' days';
  };
  
  $scope.getExpirationPercent = function () {
    if (!$scope.product) return;
    var exp = $scope.product.expiration || 0,
        days = exp / (24 * 60 * 60);
    
    return (days * 100 / 60) + '%';
  };
  
  $scope.openScanner = function () {
    $window.location.href = '/scan.html';
  };
  
}