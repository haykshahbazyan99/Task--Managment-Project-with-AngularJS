(function(){
    'use strict'
    angular.module('code.demo', []).controller("CodeController", ['$scope', CodeController]);

    function CodeController($scope) {
        
        $scope.status_choices = [
            "to do",
            "in progress",
            "completed"
        ]


        $scope.total_tasks = 0;
        $scope.to_do = 0;
        $scope.in_progress = 0;
        $scope.completed = 0;


        $scope.projects = [
            {
                id:1,
                name:"Web Application",
                status:$scope.status_choices[0]
            },

            {
                id:2,
                name:"Database",
                status:$scope.status_choices[1]
            },

            {
                id:3,
                name:"Spring Boot",
                status:$scope.status_choices[2]
           }
        ]


        $scope.create = function($event) {
            $event.stopPropagation();
            var newProject = {
                id:$scope.projects.length > 0 ? $scope.projects[$scope.projects.length-1].id+1 : 1,
                name: $scope.projectName,
                status: $scope.status,
            }
            $scope.projects.push(newProject);
            $scope.projectName = "";
            $scope.status = "";


            $scope.update_totals();
        }


        $scope.update_totals = function() {

            var to_do = 0;
            var in_progress = 0;
            var completed = 0;
            var total = $scope.projects.length;

            for (var i = 0; i < $scope.projects.length; i++) {
                if ($scope.projects[i].status == $scope.status_choices[0]) {
                    to_do += 1;
                } else if ($scope.projects[i].status == $scope.status_choices[1]) {
                    in_progress += 1;
                } else if ($scope.projects[i].status == $scope.status_choices[2]) {
                    completed += 1;
                }
            }

            $scope.to_do = to_do;
            $scope.in_progress = in_progress;
            $scope.completed = completed;
            $scope.total_tasks = total;

        }
        $scope.update_totals();
    }

})();