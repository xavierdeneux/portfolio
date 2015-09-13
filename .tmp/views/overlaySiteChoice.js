(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/overlaySiteChoice.html',
    '<div id="overlay-site-choice">\n' +
    '	<button class="btn" ng-click="goToPortfolio()">Développement site internet</button>\n' +
    '	<button class="btn" ng-click="goToExternalSite(\'http://photo.xavierdeneux.fr\')">Photographie</button>\n' +
    '</div>');
}]);
})();
