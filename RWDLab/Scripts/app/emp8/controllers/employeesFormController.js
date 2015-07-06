'use strict';

//Contrller
angular.module('hrApp.employeesFormController', ['ui.router', 'hrApp.directive'])
    .controller('employeesFormController', ['$scope', '$state', '$stateParams', 'empService',
        function ($scope, $state, $stateParams, empService) {
        
    if ($stateParams.eventId != undefined) {
        empService.get($stateParams.eventId)
            .success(function (data) {
                $scope.emp = data;
            }).error(function (err) {
                alert(err);
            });
    }

    $scope.add = function () {
        empService.add($scope.emp)
            .success(function (data) {
                alert('新增成功');
                $state.go('list');
            })
            .error(function (err) {
                alert(err);
            });
    };

    $scope.update = function (id) {
        empService.update(id, $scope.emp)
           .success(function (data) {
               alert('更新成功');
               $state.go('list');
           })
           .error(function (err) {
               alert(err);
           });
    };
}]);