"use client"

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
    const [time, setTime] = useState({ hours: 11, minutes: 42, seconds: 0 })

    useEffect(() => {
        // Check if countdown exists in localStorage
        const saved = localStorage.getItem('countdown-end')
        let endTime: number

        if (saved) {
            endTime = parseInt(saved)
        } else {
            // Set countdown to end in 12 hours from now
            endTime = Date.now() + (12 * 60 * 60 * 1000)
            localStorage.setItem('countdown-end', endTime.toString())
        }

        const interval = setInterval(() => {
            const remaining = endTime - Date.now()

            if (remaining <= 0) {
                // Reset for next 12 hours
                const newEndTime = Date.now() + (12 * 60 * 60 * 1000)
                localStorage.setItem('countdown-end', newEndTime.toString())
                return
            }

            const hours = Math.floor(remaining / (60 * 60 * 1000))
            const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
            const seconds = Math.floor((remaining % (60 * 1000)) / 1000)

            setTime({ hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-amber-50 border-b border-amber-200 py-3 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm sm:text-base font-semibold text-amber-900">
                    ⚡ Speciale introductieprijs eindigt over:{' '}
                    <span className="font-mono font-bold text-amber-700">
                        {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
                    </span>
                </p>
            </div>
        </div>
    )
}
