(function() {
    'use strict';

    angular
        .module('todoApp')
        .service('TodoService', TodoService);

    function TodoService() {
        var tasks = [];

        this.getTasks = function() {
            return tasks;
        };

        this.addTask = function(task) {
            tasks.push(task);
        };

        this.removeTask = function(index) {
            tasks.splice(index, 1);
        };
    }
})();
