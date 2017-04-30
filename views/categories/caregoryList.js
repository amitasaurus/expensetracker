(function(){
	angular.module('expenseTracker')
		   .component('caregoryList',{
		   	 templateUrl : 'views/categories/caregoryList.html',
		   	 bindings : {
		   	 	categories : '='
		   	 },
		   	 controller : function($firebaseArray){
		   	 this.newCat = {};
		   	 this.addNewCat = function(){
		   	 		this.categories.$add(this.newCat);
		   	 	}
		   	 }
		   })
})();