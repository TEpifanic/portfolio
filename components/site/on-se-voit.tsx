"use client"

import { useEffect, useState } from "react"
import { CalendarDays } from "lucide-react"
import { CALENDLY, ExternalLink, btnRouge } from "@/components/site/shared"

// Le numéro est assemblé dans le navigateur pour ne pas apparaître dans le HTML :
// ça limite les robots qui aspirent les numéros de téléphone
const PARTS = ["06", "01", "30", "87", "42"]

export function OnSeVoit() {
  const [numero, setNumero] = useState<string | null>(null)
  useEffect(() => setNumero(PARTS.join(" ")), [])

  return (
    <span className="flex flex-wrap items-center gap-3">
      <ExternalLink href={CALENDLY} className={btnRouge}>
        <CalendarDays className="h-4 w-4" /> On se voit ?
      </ExternalLink>
      {numero && (
        <>
          <span className="text-white/50">-</span>
          <a href={`tel:+33${PARTS.join("").slice(1)}`} className="font-medium text-white/90 hover:text-white">
            {numero}
          </a>
        </>
      )}
    </span>
  )
}
