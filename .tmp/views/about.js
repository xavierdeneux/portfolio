(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/about.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12 text-center">\n' +
    '            <h2>A propos</h2>\n' +
    '            <hr class="star-light">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-4 col-md-offset-2">\n' +
    '            <p>Passionné du web depuis ma jeunesse, je n\'ai jamais cessé de créer des sites autant pour le plaisir que pour répondre à des clients. Sans cesse à l\'affût des technologies émérgentes, je ne cesse de tester et "jouer" avec les dernières technologies qui ont le vent en poupe.</p>\n' +
    '        </div>\n' +
    '        <div class="col-md-4">\n' +
    '            <p>Vous l\'aurez compris, je suis autodidacte, même si mes nombreuses expériences, en agences web comme en SSSI, m\'ont permi de m\'affirmer en tant que développeur web confirmé.\n' +
    '                <br>Je suis toujours à l\'écoute du marché et de challenges alléchants !</p>\n' +
    '        </div>\n' +
    '        <div class="col-md-8 col-md-offset-2 text-center page-scroll">\n' +
    '            <a href="#cv" class="btn btn-md btn-outline">\n' +
    '                <i class=""></i> Mon CV\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
