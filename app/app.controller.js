(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['TodoService'];

    function TodoController(TodoService) {
        var vm = this;

        vm.tasks = TodoService.getTasks();
        vm.newTask = '';

        vm.addTask = function() {
            if (vm.newTask) {
                TodoService.addTask(vm.newTask);
                vm.newTask = ''; // Clear the input field after adding the task
            }
        };

        vm.removeTask = function(index) {
            TodoService.removeTask(index);
        };
    }
})();
