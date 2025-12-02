"use client"

import { useEffect, useState } from 'react'

const notifications = [
    { name: "Jens", city: "Utrecht", time: "3 minuten geleden" },
    { name: "Thomas", city: "Amsterdam", time: "12 minuten geleden" },
    { name: "Mark", city: "Rotterdam", time: "25 minuten geleden" },
    { name: "Rick", city: "Eindhoven", time: "38 minuten geleden" },
    { name: "Bas", city: "Den Haag", time: "47 minuten geleden" },
]

export default function SocialProofToast() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentNotification, setCurrentNotification] = useState(0)

    useEffect(() => {
        const showInterval = setInterval(() => {
            setIsVisible(true)
            setCurrentNotification((prev) => (prev + 1) % notifications.length)

            setTimeout(() => {
                setIsVisible(false)
            }, 5000)
        }, 40000) // Show every 40 seconds

        return () => clearInterval(showInterval)
    }, [])

    const notification = notifications[currentNotification]

    return (
        <div
            className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
        >
            <div className="glass rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-neutral-950 font-bold text-lg">
                    {notification.name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-medium text-neutral-100">
                        <span className="font-bold">{notification.name}</span> uit{' '}
                        {notification.city}
                    </p>
                    <p className="text-xs text-neutral-400">
                        bestelde zojuist • {notification.time}
                    </p>
                </div>
            </div>
        </div>
    )
}
