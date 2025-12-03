"use client"

import { X, ExternalLink } from 'lucide-react'

interface IngredientInfoModalProps {
    isOpen: boolean
    onClose: () => void
    ingredient: {
        name: string
        category: string
        howItWorks: string
        clinicalResults: string[]
        source: {
            study: string
            details: string
            link: string
        }
    }
}

export default function IngredientInfoModal({ isOpen, onClose, ingredient }: IngredientInfoModalProps) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-[#0D1F17] border border-white/10 rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-[#0D1F17] border-b border-white/10 p-6 flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{ingredient.name}</h3>
                        <p className="text-emerald-400 text-sm font-medium">{ingredient.category}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* How it works */}
                    <div>
                        <h4 className="text-sm font-bold text-white/90 mb-2 uppercase tracking-wide">
                            Hoe het werkt:
                        </h4>
                        <p className="text-sm text-white/70 leading-relaxed">
                            {ingredient.howItWorks}
                        </p>
                    </div>

                    {/* Clinical Results */}
                    <div>
                        <h4 className="text-sm font-bold text-white/90 mb-3 uppercase tracking-wide">
                            Klinische resultaten:
                        </h4>
                        <ul className="space-y-2">
                            {ingredient.clinicalResults.map((result, index) => (
                                <li key={index} className="text-sm text-white/70 flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">•</span>
                                    <span>{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Source */}
                    <div className="border-t border-white/10 pt-6">
                        <h4 className="text-sm font-bold text-white/90 mb-2 uppercase tracking-wide">
                            Bron:
                        </h4>
                        <p className="text-sm text-white/70 mb-1">{ingredient.source.study}</p>
                        <p className="text-xs text-white/50 mb-4">{ingredient.source.details}</p>

                        <a
                            href={ingredient.source.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                        >
                            <span>Link naar studie</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
