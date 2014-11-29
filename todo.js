function todoCtrl($scope){
	$scope.todos = [
		{done:false,text:"first"},
		{done:false,text:"second"}
	]

	$scope.addTodo = function(){
		var newTodo = {
			done:false,
			text:$scope.todoText
		};
		$scope.todos.push(newTodo);
		$scope.todoText = '';
	};

	$scope.removeTodo = function(start){
		$scope.todos.splice(start,1);
	};

	$scope.move = function(index,direction){
		if(direction === "up"){
			if(index === 0){
				Return;
			}
			index = index - 1;
		}

		if(direction === "down"){
			if(index === $scope.todos.length - 1){
				Return;
			}
		}
			
		var todo = $scope.todos[index];
		$scope.todos.splice(index + 2,0,todo);
		$scope.todos.splice(index,1);
	}
}