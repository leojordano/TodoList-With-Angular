angular.module('TodoApp', [])
    .controller('TodoAppCtrl', ($scope) => {
        $scope.items = [
            {name: 'Item', price: '12.00', code: '1'},
            {name: 'Item2', price: '14.00', code: '2'},
            {name: 'Item3', price: '16.00', code: '3'},
        ]

        $scope.add = function() {
            this.items.push({name:this.name, price: this.price, code: this.code});
            this.name = '';
            this.price = '';
            this.code = '';
        }

        $scope.dell = function(item) {

            this.items.splice(this.items.indexOf(item), 1)
            console.log(item)

        }


    })