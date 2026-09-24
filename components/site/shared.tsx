import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const EMAIL = "tanguy.epifanic@gmail.com"
export const CALENDLY = "https://calendly.com/tanguy-epifanic"
export const LINKEDIN = "https://www.linkedin.com/in/tanguy-epifanic/"
export const MALT = "https://www.malt.fr/profile/tanguyepifanic"
export const DOSSIER = "/Dossier_Competences_Tanguy_Epifanic.pdf"

export const clients = ["OCIRP", "Edmond de Rothschild", "Klesia", "LexisNexis", "Figaro Classifieds", "Equativ", "Ivalua"]

const btn = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
export const btnBleu = `${btn} bg-brand-blue text-white hover:bg-brand-blue/85`
export const btnRouge = `${btn} bg-brand-red text-white hover:bg-brand-red/85`
export const btnSecondaire = `${btn} bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20`

export const carte = "rounded-2xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-sm"

// Dégradé + grain de la bannière LinkedIn, fixés derrière la page
export function Background() {
  return (
    <>
      <div aria-hidden="true" className="banner-gradient fixed inset-0 -z-20" />
      <div aria-hidden="true" className="banner-grain pointer-events-none fixed inset-0 -z-10" />
    </>
  )
}

export function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export function Highlight({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "red" }) {
  return (
    <span className={`inline-block -rotate-1 rounded-lg px-2 leading-tight ${color === "blue" ? "bg-brand-blue" : "bg-brand-red"}`}>
      {children}
    </span>
  )
}

export function Identity() {
  return (
    <span className="flex items-center gap-3 font-semibold">
      <Image src="/Tanguy_pp.png" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
      Tanguy Epifanic
    </span>
  )
}

// En-tête des pages de détail, avec retour à l'accueil
export function DetailHeader() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
      <Link href="/"><Identity /></Link>
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Retour
      </Link>
    </nav>
  )
}

export function MaltIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
      />
    </svg>
  )
}
