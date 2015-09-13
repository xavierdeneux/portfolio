(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/portfolio.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12 text-center">\n' +
    '            <h2>Portfolio</h2>\n' +
    '            <hr class="star-primary">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-6 col-md-4 portfolio-item ng-scope" ng-repeat="realisation in realisations">\n' +
    '            <a href="" class="portfolio-link" ng-click="openRealisation($index)">\n' +
    '                <div class="caption">\n' +
    '                    <div class="caption-content">\n' +
    '                        <i class="fa fa-search-plus fa-3x"></i>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <img ng-src="{{realisation.snapshot}}" class="img-responsive" alt="">\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
