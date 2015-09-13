(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/home.html',
    '<div class="container">\n' +
    '    <div class="navbar-header page-scroll">\n' +
    '        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
    '            <span class="sr-only"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '        </button>\n' +
    '        <a class="navbar-brand" href="#page-top">Xavier Deneux</a>\n' +
    '    </div>\n' +
    '    <div class="collapse navbar-collapse">\n' +
    '        <ul class="nav navbar-nav navbar-right">\n' +
    '            <li class="hidden">\n' +
    '                <a href="#page-top"></a>\n' +
    '            </li>\n' +
    '            <li class="page-scroll">\n' +
    '                <a href="#portfolio">Portfolio</a>\n' +
    '            </li>\n' +
    '            <li class="page-scroll">\n' +
    '                <a href="#about">A propos</a>\n' +
    '            </li>\n' +
    '            <li class="page-scroll">\n' +
    '                <a href="#cv">CV</a>\n' +
    '            </li>\n' +
    '            <li class="page-scroll">\n' +
    '                <a href="#contact">Contact</a>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <a onclick="window.open(this.href);return false;" href="http://www.ctrl-alt-geek.fr/">Blog <span class="glyphicon glyphicon-share" aria-hidden="true"></span></a>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <a onclick="window.open(this.href);return false;" href="http://photo.xavierdeneux.fr/">Photo <span class="glyphicon glyphicon-share" aria-hidden="true"></span></a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
