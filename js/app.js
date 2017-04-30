(function(){
	angular.module('expenseTracker',['firebase','ngRoute'])
		   .factory('rootRef', function(){
		   		return firebase.database().ref();
		   })
		   .run(function($rootScope, $location){
		   	$rootScope.$on("$routeChangeError",function(e, prev, next, err){
		   		if(err === "AUTH_REQUIRED"){
		   			$location.path('/login');
		   		}
		   	})
		   })
		   .config(['$routeProvider', function($routeProvider){
		   		$routeProvider
		   			.when('/home',{
		   				template : '<home></home>',
		   				resolve : {
		   					currentAuth : function(auth){
		   						return auth.$requireSignIn();
		   					}
		   				}
		   			})
		   			.when('/userPref',{
		   				template : '<edit-user-pref user-preferences="$resolve.userPreferences"></edit-user-pref>',
		   				resolve : {
		   					userPreferences : function(auth, fbRef, $firebaseObject){
		   						return auth.$requireSignIn().then(function(){
		   							return $firebaseObject(fbRef.getPreferencesRef()).$loaded();
		   						});
		   					}
		   				}
		   			})
		   			.when('/login',{
		   				template : '<login current-auth="$resolve.currentAuth"></login>',
		   				resolve : {
		   					currentAuth : function(auth){
		   						return auth.$waitForSignIn();
		   					}
		   				}
		   			})
		   			.when('/logout',{
		   				template : '<logout></logout>'
		   			})
		   			.when('/categories',{
		   				template : '<caregory-list categories="$resolve.categories"></caregory-list>',
		   				resolve : {
		   					categories : function(fbRef , $firebaseArray , auth){
		   						return auth.$requireSignIn().then(function(){
		   							var query = fbRef.getCategoriesRef().orderByChild('name');
		   							return $firebaseArray(query).$loaded();
		   						});
		   					}
		   				}
		   			})
		   			.otherwise('/home');
		   }]);
})();

// https://medium.com/google-cloud/quickstart-guide-on-firebaseui-for-web-social-login-made-easy-for-firebase-3-x-developers-69bc04e7d70c#.2294b4xzn
// https://github.com/joeeames/AngularFireCourse : SRC Code Changes
// https://youtu.be/8XnUs2xY5c4  : facebook auth
// https://youtu.be/EypyCWyQl04?list=PLVipRSY3yVt9dNrfC1P55kksJ_Fb6-CcK : Tackling Authentication with AngularFire
// https://www.firebase.com/docs/web/guide/login/facebook.html
// https://github.com/firebase/angularfire/blob/master/docs/guide/user-auth.md#ngroute-example

// https://firebase.google.com/docs/reference/js/firebase.database.Query