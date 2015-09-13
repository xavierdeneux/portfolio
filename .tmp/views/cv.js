(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/cv.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12 text-center">\n' +
    '            <h2>Développeur web expert</h2>\n' +
    '            <hr class="star-primary">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-5">\n' +
    '            <h3>Cursus &amp; formation</h3>\n' +
    '            <ul>\n' +
    '                <li>Titulaire d\'un baccalauréat S (2006) et d\'un DUT Informatique (2008)</li>\n' +
    '                <li>Formation Symfony chez SensioLabs (2014)</li>\n' +
    '                <li>Formation AngularJS chez Orsys (2015)</li>\n' +
    '                <li>Autoformation constante et veille technologique régulière.</li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <div class="col-md-3">\n' +
    '            <h3>Expérience</h3>\n' +
    '            <ul>\n' +
    '                <li ng-repeat="experience in experiences"><a href="#" ng-click="openExperience($index);" class="portfolio-link ng-binding" data-toggle="modal">{{experience.entreprise}} <span class="glyphicon glyphicon glyphicon-zoom-in" aria-hidden="true"></span></a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <div class="col-md-4">\n' +
    '            <h3>Et sinon ...</h3>\n' +
    '            <p>Passionné du web, je n\'en délesse pas pour autant le monde réel : j\'ai pour autre passion la photographie que je pratique depuis plusieurs années, le sport (running, padel, squash, ski) et j\'aime écrire.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <h3>Compétences</h3>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-7">\n' +
    '            <div class="skillbox">\n' +
    '                <h4>Développement</h4>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Frameworks</h5>\n' +
    '                        <ul>\n' +
    '                            <li>PHP : Symfony 2, Code Igniter</li>\n' +
    '                            <li>Javascript : jQuery, AngularJS</li>\n' +
    '                            <li>CSS : Bootstrap, Google Material Design</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Base de données</h5>\n' +
    '                        <ul>\n' +
    '                            <li>MySQL</li>\n' +
    '                            <li>Oracle</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Environnements</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Windows (7, 8)</li>\n' +
    '                            <li>Linux (debian, fedora)</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>CMS</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Wordpress</li>\n' +
    '                            <li>Joomla</li>\n' +
    '                            <li>E-monsite.com</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-5">\n' +
    '            <div class="skillbox">\n' +
    '                <h4>Langages &amp; concepts</h4>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Programmation</h5>\n' +
    '                        <ul>\n' +
    '                            <li>PHP5, Javascript, HTML5, CSS3</li>\n' +
    '                            <li>Schéma MVC</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Format de données</h5>\n' +
    '                        <ul>\n' +
    '                            <li>JSON, XML</li>\n' +
    '                            <li>APIs RESTful</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Qualiy code</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Tests (TU, TF, TI)</li>\n' +
    '                            <li>SEO Friendly</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h5>Accéssibilité</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Normes W3C</li>\n' +
    '                            <li>Responsive design</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-5">\n' +
    '            <div class="skillbox">\n' +
    '                <h4>Travail en équipe</h4>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-5">\n' +
    '                        <h5>Lead</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Scrum-mastering</li>\n' +
    '                            <li>Méthode Agile</li>\n' +
    '                            <li>Cycles en V</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-7">\n' +
    '                        <h5>Outils de versionning</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Git / GitHub</li>\n' +
    '                            <li>SVN</li>\n' +
    '                            <li>Microsoft TFS</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-7">\n' +
    '            <div class="skillbox">\n' +
    '                <h4>Solutions logicielles</h4>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-5">\n' +
    '                        <h5>IDE</h5>\n' +
    '                        <ul>\n' +
    '                            <li>PHPStorm</li>\n' +
    '                            <li>Sublime Text lover</li>\n' +
    '                            <li>Aptana Studio (eclipse).</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-4">\n' +
    '                        <h5>Bureautique</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Suite Microsoft Office</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-3">\n' +
    '                        <h5>Créativité</h5>\n' +
    '                        <ul>\n' +
    '                            <li>Suite Adobe</li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
