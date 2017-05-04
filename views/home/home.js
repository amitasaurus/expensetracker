(function() {
	angular.module('expenseTracker')
		.component('home', {
			templateUrl: 'views/home/home.html',
			bindings: {
				expenses: '=',
				categories: '='
			},
			controller: function(rootRef, auth, $scope) {
				rootRef.on('value', function() {
					console.log('connection established');
				})
				$scope.$watch('$ctrl.editedExpense', (function(newData) {
						if (!!newData) {
							this.editing = true;
							this.date = new Date(newData.date)
								.toLocaleDateString();
							this.payee = newData.payee;
							this.desc = newData.description;
							this.selectedCategory = this.categories[this.categories.$indexFor(newData.category.id)];
							this.amount = newData.amount;
						}
					})
					.bind(this));
				this.setDefaults = function() {
					this.date = new Date()
						.toLocaleDateString();
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
						date: new Date(this.date)
							.toJSON(),
						description: this.desc,
						payee: this.payee
					}
					this.setDefaults();
					this.expenses.$add(this.expenseData);
				}
				this.editExpense = function(expense) {
					this.editedExpense = expense;
				}
				this.save = function() {
					this.editedExpense.amount = parseFloat(this.amount);
					this.editedExpense.category = {
						id: this.selectedCategory.$id,
						name: this.selectedCategory.name
					};
					this.editedExpense.date = new Date(this.date)
						.toJSON();
					this.editedExpense.description = this.desc;
					this.editedExpense.payee = this.payee;

					this.expenses.$save(this.editedExpense);
					//resetting 
					this.setDefaults();
					this.editing = false;
					this.editedExpense = null;
				}
				this.cancel = function() {
					this.editing = false;
				}
			}
		})
})();