export interface Mission {
  slug: string;
  title: string;
  description: string;
  stage: string;
  imageUrl: string;
  color: "main" | "magenta" | "alert";
  category: string;
  href: string;
  price: string;
  tagline: string;
  stats: { label: string; value: string }[];
  vibe: string;
  program: { id: string; title: string; desc: string }[];
  stack: string[];
}

export const missions: Mission[] = [
  {
    slug: "conference-boussole",
    title: "Conférence Participative",
    description: "Boussole ou Béquille ? Démystifier l'IA à l'école pour parents et enseignants.",
    stage: "01",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800",
    color: "alert",
    category: "Conférence",
    href: "/mission/conference-boussole",
    price: "Forfait 450 €",
    tagline: "Boussole ou Béquille ? Démystifier l'IA à l'école.",
    stats: [
      { label: "Durée", value: "2h + 1.5h Conseil" },
      { label: "Public", value: "Parents / Pro" },
      { label: "Format", value: "Présentiel" }
    ],
    vibe: "L'IA transforme l'école. Cette conférence participative sort du fantasme de la 'machine pensante' pour vous donner les clés d'une utilisation éthique et équilibrée entre élèves, parents et enseignants.",
    program: [
      { id: "01", title: "Histoire des LLM", desc: "Comprendre d'où viennent les outils actuels (ChatGPT, Gemini...)." },
      { id: "02", title: "Démos en Direct", desc: "Tests immersifs des outils du moment pour voir ce qu'ils font vraiment." },
      { id: "03", title: "Garde-fous", desc: "Comment protéger l'autonomie cognitive des élèves." }
    ],
    stack: ["Démystification", "Éthique", "Stratégie École", "Outils DYS"]
  },
  {
    slug: "robotique-intelligence",
    title: "Robotique & Intelligence",
    description: "Donner un corps physique à l'algorithme via des kits STEAM (Lego Spike).",
    stage: "02",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    color: "main",
    category: "STEAM",
    href: "/mission/robotique-intelligence",
    price: "Sur Devis",
    tagline: "Donner un corps physique à l'algorithme.",
    stats: [
      { label: "Âge", value: "8 - 18 ans" },
      { label: "Kits", value: "Lego Spike" },
      { label: "Niveau", value: "Initiation" }
    ],
    vibe: "Passez de l'écran au réel en construisant des robots capables de réagir à leur environnement. Une plongée concrète dans la mécanique et l'algorithmie.",
    program: [
      { id: "01", title: "Design Physique", desc: "Assemblage et compréhension des capteurs et moteurs." },
      { id: "02", title: "Logique Bloc", desc: "Programmation visuelle pour animer vos créations." },
      { id: "03", title: "Défis Tech", desc: "Missions de sauvetage et parcours d'obstacles autonomes." }
    ],
    stack: ["Lego Spike Prime", "Python Blocks", "Hardware", "Logique"]
  },
  {
    slug: "game-design-ia",
    title: "Game Design & IA",
    description: "Bâtir ses propres jeux via le Vibe Coding et des outils nocode assistés.",
    stage: "03",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    color: "main",
    category: "STEAM",
    href: "/mission/game-design-ia",
    price: "Sur Devis",
    tagline: "Ne plus seulement jouer, mais bâtir ses propres mondes.",
    stats: [
      { label: "Âge", value: "10 - 18 ans" },
      { label: "Méthode", value: "Vibe Coding" },
      { label: "Format", value: "Atelier" }
    ],
    vibe: "Découvrez le 'vibe coding'. Apprenez à créer des jeux vidéo même sans savoir coder, en utilisant l'IA pour générer les mécaniques et les visuels de votre univers.",
    program: [
      { id: "01", title: "Concept & Narrative", desc: "Définir les règles du jeu et l'histoire." },
      { id: "02", title: "AI Copilot", desc: "Utiliser l'IA pour écrire les scripts de jeu complexes." },
      { id: "03", title: "Publishing", desc: "Déploiement et test de votre jeu fini." }
    ],
    stack: ["Nocode", "JavaScript", "Claude/GPT", "Twine"]
  },
  {
    slug: "ia-generative-creative",
    title: "IA Générative Créative",
    description: "Orchestrer différents modèles et maîtriser l'art du prompt design.",
    stage: "04",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    color: "main",
    category: "LAB",
    href: "/mission/ia-generative-creative",
    price: "Sur Devis",
    tagline: "Orchestrer les modèles les plus puissants du monde.",
    stats: [
      { label: "Âge", value: "12 - 18 ans" },
      { label: "Focus", value: "Visual Arts" },
      { label: "Outils", value: "Multimodaux" }
    ],
    vibe: "Maîtrisez l'art du prompt. Apprenez à parler aux machines pour générer des images et des designs impossibles à créer à la main.",
    program: [
      { id: "01", title: "Prompt Engineering", desc: "L'art de la commande précise et créative." },
      { id: "02", title: "Multi-modèles", desc: "Combiner Midjourney, Runway et ElevenLabs." },
      { id: "03", title: "Projet Final", desc: "Création d'un court-métrage ou d'un portfolio IA." }
    ],
    stack: ["Midjourney", "Runway", "Pika", "GPT-Pro"]
  },
  {
    slug: "arts-numeriques-3d",
    title: "Arts Numériques & 3D",
    description: "Modélisation 3D (Blender), impression 3D et scénarios interactifs.",
    stage: "05",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    color: "main",
    category: "DESIGN",
    href: "/mission/arts-numeriques-3d",
    price: "Sur Devis",
    tagline: "Matérialiser vos créations numériques.",
    stats: [
      { label: "Âge", value: "10 - 18 ans" },
      { label: "Logiciel", value: "Blender" },
      { label: "Support", value: "Impression 3D" }
    ],
    vibe: "Donnez du volume à vos idées. De la modélisation sur Blender à l'impression physique de vos pièces, maîtrisez le workflow complet des arts numériques.",
    program: [
      { id: "01", title: "Modélisation 3D", desc: "Bases de Blender : formes et textures." },
      { id: "02", title: "Slicing & Print", desc: "Préparer un modèle pour l'impression 3D." },
      { id: "03", title: "Design d'Objet", desc: "Créer des pièces utiles ou purement artistiques." }
    ],
    stack: ["Blender", "Bambu Studio", "Impression FDM", "Slicing"]
  },
  {
    slug: "vibe-marketing",
    title: "Formation Vibe Marketing",
    description: "Mettre l'IA au service de la croissance : stratégie et copywriting persuasif.",
    stage: "06",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    color: "magenta",
    category: "PRO",
    href: "/mission/vibe-marketing",
    price: "Sur Devis",
    tagline: "Mettre l'IA au service de votre croissance.",
    stats: [
      { label: "Public", value: "Indépendants / Dirigeants" },
      { label: "Niveau", value: "Expert" },
      { label: "Focus", value: "ROI / Copywriting" }
    ],
    vibe: "L'IA n'est pas un gadget, c'est un levier de croissance. Apprenez à créer des personae, des stratégies et du contenu persuasif en un temps record.",
    program: [
      { id: "01", title: "AI Branding", desc: "Définir une voix et un style via l'IA." },
      { id: "02", title: "Content Factory", desc: "Génération de posts et articles optimisés." },
      { id: "03", title: "Conversion", desc: "Copywriting persuasif assisté par les LLM." }
    ],
    stack: ["Stratégie", "Copywriting", "Prompt Ads", "Analyses"]
  },
  {
    slug: "vibe-coding-pro",
    title: "Formation Vibe Coding",
    description: "Coder avec l'IA comme copilote : HTML, CSS, JS et Prompt avancé.",
    stage: "07",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
    color: "magenta",
    category: "PRO",
    href: "/mission/vibe-coding-pro",
    price: "Sur Devis",
    tagline: "Apprendre à coder avec l'IA comme copilote.",
    stats: [
      { label: "Public", value: "Professionnels" },
      { label: "Stack", value: "Web (HTML/CSS/JS)" },
      { label: "Niveau", value: "Zéro à Héros" }
    ],
    vibe: "Reprenez le contrôle technique. Vous donnez l'intention, l'IA écrit la complexité. Apprenez à bâtir vos propres applications web sans barrière technique.",
    program: [
      { id: "01", title: "Bases du Web", desc: "Structure HTML et design CSS Moderne." },
      { id: "02", title: "AI Pair Programming", desc: "Utiliser Claude, GPT et Cursor pour coder." },
      { id: "03", title: "Déploiement", desc: "Mise en ligne de votre application réelle." }
    ],
    stack: ["HTML/CSS", "JavaScript", "Cursor / VSCode", "Prompt Engineering"]
  },
  {
    slug: "ia-automatisation",
    title: "IA & Automatisation",
    description: "Optimiser votre productivité avec des workflows complexes (n8n).",
    stage: "08",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    color: "magenta",
    category: "PRO",
    href: "/mission/ia-automatisation",
    price: "Sur Devis",
    tagline: "Libérer du temps grâce aux workflows nodes.",
    stats: [
      { label: "Outil", value: "n8n / WayScript" },
      { label: "Focus", value: "Productivité" },
      { label: "Type", value: "Node-based" }
    ],
    vibe: "Automatisez tout ce qui est répétitif. Apprenez à connecter vos outils entre eux et à injecter de l'intelligence artificielle dans vos processus métier.",
    program: [
      { id: "01", title: "Logique Node", desc: "Comprendre les workflows et les déclencheurs." },
      { id: "02", title: "Intégrations API", desc: "Connecter vos outils (Slack, Gmail, Notion)." },
      { id: "03", title: "Agentic Flows", desc: "Créer des agents autonomes qui travaillent pour vous." }
    ],
    stack: ["n8n", "Zapier", "Make", "Webhooks", "API"]
  },
  {
    slug: "ux-ui-design-labs",
    title: "Formation UX/UI Design",
    description: "Maîtriser Figma et la recherche utilisateur pour des interfaces performantes.",
    stage: "09",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    color: "magenta",
    category: "PRO",
    href: "/mission/ux-ui-design-labs",
    price: "Sur Devis",
    tagline: "Concevoir des interfaces mémorables.",
    stats: [
      { label: "Outil", value: "Figma / Adobe XD" },
      { label: "Focus", value: "Design Systems" },
      { label: "Niveau", value: "Pro" }
    ],
    vibe: "Le design est la clé de la conversion. Maîtrisez Figma et les principes de l'UX pour créer des interfaces esthétiques, performantes et centrées sur l'utilisateur.",
    program: [
      { id: "01", title: "Recherche User", desc: "Comprendre les besoins et bâtir des personae." },
      { id: "02", title: "Figma Mastery", desc: "Composants, auto-layout et prototypage." },
      { id: "03", title: "Design Systems", desc: "Créer une bibliothèque de styles réutilisable." }
    ],
    stack: ["Figma", "User Research", "Prototyping", "Design Ops"]
  }
];
