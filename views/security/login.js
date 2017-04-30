(function(){
	angular.module('expenseTracker')
		   .component('login' , {
		   		templateUrl : 'views/security/login.html',
		   		bindings : {
		   			currentAuth : '='
		   		},
		   		controller : function(auth, $location){ 
		   	 	this.loggedIn = !!this.currentAuth;
		   	 	// console.log(this.currentAuth);
		   	 	// console.log(auth.$getAuth());
		   	 	this.anonLogin = function(){
		   	 		auth.$signInAnonymously()
		   	 			.then(function(firebaseUser){
		   	 				console.log(firebaseUser.uid);
		   	 				$location.path('/home');
		   	 		     })
		   	 			.catch((function(err){
		   	 				this.errMsg = err.code;
		   	 			}).bind(this));
		   	 	}
		   	 	this.fbLogin = function(){
		   	 		auth.$signInWithPopup("facebook")
		   	 			.then(function(firebaseUser) {
  							console.log('Logged in as ' + firebaseUser.user.displayName);
  							$location.path('/home');
						}).catch(function(error) {
  							console.error("Authentication failed:", error);
						});
		   	 	}
		   	 	
		   	 	this.googleLogin = function(){
		   	 		auth.$signInWithPopup("google")
		   	 			.then(function(firebaseUser) {
  							console.log('Logged in as ' + firebaseUser.user.displayName);
  							$location.path('/home');
						}).catch(function(error) {
  							console.error("Authentication failed:", error);
						});
		   	 	}
		   	 }
		   })
})()

//https://github.com/harrysolovay/Angularfire-Facebook-Login/blob/master/app/scripts/main.js