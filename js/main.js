angular.module('myApp', ['ngRoute'])
    .controller('mainController', ['$scope', function($scope){
        // objective 1
        $scope.doAlert = function() {
            alert("nice message here");
        }
        
        // objective 2
        $scope.customMessage = function() {
            alert($scope.message);
        }
        
        // objective 3
        $scope.initialColor = "#ccc";
        $scope.bgStyle = {
            "background-color": $scope.initialColor
        }
        
        $scope.changeBackground = function() {
            $scope.bgStyle = {
                "background-color": "red"
            }
        }
        $scope.resetBackground = function() {
            $scope.bgStyle = {
                "background-color": $scope.initialColor
            }
        }
        
        // objective 4
        $scope.changeParagraphColor = function() {
            function randomHex() {
                var number =  Math.ceil(Math.random() * 150) + 50;
                number = (number).toString(16);
                return number;
            }
            var newColor = "#" + randomHex() + randomHex() + randomHex();
            $scope.paragraphStyle = {
                "color": newColor
            }
        }
        
        // objective 5
        $scope.addName = function() {
            $scope.spanContent = "Joel";
        }
        
        // objective 6
        $scope.friends = []
        
        $scope.populateFriends = function() {
            for (var i = 1; i < 11; i++) {
                $scope.friends.push("person " + i);
            }
        }
	}])
	.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);