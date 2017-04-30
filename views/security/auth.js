(function(){
	angular.module('expenseTracker')
		   .factory('auth' , function($firebaseAuth, rootRef){
		   		return $firebaseAuth();
		   })
})()

/*https://github.com/firebase/angularfire/blob/master/docs/guide/user-auth.md*/