(function(module) {
try {
  module = angular.module('portfolio');
} catch (e) {
  module = angular.module('portfolio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/contact.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12 text-center">\n' +
    '            <h2>Contact</h2>\n' +
    '            <hr class="star-primary">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-8 col-md-offset-2" ng-controller="FormController">\n' +
    '            <div class="alert" ng-class="{\'alert-success\': msgAlert.status == \'success\', \'alert-danger\' : msgAlert.status == \'error\'}" ng-if="msgAlert.content" ng-bind="msgAlert.content"></div>\n' +
    '            <form name="contact" id="contactForm" novalidate ng-submit="contact.$valid ? sendForm() : \'\'">\n' +
    '                <div class="row control-group">\n' +
    '                    <div class="form-group col-xs-12 floating-label-form-group controls">\n' +
    '                        <label>Nom</label>\n' +
    '                        <input type="text" name="name" class="form-control" placeholder="Nom" id="name" required="" ng-model="name" required>\n' +
    '                        <p class="help-block text-danger" ng-if="contact.name.$dirty && !contact.name.$valid">Merci de renseigner votre nom</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row control-group">\n' +
    '                    <div class="form-group col-xs-12 floating-label-form-group controls">\n' +
    '                        <label>E-mail</label>\n' +
    '                        <input type="email" name="email" class="form-control" placeholder="E-mail" id="email" required="" ng-model="email" required>\n' +
    '                        <p class="help-block text-danger" ng-if="contact.email.$dirty && !contact.email.$valid">Merci de renseigner une adresse e-mail valide</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row control-group">\n' +
    '                    <div class="form-group col-xs-12 floating-label-form-group controls">\n' +
    '                        <label>Téléphone</label>\n' +
    '                        <input type="tel" name="tel" class="form-control" placeholder="Téléphone" id="phone" ng-model="phone">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row control-group">\n' +
    '                    <div class="form-group col-xs-12 floating-label-form-group controls">\n' +
    '                        <label>Message</label>\n' +
    '                        <textarea rows="5" name="message" class="form-control" placeholder="Message" id="message" required ng-model="message"></textarea>\n' +
    '                        <p class="help-block text-danger" ng-if="contact.message.$dirty && !contact.message.$valid">Merci de renseigner votre message</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <br>\n' +
    '                <div id="success"></div>\n' +
    '                <div class="row">\n' +
    '                    <div class="form-group col-xs-12">\n' +
    '                        <button type="submit" class="btn btn-success btn-md">Envoyer</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
