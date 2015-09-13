(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/modal/realisations.html',
    '<div class="row">\n' +
    '    <div class="col-md-12 modal-body">\n' +
    '        <a href="" ng-click="close();"><i class="fa fa-close fa-2x pull-right"></i></a>\n' +
    '        <h2>{{realisation.title}}</h2>\n' +
    '        <hr class="star-primary">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-6">\n' +
    '                <img ng-src="{{realisation.snapshot}}" class="img-responsive img-centered" alt="">\n' +
    '            </div>\n' +
    '            <div class="col-lg-6">\n' +
    '                <div ng-bind-html="realisation.description"></div>\n' +
    '                <ul class="specs">\n' +
    '                    <li>Site : <strong><a href="http://{{realisation.details.site}}">{{realisation.details.site}}</a></strong></li>\n' +
    '                    <li>Date : <strong ng-bind-html="realisation.details.date"></strong></li>\n' +
    '                    <li>Technos : <strong >{{realisation.details.technos}}</strong></li>\n' +
    '                </ul>\n' +
    '                <p><button type="button" class="btn btn-default center-block" ng-click="close();"><i class="fa fa-times"></i> Fermer</button></p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
