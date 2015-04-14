'use strict';

/**
 * @ngdoc service
 * @name webAppApp.users
 * @description
 * # users
 * Service in the webAppApp.
 */
angular.module('webAppApp')
  .service('users', function () {
    // AngularJS will instantiate a singleton by calling "new" on this functios

    return {
      students: [
        {
          name:"Kamran Masood",
          age:"29",
          behavior:"shy"
        },
        {
          name:"Furqan",
          age:"29",
          behavior:"shy"
        },
        {
          name:"Farhan",
          age:"29",
          behavior:"shy"
        }
      ]
    };

  });
