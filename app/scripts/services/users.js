'use strict';

/**
 * @ngdoc service
 * @name webAppApp.users
 * @description
 * # users
 * Service in the webAppApp.
 */
angular.module('webAppApp')
  .service('users', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this functions

    return {
      getUsers: function(callback){
        $http.get("data/users.json")
          .success(
          function(response) {
            callback(response);
          }
        );
      }
    };

  });



