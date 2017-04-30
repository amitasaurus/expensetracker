(function(){
	angular.module('expenseTracker')
		   .component('navbar' , {
		   	 templateUrl : 'views/nav/nav.html',
		   	 controller : function(auth, fbRef, $firebaseObject, $timeout){
		   	 	
		   	 	this.firebaseUser = auth.$getAuth();
		   	 	this.userPreferences = $firebaseObject(fbRef.getPreferencesRef());
		   	 	this.userPreferences.$loaded();
		   	 	this.userPreferences.$watch((function(){
		   	 		this.darkTheme = this.userPreferences.theme === 'dark';
		   	 	}).bind(this))
		   	 }
		   })
})()