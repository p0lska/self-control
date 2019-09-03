'use strict';
/* global app */
app.controller('home',['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

  $http.get(`users/${$stateParams.id}.json`).then((response) => {
    console.log(response);
    $scope.user = response.data;
  });
  
  
}]);
