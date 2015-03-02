'use strict';

/* Controllers */
portfolio.controller('MainCtrl', ['$scope', '$modal', function($scope, $modal) {
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

    $scope.openRealisation = function($index) {
        $scope.realisation = realisations[$index];
        $scope.openModal('realisations');
    };

    $scope.openModal = function(type) {
        var modalInstance = $modal.open({
            templateUrl: 'views/' + type + '.html',
            controller: 'ModalInstanceCtrl',
            windowClass: 'modal-' + type,
            resolve: {
                realisation: function() {
                    return $scope.realisation;
                },
                experience: function() {
                    return $scope.experience;
                }
            }
        });

    };
}]);

portfolio.controller('ModalInstanceCtrl', function($scope, $modalInstance, realisation, experience) {
    $scope.realisation = realisation;
    $scope.experience = experience;

    $scope.close = function() {
        $modalInstance.close();
    };
});

portfolio.controller('FormController', ['$scope', '$http',
    function($scope, $http) {
        $scope.msgAlert = {};

        $scope.sendForm = function() {
            $http.post('../mail/contact.php', {
                email : $scope.email,
                name : $scope.name,
                
                phone : $scope.phone,
                message : $scope.message
            }).
            success(function(data) {
                $scope.msgAlert = {
                    status : 'success',
                    content : data.success
                }
                $scope.email = $scope.name = $scope.phone = $scope.message = '';
                $scope.contact.$setPristine();
            }).
            error(function(data) {
                var error_msg = data.errors.join('<br />');

                if (!error_msg) {
                    error_msg = 'Une erreur est survenue, merci de réesayer votre demande';
                }

                $scope.msgAlert = {
                    status : 'error',
                    content : error_msg 
                }
            });
        }
    }
])
