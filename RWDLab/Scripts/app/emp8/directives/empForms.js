'use strict';

//Directive
var hrAppDirective = angular.module('hrApp.directive', []);

hrAppDirective.directive('empForm', [function () {
    return {
        restrict: 'E',
        templateUrl: '/Scripts/app/emp8/directives/template/empFormView.html',
        transclude: true,
        scope: {
            emp: '=?',
            onAdd: '&',
            onUpdate: '&',
        },
        link: function (scope, element, attrs) {

            scope.add = function (isValid) {
                if (!isValid) {
                    alert('有欄位未填!');
                    return;
                }

                scope.onAdd();
            };

            scope.update = function (emp, isValid) {
                if (!isValid) {
                    alert('有欄位未填!');
                    return;
                }
                scope.onUpdate()(emp.id);
            }

            //scope.update = function (id, isValid) {
            //    if (!isValid) {
            //        alert('有欄位未填!');
            //        return;
            //    }
            //    scope.onUpdate({id:id});
            //}
        }
    };
}]);