"use client"

import { Check, Minus } from 'lucide-react'

export default function ProblemAgitation() {
  const comparisons = [
    { label: "Prijs", revive: "€29/mnd", minoxidil: "€45/mnd", finasteride: "€30/mnd" },
    { label: "Hormoonvrij", revive: true, minoxidil: true, finasteride: false },
    { label: "Receptvrij", revive: true, minoxidil: true, finasteride: false },
    { label: "Bijwerkingen", revive: "Geen", minoxidil: "Hoofdpijn", finasteride: "Libido verlies" },
    { label: "Garantie", revive: "180 dagen", minoxidil: "Geen", finasteride: "Geen" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight mb-4">
              Waarom REVIVE de enige logische keuze is.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-medium max-w-2xl mx-auto px-4">
              We hebben REVIVE ontwikkeld om de tekortkomingen van traditionele middelen op te lossen. Geen bijwerkingen, wel resultaat.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] border border-[#E8E4DF] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
            <table className="w-full text-center text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[9px] sm:text-xs uppercase tracking-wider w-[26%] sm:w-auto whitespace-nowrap"></th>
                  <th className="py-3 sm:py-4 px-2 sm:px-3 text-[#C4956A] font-bold border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA] text-[11px] sm:text-sm w-[24.6%] sm:w-auto tracking-tight whitespace-nowrap">REVIVE</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-3 text-[#888] font-medium text-[11px] sm:text-sm w-[24.6%] sm:w-auto tracking-tight whitespace-nowrap">Minoxidil</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-3 text-[#888] font-medium text-[11px] sm:text-sm w-[24.6%] sm:w-auto tracking-tight whitespace-nowrap">Finasteride</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-b border-[#E8E4DF] last:border-0 hover:bg-gray-50/30 transition-colors">
                    <td className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[11px] sm:text-sm whitespace-nowrap tracking-tight">{row.label}</td>
                    <td className="py-3 sm:py-4 px-2 sm:px-3 border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA] text-green-600 font-medium text-[11px] sm:text-sm whitespace-nowrap">
                      {typeof row.revive === 'boolean' ? (
                        <div className="flex justify-center"><Check className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} /></div>
                      ) : (
                        row.revive
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-3 text-gray-500 text-[11px] sm:text-sm whitespace-nowrap">
                      {typeof row.minoxidil === 'boolean' ? (
                        <div className="flex justify-center">{row.minoxidil ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" /> : <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" />}</div>
                      ) : (
                        <span className={row.label === "Bijwerkingen" ? "text-red-400/80" : ""}>{row.minoxidil}</span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-3 text-gray-500 text-[11px] sm:text-sm whitespace-nowrap">
                      {typeof row.finasteride === 'boolean' ? (
                        <div className="flex justify-center">{row.finasteride ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" /> : <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" />}</div>
                      ) : (
                        <span className={row.label === "Bijwerkingen" ? "text-red-400/80" : ""}>{row.finasteride}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 group cursor-default">
            <p className="text-[10px] sm:text-xs font-medium text-gray-400 italic">
              * Gebaseerd op gepubliceerde bijsluiters en klinische data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
