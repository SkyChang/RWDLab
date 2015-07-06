'use strict';

//Factory
angular.module('hrApp.empService', [])
    .factory('empService', ['$http', function ($http) {

    var url = 'https://microsoft-apiapp3c679ab12e704c849b4436b45c149ad8.azurewebsites.net/api/'

    return {
        getAll: function () {
            return $http.get(url + 'emps');
        },
        get: function (id) {
            return $http.get(url + 'emps/' + id)
        },
        add: function (obj) {
            return $http.post(url + 'emps', obj)
        },
        update: function (id, obj) {
            return $http.put(url + 'emps/' + id, obj)
        },
        remove: function (id) {
            return $http.delete(url + 'emps/' + id)
        }
    }
}]);