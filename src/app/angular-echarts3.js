(function() {
    'use strict';

    angular.module('angular-echarts3', []).directive('mwChart', mwChart);

    function mwChart($window) {
        var directive = {
            restrict: 'E',
            require: 'ngModel',
            template: '<div></div>',
            replace: true,
            link: mwChartLink
        }

        return directive;

        function mwChartLink(scope, el, attr, ngModel) {
            var ndWrapper = el[0];
            var echart = echarts.init(ndWrapper);

            scope.$watch(function() {
                return $window.innerWidth;
            }, function(value) {
                echart.resize();
            });
            scope.$watch(function() {
                return $window.innerHeight;
            }, function(value) {
                echart.resize();
            });

            ngModel.$formatters.unshift(function(option) {
                if (option) {
                    echart.clear();
                    echart.setOption(option);
                }
            });
        }
    }
})();
