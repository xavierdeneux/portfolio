'use strict';

/* App Module */
var portfolio = angular.module('portfolio', ['ui.bootstrap', 'ngSanitize']);

var realisations = [
    {
        "title" : "photo.xavierdeneux.fr",
        "snapshot" : "img/portfolio/photo-xavierdeneux.png",
        "description" : "<p>Créé pour répondre à mon besoin d'avoir une plateforme personnalisable où héberger mes photos et mes articles, j'ai créé ce site à partir d'un CMS maison basé sur CodeIgniter.</p><p>Une administration complète me permet d'ajouter facilement articles, albums (publics ou privés), photos en multi-upload.</p>",
        "details" : {
            'site': 'photo.xavierdeneux.fr',
            'date': '<a href="http://www.ctrl-alt-geek.fr/nouveau-site-photo-xavierdeneux-fr/">Juillet 2013</a>',
            'technos' : 'PHP5 (CodeIgniter), MySQL, Bootstrap, HTML5, CSS3, jQuery'
        }
    },
    {
        "title" : "E-monsite.com",
        "snapshot" : "img/portfolio/emonsite.png",
        "description" : "<p>E-monsite.com est l'un des plus gros projets auquel j'ai contribué et c'est également l'un de ceux qui m'a apporté le plus de connaissances, tant sur le plan technique que sur celui l'expérience.<br />Avec presque 1 million de sites créés, la plateforme arrivait à saturation et avait besoin d'une refonte totale afin de prendre en compte la problèmatique d'un fort traffic.<br />Fin 2011, la version 4 est lancée, codée avec un framework maison dérivé de Zend Framework et de Code Igniter (plus léger, plus souple et plus performant). Coté base de données, de grosses optimisations sur les structures (sharding) et les requêtes ont été nécéssaires.</p>",
        "details" : {
            'site': 'www.e-monsite.com',
            'date': '<a href="http://www.e-monsite.com/blog/actualite/le-28-septembre-2011-decouvrez-e-monsite-v4.html">Octobre 2011</a>',
            'technos' : 'PHP5, MySQL, Bootstrap, HTML5, CSS3, jQuery.'
        }
    },
    {
        "title" : "Photos non contractuelles",
        "snapshot" : "img/portfolio/photos-non-contractuelles.png",
        "description" : "<p>Projet personnel qui est né d'une simple idée : il y a souvent un gouffre entre les photos d'un produit et la réalité. Quelques jours de codage plus tard naissait le site.<br />Rapidement un buzz sur le web et les médias Français (Radio, Télé, Sites à forts traffic) m'obligent à adapter site et serveur à la demande (cache, minification fichiers, optimisations serveur ...).</p><p>En septembre 2014, le site est entièrement refondu et se base désormais sur le framework Symfony2.</p>",
        "details" : {
            'site': 'www.photos-non-contractuelles.fr',
            'date': 'Septembre 2014',
            'technos': 'PHP5 (Symfony 2), MySQL, Bootstrap, HTML5, CSS3, jQuery'
        }
    },
    {
        "title" : "Gontié Bijoux",
        "snapshot" : "img/portfolio/gontie.png",
        "description" : "<p>Gontié Paris est un est des tous premiers site e-commerce que j'ai mis en place. Il propose aux internautes des bijoux made in France.<br />Parti de zéro pour ce projet qui n'utilisait pas, à ses débuts, de framework, j'ai pu intervenir et mieux comprendre les mécanisme des systèmes de commande et de paiement.</p><p>Plus tard, le site évoluera en intégrant des mécanismes existants, testés et éprouvés.</p>",
        "details" : {
            'site': 'www.gontie-bijoux.fr',
            'date': 'Mai 2010',
            'technos' : 'PHP5, Solution paiement en ligne Atos.'
        }
    },
    {
        "title" : "Panoramiens",
        "snapshot" : "img/portfolio/panoramiens.png",
        "description" : "<p>Site vitrine qui présente les services de cet appartement en location situé tout en haut du seul et unique building d'Amiens : la tour Perret. Une fonctionnalité permet d'aller récupérer à intervalle régulier (via tâche cron) les disponibilités et tarifs de l'appartement qui sont gérés par un organisme externe.</p>",
        "details" : {
            'site': 'www.panoramiens.com',
            'date': '<a href="http://www.ctrl-alt-geek.fr/nouveau-site-www-panoramiens-com/">Septembre 2012</a>',
            'technos': 'PHP5 (Framework maison), Bootstrap, HTML5, CSS3, jQuery.'
        }
    },
    {
        "title" : "Gogo-gadget",
        "snapshot" : "img/portfolio/gogogadget.png",
        "description" : "<p>Ce projet personnel que j'ai monté sous le régime de l'auto-entreprise m'a permis d'évoluer énormément dans le milieu de l'e-commerce et de ses problèmatiques.</p><p>Etant en charge du cycle de vie complet du site (développement, gestion des stocks et des commandes, marketing), j'ai pu mettre mes connaissances et mes compétences au service du site qui n'a céssé d'évoluer jusqu'à la cessation de mon activité (pour cause administrative). <br />Le site connaissait un traffic croissant et sa croissance évoluait de façon exponentielle.</p>",
        "details" : {
            'site': 'www.gogo-gadget.net',
            'date': '<a href="http://www.ctrl-alt-geek.fr/2-ans-apres-mon-retour-sur-lauto-entreprenariat/">Mars 2010</a>',
            'technos' : 'PHP5 (Framework maison), jQuery, solution de paiement en ligne (Paypal, Paybox).'
        }
    }];


var experiences = [
    {
        "entreprise" : "Groupe SEB",
        "poste" : "Expert NTIC",
        "images" : ['img/portfolio/groupe-seb.jpg'],
        "description" : "<p>En mission chez Seb depuis janvier 2015, je suis amené à intervenir sur le domaine de la cuisine numérique, domaine d'avenir où les objets de la cuisine seront tous connectés et sauront guider le consommateur dans la réalisation de recettes.</p>"+
        "<h3>Missions</h3>"+
        "<ul>"+
        "    <li>Travail autour du monde de la cuisine numérique</li>"+
        "    <li>Application de gestion de recette culinaires (AngularJS)</li>"+
        "    <li>Méthode Agile avec cycles itératifs de 2 semaines</li>"+
        "    <li>Travail dans une équipe de 6 personnes avec beaucoup de synergie</li>"+
        "</ul>"
    },
    {
        "entreprise" : "Veolia Water",
        "poste" : "Consultant informatique",
        "images" : ['img/portfolio/veolia.jpg','img/portfolio/gismartware.jpg'],
        "description" : " <p>Durant cette mission de 10mois, j'ai été amené à travailler sur une solution web de cartographie pour Véolia Eau. Le besoin initial était de pouvoir localiser et gérer le patrimoine eau (vanne d'eau, borne incendie, etc...) et de pouvoir envoyer des hommes sur le terrain pour réparer, entretenir ou changer des équipements.</p>" +
            "<ul>" +
            "   <li>Application de cartographie de gestion du patrimoine eau.</li>" +
            "   <li>Système d'information géographique (SIG).</li>" +
            "</ul>" +
            "<h3>Missions</h3>" +
            "<h4>Aspect fonctionnel</h4>" +
            "   <ul>" +
            "       <li>Ateliers de spécification pour récenser, analyser et formaliser les besoins</li>" +
            "       <li>Force de proposition pour évolutions techniques et fonctionnelles</li>" +
            "       <li>Reflexions sur l'amélioration de l'UX</li>" +
            "   </ul>" +
            "<h4>Aspect technique</h4>" +
            "   <ul>" +
            "       <li>Echanges réguliers (méthode Agile) avec le fonctionnel pour présenter à mi-sprint des fonctionnalités développées.</li>" +
            "       <li>Quality coding : tests unitaire, tests fonctionnels, tests croisés</li>" +
            "       <li>Travail sur les performances de l'application : optimisation du code et serveur.</li>" +
            "       <li>Encadrement et suivi d'une équipe de développeurs</li>" +
            "   </ul>"
    },
    {
        "entreprise" : "Mipih",
        "poste" : "Consultant informatique",
        "images" : ['img/portfolio/mipih.png'],
        "description" : "<p>Pendant cette mission qui a duré 2 ans, j'ai été amené à travailler sur un progiciel web destiné au secteur hospitalier. Véritable outil de gession des ressources humaines, il est possible avec cet outil très complet de gérer plannings de services, paies et temps de travail</p>" +
            "<h3>Missions</h3>" +
            "<h4>Aspect fonctionnel</h4>" +
            "<ul>" +
                "<li>Travail avec la MOA pour rédiger des fiches d'analyses (mini cahier des charges pour une feature)</li>" +
                "<li>Organisation et animation de réunions pour présenter les besoins.</li>" +
            "</ul>" +
            "<h4>Aspect technique</h4>" +
            "<ul>" +
            "   <li>Développement en PHP5 sur une application from scratch</li>" +
            "   <li>Phases de tests fonctionnels et d'intégration</li>" +
            "   <li>Démonstration des features réalisées</li>" +
            "   <li>Veille technique pour améliorer l'application et la faire migrer vers Symfony 2</li>" +
            "   <li>Formation de l'équipe et documentation technique</li>" +
            "</ul>"
    },
    {
        "entreprise" : "E-monsite",
        "poste" : "Web-developpeur",
        "images" : ['img/portfolio/emonsite-logo.jpg'],
        "description" : "<p>Durant deux ans, j'ai travaillé sur le CMS online e-monsite, véritable couteau Suisse qui permet à tout à chacun de créer un site web sans aucune connaissance en la matière.</p>" +
        "<p>J'ai été reruté pour participer au vaste projet de refonte entière du site dans le but de répondre au traffic croissant et à un besoin d'internationalisation.</p>" +
        "<h3>Missions</h3>" +
        "<ul>" +
        "   <li>Reflexions sur les solutions techniques à mettre en place</li>" +
        "   <li>Participation aux réunions de développement pour présenter l'avancée des travaux</li>" +
        "   <li>Refonte du CMS en utilisant un framework maison dérivé de Zend!</li>" +
        "   <li>Participation à l'élaboration de sites clients</li>" +
        "   <li>Support et hotline ponctuel pour mieux cerner les problèmatiques utilisateurs</li>" +
        "   <li>Travail de recherche sur des interfaces intuitives et érgonomiques</li>" +
        "</ul>"
    },
    {
        "entreprise" : "FranceBay",
        "poste" : "Web-developpeur",
        "images" : ['img/portfolio/francebay.jpg'],
        "description" : "<p>Durant 20 mois, j'ai fait mes premières armes dans l'agence web Francebay / Picardieweb, mission durant laquelle j'ai réalisé plusieurs sites internets. La taille des sites allait du classique site vitrine au gros e-commerce.</p>" +
        "<h3>Missions</h3>" +
        "<h4>Aspect fonctionnel</h4>" +
        "<ul>" +
        "   <li>Réunions clientèle pour récenser le besoin sur le terrain</li>" +
        "   <li>Elaboration d'un devis complet et détaillé avec chiffrage des heures nécéssaires pour chaque fonctionnalités</li>" +
        "   <li>Rédaction d'un cahier des charges complet basé sur le devis et les fonctionnalités retenues par le client</li>" +
        "   <li>Recettage des sites</li>" +
        "</ul>" +
        "<h4>Aspect technique</h4>" +
        "<ul>" +
        "   <li>Intégration des maquettes du graphiste et transformation en HTML/CSS</li>" +
        "   <li>Réalisation des sites internet</li>" +
        "   <li>Assistance et formations aux clients</li>" +
        "   <li>Configuration des DNS et installation des noms de domaine</li>" +
        "   <li>Gestion des serveurs</li>" +
        "</ul>"
    }
];



/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});