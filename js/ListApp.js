var app = angular.module("ListNavApp", ['ui.select', 'ngSanitize']);

app.controller("displayList", function($scope,$http) {
//    $scope.firstName = "John";
//    $scope.lastName = "Doe";
$scope.navs = null;
$http.get('data/liste_navs.json')
.then(function(res){
	$scope.navs = res.data;
	
});

$scope.liste_bateau = {
    model: null,
    availableOptions: [
      {id: '3', name: 'Baradal'},
      {id: '4', name: 'Aliénor VI'}
    ]
   };


$scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
    ];

$scope.selected = { value: $scope.itemArray[0] };


$scope.membre = {};
$http.get('data/membres.json')
.then(function(res){
	$scope.membres = res.data;
	
});

$http.get('data/inscriptions.json')
.then(function(res){
	$scope.inscriptions = res.data;
});


});

