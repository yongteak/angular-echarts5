(function() {
    'use strict';

    angular.module('angular-echarts3', []).directive('mwChart', mwChart);

    function mwChart() {
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
            window.onresize = echart.resize;

            ngModel.$formatters.unshift(function(option) {
                if (option) {
                    echart.clear();
                    echart.setOption(option);
                }
            });
        }
    }
})();
