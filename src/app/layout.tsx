import './globals.css'
import React from "react";
import {Karla, Vidaloka, Hind, Bungee_Shade} from 'next/font/google';

const karla = Karla({weight: "200", display: 'swap', subsets: ["latin"], variable: '--karla'});
const vidaloka = Vidaloka({weight: '400', display: 'swap', subsets: ["latin"], variable: '--vidaloka'});
const hind = Hind({weight: '300', display: 'swap', subsets: ["latin"], variable: '--hind'});
const bungeeShade = Bungee_Shade({weight: '400', display: 'swap', subsets: ["latin"], variable: '--bungeeShade'});

export const metadata = {
    title: 'SHEVINDER SIDHU - INSURANCE EXPERT',
    description: "Information on super visa and visitor's insurance.",
}


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en"
              className={`${karla.variable} ${vidaloka.variable} ${hind.variable} ${bungeeShade.variable}`}>
        <head>
            <title>Shevinder Sidhu</title>
        </head>
        <body>
        {children}
        </body>
        </html>

    )
}
