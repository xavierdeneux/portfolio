'use strict';

/* Controllers */
portfolio.controller('MainCtrl', ['$scope', function ($scope){
    $scope.realisations = realisations;

    $scope.current_realisation = 0;
    $scope.realisation = realisations[$scope.current_realisation];

    $scope.experiences = experiences;
    $scope.current_experience = 0;
    $scope.experience = experiences[$scope.current_experience];

    $scope.openModal = function($index) {
        $scope.realisation = realisations[$index];
        $('#portfolioModal').modal('show');
    };

    $scope.openExperience = function($index) {
        $scope.experience = experiences[$index];
        $('#experiences').modal('show');
    };
}]);
