(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/footer.html',
    '<div class="footer-above">\n' +
    '            <div class="container">\n' +
    '                <div class="row">\n' +
    '                    <div class="footer-col col-md-4">\n' +
    '                        <h3>Contact</h3>\n' +
    '                        <ul>\n' +
    '                            <li><i class="fa fa-fw fa-send"></i> contact@xavierdeneux.fr</li>\n' +
    '                            <li><i class="fa fa-fw fa-mobile"></i> 06.32.83.87.88</li>\n' +
    '                            <li><i class="fa fa-fw fa-map-marker"></i> Lyon (69) - France</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="footer-col col-md-4">\n' +
    '                        <h3>Around the Web</h3>\n' +
    '                        <ul class="list-inline">\n' +
    '                            <li>\n' +
    '                                <a href="http://photo.xavierdeneux.fr/" class="btn-social btn-outline"><i class="fa fa-fw fa-camera"></i></a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="http://www.twitter.com/xavierdeneux/" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="http://fr.linkedin.com/pub/xavier-deneux/37/463/ab5/" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="https://github.com/xavierdeneux/" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="footer-col col-md-4">\n' +
    '                        <h3>Baigne dans le web depuis 8 ans</h3>\n' +
    '                        <p>Autodidacte, curieux et entrepreneur, je suis attentif aux nouvelles technologies et à tout ce qui touche de près comme de loin au grand monde du web.</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="footer-below">\n' +
    '            <div class="container">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-12">Copyright © xavierdeneux.fr - 2015</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>');
}]);
})();
