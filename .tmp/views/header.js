(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/header.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <img class="img-responsive" src="img/portfolio/profil.png" alt="">\n' +
    '            <div class="intro-text">\n' +
    '                <span class="name">Amazing developper !</span>\n' +
    '                <hr class="star-light">\n' +
    '                <span class="skills">Web Developpeur - Photographe</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
