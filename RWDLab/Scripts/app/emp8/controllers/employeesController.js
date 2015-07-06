'use strict';

//Contrller
angular.module('hrApp.employeesController', [])
    .controller('employeesController', ['$scope', '$state', 'empService',
        function ($scope, $state, empService) {

    empService.getAll().success(function (data) {
        $scope.emps = data;
    });


    $scope.edit = function (emp) {
        $state.go('edit', { eventId: emp.id });
    };

    $scope.del = function (emp) {
        if (confirm('您確定要刪除嗎?')) {

            empService.remove(emp.id)
                .success(function (data) {
                    var index = $scope.emps.indexOf(emp);
                    if (index !== -1) {
                        $scope.emps.splice(index, 1);
                    }
                    alert('刪除成功')
                })
                .error(function (err) {
                    alert('刪除成功');
                });
        }
    };
}]);