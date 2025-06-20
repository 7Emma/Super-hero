import Superman from '../assets/superman.jpg'
import Batman from '../assets/batman.webp'
import Woman from '../assets/woman.webp'
import Spiderman from '../assets/spider-man.webp'
import Iron from '../assets/iron.webp'
import Black from '../assets/black-panther.jpg'

export const heros = [
  {
    id: 1,
    name: "Superman",
    image: Superman,
    date: "1938",
    description: {
      creation:
        "Créé en 1938 (Action Comics #1) par Jerry Siegel et Joe Shuster",
      identite:
        "Clark Kent / Kal-El, originaire de Krypton, élevé à Smallville par la famille Kent",
      pouvoirs:
        "Force surhumaine, vol, vision à rayons X et thermique, invulnérabilité, souffle glacé, ouïe amplifiée",
      signature: "Symbole éternel d'espoir, de justice et de lumière",
      histoire: `
        Né sur la planète Krypton, Kal-El est envoyé sur Terre par ses parents, Jor-El et Lara, peu avant l'explosion de leur monde. Recueilli par Jonathan et Martha Kent dans la petite ville de Smallville, il est élevé comme un humain sous le nom de Clark Kent. Très jeune, il découvre qu’il est doté de pouvoirs extraordinaires, liés à l’exposition au soleil jaune terrestre.

        En devenant adulte, il adopte l’identité secrète de Superman et travaille comme journaliste au Daily Planet à Metropolis. Sa mission : protéger la Terre de toutes les menaces, qu’elles soient humaines, extraterrestres ou divines. Il affronte Lex Luthor, son éternel rival intellectuel, Brainiac, Doomsday, et bien d’autres.

        Malgré ses pouvoirs, Superman est profondément humain : il doute, aime (Lois Lane), souffre, et tente de rester fidèle à ses principes. Membre fondateur de la Justice League, il incarne l’idéal du héros ultime. Sa plus grande force réside peut-être dans sa foi en l’humanité, qu’il défend coûte que coûte, même au prix de sa propre vie.`,
    },
    categorie: "DC",
  },
  {
    id: 2,
    name: "Batman",
    image: Batman,
    date: "1939",
    description: {
      creation:
        "Créé en 1939 (Detective Comics #27) par Bob Kane et Bill Finger",
      identite:
        "Bruce Wayne, milliardaire de Gotham City, orphelin depuis l’enfance",
      pouvoirs:
        "Maître détective, arts martiaux, gadgets de haute technologie, stratégie tactique avancée",
      signature: "Héros de l’ombre, le Chevalier Noir de Gotham",
      histoire: `
        Bruce Wayne a six ans lorsqu’il assiste impuissant au meurtre de ses parents, Thomas et Martha Wayne, dans une ruelle sombre. Traumatisé à vie, il fait le vœu de consacrer son existence à la lutte contre le crime. Après des années de formation dans les coins les plus reculés du globe — arts martiaux, psychologie, criminologie, technologie — il revient à Gotham et devient Batman.

        Utilisant sa fortune pour créer un arsenal unique (Batmobile, Batarang, Batcave), il s’attaque aux plus dangereux criminels : le Joker, Double-Face, le Pingouin, Bane, et bien d'autres. Aux côtés d’alliés comme Alfred, Robin, Batgirl et Nightwing, il incarne la justice froide mais implacable.

        Même sans pouvoir, Batman tient tête aux dieux, aux démons et aux extraterrestres. Son intelligence, sa détermination et sa douleur en font un héros tragique, un mythe vivant, et un modèle de résilience face à l’injustice.`,
    },
    categorie: "DC",
  },
  {
    id: 3,
    name: "Wonder Woman",
    image: Woman,
    date: "1941",
    description: {
      creation:
        "Créée en 1941 (All Star Comics #8) par William Moulton Marston",
      identite:
        "Diana, princesse amazone née sur Themyscira, fille d’Hippolyte",
      pouvoirs:
        "Force divine, vol, endurance, lasso de vérité, bracelets pare-balles, immortalité partielle",
      signature: "Guerrière et ambassadrice de la paix et de la vérité",
      histoire: `
        Sur l'île cachée de Themyscira, vit une civilisation de femmes immortelles : les Amazones. Diana est la plus forte, la plus rapide et la plus sage d'entre elles. Façonnée par les dieux, elle reçoit des dons divins pour devenir une protectrice du monde.

        Lorsque le pilote Steve Trevor s’écrase sur l’île, elle découvre que le monde des hommes est en proie à la guerre. Convaincue qu’elle peut les aider, elle quitte Themyscira pour apporter paix et justice. En adoptant l'identité de Wonder Woman, elle devient une héroïne redoutée et respectée.

        Dans le monde moderne, elle affronte Arès, Cheetah, et d’autres menaces magiques ou divines. Membre clé de la Justice League, elle combat aux côtés de Superman et Batman. Son idéal n’a jamais changé : défendre les innocents, réconcilier vérité et compassion, et apporter la paix par la force si nécessaire.`,
    },
    categorie: "DC",
  },
  {
    id: 4,
    name: "Spider-Man",
    image: Spiderman,
    date: "1962",
    description: {
      creation:
        "Créé en 1962 (Amazing Fantasy #15) par Stan Lee et Steve Ditko",
      identite: "Peter Parker, adolescent brillant de New York",
      pouvoirs:
        "Force proportionnelle à une araignée, agilité, sens d’araignée, toiles organiques",
      signature: "Le héros du peuple, modèle de responsabilité personnelle",
      histoire: `
        Peter Parker est un lycéen timide et passionné de sciences, élevé par sa tante May et son oncle Ben. Sa vie change lorsqu’une araignée radioactive le mord, lui conférant des pouvoirs incroyables. Au début, il utilise ses dons pour gagner de l'argent et la célébrité.

        Mais un événement tragique le transforme à jamais : il laisse un voleur s’échapper, qui finira par tuer son oncle Ben. Comprenant l’importance du devoir, il devient Spider-Man, un héros masqué luttant contre les criminels de New York.

        Il affronte une multitude de méchants emblématiques : le Bouffon Vert, Venom, le Docteur Octopus, le Lézard... tout en jonglant avec ses études, sa vie amoureuse (MJ, Gwen Stacy) et ses responsabilités.

        Spider-Man incarne l’adolescence, les choix difficiles, les pertes et la persévérance. Il n’est pas parfait, il échoue parfois, mais il se relève toujours. Il est l’ami que chacun aimerait avoir, le protecteur discret, celui qui lutte même quand personne ne le remarque.`,
    },
    categorie: "Marvel",
  },
  {
    id: 5,
    name: "Iron Man",
    image: Iron,
    date: "1963",
    description: {
      creation:
        "Créé en 1963 (Tales of Suspense #39) par Stan Lee, Don Heck, Larry Lieber, Jack Kirby",
      identite: "Tony Stark, milliardaire et inventeur de génie",
      pouvoirs:
        "Armure technologiquement avancée, intelligence hors norme, ressources illimitées",
      signature: "Le génie en quête de rédemption",
      histoire: `
        Tony Stark est un inventeur milliardaire, à la tête de Stark Industries. Cynique, charmeur et égocentrique, il fabrique des armes pour l’armée américaine. Lors d’un voyage en zone de guerre, il est gravement blessé par une de ses propres bombes. Capturé, il fabrique en secret une armure pour s’échapper.

        Cet événement le transforme profondément. Il décide de cesser la production d’armes et devient Iron Man, un héros en armure qui protège le monde. Avec Jarvis, son intelligence artificielle, il développe des dizaines de versions de son armure pour différents types de menaces.

        Il affronte le Mandarin, Whiplash, Ultron et plus tard Thanos. En tant que membre fondateur des Avengers, il joue un rôle central dans la défense de la planète. Bien qu’il ait une personnalité arrogante, il cache un cœur tourmenté par la culpabilité et la peur de ne pas en faire assez.

        Dans son ultime combat, Tony sacrifie sa vie pour sauver l’univers. Il meurt en héros, laissant derrière lui un héritage indélébile dans le cœur de ses alliés et des générations futures.`,
    },
    categorie: "Marvel",
  },
  {
    id: 6,
    name: "Black Panther",
    image: Black,
    date: "1966",
    description: {
      creation: "Créé en 1966 (Fantastic Four #52) par Stan Lee et Jack Kirby",
      identite:
        "T'Challa, roi du Wakanda, protecteur mystique et politique de son peuple",
      pouvoirs:
        "Force augmentée par l’herbe en forme de cœur, technologie wakandaise, génie scientifique",
      signature: "Premier super-héros noir de l’histoire des comics",
      histoire: `T’Challa est le prince héritier du Wakanda, un royaume africain caché au reste du monde et riche en vibranium, un métal extraterrestre unique. À la mort de son père, il devient roi et reçoit les pouvoirs du Black Panther, le protecteur spirituel et guerrier du pays.

        En tant que souverain, il équilibre diplomatie et combats, tradition et modernité. Il affronte des menaces comme Ulysses Klaue, Erik Killmonger (un cousin exilé en quête de vengeance), et des invasions mondiales. En parallèle, il s’ouvre à la communauté internationale pour partager les savoirs du Wakanda.

        Allié des Avengers, il joue un rôle essentiel dans les batailles contre Thanos. T’Challa est à la fois un roi sage, un scientifique innovant, et un combattant redoutable. Il incarne l’excellence, l’honneur et la fierté noire. Son héritage dépasse les frontières du Wakanda pour devenir universel.`,
    },
    categorie: "Marvel",
  },
];

export default heros;
