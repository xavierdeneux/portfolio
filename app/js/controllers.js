'use strict';

/* Controllers */
portfolio.controller('MainCtrl', ['$scope', '$modal', function ($scope, $modal){
    $scope.realisations = realisations;
    $scope.current_realisation = 0;
    $scope.realisation = realisations[$scope.current_realisation];

    $scope.experiences = experiences;
    $scope.current_experience = 0;
    $scope.experience = experiences[$scope.current_experience];

    $scope.openExperience = function($index) {
        $scope.experience = experiences[$index];
        $scope.openModal('experiences');
    };

    $scope.openRealisation = function ($index) {
        $scope.realisation = realisations[$index];
        $scope.openModal('realisations');
    };

    $scope.openModal = function(type) {
        var modalInstance = $modal.open({
            templateUrl: 'views/'+type+'.html',
            controller: 'ModalInstanceCtrl',
            windowClass: 'modal-'+type,
            resolve: {
                realisation : function () {
                    return $scope.realisation;
                },
                experience : function () {
                    return $scope.experience;
                }
            }
        });

    };
}]);

portfolio.controller('ModalInstanceCtrl', function ($scope, $modalInstance, realisation, experience) {
    $scope.realisation = realisation;
    $scope.experience = experience;

    $scope.close = function () {
        $modalInstance.close();
    };
});