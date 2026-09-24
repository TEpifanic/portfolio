import type { Metadata } from "next"
import { CalendarDays, Download, Linkedin } from "lucide-react"
import {
  Background, CALENDLY, DOSSIER, DetailHeader, ExternalLink, Highlight, LINKEDIN, MALT, MaltIcon,
  btnBleu, btnSecondaire, carte, clients,
} from "@/components/site/shared"

export const metadata: Metadata = {
  title: "Dev en régie | Tanguy Epifanic",
  description: "Développeur freelance C# / .NET, Angular et React en régie, Paris et remote.",
}

const stack = ["C#", ".NET", "Angular", "React", "Vue", "TypeScript", "T-SQL", "Azure", "Entra ID", "GCP", "Docker"]

const missions = [
  "Moderniser leur stack .NET, ASP, Angular, React, Vue",
  "Sécuriser les accès (Microsoft Entra ID, MSAL, MFA, gestion des habilitations)",
  "Optimiser les performances",
  "Réduire la dette technique (refactoring, tests)",
  "Implémenter un workflow IA dans les équipes de développement",
]

const chiffres = [
  { valeur: "6 ans", label: "d'expérience, dont 3 en freelance" },
  { valeur: "800+", label: "utilisateurs migrés sans coupure" },
  { valeur: "50s → 3s", label: "de temps de chargement chez Klesia" },
  { valeur: "+35 %", label: "de trafic SEO chez Figaro Emploi" },
]

export default function Regie() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Background />
      <DetailHeader />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">Dev en régie</p>
        <h1 className="text-3xl font-bold leading-snug sm:text-5xl sm:leading-snug">
          Développeur Full Stack <Highlight>C# / .NET</Highlight> & Angular / TypeScript
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-white/80">
          Je rejoins votre équipe en place, en remote ou en hybride sur Paris et la banlieue. Je préfère les missions longues,
          6 à 12 mois et plus. J'arrive, je comprends vite le métier, et je documente tout pour que l'équipe reste autonome après mon départ.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Ce que je fais pour vous</h2>
            <ul className="space-y-3 text-white/80">
              {missions.map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90">{s}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {chiffres.map((c) => (
              <div key={c.label} className={`${carte} p-5`}>
                <div className="whitespace-nowrap text-2xl font-bold sm:text-3xl">{c.valeur}</div>
                <p className="mt-1 text-sm text-white/70">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sm text-white/60">Ils m'ont fait confiance</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-lg font-semibold text-white/85">
            {clients.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href={DOSSIER} download className={btnBleu}>
            <Download className="h-4 w-4" /> Télécharger mon dossier de compétences
          </a>
          <ExternalLink href={LINKEDIN} className={btnSecondaire}>
            <Linkedin className="h-4 w-4" /> LinkedIn
          </ExternalLink>
          <ExternalLink href={MALT} className={btnSecondaire}>
            <MaltIcon /> Malt
          </ExternalLink>
          <ExternalLink href={CALENDLY} className={btnSecondaire}>
            <CalendarDays className="h-4 w-4" /> Prendre RDV
          </ExternalLink>
        </div>
      </main>
    </div>
  )
}
