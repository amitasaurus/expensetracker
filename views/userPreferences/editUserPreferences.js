(function(){
	angular.module('expenseTracker')
	.component('editUserPref' , {
		   		templateUrl : 'views/userPreferences/editUserPreferences.html',
		   		bindings : {
		   			userPrefData : '=userPreferences'
		   		},
		   		controller : function($scope, fbRef, $firebaseObject, $location, $timeout){
		   			
		   			this.userPrefData.$bindTo($scope , "$ctrl.userPreferences")
		   							 .then((function(){
		   							 	if(!this.userPreferences.theme){
		   							 		this.userPreferences.theme = this.themes[0];
		   							 	}
		   							 }).bind(this));


		   			this.themes = ['light','dark'];
		   			this.save = function(){
		   				console.log(this.userPreferences);
		   				// this.userPreferences.$save();
		   				this.userPrefData.$save();
		   				this.alert = true;
		   				$timeout(function(){
		   					$location.path('/home');
		   				},2000);
		   			}
		   			this.cancel = function(){
		   				$location.path('/home');
		   			}
		   		}
		   })
})();

/*
	synchronized objects : 
	https://github.com/firebase/angularfire/blob/master/docs/guide/synchronized-objects.md
	https://github.com/firebase/angularfire/blob/master/docs/reference.md#firebaseobject
*/