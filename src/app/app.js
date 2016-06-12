'use strict';


var app = angular.module('demoApp', ['angular-echarts3']);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.aaa = "2323";

        var vm = this;
	// 指定图表的配置项和数据
	vm.option = {
	    title: {
	        text: '测试'
	    },
	    tooltip: {},
	    legend: {
	        data: ['销量']
	    },
	    xAxis: {
	        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
	    },
	    yAxis: {},
	    series: [{
	        name: '销量2',
	        type: 'bar',
	        data: [5, 20, 36, 10, 10, 20]
	    }]
	};
}]);
