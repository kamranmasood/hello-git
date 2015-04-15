'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('MainCtrl', function ($scope, users) {

$scope.students = users.getUsers(function(response){
  $scope.students = response.students;
});



  });
