"use client"

import { useState, useEffect } from 'react'
import CountUp from 'react-countup'

export default function HairGrowthCalculator() {
    const [age, setAge] = useState(30)
    const [severity, setSeverity] = useState(4)
    const [percentage, setPercentage] = useState(84)
    const [prevPercentage, setPrevPercentage] = useState(84)

    // Calculate recovery percentage
    const calculateRecovery = (age: number, severity: number) => {
        const base = 88

        let agePenalty = 0
        if (age > 25) {
            agePenalty = Math.min((age - 25) * 0.5, 15)
        }

        let severityPenalty = 0
        if (severity > 3) {
            severityPenalty = (severity - 3) * 4
        }

        let result = base - agePenalty - severityPenalty
        result = Math.max(35, Math.min(92, result))

        return Math.round(result)
    }

    // Update percentage when sliders change
    useEffect(() => {
        const newPercentage = calculateRecovery(age, severity)
        setPrevPercentage(percentage)
        setPercentage(newPercentage)
    }, [age, severity])

    // Get color based on percentage
    const getColor = (pct: number) => {
        if (pct >= 70) {
            return {
                primary: '#7DD3A8',
                gradient: 'linear-gradient(90deg, #7DD3A8, #5FC99D)',
                text: 'text-[#7DD3A8]'
            }
        } else {
            return {
                primary: '#D4A574',
                gradient: 'linear-gradient(90deg, #D4A574, #E9C89B)',
                text: 'text-[#D4A574]'
            }
        }
    }

    const colors = getColor(percentage)

    // Get message based on percentage
    const getMessage = (pct: number) => {
        if (pct >= 70) {
            return `Goed nieuws! Bij jouw profiel verwachten we ${pct}% haarherstel binnen 6 maanden consistent gebruik.`
        } else if (pct >= 50) {
            return `Bij jouw profiel is ${pct}% haarherstel realistisch binnen 6 maanden. Consistentie is key.`
        } else {
            return `Bij gevorderde haaruitval is ${pct}% verbetering haalbaar. De 6 maanden kuur geeft je de beste kans.`
        }
    }

    return (
        <div className="calculator-container bg-gradient-to-br from-[#0A1612] to-[#0D1F17] border border-white/10 rounded-2xl p-8 shadow-2xl max-w-[600px] mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-10">
                Bereken jouw haargroei potentieel
            </h3>

            {/* Sliders */}
            <div className="space-y-8 mb-10">
                {/* Age Slider */}
                <div>
                    <label className="block text-white/90 font-semibold mb-4 text-sm uppercase tracking-wide">
                        Jouw leeftijd
                    </label>
                    <div className="relative">
                        <input
                            type="range"
                            min="18"
                            max="65"
                            value={age}
                            onChange={(e) => setAge(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                                background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${((age - 18) / (65 - 18)) * 100}%, rgba(255,255,255,0.08) ${((age - 18) / (65 - 18)) * 100}%, rgba(255,255,255,0.08) 100%)`
                            }}
                        />
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white px-3 py-1 rounded text-sm font-bold">
                            {age}
                        </div>
                    </div>
                </div>

                {/* Severity Slider */}
                <div>
                    <label className="block text-white/90 font-semibold mb-4 text-sm uppercase tracking-wide">
                        Ernst van je haaruitval
                    </label>
                    <div className="relative">
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={severity}
                            onChange={(e) => setSeverity(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                                background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${((severity - 1) / 9) * 100}%, rgba(255,255,255,0.08) ${((severity - 1) / 9) * 100}%, rgba(255,255,255,0.08) 100%)`
                            }}
                        />
                        <div className="flex justify-between text-xs text-white/50 mt-3">
                            <span>Mild</span>
                            <span>Matig</span>
                            <span>Ernstig</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Result Display */}
            <div className="flex flex-col items-center mb-8">
                <div className={`text-6xl font-bold mb-3 ${colors.text} transition-colors duration-300`}>
                    <CountUp
                        start={prevPercentage}
                        end={percentage}
                        duration={0.4}
                        suffix="%"
                    />
                </div>
                <p className="text-white/70 text-center text-sm mb-6">
                    verwacht haarherstel binnen 6 maanden
                </p>

                {/* Progress Bar */}
                <div className="w-full max-w-xs bg-white/6 h-3 rounded-full overflow-hidden mb-2">
                    <div
                        className="h-full transition-all duration-400 rounded-full"
                        style={{
                            width: `${percentage}%`,
                            background: colors.gradient,
                            boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                        }}
                    />
                </div>
                <p className="text-white/40 text-xs">
                    {percentage}/100
                </p>

                {/* Compact Footer Stats */}
                <p className="text-white/40 text-xs text-center mt-6">
                    6-8 druppels · 2 minuten · elke avond
                </p>
            </div>

            {/* Message */}
            <p className="text-white/80 text-center text-sm leading-relaxed mb-6">
                {getMessage(percentage)}
            </p>

            {/* Disclaimer */}
            <p className="text-white/30 text-xs text-center">
                * Schatting gebaseerd op klinische studies. Individuele resultaten kunnen variëren.
            </p>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #D4A574, #E9C89B);
                    border-radius: 50%;
                    cursor: grab;
                    box-shadow: 0 0 12px rgba(212, 165, 116, 0.4);
                    transition: transform 0.1s ease, box-shadow 0.1s ease;
                }
                .slider::-webkit-slider-thumb:active {
                    cursor: grabbing;
                    transform: scale(1.2);
                    box-shadow: 0 0 20px rgba(212, 165, 116, 0.6);
                }
                .slider::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #D4A574, #E9C89B);
                    border-radius: 50%;
                    cursor: grab;
                    box-shadow: 0 0 12px rgba(212, 165, 116, 0.4);
                    border: none;
                    transition: transform 0.1s ease, box-shadow 0.1s ease;
                }
                .slider::-moz-range-thumb:active {
                    cursor: grabbing;
                    transform: scale(1.2);
                    box-shadow: 0 0 20px rgba(212, 165, 116, 0.6);
                }
            `}</style>
        </div>
    )
}
