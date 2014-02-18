'use strict';

angular.module('3rdMeetupApp')
  .controller('MainCtrl', function ($scope, $http) {
  	var BS = function(){
  		alert("Better call Saul!!!");
  	}
  	var list_todos = function(){
  		$http.get("api/todos").success(function(data){
	  		$scope.todos = data;
	  	}).error(BS);
  	}
  	$scope.check = function(todo){
  		$http.put("api/todos", {id:todo.id, status:todo.status}).success(function(){
  			list_todos();
  		}).error(BS);
  	}
  	$scope.addTodo = function(){
  		$http.post("api/todos", {text:$scope.todoText}).success(function(){
  			list_todos();
  		}).error(BS);
  	}
  	list_todos();
  });
