(function(){
	angular.module('expenseTracker')
			.factory('expenses',function($firebaseArray){
				var Expenses = $firebaseArray.$extend({
					getTotal: function() {
			        var total = 0;
			        // the array data is located in this.$list
			        angular.forEach(this.$list, function(rec) {
			          total += rec.amount;
			        });
			        return total;
			      }
				});

				return function(ref){
					return new Expenses(ref);
				}
			})
})();






/*
Basic Structure of extending Firebase Array Service
app.factory("ListWithTotal", ["$firebaseArray",
  function($firebaseArray) {
    var ListWithTotal = $firebaseArray.$extend({
      //add your methods here
    });

    return function(listRef) {
      return new ListWithTotal(listRef);
    }
  }
]);
*/