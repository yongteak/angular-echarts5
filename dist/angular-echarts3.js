(function() {
    'use strict';

    var app = angular.module('angular-echarts3', []);

    app.directive('mwCharts', function() {
        return {
            restrict: 'E',
            require: 'ngModel',
            template: '<div></div>',
            replace:true,
            link: function(scope, el, attr, ngModel) {
                var ndWrapper = el[0];
                ngModel.$formatters.unshift(function(option) {
                    if (option) {
                        echarts.init(ndWrapper).setOption(option);
                    }
                });
            }
        }
    });
})();
