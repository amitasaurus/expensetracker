(function(){
	angular.module('expenseTracker')
		   .component('home' , {
		   	 templateUrl : 'views/home/home.html' ,
		   	 controller : function(rootRef , auth){ //checking for connection
		   	 	rootRef.on('value', function(){
		   	 		console.log('connected');
		   	 	})
		   	 }
		   })
})()