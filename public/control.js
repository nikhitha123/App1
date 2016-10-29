var app=angular.module("myapp",[]);



app.controller("mycntrl",["$scope","$http",function($scope,$http){
	var refresh=function(){
		$http.get("/contactlist").success(function(response){
			$scope.contactlist=response;
			$scope.contact="";
		});
	}
	
	$http.get("/contactlist").success(function(response){
		console.log(response)
		$scope.contactlist=response;
	});
 $scope.addContact=function(){
 	$http.post("/contactlist",$scope.contact).success(function(response){
 		console.log(response);
 		refresh();
 	})
 }
 $scope.editContact=function(id){
 	$http.get("/contactlist/" +id).success(function(response){
 		$scope.contact=response;
 	})
 }
 $scope.updateContact=function(){
 	$http.put("/contactlist/" +$scope.contact._id,$scope.contact).success(function(response){
 		refresh();
 	});
 }
 $scope.removeContact=function(id){
 	$http.delete("/contactlist/" +id).success(function(response){
 		refresh();
 	})
 }
}]);