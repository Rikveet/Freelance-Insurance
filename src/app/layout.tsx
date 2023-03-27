import './globals.css'
import React from "react";
import {Karla, Vidaloka, Hind, Bungee_Shade} from 'next/font/google';

const karla = Karla({weight: "200", display: 'swap', subsets: ["latin"]});
const vidaloka = Vidaloka({weight: '400', display: 'swap', subsets: ["latin"]});
const hind = Hind({weight: '300', display: 'swap', subsets: ["latin"]});
const bungeeShade = Bungee_Shade({weight: '400', display: 'swap', subsets: ["latin"]});

export const metadata = {
    title: 'SHEVINDER SIDHU - INSURANCE EXPERT',
    description: "Information on super visa and visitor's insurance.",
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en"
              className={`${karla.className} ${vidaloka.className} ${hind.className} ${bungeeShade.className}`}>
        <head>
            <title>Shevinder Sidhu</title>
        </head>
        <body>
        {children}
        </body>
        </html>

    )
}
