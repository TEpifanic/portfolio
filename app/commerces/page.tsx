import type { Metadata } from "next"
import {
  CalendarDays, Footprints, Handshake, HeartHandshake, Mail, MapPin, MessageCircle, Search, Smartphone, Store, Wrench,
} from "lucide-react"
import { Background, DetailHeader, EMAIL, Highlight, btnRouge, carte } from "@/components/site/shared"

export const metadata: Metadata = {
  title: "Agence web | Tanguy Epifanic",
  description: "Création de sites sur-mesure pour les commerces de proximité, à Paris et en banlieue.",
}

const promesses = [
  {
    icon: Footprints,
    titre: "Je viens vous voir",
    texte: "On se rencontre en vrai, dans votre boutique. Je vois comment vous travaillez, vos clients, votre ambiance. Pas de visio à rallonge.",
  },
  {
    icon: HeartHandshake,
    titre: "Votre site, pas le mien",
    texte: "Vous me dites ce que vous voulez, je le fais. Je vous conseille si besoin, mais c'est vous qui décidez.",
  },
  {
    icon: MessageCircle,
    titre: "Un seul contact : moi",
    texte: "Pas de commercial, pas de standard. Vous avez une question, vous m'écrivez, je vous réponds.",
  },
]

const offre = [
  { icon: Store, titre: "Un site sur-mesure", texte: "Fait pour votre commerce, pas un modèle tout fait qu'on retrouve partout." },
  { icon: Smartphone, titre: "Parfait sur téléphone", texte: "La plupart de vos clients vont vous chercher depuis leur téléphone. Le site est pensé pour ça." },
  { icon: Search, titre: "Trouvé sur Google", texte: "Référencement local et fiche Google Business, pour sortir quand on cherche un commerce comme le vôtre dans le coin." },
  { icon: CalendarDays, titre: "Réservation, menu, horaires", texte: "Prise de rendez-vous, carte, click & collect, formulaire de contact : on ajoute ce dont vous avez besoin." },
  { icon: Wrench, titre: "Tout est géré", texte: "Nom de domaine, hébergement, sécurité, sauvegardes. Vous n'avez rien à faire de technique." },
  { icon: Handshake, titre: "Suivi après la mise en ligne", texte: "Un changement d'horaires, une nouvelle photo, une promo ? Vous me le dites, je m'en occupe." },
]

const etapes = [
  { titre: "On se rencontre", texte: "Je passe vous voir, on discute de ce que vous voulez. C'est gratuit et sans engagement." },
  { titre: "Je vous fais un devis", texte: "Un prix clair, sans surprise, avec ce qui est compris dedans." },
  { titre: "Je vous montre une maquette", texte: "Vous voyez à quoi ressemblera le site avant que je le construise. On ajuste ensemble." },
  { titre: "Je construis le site", texte: "Je vous tiens au courant, et vous validez chaque étape." },
  { titre: "C'est en ligne", texte: "Je vous montre comment ça marche, et je reste là si vous avez besoin." },
]

export default function Commerces() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Background />
      <DetailHeader />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#d9716f]">Agence web</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-snug sm:text-5xl sm:leading-snug">
          Un site qui vous ressemble, pour que les gens du quartier vous <Highlight color="red">trouvent</Highlight>.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-white/80">
          Restaurant, boulangerie, coiffeur, cabinet, boutique… Je crée des sites sur-mesure pour les commerces de proximité.
          Pas de jargon, pas de mauvaise surprise : on se voit, on discute, et je fais le site que vous avez en tête.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {promesses.map(({ icon: Icon, titre, texte }) => (
            <div key={titre} className="rounded-2xl bg-brand-red/15 p-6 ring-1 ring-brand-red/40 backdrop-blur-sm">
              <Icon className="mb-4 h-7 w-7 text-[#e38a88]" />
              <h2 className="text-lg font-semibold">{titre}</h2>
              <p className="mt-2 text-white/75">{texte}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-semibold">Ce qui est compris</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offre.map(({ icon: Icon, titre, texte }) => (
            <div key={titre} className={`${carte} p-6`}>
              <Icon className="mb-3 h-6 w-6 text-white/80" />
              <h3 className="font-semibold">{titre}</h3>
              <p className="mt-2 text-sm text-white/70">{texte}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-semibold">Comment ça se passe</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-5">
          {etapes.map((e, i) => (
            <li key={e.titre} className={`${carte} p-5`}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-bold">{i + 1}</span>
              <h3 className="mt-3 font-semibold">{e.titre}</h3>
              <p className="mt-1 text-sm text-white/70">{e.texte}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}?subject=Site pour mon commerce`} className={btnRouge}>
            <Mail className="h-4 w-4" /> Demander un devis gratuit
          </a>
          <span className="flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4" /> Paris et banlieue
          </span>
        </div>
      </main>
    </div>
  )
}
