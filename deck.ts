import { z } from 'zod';
const DeckSchema = z.array(
  z.object({
    name: z.string(),
    imageUrl: z.string(),
    link: z.string(),
    isOffer: z.boolean(),
  }),
);

const BadSchema = z.array(
  z.object({
    name: z.string().or(z.boolean()),
    slug: z.string(),
    uuid: z.string(),
    link: z.string(),
    offer: z.boolean(),
  }),
);

const deck = {
  district: [
    { name: 'Centre Ville' },
    { name: 'Bellevue - Chantenay - Sainte Anne' },
    { name: 'Dervallières - Zola' },
    { name: 'Hauts Pavés - Saint Félix' },
    { name: 'Malakoff - Saint-Donatien' },
    { name: 'Ile de Nantes' },
    { name: 'Breil - Barberie' },
    { name: 'Nantes Nord' },
    { name: 'Nantes Erdre' },
    { name: 'Doulon - Bottière' },
    { name: 'Nantes Sud' },
  ],
  topics: [
    { name: 'Animaux' },
    { name: 'Mobilité douce' },
    { name: 'Espaces verts' },
    { name: "Pollution de l'air" },
    { name: 'Achat immobilier' },
    { name: 'Location immobilière' },
    { name: 'Vie de quartier nocturne' },
    { name: 'Vie de quartier diurne' },
    { name: 'Culture' },
    { name: 'Enfants' },
  ],
  offers: [
    {
      name: 'logement',
      title: 'nous trouvons votre logement',
      text:
        'Achat vente location ? Nous vous accompagnons dans votre recherche et\n' +
        ' faisons le tri pour vous. Paperasse, organisation de visites, état des lieux....',
      logos: [Array],
    },
    {
      name: 'installation',
      title: 'Installez vous, on gère tout pour vous !',
      text:
        'Quels que soient les besoins nous vous accompagnons pour votre\n' +
        ' installation. Découverte de la région, visites immobilières, assistance\n' +
        ' pour votre état des lieux...',
      logos: [Array],
    },
    {
      name: 'demenagement',
      title: 'Un déménageur au meilleur prix',
      text:
        'Vous avez besoin de trouver un déménageur et pas le temps de chercher, de\n' +
        ' comparer vous même? Comparaison, estiamtion, sélection...',
      logos: [Array],
    },
    {
      name: 'travaux',
      title: 'Vos travaux aux meilleurs prix',
      text:
        'Besoin de refaire la peinture ou quelques travaux avant de partirou de vous\n' +
        ' installer? Nous vous aidons à touver le partenaire idéal.Petit travaux, gros\n' +
        ' oeuvre, maintenance, dépannage...',
      logos: [Array],
    },
    {
      name: 'services menagers',
      title: 'Trouvez votre fée du logi',
      text:
        "Besoin d'un coup de main pour le ménage ? Ménage, ponctuel ou toute\n" +
        " l'année, dès 2heures.Une aide-ménagère s'occupe de votre domicile quand\n" +
        ' vous voulez, comme vous voulez ',
      logos: [Array],
    },
    {
      name: 'decouverte',
      title: 'On vous fait visiter la région ?',
      text:
        "Envie d'en savoir plus sur Nantes ? On organise votre séjour. Découverte de la\n" +
        ' région, visite des quartiers qui vous intéressent, de 2-3 logements\n' +
        " sélectionnés et d'établissements scolaires...",
      logos: [Array],
    },
    {
      name: 'garde enfants',
      title: 'Trouvez votre baby-sitter',
      text:
        "Garde d'enfant(s) de plus de 3 ans, ponctuelle ou régulière, sorties d'école, \n" +
        ' aide aux devoirs ou accompagnement aux activités extra - scolaires.Faîtes\n' +
        ' garder vos enfants par des intervenantes spécialisées',
      logos: [Array],
    },
    {
      name: 'entretien jardin',
      title: 'Nous avons la main verte !',
      text:
        'Tonte de gazon, taille de haies, entretien de vos massifs ou balcons, nettoyage\n' +
        ` "de vos allées et terrasses": de l'entretien courant à la remise en état complète.`,
      logos: [Array],
    },
    {
      name: 'contrat energie',
      title: 'Votre contrat énergie au meileur prix.',
      text:
        "Vous avez besoin d'établir un nouveau contrat d'énergie ou de le transférer, mais\n" +
        " vous n'avez pas le temps de chercher et de comparer vous-meme ?\n" +
        ' Démarches, recherche, comparaison...',
      logos: [Array],
    },
    {
      name: 'demarche enfance',
      title: "tout ce qu'il faut pour vos enfants",
      text:
        'Nous trouvons pour vous le meilleur accompagnement en fonction de vos\n' +
        ' besoins.Inscription scolaire, activités parascolaires, mode de garde...',
      logos: [Array],
    },
    {
      name: 'contrat internet',
      title: 'Votre contrat internet au meilleur prix',
      text:
        "Besoin de trouver un nouveau fournisseur d'accès ?\n" +
        ' Nous vous accompagnons de la souscription de vos contenus Internet au\n' +
        " meilleur prix, jusqu'à la mise en service.",
      logos: [Array],
    },
    {
      name: 'demarches administratives',
      title: "Démarches administratives,\n on s'en charge !\n",
      text:
        'Nous vous accompagnons dans toutes vos démarches administratives.\n' +
        ' Changement de Banque, inscription Caf, Pôle Emploi, CPAM...\n',
      logos: [Array],
    },
    {
      name: 'assurance habitation',
      title: 'Votre assurance habitation de A à Z',
      text:
        "Vous n'avez pas le temps de chercher et de comparer vous-même ?\n" +
        " Nous vous accompagnons dans l'établissement de votre contrat.\n" +
        ' Comparaison, estimation, sélection...',
      logos: [Array],
    },
    {
      name: 'reexpedition',
      title: 'Transférer votre courrier vers\n une autre adresse en France',
      text:
        "Faites suivre l'intégralité du courrier reçu à votre adresse actuelle vers votre\n" +
        ' nouveau domicile.Grâce à votre contrat de réexpédition, après votre\n' +
        ' déménagement, vous évitez que les objets envoyés à votre ancienne adresse\n' +
        " soient renvoyés à l'expéditeur.",
      logos: [Array],
      data1: '28, 50€',
      duration1: 'pour 6 mois *',
      condition1: 'Renouvelable une fois',
      data2: '51, 50€',
      duration2: 'pour 1 an *',
      condition2: 'Non renouvelable',
    },
  ],
};
