(function() {
	angular.module('expenseTracker').component('home', {
		templateUrl: 'views/home/home.html',
		bindings: {
			expenses: '=',
			categories: '='
		},
		controller: function(rootRef, auth) {
			//checking for connection
			rootRef.on('value', function() {
				console.log('connected');
			})
			
			this.setDefaults = function() {
				this.date = new Date().toLocaleDateString();
				this.payee = '';
				this.desc = '';
				this.selectedCategory = this.categories[0];
				this.amount = '';
			}
			this.setDefaults();
			this.create = function() {
				this.expenseData = {
					amount: parseFloat(this.amount),
					category: {
						id: this.selectedCategory.$id,
						name: this.selectedCategory.name
					},
					date: new Date(this.date).toJSON(),
					description: this.desc,
					payee: this.payee
				}
				this.setDefaults();
				this.expenses.$add(this.expenseData);
			}
		}
	})
})();