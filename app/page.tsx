import Link from "next/link"
import { ArrowRight, CalendarDays, Download, Footprints, HeartHandshake, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"
import {
  Background, CALENDLY, DOSSIER, EMAIL, ExternalLink, Highlight, Identity, LINKEDIN, MALT, MaltIcon,
  btnBleu, btnRouge, btnSecondaire, clients,
} from "@/components/site/shared"

const promesses = [
  { icon: Footprints, texte: "Je viens vous voir en vrai, dans votre boutique" },
  { icon: HeartHandshake, texte: "Je fais le site que vous voulez, pas le mien" },
  { icon: MessageCircle, texte: "Un seul contact du début à la fin : moi" },
]

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden lg:h-dvh lg:overflow-hidden">
      <Background />

      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Identity />
        <div className="flex items-center gap-4 text-sm">
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-2 text-white/80 hover:text-white sm:inline-flex">
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
          <ExternalLink href={CALENDLY} className={btnSecondaire}>
            <CalendarDays className="h-4 w-4" /> Prendre RDV
          </ExternalLink>
        </div>
      </nav>

      <main className="mx-auto grid w-full max-w-7xl flex-1 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        {/* Régie */}
        <section className="flex flex-col py-10 lg:border-r lg:border-white/15 lg:py-0 lg:pr-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-blue">Dev en régie</p>
          <h1 className="text-3xl font-bold leading-snug xl:text-4xl xl:leading-snug">
            Développeur <Highlight>C# / .NET</Highlight> & Angular / TypeScript
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Je renforce votre équipe tech en freelance, en remote ou sur Paris. Je remets à jour les vieilles applis,
            je les sécurise et je les rends plus rapides.
          </p>
          <p className="mt-6 text-sm text-white/60">6 ans d'expérience · Ils m'ont fait confiance :</p>
          <p className="mt-2 text-sm font-semibold text-white/85">{clients.join(" · ")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={DOSSIER} download className={btnBleu}>
              <Download className="h-4 w-4" /> Dossier de compétences
            </a>
            <ExternalLink href={LINKEDIN} className={btnSecondaire}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </ExternalLink>
            <ExternalLink href={MALT} className={btnSecondaire}>
              <MaltIcon /> Malt
            </ExternalLink>
          </div>
          <Link href="/regie" className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-brand-blue">
            Voir le détail <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </section>

        {/* Agence web */}
        <section className="flex flex-col border-t border-white/15 py-10 lg:border-t-0 lg:py-0 lg:pl-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#d9716f]">Agence web</p>
          <h2 className="text-3xl font-bold leading-snug xl:text-4xl xl:leading-snug">
            Des sites sur-mesure pour les <Highlight color="red">commerces du coin</Highlight>
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Restaurant, coiffeur, boutique… Je crée votre site et je m'occupe de tout.
            Vous n'avez rien à gérer.
          </p>
          <ul className="mt-6 space-y-3">
            {promesses.map(({ icon: Icon, texte }) => (
              <li key={texte} className="flex items-center gap-3 text-white/85">
                <Icon className="h-5 w-5 shrink-0 text-[#e38a88]" /> {texte}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`mailto:${EMAIL}?subject=Site pour mon commerce`} className={btnRouge}>
              <Mail className="h-4 w-4" /> Demander un devis gratuit
            </a>
            <span className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4" /> Paris et banlieue
            </span>
          </div>
          <Link href="/commerces" className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-[#d9716f]">
            Voir le détail <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </section>
      </main>

      <footer className="py-5 text-center text-xs text-white/40">© {new Date().getFullYear()} Tanguy Epifanic</footer>
    </div>
  )
}
