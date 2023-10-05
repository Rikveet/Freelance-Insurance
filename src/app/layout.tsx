import './globals.css'
import React from "react";
import {Bungee_Shade, Hind, Karla, Vidaloka} from 'next/font/google';

const karla = Karla({weight: "200", display: 'swap', subsets: ["latin"], variable: '--karla'});
const vidaloka = Vidaloka({weight: '400', display: 'swap', subsets: ["latin"], variable: '--vidaloka'});
const hind = Hind({weight: '300', display: 'swap', subsets: ["latin"], variable: '--hind'});
const bungeeShade = Bungee_Shade({weight: '400', display: 'swap', subsets: ["latin"], variable: '--bungeeShade'});

export const metadata = {
    title: 'SHEVINDER SIDHU',
    description: "Reunite with your family this summer. Get the Best Super Visa Insurance Quote and Medical Coverage for Your Parents & Grandparents visiting Canada.",
}


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en"
              className={`${karla.variable} ${vidaloka.variable} ${hind.variable} ${bungeeShade.variable}`}>
        <head>
            <title>{metadata.title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body suppressHydrationWarning={true}>
        {children}
        </body>
        </html>
    )
}
