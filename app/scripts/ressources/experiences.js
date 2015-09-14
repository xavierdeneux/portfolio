'use strict';

angular.module('portfolio')
    .constant('experiences', [{
        "entreprise": "Groupe SEB",
        "poste": "Expert NTIC",
        "images": ['img/portfolio/groupe-seb.jpg'],
        "description": "<p>En mission chez Seb depuis janvier 2015, je suis amené à intervenir sur le domaine de la cuisine numérique, domaine d'avenir où les objets de la cuisine seront tous connectés et sauront guider le consommateur dans la réalisation de recettes.</p>" +
            "<h3>Missions</h3>" +
            "<ul>" +
            "    <li>Travail autour du monde de la cuisine numérique</li>" +
            "    <li>Application de gestion de recette culinaires (AngularJS)</li>" +
            "    <li>Méthode Agile avec cycles itératifs de 2 semaines</li>" +
            "    <li>Travail dans une équipe de 6 personnes avec beaucoup de synergie</li>" +
            "</ul>"
    }, {
        "entreprise": "Veolia Water",
        "poste": "Consultant informatique",
        "images": ['img/portfolio/veolia.jpg', 'img/portfolio/gismartware.jpg'],
        "description": " <p>Durant cette mission de 10mois, j'ai été amené à travailler sur une solution web de cartographie pour Véolia Eau. Le besoin initial était de pouvoir localiser et gérer le patrimoine eau (vanne d'eau, borne incendie, etc...) et de pouvoir envoyer des hommes sur le terrain pour réparer, entretenir ou changer des équipements.</p>" +
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
    }, {
        "entreprise": "Mipih",
        "poste": "Consultant informatique",
        "images": ['img/portfolio/mipih.png'],
        "description": "<p>Pendant cette mission qui a duré 2 ans, j'ai été amené à travailler sur un progiciel web destiné au secteur hospitalier. Véritable outil de gession des ressources humaines, il est possible avec cet outil très complet de gérer plannings de services, paies et temps de travail</p>" +
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
    }, {
        "entreprise": "E-monsite",
        "poste": "Web-developpeur",
        "images": ['img/portfolio/emonsite-logo.jpg'],
        "description": "<p>Durant deux ans, j'ai travaillé sur le CMS online e-monsite, véritable couteau Suisse qui permet à tout à chacun de créer un site web sans aucune connaissance en la matière.</p>" +
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
    }, {
        "entreprise": "FranceBay",
        "poste": "Web-developpeur",
        "images": ['img/portfolio/francebay.jpg'],
        "description": "<p>Durant 20 mois, j'ai fait mes premières armes dans l'agence web Francebay / Picardieweb, mission durant laquelle j'ai réalisé plusieurs sites internets. La taille des sites allait du classique site vitrine au gros e-commerce.</p>" +
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
    }]);
