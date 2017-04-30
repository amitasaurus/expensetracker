(function(){
	angular.module('expenseTracker')
		   .factory('fbRef', function( rootRef , auth ){
		   		return {
		   			getPreferencesRef : getPreferencesRef,
		   			getCategoriesRef : getCategoriesRef
		   		}

		   		function getPreferencesRef(){
		   			return rootRef.child('preferences').child(auth.$getAuth().uid);
		   		}
		   		function getCategoriesRef(){
		   			return rootRef.child('categories');
		   		}
		   })
})();