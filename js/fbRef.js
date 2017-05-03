(function(){
	angular.module('expenseTracker')
		   .factory('fbRef', function( rootRef , auth ){
		   		return {
		   			getPreferencesRef : getPreferencesRef,
		   			getCategoriesRef : getCategoriesRef,
		   			getExpenseRef : getExpenseRef
		   		}

		   		function getPreferencesRef(){
		   			return rootRef.child('preferences').child(auth.$getAuth().uid);
		   		}
		   		function getCategoriesRef(){
		   			return rootRef.child('categories');
		   		}
		   		function getExpenseRef(){
		   			return rootRef.child('expenses').child(auth.$getAuth().uid);
		   		}
		   		
		   })
})();