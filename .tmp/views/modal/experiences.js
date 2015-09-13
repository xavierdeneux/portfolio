(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/modal/experiences.html',
    '<div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '        <div class="modal-body">\n' +
    '            <a href="" ng-click="close();"><i class="fa fa-close fa-2x pull-right"></i></a>\n' +
    '            <h2>» {{experience.poste}}</h2>\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-4">\n' +
    '                    <div ng-repeat="image in experience.images">\n' +
    '                        <img ng-src="{{image}}">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-8 ng-binding" ng-bind-html="experience.description"></div>\n' +
    '            </div>\n' +
    '            <p><button type="button" class="btn btn-default center-block" ng-click="close();"><i class="fa fa-times"></i> Fermer</button></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
