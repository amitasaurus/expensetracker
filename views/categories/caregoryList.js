(function(){
	angular.module('expenseTracker')
		   .component('caregoryList',{
		   	 templateUrl : 'views/categories/caregoryList.html',
		   	 bindings : {
		   	 	categories : '='
		   	 },
		   	 controller : function($firebaseArray){
		   	 this.newCat = {};
		   	 console.log(this.categories);
		   	 this.addNewCat = function(){
		   	 		this.categories.$add(this.newCat);
		   	 		this.newCat.name = '';
		   	 	}
		   	 
		   	 }
		   })
})();

