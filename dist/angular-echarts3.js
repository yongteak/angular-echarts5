(function() {
  'use strict';

    var app = angular.module('angular-echarts3',[]);

    app.directive('mwCharts', function() {
        return {
            restrict: 'E',
            require: 'ngModel',
            template: '<div></div>',
            link: function(scope, el, attr, ngModel) {
                var ndWrapper = el[0];
                var myChart = echarts.init(ndWrapper);
                ngModel.$formatters.unshift(function(option) {
                    if (option) {
                        myChart.setOption(option);
                    }
                });
            }
        }
    });
})();
