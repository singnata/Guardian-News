var app = angular.module('myApp', []);

app.controller('getData', function($scope, $http) {
	$scope.page = 1;
    $scope.loadData = function() {
    	$http.get('http://content.guardianapis.com/search?order-by=newest&show-blocks=body&page=' + $scope.page + '&page-size=10&api-key=7b1d6125-4065-4550-ba22-0547ec51c825')
    .then(function(response) {
        $scope.data = response.data.response;
        $scope.currentPage = response.data.response.currentPage;
    }, function(response) {
        $scope.content = "Sorry, we couldn't find news for you. Please try again later";
    }
	);
}
	$scope.loadData()

$scope.nextPage = function() {
                if ($scope.page === $scope.currentPage) {
                    $scope.page ++;
                    $scope.loadData();
                }
            };
$scope.previousPage = function() {
                if ($scope.currentPage > 1) {
                    $scope.page --;
                    $scope.loadData();
                }
            };


	});

app.controller('toggle', function($scope) {
	$scope.hide = true;

})



